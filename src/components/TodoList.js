// import React, {useState, useEffect} from 'react';
// import firebase from '../firebase';
// import 'firebase/database';

// const TodoList = () => {
//     const [todoList, setTodoList] = useState();
//     useEffect(() => {
//         const todoRef = firebase.database().ref('Todo');
//         todoRef.on('value', (snapshot) => {
//             const todos = snapshot.val();
//             const todoList = []
//             for (let id in todos) {
//                 todoList.push({ id, ...todos[id] });
//             }
//             setTodoList(todoList);
//         })
//     }, [])
//     return (
//         <>
//         <h2>TodoList</h2>
//         {todoList ? todoList.map((todos, idx) => {
//             <h5>{todos.id}</h5>
//         }) : ''}
        
//         </>
//     )
// }

// export default TodoList;