import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const Detail = () => {
   const [recipie,setRecipie] = useState({})
  const {id} = useParams()
  console.log(id);
   console.log(recipie);
  useEffect(()=>{
    if(sessionStorage.getItem("allRecipies")){
      const allRecipies = JSON.parse(sessionStorage.getItem("allRecipies"))
      setRecipie(allRecipies.find(item=>item.id==id));
      
    }
  },[])
  return (
    <div>
        <Header/>
        <div className='flex flex-col mx-5'> 
        <div className="grid grid-cols-2 items-center h-screen">
            <img width={'350px'} height={"250px"}  className='ms-40' src={recipie?.image} alt="" />
            <div>
                <h3 className="font-bold">ID :{recipie?.id}</h3>
                <h1 className="text-5xl font-bold">{recipie?.name}</h1>
                
                <h4 className="font-bold text-red-600 text-2xl">Cuisine : {recipie?.cuisine}</h4>
               
               
                <p className='mt-2'><span className='font-bold'>Ingredients : </span>
                {recipie?.ingredients}</p>
                <p className='mt-2'><span className='font-bold'>Instructions : </span>
                {recipie?.instructions}</p>
                
            </div>
        </div>


    </div>
    </div>
  )
}

export default Detail