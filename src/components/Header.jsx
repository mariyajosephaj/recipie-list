import React from 'react'
import { Link } from 'react-router-dom'
import { searchCuisine } from '../redux/slices/recipieSlice'
import { useDispatch } from 'react-redux'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  return (
    <>
     <nav className='flex bg-green-600 fixed w-full p-5 text-white'>
        <Link className='text-2xl font-bold' to={'/'}><i class="fa-solid fa-bowl-food me-2"></i>Recipies</Link>
        <ul className='flex-1 text-right'>
            {
                insideHome &&
                <li className='list-none inline-block px-5'><input type="text" placeholder="Search Recipies By Its Cuisine" className='text-black rounded p-1 ' style={{width:'300px'}} onChange={e=>dispatch(searchCuisine(e.target.value.toLowerCase()))}/></li>
            }
        </ul>
     </nav>
    </>
  )
}

export default Header