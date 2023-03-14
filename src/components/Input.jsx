import React from "react";

export default function Input(props){

    return(
        <div 
        className ='flex flex-row w-1/2 h-10 border rounded-lg focus-within:border focus-within:border-[#6366F1]'>
                
            {
            props.startAddon 
            ? 
            props.startAddon
            :
            null
            } 
            
            <input 
            className={`rounded-r-lg w-full ml-2 flex items-center justify-center text-gray-900 text-lg leading-6 font-medium overflow-hidden whitespace-nowrap text-ellipsis active:outline-none focus:outline-none`} 
            type="text" 
            placeholder={props.placeholder} 
            value={props.value}
            onChange={props.onChange}
            />                      

        </div>
    )
}