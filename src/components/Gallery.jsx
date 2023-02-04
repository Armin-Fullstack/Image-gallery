import NextButton from "./NextButton"
import ShowDetailsButton from "./ShowDetailsButton"
import {sculptureList} from "../assets/data"
import { useState } from "react"

const Gallery = () => {
    const [index , setIndex] = useState(0)
    const [showDetails , setShowDetails] = useState(false)

    const onNextButtonHandler = () => {
        setIndex(index + 1)
    }

    const onShowDetailsHandler = () => {
        setShowDetails(!showDetails)
    }


    let sculpture = sculptureList[index]

    return (

        <div className="flex flex-col rounded-xl bg-gray-400 p-3 max-w-lg mx-5 md:mx-0">
            <div>
                <img src={sculpture.url} alt={sculpture.alt}  className="rounded-t-xl w-full" />
            </div>

        <div className="bg-white p-3 pb-5 space-y-5 rounded-b-xl">
            <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">{sculpture.name}</h1>
            <p className="text-md">({index + 1} of {sculptureList.length})</p>
            </div>
            <p className="text-md leading-8">{showDetails && sculpture.description }</p>
            <div className="flex justify-between items-center">
                <ShowDetailsButton onShowDetailsHandler={onShowDetailsHandler}/>
                <NextButton onNextButtonHandler={onNextButtonHandler}/>
            </div>
        </div>
          
            
        </div>
    )
}

export default Gallery