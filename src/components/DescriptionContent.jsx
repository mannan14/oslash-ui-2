import React,{useState, useRef, useEffect} from "react";

import DescriptionLink from "./DescriptionLink";


export default function DescriptionContent(){

    let [ContentValue, setContentValue] = useState('')
    let myref = useRef('')

    // const DescriptionContent = ({
    // html,
    // onChange = noop,
    // }) => {
    // const ref = useRef(null);
    // const lastHtml = useRef('');
    
    // const emitChange = () => {
    //     const curHtml = ref.current?.innerHTML || '';
    //     if (curHtml !== lastHtml.current) {
    //     onChange(curHtml);
    //     }
    //     lastHtml.current = html;
    // };

    // useEffect(() => {
    //     if (!ref.current) return;
    //     if (ref.current.innerHTML === html) return;
    //     ref.current.innerHTML = html;
    // }, [html]);
    
    return(
        // <div className="relative w-full pt-1">
        //     <div 
        //     className=" h-[84px] p-2 border break-words text-sm font-normal text-gray-900 overflow-y-auto border-gray-300 rounded-lg focus:outline-none " 
        //     id="contenteditable"
        //     onInput={emitChange}
        //     onBlur={emitChange}
        //     contentEditable
        //     dangerouslySetInnerHTML={{__html: this.props.html}}
        //     >
        //     </div>
        //     <DescriptionLink />
        //     <span className="flex justify-end pt-1 text-gray-500 text-xs">{}/1000</span>
        // </div>
        <div className="relative w-full pt-1">
            <textarea
            className="h-[84px] w-full p-2 resize-none border text-sm font-normal text-gray-900 overflow-y-auto border-gray-300 rounded-lg focus:outline-none " 
            onInput={()=>setContentValue(myref.current.value)}
            ref={myref}
            value={ContentValue}
            />
            <DescriptionLink/>
            <span className="flex justify-end text-gray-500 text-xs">{ContentValue.length}/1000</span>
        </div>
    )
}