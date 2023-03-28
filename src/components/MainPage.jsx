import React,{useState} from "react";
import toast, {Toaster} from 'react-hot-toast'

import Input from "./Input";
import Button from "./Button";
import RadioButton from "./RadioButton";
import FileUpload from "./FileUpload";
import MenuDropdown from "./MenuDropdown";
import Dropdown from "./Dropdown";
import DescriptionButton from "./DescriptionButton";

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
        <>
        <div className="p-2 w-full space-y-4">
            <div className="space-y-8">
                <div className="flex w-full">
                    <div className="w-1/2">
                        <Input
                        startAddon={<span className="flex rounded-l-lg items-center justify-center text-lg leading-6 font-medium text-gray-500 w-[42px] bg-slate-100 pointer-events-none">o/</span>}
                        placeholder='Name'
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        />
                    </div>
                    <Button 
                    colorScheme='outline'  
                    onClick={handleButtonPressed}
                    >
                        Save
                    </Button>
                </div>

                <RadioButton datas={[
                                {
                                    name:'Content'
                                },
                                {
                                    name: 'Email Attachment'
                                },
                            ]} 
                            label='FileType'/>

                <FileUpload onChange={handleChange}/>
            </div>
            
            <div className="flex w-full">
                <div className="w-1/2 pr-6">
                    <MenuDropdown 
                    label='Select a folder'
                    name="Salman's Folder"
                    icon={<img src="/assets/folder.svg" alt="" className="" />}
                    data={[
                        {
                            folder_name:"Salman's Folder",
                            onClick: () => toast.success('Click Salman Folder'),
                            isActive: true,
                        },
                        {
                            folder_name:"o/sal",
                            onClick: () => toast.success('Click o/sal'),
                            isActive: false,
                        },
                        {
                            folder_name:"o/pro",
                            onClick: () => toast.success('Click o/pro'),
                            isActive: false,
                        }
                    ]}/>
                </div>

                <div className="w-1/2 pl-6">
                    <MenuDropdown 
                    label='Staleness'
                    name="Every Week"
                    icon={<img src="/assets/bell.svg" alt="" className="" />}
                    data={[
                        {
                            folder_name:"Every week",
                            onClick:"",
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
                    ]}/>
                </div>
            </div>
            
            <DescriptionButton />
        </div>
        
        <div className="flex h-full w-[248px] flex-shrink-0 items-center justify-center bg-gray-50">
				<Dropdown name={'Dropdown'} isNew={true}/>
		</div>
        
        <Toaster position="bottom-right" />
        </>
    )
}