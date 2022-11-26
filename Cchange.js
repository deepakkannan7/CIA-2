import React, { useState } from 'react'
import Select from 'react-select'

function Cchange() {
  var colors=[
    {
        value:'lime',
        label:'Lime'
    },
    {
       value:'lavender',
       label:'Lavender'
    },
    {
       value:'crimson',
       label:'Crimson'
    },
    {
       value:'pink',
       label:'pink'
    },
    {
        value:'teal',
        label:'Teal'
    },
    {
        value:'rebeccapurple',
        label:'Purple'
    },
    {
        value:'yellow',
        label:'yellow'
    },
    {
        value:'aqua',
        label:'Aqua'
    },
    {
        value:'blue',
        label:'Blue'
    },
    
  ];
  var [color,setColor]=useState(colors.label);
  var Changer = (e) => {
    setColor(e.label);
  }
  return (
    <>
      <div className='s1'>
        <Select options={colors} onChange={Changer} className="s2"></Select>
      </div>
      <div className='box'>
        <style>{'.box{background-color:'+color+';}'}</style>
        <div className='clr'>
        <h1> {color}</h1></div>
      </div>
    </>
  )
}

export default Cchange;