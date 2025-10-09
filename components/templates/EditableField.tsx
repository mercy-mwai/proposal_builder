import React, { useState } from 'react'
import { Input } from '../ui/input';
import { type } from 'os';

interface EditableFieldProps{
   label:string,
   defaultValue:string|number,
   type?: "text"|"number"| "email"| "date"

}

export default function EditableField({
    label,
    defaultValue,
    type="text"
}:EditableFieldProps){
    const [value, setValue]=useState(defaultValue);
    const [isEditing, setIsEditing]=useState(false);

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue=e.target.value;
        setValue(type === "number" ? Number(newValue): newValue)
    }

    const handleBlur=()=>{
        setIsEditing(false);
    }

    return(
        <span
        className='border-b border-dashed border-gray-400  cursor-text px-1 rounded-sm'
        onClick={()=>setIsEditing(true)}
        title={`Click to edit ${label}`}
        >
            {
                isEditing ?(
                    <Input
                    autoFocus
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='border px-1 py-0.5 text-sm rounded-sm w-auto'
                    />
                ) :(
                    value.toString()
                ) }
        </span>
    )
}