import React, {useState} from 'react';
import firebase from '../firebase';

const Form = () => {
    const [item, setItem] = useState();

    const handleOnChange = (e) => {
        setItem(e.target.value)
    }
    
    const createTodo = () => {
        const todoRef = firebase.database().ref('Todo');
        const todo = {
            item,
            complete: false,
        };
        todoRef.push(todo);
        setItem('')
    }
    return (
        <div>
            <form label="Add Todo" type="text" value={item} onChange={handleOnChange}>
                <label>To Do: </label>
                <input />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form;