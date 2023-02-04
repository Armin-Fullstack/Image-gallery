
const Gallery = () => {
    return (

        <div className="flex flex-col rounded-xl bg-gray-400 p-3">
            <div>
                <img src="./src/assets/image/images.jpg" alt=""  className="rounded-t-xl w-full" />
            </div>

        <div className="bg-white p-3 pb-5 space-y-5 rounded-b-xl">
            <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Title</h1>
            <p className="text-md">(1 of 12)</p>
            </div>
            <p className="text-md leading-8">Description</p>
            <div className="flex justify-between items-center">
                <button className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:opacity-80 duration-300">Show Details</button>
                <button className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:opacity-80 duration-300">Next</button>
            </div>
        </div>
          
            
        </div>
    )
}

export default Gallery