import { useState } from 'react'
import './App.css'
import { MdRestartAlt } from 'react-icons/md'

function App() {
  const [count, setCount] = useState(0)
  function Add(){
    if(count <= 19){
      let counter = count + 1
      setCount(counter)

    }

  }
  function Remove(){
    if(count >= 1){
      let counter = count - 1
      setCount(counter)
      
    }
  }

  return (
    <>
       <div className='flex items-center justify-center h-screen'>
        <div className='w-150 h-100 bg-sky-300 p-5 rounded-lg shadow-lg'>
          <div className='flex justify-center items-cente text-white  bg-slate-700 rounded-2xl'>
               <div className='flex gap-2  items-center text-7xl font-bold px-2 py-2 rounded-3xl text-center'>              
            <span  className='w-[1em] h-[1em] font-bold text-white' ><MdRestartAlt/></span>
            <span>Counter</span>
          </div>
          </div>
         <p className='text-9xl my-6 font-semibold text-center text-slate-900 '>{count}</p>
          <div className='flex gap-4 justify-center mt-12'>
               <button className='bg-emerald-500 hover:bg-emerald-600 text-white rounded px-4 py-2 w-60 '  onClick={Add}>+ Add</button>
              <button  className='bg-rose-500 hover:bg-rose-600 text-white rounded px-4 py-2 w-60' onClick={Remove}>- Remove</button>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
