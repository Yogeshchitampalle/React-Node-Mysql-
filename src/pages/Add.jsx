import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



export const Add = () => {
  const[book, setBooks] = useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  });

  const navigate = useNavigate()

  const handleChange = (e)=> {
    setBooks((prev) => ({...prev, [e.target.name]: e.target.value}))
  };
  //console.log(book);

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      axios.post("http://localhost:8800/books", book)
      navigate("/")
    } catch (err) {
      
    }
  }
  return (
    <div className='form'>
    <h1>Add New Book</h1>
    <input type="text" placeholder='title' onChange={handleChange} name='title' />
    <input type="text" placeholder='desc' onChange={handleChange} name='desc' />
    <input type="number" placeholder='price' onChange={handleChange} name='price'/>
    <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>
    <button className='fromButton' onClick={handleClick}>Add</button>
    </div>
  )
}
