import React from "react";

const ListItem = ({favourite}) => {
    

    return (
        <>
        <li> {favourite.displayName} </li>
        </>
    )
}

export default ListItem;