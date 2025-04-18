import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

const PlayerForm = ({ mode = "create", playerId = null }) => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [team, setTeam] = useState("")
    const [position, setPosition] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (mode === "edit" && playerId) {
            setLoading(true);
            supabase
                .from("Sidemen Charity Match Players")
                .select("*")
                .eq("id", playerId)
                .single()
                .then(({ data, error }) => {
                    if (error) {
                        console.error("Error fetching player data:", error)
                    } else {
                        setName(data.name)
                        setNumber(data.number)
                        setTeam(data.team)
                        setPosition(data.position)
                    }
                })
                .finally(() => setLoading(false))
        }
    }, [mode, playerId])

    const handleSubmit = async(event) => {
        event.preventDefault()
        const payload = { name, number: Number(number), team, position }

        try {
            setLoading(true)
            if (mode === "create") {
                await supabase.from("Sidemen Charity Match Players").insert([payload])
            } else {
                await supabase.from("Sidemen Charity Match Players").update([payload]).eq("id", playerId)
            }

            navigate("/")
        } catch (error) {
            console.error("Error saving player data:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async(event) => {
        try {
            setLoading(true)
            await supabase.from("Sidemen Charity Match Players").delete().eq("id", playerId)
            navigate("/")
        } catch (error) {
            console.error("Error deleting player:", error)
        } finally { 
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="player-form">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(event) => setName(event.target.value)} 
                        placeholder="Player Name" 
                    />

                    <input 
                        type="number" 
                        value={number} 
                        onChange={(event) => setNumber(event.target.value)} 
                        placeholder="Jersey Number" 
                    />

                    <input 
                        type="text" 
                        value={team} 
                        onChange={(event) => setTeam(event.target.value)} 
                        placeholder="Team (Sidemen vs. Youtube All-Stars)" 
                    />

                    <input 
                        type="text" 
                        value={position} 
                        onChange={(event) => setPosition(event.target.value)} 
                        placeholder="Position" 
                    />

                    <button type="submit">
                        {mode === "edit" ? "Update Player" : "Add Player"}
                    </button>

                    {mode === "edit" && (
                        <button type="button" onClick={handleDelete}>
                            Delete Player
                        </button>
                    )}
                </>
            )}
        </form>
    )
}

export default PlayerForm