import React from "react";


export default function Button(props){

    return(
        <button 
        className={`${props.colorScheme==='outline' ? ' border-gray-900 text-gray-900' : ''} flex items-center h-10 rounded-lg border text-lg font-medium py-2 px-4`}
        onClick={props.onClick}
        > 
            {props.children}
        </button>
    )
}