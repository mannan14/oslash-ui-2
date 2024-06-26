import React, {Fragment} from "react";
import Tippy from '@tippyjs/react';
import { Menu, Transition } from "@headlessui/react";

import Button from '../components/Button'

export default function DescriptionLink(){

    function handleOnclick(){
        console.log('Add Link pressed')
    }

    return(
            <Menu as='div'>
                <div className="absolute bottom-[1.65rem] right-2">
                    <Menu.Button className='focus:outline-none'>
                        <Tippy
                            content=
                            {
                            <span className="flex items-center rounded-[4px] px-2 py-1 bg-gray-600 text-xs text-white">
                                Add link • 
                                <span className="flex items-center justify-center ml-[6px] rounded-sm w-4 h-4 bg-gray-500">
                                    <img src="/assets/command.svg" className="" />
                                </span>
                                <span className="flex items-center justify-center bg-gray-500 rounded-sm  w-4 h-4 ml-1">K</span>
                            </span> 
                            }
                            >
                            <div className="bg-gray-100 w-6 h-6 flex items-center justify-center rounded-[4px] hover:cursor-pointer focus:outline-none">
                                <img  src="/assets/link.svg" alt="" className="" />
                            </div>
                        </Tippy>
                    </Menu.Button>
                </div>
                <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute z-80 right-0 mt-2 w-80 p-4 origin-top-right rounded-lg bg-white shadow-lg focus:outline-none">   
                        <input
                        type='text' 
                        className="border border-gray-300 rounded-lg text-gray-900 p-2 w-full mb-4 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none" 
                        placeholder="Link"/>
                        <Button 
                        colorScheme='outline'  
                        className=' text-sm py-2'
                        onClick={()=>handleOnclick()}
                        >
                            Add Link
                        </Button>                        
                    </Menu.Items>
                </Transition>
            </Menu>
    )
} 