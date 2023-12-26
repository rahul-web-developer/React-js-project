import { useState } from 'react'

import './App.css'


function App(){

  let [counter,setcounter] = useState(0);


  const Addition = ()=>{

   setcounter( counter = counter+1);


  }
  const Subtraction = ()=>{

   if(counter !=0){
    setcounter(counter = counter-1);


   }else if(counter<0){

    return

   }


  }




  return(

<div className=' container'>
<h1>{counter}</h1>
<div className='flex'>
<button className='btn' onClick={Addition}>+</button>
<button className='btn' onClick={Subtraction}>-</button>
</div>

</div>

  )

}

export default App
