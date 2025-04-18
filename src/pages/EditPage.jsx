import { useParams } from "react-router-dom";
import PlayerForm from "../components/PlayersForm";

const EditPage = () => {
    const { id } = useParams()

    return (
        <div className="edit-page-container">
            <h1>Edit Player</h1>
            <PlayerForm mode="edit" playerId={id} />
        </div>
    )
}

export default EditPage