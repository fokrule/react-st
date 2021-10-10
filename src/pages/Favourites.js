import { useContext } from 'react';
import FavouriteContext from '../store/favourite-context';
import MeetupList from '../components/Meetups/MeetupList';
export default function FavouritesPage() {
    const FavouriteCtx = useContext(FavouriteContext);
    
    let content;
    if ( FavouriteCtx.totalFavouries === 0 ) {
        content = <p>No favourite is added. Try adding some.</p>
    }
    else {
        content = <MeetupList meetups={FavouriteCtx.favourites}/>
    }
    return <section>
        <h1>My Favourites</h1>
        {content}
    </section>
}
