import React,{useState} from "react";

import DescriptionContent from "./DescriptionContent";

export default function DescriptionButton(){

    let [showdiv, setShowDiv] = useState(true)

    return(
        <div className="">
        <h3 className=" text-gray-800 font-normal text-xs">Description</h3>
        {
            showdiv === true ?
            (
                <button 
                className={`flex items-center ${showdiv === true ? '' : ' hidden '} text-indigo-500 font-medium text-sm`}
                onClick={()=>setShowDiv(false)}
                >
                    <img src="/assets/plus.svg" alt="" className="" />
                    Add Description
                </button>
            )
            :
            (
                <div className="">
                    <DescriptionContent/>
                </div>
            )
        }
        </div>
    )
}