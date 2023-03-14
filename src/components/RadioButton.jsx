import React,{useState} from "react";
import { RadioGroup } from "@headlessui/react";


export default function RadioButton(props){
    
    let [selected, setSelected] = useState(props.datas[0]) 

    return (
        <div className=" pt-8">
            <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className=' sr-only'>
                    {props.label}
                </RadioGroup.Label>

                <div className="flex space-x-12 ">
                    {
                        props.datas.map((data, index) => (
                            <RadioGroup.Option 
                            key={index}
                            value={data}
                            >   
                                {({checked}) => (

                                    <div  className='flex space-x-3.5 items-center focus:outline-none cursor-pointer'>
                                        <span className={`${checked ? 'bg-indigo-600' : ' border border-gray-500'} flex items-center justify-center w-4 h-4 rounded-full`}>
                                            <div className='w-1 h-1 bg-white rounded-full'></div>
                                        </span>
                                        <p className=" font-medium text-gray-900 text-sm">
                                            {data.name}
                                        </p>
                                    </div>

                                )}
                            </RadioGroup.Option>
                        ))
                    }
                </div>
            </RadioGroup>
        </div>
    )
}