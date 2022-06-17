import React from "react";

const Agent = ({agent, addFavouriteAgent}) => {

    const handleClick = () => {
        addFavouriteAgent(agent);
    }

    return (
        <>
        <h4> {agent.displayName} </h4>
        <h4> <i>{agent.role.displayName} </i> </h4>
        <p> {agent.description} </p>
        <img src={agent.displayIcon} alt={`Icon of ${agent.displayName}`}></img>
        <hr></hr>
        <button onClick={handleClick}> Add to Favourites </button>
        </>
    )
}

export default Agent;
