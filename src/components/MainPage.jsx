import React,{useState} from "react";
import toast, {Toaster} from 'react-hot-toast'

import Input from "./Input";
import Button from "./Button";
import RadioButton from "./RadioButton";
import FileUpload from "./FileUpload";
import MenuDropdown from "./MenuDropdown";

const datas = [
    {
        name:'Content'
    },
    {
        name: 'Email Attachment'
    },
]

const folder_data = [
    {
        folder_name:"Salman's Folder",
        onClick: '',
        isActive: true,
    },
    {
        folder_name:"o/sal",
        onClick: '',
        isActive: false,
    },
    {
        folder_name:"o/pro",
        onClick: '',
        isActive: false,
    }
]

const staleness_data = [
    {
        folder_name:"Every week",
        onClick:'',
        isActive: true,
    },
    {
        folder_name:"Every day",
        onClick:'',
        isActive: false,
    },
    {
        folder_name:"Every hour",
        onClick:'',
        isActive: false,
    }
]

export default function MainPage(){
    let [inputValue, setInputValue] = useState('')

    function handleButtonPressed(){
        toast.success('Save button clicked',{
            position:'bottom-right',
        });
    }
    const handleChange = function(e) {
            e.preventDefault();
            if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
            }
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
            <FileUpload onChange={handleChange}/>

            <div className="flex flex-row mt-4 space-x-8 justify-between">
                <MenuDropdown 
                label='Select a folder'
                name="Salman's Folder"
                icon={<img src="/assets/folder.svg" alt="" className="" />}
                data={folder_data}/>

                <MenuDropdown 
                label='Staleness'
                name="Every Week"
                icon={<img src="/assets/bell.svg" alt="" className="" />}
                data={staleness_data}/>
            </div>
        </div>
    )
}