import { NavLink } from 'react-router-dom';
import d from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={d.dialog}>
            <NavLink className={d.dialog_link} to={path}>
                <img src='https://www.pngkit.com/png/full/30-308973_avatar-hypesquad-camiseta-logo-discord-avatar-for-discord.png' />
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
}



export default DialogItem;