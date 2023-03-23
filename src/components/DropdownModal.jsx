import React from "react";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import DropdownSvg from '../components/DropdownSvg'
import Input from '../components/Input'
import Button from '../components/Button'

export default function DropdownModal(props){
    
    let [isOpen, setIsOpen] = useState(true)
    const inputArr = [
        {
            type:'text',
            id: 0,
            value:"",
        
        },
        {
            type:'text',
            id: 1,
            value:"",
        
        },
        {
            type:'text',
            id: 2,
            value:"",
        
        },
    ]

    let [arr, setArr] = useState(inputArr)

    const createInput = () => {
        setArr(s => {
            return [
                ...s,
                {
                    type: 'text',
                    value:'',
                }
            ]
        })
    }

    function openModal(){
        setIsOpen(true)
        console.log('Modal clicked')
    }

    return(
        <>
            <span
            className={props.className}
            onClick={() => openModal()}
            >
                {props.icon}
                {props.name}
            </span> 
            
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog 
                    open={isOpen} 
                    onClose={() => {}}
                    className='relative z-40'
                >
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 z-40 bg-black/20" aria-hidden="true" />
                    </Transition.Child>

                    <div className="fixed z-50 inset-0 ">
                        <div className="text-center flex min-h-full items-center justify-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className=' w-[408px] max-h-full my-16 transform rounded-lg bg-white p-11 space-y-8 text-left shadow-md transition-all'>
                                    <Dialog.Title
                                        as="h3"
                                        className=' text-3xl flex items-center justify-center font-semibold text-gray-900'
                                    >
                                        <DropdownSvg className='w-9 h-9 text-indigo-600 mr-2'/>
                                        Dropdown
                                    </Dialog.Title>

                                    <div className="space-y-8">
                                        <input type="text" 
                                        placeholder="Fix ETA"
                                        className="w-full h-10 p-2 font-medium text-gray-900 text-lg border border-gray-300 rounded-lg placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 active:outline-none"/>

                                        <div className="flex flex-col w-full max-h-60 overflow-y-auto ">
                                            <p className="text-gray-400 font-normal text-sm mb-2 text-left">Add possible values for the condition</p>
                                            
                                            <div className="space-y-4 w-full">
                                                {
                                                    arr.map((item, i) => (
                                                        <>
                                                        <Input
                                                            startAddon={<span className="flex rounded-l-lg items-center justify-center text-lg font-medium text-gray-500 w-[42px] bg-slate-100 pointer-events-none">{i}</span>}
                                                            placeholder='Enter input'
                                                            id={i}
                                                            key={i}
                                                        />
                                                        </>
                                                    ))
                                                }
                                            </div>

                                            <button 
                                            className="flex items-center mt-4 justify-center font-normal text-sm text-indigo-500 focus:outline-none"
                                            onClick={()=>createInput()}
                                            >
                                                <img src="/public/assets/PlusCircle.svg" alt="" className="mr-1"/>
                                                Add value
                                            </button>
                                        </div>

                                        <Button
                                        colorScheme='outline'
                                        onClick={()=>setIsOpen(false)}
                                        >
                                            Done
                                        </Button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}