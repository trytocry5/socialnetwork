import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import MessageItem from './Message/Message';


const Dialogs = (props) => {
    
    let state = props.messagesPage;

    let dialogsElement = state.dialogsData.map(dlg => <DialogItem id={dlg.id} key={dlg.id} name={dlg.name} />);
    let messegesElement = state.messagesData.map(mes => <MessageItem message={mes.message} key={mes.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={d.messegesWrapper}>
            <div className={d.dialogs}>

                {dialogsElement}

            </div>

            <div className={d.messeges}>

                <div>{messegesElement}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder='Enter yout message...'
                            onChange={onNewMessageChange} />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;