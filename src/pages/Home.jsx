import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipies } from '../redux/slices/recipieSlice'

const Home = () => {
    const dispatch = useDispatch()
    const {allRecipies,loading,errorMsg} = useSelector(state=>state.recipieReducer)
    console.log(allRecipies,loading,errorMsg);
    
    // pagination logic
  const [currentPage,setCurrentPage]= useState(1)
  const recipiePerPage = 8
  const totalPages = Math.ceil(allRecipies?.length/recipiePerPage)
  const currentPageRecipieLastIndex = currentPage* recipiePerPage
  const currentPageRecipieFirstIndex = currentPageRecipieLastIndex-recipiePerPage
  const visibleAllRecipies = allRecipies?.slice(currentPageRecipieFirstIndex,currentPageRecipieLastIndex)
  
  const navigateToNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }

  }
  const navigateToPreviousPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

    
    useEffect(()=>{
      dispatch(fetchRecipies())
    },[])
  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className="container px-4 mx-auto">
      {
        loading ?
        <div className="flex justify-center items-center my-5 text-lg">
          <img height={'70px'} width={'70px'} className='me-3' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
           Loading...
        </div>
        :
        <>
        <div className="grid grid-cols-4 gap-4">
            {
              allRecipies?.length>0 ?
              visibleAllRecipies?.map(recipies=>(
                <div key={recipies?.id} className="rounded border p-2 shadow">
                 <img width={'100%'} height={'200px'} src={recipies?.image} alt="" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{recipies?.name}</h3>
                      <Link to={`/${recipies?.id}/view`} className='bg-green-600 rounded p-1 mt-3 text-white inline-block'> View More
                      </Link>
                  </div>

              </div>
               ))
              :
              <div className="flex justify-center items-center font-bold text-red-600 text-lg my-5">
                Product not found !!!!
              </div>
            }

        </div>
        <div className="text-2x mt-20 text-center font-bold">
      <span className="cursor-pointer"><i onClick={navigateToPreviousPage} className="fa-solid fa-backward me-5"></i></span>
      <span>{currentPage} of {totalPages}</span>
      <span className="cursor-pointer"><i onClick={navigateToNextPage} className="fa-solid fa-forward ms-5"></i></span>

        </div>
      </>
       } 
    </div>
    </>
  )
}

export default Home