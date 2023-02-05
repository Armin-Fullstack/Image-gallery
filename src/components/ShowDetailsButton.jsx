
const ShowDetailsButton = ({onShowDetailsHandler , showDetails}) => {
    return (

        <button onClick={onShowDetailsHandler} className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:opacity-80 duration-300 text-sm md:text-md">{showDetails ? "Hide Details" : "Show Details"}</button>
    )
}

export default ShowDetailsButton