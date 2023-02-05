
const PreviousButton = ({onPreviousButtonHandler}) => {
    return (
        <button onClick={onPreviousButtonHandler} className="bg-blue-600 px-5 py-2 rounded-lg text-white text-sm md:text-md hover:opacity-80 duration-300">Previous</button>
    )
}

export default PreviousButton