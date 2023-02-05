import NextButton from "./NextButton";
import ShowDetailsButton from "./ShowDetailsButton";
import { sculptureList } from "../assets/data";
import { useState } from "react";
import PreviousButton from "./PreviousButton";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const onNextButtonHandler = () => {
    index + 1 > sculptureList.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const onShowDetailsHandler = () => {
    setShowDetails(!showDetails);
  };

  const onPreviousButtonHandler = () => {
    index - 1 > 0 ? setIndex(index - 1) : setIndex(0);
  };

  
  let sculpture = sculptureList[index];

  return (
    <div
      className="flex flex-col rounded-xl bg-gray-400 p-3 mx-3 md:mx-0 w-[85vw] sm:w-[50vw]
        md:w-[40vw] my-10 md:my-0"
    >
      <div>
        <img
          src={sculpture.url}
          alt={sculpture.alt}
          className="rounded-t-xl w-full"
        />
      </div>

      <div className="bg-white p-3 pb-5 space-y-8 rounded-b-xl">
        <div className="flex justify-between items-start md:items-center">
          <h1 className="text-md font-bold">{sculpture.name}</h1>
          <p className="text-md w-[86px] font-bold text-end">
            ({index + 1} of {sculptureList.length})
          </p>
        </div>
        <p className="md:text-md text-sm leading-8">
          {showDetails && sculpture.description}
        </p>
        <div className="flex flex-col space-y-4">
          <ShowDetailsButton onShowDetailsHandler={onShowDetailsHandler} showDetails={showDetails}/>
          <NextButton onNextButtonHandler={onNextButtonHandler} />
          <PreviousButton onPreviousButtonHandler={onPreviousButtonHandler} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
