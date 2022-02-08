import React from 'react';
import {useSelector} from "react-redux";
import PhotoPost from "./PhotoPost";

const ShowPhoto = () => {

    const photos = useSelector(state => state.images.value)

    return (
        <div>
            {photos.map((x ,i) => <PhotoPost key={i} index={i} item={x}/>)}
        </div>
    );
};

export default ShowPhoto;