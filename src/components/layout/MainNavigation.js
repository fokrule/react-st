import { useContext } from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
import FavouriteContext from '../../store/favourite-context';
export default function MainNavigation() {
    const favouriteCtx = useContext(FavouriteContext);
    return <header className={classes.header}>
        <div className={classes.logo}> React Meetups </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">All Meetups</Link>
                </li>
                <li>
                    <Link to="/new-meetup">New Meetups</Link>
                </li>
                <li>
                    <Link to="/favourites">
                        Favourites
                        <span className={classes.badge}>
                            {favouriteCtx.totalFavouries}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}