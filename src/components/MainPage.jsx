import React,{useState} from "react";
import Input from "./Input";
import SaveButton from "./SaveButton";
import toast, {Toaster} from 'react-hot-toast'

export default function MainPage(){
    let [inputValue, setInputValue] = useState('')

    function handleButtonPressed(){
        toast.success('Save button clicked',{
            position:'bottom-right',
        });
    }

    
    return (
        <div className="flex p-2 flex-row w-full border justify-between">
            <Input
            StartAddon={<span className="flex rounded-l-lg items-center justify-center text-lg leading-6 font-medium text-gray-500 w-[42px] bg-slate-100 pointer-events-none">o/</span>}
            placeholder='Name'
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            />
            <SaveButton 
            name='outline' 
            content='Save' 
            onClick={handleButtonPressed}
            />
            <Toaster/>
        </div>
    )
}