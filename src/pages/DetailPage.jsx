import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

const DetailPage = () => {
    const { id } = useParams()
    const [player, setPlayer] = useState(null)

    useEffect(() => {
        const fetchPlayer = async() => {
            const { data } = await supabase.from("Sidemen Charity Match Players").select("*").eq("id", id).single()
            setPlayer(data)
        }

        fetchPlayer().catch(console.error)
    }, [id])

    if (!player) return <p>Loading...</p>

    return (
        <div className="detail-page-container">
            <h1>{player.name}</h1>
            <p><strong>Number: </strong>{player.number}</p>
            <p><strong>Team: </strong>{player.team}</p>
            <p><strong>Position: </strong>{player.position}</p>

            <Link to={`/edit/${player.id}`}>
                Edit Player
            </Link>
        </div>
    )
}

export default DetailPage