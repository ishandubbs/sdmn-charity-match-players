import { Link } from "react-router-dom";

const PlayersCard = ({ player }) => {
    const teamName = player.team.toLowerCase()
    const teamClass = teamName === "sidemen" ? "sidemen-card" : 
                    teamName === "youtube all-stars" ? "allstars-card" : ""

    return (
        <Link to={`/player/${player.id}`} className={`player-card ${teamClass}`}>
            <div className="player-card-details" >
                <div className="player-card-name">{player.name}</div>
                <div className="player-card-number">#{player.number}</div>
                <div className="player-card-team">{player.team}</div>
                <div className="player-card-position">{player.position}</div>
            </div>
        </Link>
    )
}

export default PlayersCard