import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

const StatsPanel = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const fetchPlayers = async () => {
            const { data } = await supabase.from("Sidemen Charity Match Players").select("*")
            setPlayers(data)
        }

        fetchPlayers().catch(console.error)
    }, [])

    const total = players.length
    const positionCount = {}
    const teamCount = {}

    players.forEach((player) => {
        positionCount[player.position] = (positionCount[player.position] || 0) + 1
        teamCount[player.team] = (teamCount[player.team] || 0) + 1
    })

    return (
        <div className="stats-panel-container">
            <h3>Player Stats</h3>
            <p>Total Players: {total}</p>
            <div className="team-count">
                <h4>By Team:</h4>
                {Object.entries(teamCount).map(([team, count]) => (
                    <div key={team}>{team}: {count}</div>
                ))}
            </div>

            <div className="position-count">
                <h4>By Position</h4>
                {Object.entries(positionCount).map(([pos, count]) => (
                    <div key={pos}>{pos}: {count}({((count / total) * 100).toFixed(1)}%)</div>
                ))}
            </div>
        </div>
    )
}

export default StatsPanel