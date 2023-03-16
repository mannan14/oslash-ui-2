import React,{Fragment} from "react";
import { Menu, Transition, } from "@headlessui/react";

export default function MenuDropdown(props){
    return(
        <>
            <p className="text-gray-900 pb-1 font-medium text-sm truncate">{props.label}</p>
            <Menu>
            {
                    ({ open }) => (
                        <div className="">
                            <Menu.Button 
                                className={`${open 
                                    ? `border-indigo-600`
                                    : `border-[#D1D5DB]`
                                    } flex h-9 p-2
                                     justify-between items-center w-full rounded-lg border border-solid focus:outline-none`
                                    }>
                                <p className="flex w-full truncate items-center">
                                    {props.icon}
                                    <span className="truncate leading-none pl-2">
                                        <span className="text-[#111827]">{props.name}</span>
                                    </span>
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                className={`${open ? `rotate-180 `: ` ` } h-5 w-5 py-1 mx-1 text-gray-900`} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            
                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className={`bg-white rounded-lg mt-2 shadow-md focus:outline-none`}
                                >   
                                    <div className="p-2 space-y-1 h-36 overflow-y-auto">
                                        {
                                            props.data.map((val,index) => 
                                            (   
                                                <Menu.Item key={index}>
                                                    {({active}) => (
                                                        <button
                                                        className={`${val.isActive ? ' bg-blue-100 hover:bg-blue-200' : ''} ${active ? val.isActive ? 'hover:bg-blue-200' : ' hover:bg-gray-100 bg-gray-100' : ''}${(val.isActive && active) ? ' bg-blue-200 hover:bg-blue-200 ' : ''} p-2 text-left w-full focus:bg-blue-100 hover:cursor-pointer active:bg-blue-100 rounded-lg`}
                                                        onClick = {val.onClick}
                                                        > 
                                                            {val.folder_name}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            ))
                                        } 
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </div>
                    )
                } 
            </Menu>
        </>
        // ${val.isActive ? ' bg-blue-100' : ''} ${active ? val.isActive ? 'bg-blue-200' : ' hover:bg-gray-100 ' : 'hover:bg-gray-100 '}
    )
}