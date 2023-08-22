import React, { useEffect } from 'react'
import '../styles/Home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { readAnime } from '../store/AnimeSlice';
import { Link } from 'react-router-dom';


const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(readAnime())
    },[])

    const allAnime = useSelector((state)=>state.app.allAnime)

    console.log(allAnime.data)
    return (
        <div className='home'>
            {allAnime.data && allAnime.data.map((ele)=>(
                <Link to={`/${ele.mal_id}`}>
                <div className='card'>
                <div className='card-top'>
                    <img src={ele.images.webp.large_image_url} alt={ele.title} /></div>
                <div className='card-name'>{ele.title}</div> 
                <div className='card-rating'> {ele.rating}</div>
                </div>
                </Link>
            ))}
            
        </div>
    )
}

export default Home