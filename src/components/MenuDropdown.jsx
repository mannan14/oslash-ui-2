import React,{Fragment} from "react";
import { Menu, Transition, } from "@headlessui/react";

export default function MenuDropdown(props){
    return(
        <div className="w-full space-y-2">
            <p className="">{props.label}</p>
            <Menu>
            {
                    ({ open }) => (
                        <div className="">
                            <Menu.Button 
                                as="div"
                                className={`${open 
                                    ? `border-indigo-600`
                                    : `border-[#D1D5DB]`
                                    } flex h-9 p-2 w-full justify-between items-center rounded-lg border border-solid focus:outline-none`
                                    }>
                                <span className="flex space-x-2">
                                    {props.icon}
                                    <p className="text-[#111827]">{props.name}</p>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                className={`${open ? `rotate-180 `: ` ` } h-5 w-5 p-1 text-gray-900`} viewBox="0 0 20 20" fill="currentColor">
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
                                            props.data.map((val) => 
                                            (   
                                                <div key={val} className=''>
                                                    <Menu.Item>
                                                        {({active}) => (
                                                            <div className={`${active ? 'bg-blue-100 ' : ' '} hover:bg-gray-100 focus:bg-blue-100 hover:cursor-pointer active:bg-blue-100 rounded-lg`}>
                                                                <div className='p-2'>
                                                                    {val}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            ))
                                        } 
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </div>
                    )
                } 
            </Menu>
        </div>
    )
}