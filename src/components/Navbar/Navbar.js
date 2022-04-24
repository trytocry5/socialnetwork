import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';
import { BiHome, BiMessageDetail, BiNews, BiUserCheck, BiMusic, BiCodeAlt } from 'react-icons/bi';

const Navbar = (props) => {

    return (
        <div className={c.nav}>
            <nav>
                <div>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? `${c.active}` : ""}>
                        <div className={c.item}>
                            <BiHome className={c.icon} /> Моя страница
                        </div>
                    </NavLink>
                    <NavLink to="/dialogs" className={({ isActive }) => isActive ? `${c.active}` : ''}>
                        <div className={c.item}>
                            <BiMessageDetail className={c.icon} /> Сообщения
                        </div>
                    </NavLink>
                    <NavLink to="/users" className={({ isActive }) => isActive ? `${c.active}` : ''}>
                        <div className={c.item}>
                            <BiUserCheck className={c.icon} /> Пользователи
                        </div>
                    </NavLink>
                    <NavLink to="/news" className={({ isActive }) => isActive ? `${c.active}` : ''}>
                        <div className={c.item}>
                            <BiNews className={c.icon} /> Новости
                        </div>
                    </NavLink>
                    <NavLink to="/music" className={({ isActive }) => isActive ? `${c.active}` : ''}>
                        <div className={c.item}>
                            <BiMusic className={c.icon} /> Музыка
                        </div>
                    </NavLink>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? `${c.active}` : ''} >
                        <div className={c.item}>
                            <BiCodeAlt className={c.icon} /> Настройки
                        </div>
                    </NavLink>
                </div>
            </nav>
            <div>
                <h3>Best Friends</h3>
                <div className={c.friends_block}>
                    <div className={c.friend_item}>
                        <img src='https://thumbs.dreamstime.com/b/cool-angry-cartoon-monster-vector-halloween-avatar-print-illustration-isolated-110119757.jpg' />
                        <span>David</span>
                    </div>
                    <div className={c.friend_item}>
                        <img src='https://thumbs.dreamstime.com/b/cool-angry-cartoon-monster-vector-halloween-avatar-print-illustration-isolated-110119757.jpg' />
                        <span>Mosha</span>
                    </div>
                    <div className={c.friend_item}>
                        <img src='https://thumbs.dreamstime.com/b/cool-angry-cartoon-monster-vector-halloween-avatar-print-illustration-isolated-110119757.jpg' />
                        <span>Alexey</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;