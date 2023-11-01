import React from "react";
import './navigation.css'

function HomeItem(){
    return(
    <div className=" w-72 border-4 rounded-lg md:w-1/2 backdrop-blur flex-col item-center justify-center">
        <div>
            <p className="ml-8 text-3x1 flex-wrap md: text-4x1 lg: text-5xl">Creative Services For Boost Your Business Growth</p>
            <p className="ml-8 mt-2 text-2x1 md: text-3x1 lg: text-4x1">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.</p>
        </div>

            <div className=" text-sm md:text-3x1 lg:text-4x1 mt-5 mb-10 flex justify-around">
                <button className="but rounded-full py-2 px-5 text-white ">Get Started</button>
            <button className="bg-red-300 rounded-full py-2 px-5 text-white">Watch Video</button>
            </div>

            <div>

            </div>
    </div>
    )
}

export default HomeItem