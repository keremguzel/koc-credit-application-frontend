import React from 'react'

export default function Input(props) {

    const {className,label,type,name,placeholder,onChange,errors,pattern} = props

    return (
                <div className={className}>
                        <label style={{marginLeft:"3px"}}>{label}</label>
                        <input type={type} name={name} placeholder={placeholder} onChange={onChange} pattern={pattern}/>
                        <div className="error-message" style={{fontSize:"10px",textAlign:"left",color:"red",marginLeft:"3px"}}>
                            {errors}
                        </div>
                </div>
    )
}
