import React from "react";
import ListItem from "./ListItem";

const FavouriteList = ({favourites}) => {

    const getFavourites = favourites.map((favourite, index) => {
        return <h4><ListItem favourite={favourite} key={index} /></h4>
    })
    

    return (
        <>
        <h4>Favourites:</h4>
        {getFavourites}
        </>
    )
}

export default FavouriteList;