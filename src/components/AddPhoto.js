import {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addPhoto} from "../features/slice";

const AddPhoto = () => {

    const input = useRef()
    const dispatch = useDispatch()

    function add() {
        dispatch(addPhoto(input.current.value))
    }

    return (
        <div>
            <input ref={input} type="text"/>
            <button onClick={add}>Add</button>
        </div>
    );
};

export default AddPhoto;