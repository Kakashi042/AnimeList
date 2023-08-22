import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false, 
    allAnime:[],
    error:false,
    anime:[]
}

//read allAnime
export const readAnime = createAsyncThunk('readAnime', async()=>{
    const response = await fetch('https://api.jikan.moe/v4/anime?limit=10')
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return error;        
    }
})

//read Anime
export const animeDetails = createAsyncThunk('animeDetails', async(mal_id)=>{
    const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return error
    }
})

const AnimeSlice = createSlice({
    name:'AnimeSlice',
    initialState,
    extraReducers:{
        [readAnime.pending]:(state)=>{
            state.loading=true
        },
        [readAnime.fulfilled]:(state,action)=>{
            state.loading=false, 
            state.anime=[],
            state.allAnime=action.payload
        },
        [readAnime.rejected]:(state,action)=>{
            state.loading=false,
            state.error=action.payload
        },
        [animeDetails.pending]:(state)=>{
            state.loading=true
        },
        [animeDetails.fulfilled]:(state,action)=>{
            state.loading=false, 
            state.anime=action.payload
        },
        [animeDetails.rejected]:(state,action)=>{
            state.loading=false,
            state.error=action.payload
        }
    }
})

export default AnimeSlice.reducer;