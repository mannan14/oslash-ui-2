import React from "react";

import DropdownSvg from "./DropdownSvg";
import DropdownModal from "./DropdownModal";

export default function Dropdown(props){
    return(
        <div className=" p-2 space-y-2 flex flex-col w-full h-full focus:outline-none">
            <h3 className="uppercase font-semibold text-gray-500 pt-14 text-xs">
                automations
            </h3>
            <span className="flex flex-row items-center focus:outline-none">
                <DropdownModal 
                className='flex items-center  hover:cursor-pointer px-2 py-[2.5px] font-grotesk bg-indigo-50 border rounded-2xl border-indigo-500 text-sm font-normal text-indigo-500 focus:outline-none'
                icon={<DropdownSvg className='w-[21px] h-[21px] mr-1'/>} 
                name={props.name}
                />
                {
                    props.isNew ? 
                    (
                        <> 
                        <span className="flex items-center h-4 py-[2px] px-1 rounded-[4px] font-normal text-[10px] leading-3 text-white bg-indigo-500 ml-1">
                            New
                        </span>
                        </>
                    )
                    :
                    (
                        <>
                        </>
                    )
                }
            </span>
        </div>
    )
}