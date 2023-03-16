import React from "react";

export default function FileUpload(props){

    // const [dragActive, setDragActive] = useState(false)
    // const inputRef = useRef(null)
    
    // handle drag events
    // const handleDrag = function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     if (e.type === "dragenter" || e.type === "dragover") {
    //     setDragActive(true);
    //     } else if (e.type === "dragleave") {
    //     setDragActive(false);
    //     }
    // }

    // triggers when file is dropped
    // const handleDrop = function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setDragActive(false);
    //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    //     handleFile(e.dataTransfer.files);
    //     }
    // }
    
    // triggers when file is selected with click
    // const handleChange = function(e) {
    //     e.preventDefault();
    //     if (e.target.files && e.target.files[0]) {
    //     handleFile(e.target.files);
    //     }
    // }
    
    // triggers the input when the button is clicked
    // const onButtonClick = () => {
    //     inputRef.current.click();
    // }

    return(
        <div className="flex items-center relative text-center justify-center w-full rounded-lg border-dashed border-2 border-gray-300">
            {/* onChange={handleChange} ref={inputRef}*/}
            <input className="hidden"  type="file" id="input-file-upload" multiple={true} onChange={props.onChange} />
            
            {/* onClick={onButtonClick} */}
            <label id="label-file-upload" htmlFor="input-file-upload" className="h-full w-full hover:cursor-pointer">
                <div className="flex flex-col items-center justify-center space-y-2 py-16">
                    <img src="/assets/AddImage.svg" alt="" className=" w-12 " />
                    <p className="text-gray-600 font-medium text-sm" >
                        <span className=" hover:cursor-pointer text-indigo-600 hover:underline">Upload a file </span>  
                         or drag and drop
                    </p>
                    <p className=" font-normal text-gray-500 text-xs">PDF, JPG, GIF up to 10MB</p>
                </div> 
            </label>
            {/* {
             onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} 
            dragActive && <div id="drag-file-element" className="absolute w-full h-full "></div> 
            } */}
        </div>
    )
} 