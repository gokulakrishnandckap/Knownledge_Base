
import React from 'react'

const Input = (props) =>{
    return (
      <input id={props.name} name={props.name} type={props.type} autocomplete="off" onChange={props.event} value={props.value}  placeholder={props.placeholder} class="w-96 h-10 rounded-lg border-slate-900 p-2 text-sm focus:outline-gray-300" />
    )


}

export default Input