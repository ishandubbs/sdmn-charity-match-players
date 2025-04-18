import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import PlayersCard from "../components/PlayersCard"
import StatsPanel from "../components/StatsPanel";

const SummaryPage = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const fetchPlayers = async () => {
            const { data, error } = await supabase
                .from("Sidemen Charity Match Players")
                .select("*")
                .order("created_at", { ascending: false })
            setPlayers(data)
        }

        fetchPlayers().catch(console.error)
    }, [])

    return (
        <div className="summary-page-container">
            <div className="summary-header">
                <h1>Sidemen Charity Match Players</h1>
            </div>

            <StatsPanel players={players} />
            <div className="player-list">
                {players.map((p) => (
                    <PlayersCard key = {p.id} player={p} />
                ))}
            </div>
        </div>
    )
}

export default SummaryPage