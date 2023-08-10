import React from 'react'
import OptionSelector from './OptionSelector'

export default function Selector({array}) {
  return (
    <select name="" className="mb-4">
        {array.map((item, i)=><OptionSelector key={i} item={item}/>)}
    </select>
  )
}
