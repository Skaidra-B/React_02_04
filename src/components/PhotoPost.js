import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {deletePhoto, updatePhoto} from "../features/slice";

const PhotoPost = ({item, index}) => {
    const dispatch = useDispatch()
    const input = useRef()

    function del() {
        dispatch(deletePhoto(index))
    }

    function update(e) {
        console.log(e)
        if (e.key === "Enter") {
            dispatch(updatePhoto({index, url: input.current.value}))
        }
    }

    return (
        <div>
            <img src={item} alt=""/>
            <input ref={input} onKeyDown={update} type="text"/>
            <button onClick={del}>Delete</button>
        </div>
    );
};

export default PhotoPost;