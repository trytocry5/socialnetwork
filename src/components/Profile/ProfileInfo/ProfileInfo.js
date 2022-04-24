import Preloader from '../../common/preloader/Preloader';
import c from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={c.title_block}>
                <img src='https://html5css.ru/css/img_lights.jpg' />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={c.descriptionBlock}>
                <div className={c.descriptionPhoto}>
                    <img src={props.profile.photos.large} />
                    
                </div>
                <div className={c.description}>
                    <h2>{props.profile.fullName}</h2>
                    <hr/>
                    <h3>В поисках работы: {props.profile.lookingForAJob ? <span className={c.yes}>Да</span> : <span className={c.no}>Нет</span>}</h3>
                    <p>{props.profile.lookingForAJobDescription}</p>
                    <hr/>
                    <p>Обо мне: {props.profile.aboutMe}</p>
                    <p>VK: {props.profile.contacts.vk}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;