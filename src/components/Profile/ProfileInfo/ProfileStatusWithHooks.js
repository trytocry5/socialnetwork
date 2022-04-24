import { useEffect, useState } from 'react';
import c from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);   

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        
    }

    return (
        <div className={c.statusBlock}>
            { !editMode &&
                <div >
                    <span onDoubleClick={activateEditMode}>{props.status || "________"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} value={status}  autoFocus={true} onBlur={deactivateEditMode} />
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;