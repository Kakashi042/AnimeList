import React, { useState } from 'react'
import '../styles/Navbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
import { useDispatch } from 'react-redux'
import Search from './Search'
import { removeData, searchAnime } from '../store/AnimeSlice'

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [prevData, setPrevData] = useState('');
  const page = 1;

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(search!==prevData){
      dispatch(removeData());
      dispatch(searchAnime({search,page}));
      navigate(`/search/${search}`)
      setPrevData(search);
    }
    // e.preventDefault();
    // navigate(`/search/${search}`)
    // return(
    //   <Search search={search} />
    // )
  
  }

  return (
    <nav >
      <div className='head-left'>
      <Scroll to="home" spy={true} smooth={true} offset={-200} duration={500}>
      <Link to='/' className='test1'>
        <h1 id='test1'>
          AnimeList
        </h1>
      </Link>
      </Scroll>
      </div>
      <div className='head-right'>
      <form onSubmit={handleSubmit}>
      <input type='text' onChange={(e)=>setSearch(e.target.value)} value={search}></input>
      <button>submit</button>
      </form>
      <Link to='/info'>
        <p>Info</p>
      </Link>
      </div>
    </nav>
  )
}

export default Navbar