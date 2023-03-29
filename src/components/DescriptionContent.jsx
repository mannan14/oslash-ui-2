import React,{useState, useRef} from "react";

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
            <div className="h-[84px] border border-gray-300 rounded-lg overflow-y-auto oslashSnippetEditor-scroll-bar focus:outline-none">
                <div 
                className="p-2 pr-8 break-all cursor-text text-sm font-normal text-gray-900 focus:outline-none" 
                onInput={() => handleChange()}
                suppressContentEditableWarning={true}
                contentEditable={true}
                ref={myref}
                value={ContentValue}
                >
                </div>
            </div>
            <DescriptionLink />
            <span className="flex justify-end pt-1 text-gray-500 text-xs">{ContentValue.length}/1000</span>
        </div>
    )
}
