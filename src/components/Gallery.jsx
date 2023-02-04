import NextButton from "./NextButton"
import ShowDetailsButton from "./ShowDetailsButton"
import {sculptureList} from "../assets/data"
import { useState } from "react"

const Gallery = () => {
    const [index , setIndex] = useState(0)

    const onNextButtonHandler = () => {
        setIndex(index + 1)
    }

    let sculpture = sculptureList[index]

    return (

        <div className="flex flex-col rounded-xl bg-gray-400 p-3">
            <div>
                <img src="./src/assets/image/images.jpg" alt=""  className="rounded-t-xl w-full" />
            </div>

        <div className="bg-white p-3 pb-5 space-y-5 rounded-b-xl">
            <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Title</h1>
            <p className="text-md">({index + 1} of {sculptureList.length})</p>
            </div>
            <p className="text-md leading-8">Description</p>
            <div className="flex justify-between items-center">
                <ShowDetailsButton/>
                <NextButton onNextButtonHandler={onNextButtonHandler}/>
            </div>
        </div>
          
            
        </div>
    )
}

export default Gallery