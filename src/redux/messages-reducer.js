const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
    dialogsData: [
        { id: 1, name: 'David' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Stas' },
        { id: 4, name: 'Artom' },
        { id: 5, name: 'Pasha' },
        { id: 6, name: 'Masha' }
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are y?' },
        { id: 3, message: 'Next text' },
        { id: 4, message: 'Where y?' },
        { id: 5, message: 'Go home!' },
        { id: 6, message: 'By!' }
    ],
    newMessageBody: ''
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: 7, message: body }]
            };
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default messagesReducer;