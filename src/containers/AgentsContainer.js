import { useState, useEffect} from 'react'
import AgentSelector from '../components/AgentSelector'
import Agent from '../components/Agent'
import FavouriteAgents from '../components/FavouriteAgents'
import ListItem from '../components/ListItem'

const AgentsContainer = () => {
    const [agents, setAgents] = useState([])
    const [selectedAgent, setSelectedAgent] = useState("")
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        getAgents()
    }, [])

    const getAgents = () => {
        fetch(`https://valorant-api.com/v1/agents`)
        .then(res => res.json())
        .then(agentsData => setAgents(agentsData.data))
    }

    const addFavouriteAgent = (agent) => {
        const checkForUnique = favourites.find((favourite) => {
            return favourite.displayName === agent.displayName
        })
        if (checkForUnique === undefined){
            favourites.push(agent)
        }
        setFavourites(favourites);
    }

    const onAgentSelected = function(agent) {
        setSelectedAgent(agent);
    }

    return (
        <div className="main container">
            <h1>Valorant Agents App</h1>
            <AgentSelector agents={agents} onAgentSelected={onAgentSelected} />
            {selectedAgent ? <Agent agent={selectedAgent} addFavouriteAgent={addFavouriteAgent} /> : null}
            <FavouriteAgents favourites={favourites}/>
        </div>
    )
}

export default AgentsContainer;