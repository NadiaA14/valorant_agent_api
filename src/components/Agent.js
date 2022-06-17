import React from "react";

const Agent = ({agent, addFavouriteAgent}) => {

    const handleClick = () => {
        addFavouriteAgent(agent);
    }

    return (
        <>
        <h3> {agent.displayName} </h3>
        <h4> {agent.description} </h4>
        <img src={agent.displayIcon} alt={`Icon of ${agent.displayName}`}></img>
        <hr></hr>
        <button onClick={handleClick}> Add to Favourites </button>
        </>
    )
}

export default Agent;
