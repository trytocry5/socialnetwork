import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://thumbs.dreamstime.com/b/manager-face-icon-trendy-manager-face-logo-concept-white-bac-manager-face-icon-trendy-manager-face-logo-concept-white-131170080.jpg' />
            {props.message}
            <div>
                <span>♥</span> {props.likecounts}
            </div>
        </div>

    );
}

export default Post;