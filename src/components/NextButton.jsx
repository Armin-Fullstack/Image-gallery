
const NextButton = ({onNextButtonHandler}) => {
    return (
        <button onClick={onNextButtonHandler} className="bg-blue-600 px-5 py-2 rounded-lg text-white text-sm md:text-md hover:opacity-80 duration-300">Next</button>
    )
}

export default NextButton