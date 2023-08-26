import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false, 
    allAnime:[],
    error:false,
    anime:[],
    temp:[],
}

//read allAnime
export const readAnime = createAsyncThunk('readAnime', async(page)=>{
    
    const response = await fetch(`https://api.jikan.moe/v4/anime?limit=20&page=${page}`)
    try {
        const result = await response.json();
        console.log(result)
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
            state.allAnime = state.allAnime.concat(action.payload.data)
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