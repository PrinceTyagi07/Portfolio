import React from 'react'
import './Hello.css'

function Hello() {
  return (
    <div  id='div1' style={{width:'500px'}}>this is level1
    <div id='div2'><p id='p1'></p>this is level3
<p id='p2'>this is level3
<span id='span1'>This is level4</span>
<span id='span2'>This is level4</span>
</p>
    </div>
    </div>
  )
}

export default Hello
