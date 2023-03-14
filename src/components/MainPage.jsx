import React,{useState} from "react";
import toast, {Toaster} from 'react-hot-toast'

import Input from "./Input";
import Button from "./Button";
import RadioButton from "./RadioButton";

const datas = [
    {
        name:'Content'
    },
    {
        name: 'Email Attachment'
    },
]

export default function MainPage(){
    let [inputValue, setInputValue] = useState('')

    function handleButtonPressed(){
        toast.success('Save button clicked',{
            position:'bottom-right',
        });
    }


    return (
        <div className="p-2 w-full">
            <div className="flex flex-row justify-between">
                <Input
                startAddon={<span className="flex rounded-l-lg items-center justify-center text-lg leading-6 font-medium text-gray-500 w-[42px] bg-slate-100 pointer-events-none">o/</span>}
                placeholder='Name'
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                />
                <Button 
                colorScheme='outline'  
                onClick={handleButtonPressed}
                >
                    Save
                </Button>
                <Toaster/>
            </div>
            <RadioButton datas={datas} label='FileType'/>
        </div>
    )
}