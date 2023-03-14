import React from "react";
import toast, {Toaster} from 'react-hot-toast'

export default function SaveButton(props){

    return(
            <button 
            className={`${props.name==='outline' ? 'border border-solid border-gray-900 text-lg leading-6 font-medium' : ''} flex items-center h-10 rounded-lg py-2 px-4 text-center`}
            onClick={props.onClick}
            > 
            {props.content}
            </button>
    )
}