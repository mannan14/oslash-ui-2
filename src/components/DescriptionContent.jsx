import React,{useState, useRef, useEffect} from "react";

import DescriptionLink from "./DescriptionLink";


export default function DescriptionContent(){
    
    let [ContentValue, setContentValue] = useState("")
    let myref = useRef('') 
    
    function handleChange(){
        let text = myref.current.innerText
        setContentValue(text)
        console.log(text)
    }

    return(
        <div className="relative pt-1 flex flex-col">
            <div 
            className=" h-[84px] p-2 border break-words text-sm font-normal text-gray-900 overflow-y-auto border-gray-300 rounded-lg focus:outline-none " 
            onInput={() => handleChange()}
            suppressContentEditableWarning={true}
            contentEditable={true}
            ref={myref}
            value={ContentValue}
            >
            </div>
            <DescriptionLink />
            <span className="flex justify-end pt-1 text-gray-500 text-xs">{ContentValue.length}/1000</span>
        </div>
    )
}
