import React from 'react';
import f from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={f.usersContainer}>
            <div className={f.pagination}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && f.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div className={f.userBlock} key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </div>
                        </NavLink>
                        <div>
                            {u.followed
                                ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                onClick={ () => { props.unfollow(u.id) }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                onClick={ () => { props.follow(u.id) }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}



export default Users;