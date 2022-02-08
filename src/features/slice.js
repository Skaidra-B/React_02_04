import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({

    name: "images",
    initialState: {
        value:
            []
    },
    reducers: {
        addPhoto: (state, action) => {
            state.value.push(action.payload)
        },
        deletePhoto: (state, action) => {
            state.value = state.value.filter((x, i) => i !== action.payload)
        },
        updatePhoto: (state, action) => {
            const {index, url} = action.payload
            state.value[index] = url
        }
    }
});

export const {addPhoto, deletePhoto, updatePhoto} = userSlice.actions;
export default userSlice.reducer;