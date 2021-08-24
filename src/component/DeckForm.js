import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';



const DeckForm = () => {

    const history = useHistory()
    const [numberPerson, setNumberPerson] = useState(0)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
    e.preventDefault()
    if(numberPerson < 1){
        setError(true)
    }
    else{
        history.push('/start/'+ numberPerson)
    }
    }
  
    return ( 
    <div className='flex items-center justify-center h-screen'>

    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col md:flex-row w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center ">
      <div className=" relative ">
      
        <input onChange={(e)=>setNumberPerson(e.target.value)} type="number"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Put integer"/>
        
        {error &&
        <span className='text-md text-red-600 pt-2 pl-2 ' >Input value does not exist</span>}
        
        </div>
        <button type='submit' className="h-10 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
            Start
        </button>
      </form>
    </div>
      
     );
}
 
export default DeckForm;

