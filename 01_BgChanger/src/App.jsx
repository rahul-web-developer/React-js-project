import { useState } from 'react'

function App(){



  let [color,setcolor] = useState("olive");



  return(
 




 <div className='w-full h-screen duration-200'style={{backgroundColor: color}}>

  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>


<div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl '>

<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background: "red"}}onClick={()=>setcolor(color = "red")}>Red</button>


<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background: "green"}}onClick={()=>setcolor(color = "green")}>Green</button>




<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background: "blue"}}onClick={()=>setcolor(color = "blue")}>blue</button>





<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background: "yellow"}}onClick={()=>setcolor(color = "yellow")}>Yellow</button>




<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background: "purple"}}onClick={()=>setcolor(color = "purple")}>Purple</button>



<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background: "orange"}}onClick={()=>setcolor(color = "orange")}>Orange</button>




<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background: "olive"}}onClick={()=>setcolor(color = "olive")}>Olive</button>




<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background: "pink"}}onClick={()=>setcolor(color = "pink")}>Pink</button>



<button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{background: "lavender"}}onClick={()=>setcolor(color = "lavender")}>Lavender</button>



<button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{background: "white"}}onClick={()=>setcolor(color = "white")}>White</button>




<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{background: "black"}}onClick={()=>setcolor(color = "black")}>Black</button>








</div>


  </div>

 </div>   
    
   
  )
}



export default App
