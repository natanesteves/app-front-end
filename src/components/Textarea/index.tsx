import React, {TextareaHTMLAttributes} from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

const Textarea:React.FC<TextareaProps> = ({label,name,...rest})=> {
    return( 
    <div className="Textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea  id={name} {...rest}/>
</div>
);
}

export default Textarea;
