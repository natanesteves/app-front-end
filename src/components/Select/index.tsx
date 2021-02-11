import React, {SelectHTMLAttributes} from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select:React.FC<SelectProps> = ({label,name,options,...rest})=> {
    return( 
    <div className="Select-block">
    <label htmlFor={name}>{label}</label>
    <select value='' id={name} {...rest}>
        {options.map(Option =>{
            return <option key={Option.value} value={Option.value}>{Option.label}</option>
        })}
    </select>
</div>
);
}

export default Select;
