import React from "react";

const ListItem = ({favourite}) => {
    

    return (
        <>
        <h4>{favourite.displayName}</h4>
        <h4><i>{favourite.role.displayName}</i></h4>
        <hr></hr>
        <p>{favourite.description}</p>
        <hr></hr>
        </>
    )
}

export default ListItem;