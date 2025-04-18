import PlayerForm from "../components/PlayersForm";

const CreatePage = () => {
    return(
        <div className="create-page-container">
            <h1>Add A New Player</h1>
            <PlayerForm mode="create" />
        </div>
    )
}

export default CreatePage