import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

const Header = (props) => {
    return (
        <header className={h.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKqqvC3T0obT9iUeekSQiYqI5Yol-oozPHQ&usqp=CAU' />
            <div className={h.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;