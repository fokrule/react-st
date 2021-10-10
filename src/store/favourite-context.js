import { createContext } from "react";
import { useState } from "react/cjs/react.development";

const FavouriteContext = createContext({
    favourites : [],
    totalFavouries: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemFavourite: (meetupId) => {}
});

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavouries] = useState([]);
    
    function addFavouriteHandler(favouriteMeetup) {
        setUserFavouries((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }
    function removeFavouriteHandler(meetupId) {
        setUserFavouries((prevUserFavourites) => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        });
    }
    function isItemFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);
    }
    
    
    const context = {
        favourites : userFavourites,
        totalFavouries: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: isItemFavouriteHandler
    }
    return (
        <FavouriteContext.Provider value={context}>
            {props.children}
        </FavouriteContext.Provider>
    );
}

export default FavouriteContext;