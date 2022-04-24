import d from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={d.message}>
           <div>
           {props.message}
           </div>
        </div>
    );
}

export default MessageItem;
;