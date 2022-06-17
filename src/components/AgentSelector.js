import React from "react";

const AgentSelector = ({agents, onAgentSelected}) => {
    
    const handleChange = event => {
        const chosenAgent = agents[event.target.value];
        onAgentSelected(chosenAgent)
    }

    const agentOptions = agents.map((agent, index) => {
        return <option value={index} key={index}>{agent.displayName}</option>
    })

    return (
        <>
        <select onChange={handleChange}>
            <option selected disabled value="">
                Choose An Agent
            </option>
            {agentOptions}
        </select>
        </>
    )

}

export default AgentSelector;
