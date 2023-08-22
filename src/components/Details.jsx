import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { animeDetails, readAnime } from '../store/AnimeSlice';

const Details = () => {
    const {mal_id} = useParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(animeDetails(mal_id))
    },[])

    const anime = useSelector((state)=>state.app.anime.data)

    console.log(anime)
    
  return (
    <div className='details'>
        {anime &&
         
        (<>
        <div className='detail-left'>
            <img src={`${anime.images.webp.large_image_url}`}/>
        </div>
        <div className='detail-right'>
            {anime.synopsis}
        </div>
        </>
        )}
    </div>
  )
}

export default Details