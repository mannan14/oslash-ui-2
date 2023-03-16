import React from "react";


export default function Button(props){

    return(
        <button 
        className={`${props.colorScheme==='outline' ? ' border-gray-900 text-gray-900' : ''} flex items-center justify-center rounded-lg border text-lg font-medium py-[6px] px-4 ml-auto`}
        onClick={props.onClick}
        > 
            {props.children}
        </button>
    )
}