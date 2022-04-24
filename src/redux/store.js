import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likecounts: '5' },
                { id: 2, message: 'Its my first post', likecounts: '11' },
                { id: 3, message: 'Its my second post', likecounts: '4' },
                { id: 4, message: 'Its my thirst post', likecounts: '7' }
            ],
            newPostText: 's.soobshenie'
        },
        messagesPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель-паттерн
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likecounts: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
