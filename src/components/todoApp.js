import {useState} from "react";
import Todo from "./todo";
import "./todoApp.css"

export default function TodoApp() {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange(event){
        const titulo = event.target.value
        setTitle(titulo)
    }
    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id : crypto.randomUUID(),
            title : title,
            completed : false
        }
        setTodos([...todos, newTodo])
        setTitle("");
    }
    function handleUpdate(id,value){
        const temp = [...todos];
        const element = temp.find(element => element.id === id);
        element.title = value;
        setTodos(temp);
    }
    function handleDelete(id){
        const temp = todos.filter((item) => item.id !== id);
        setTodos(temp);

    }

    return <div className = "todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}/>
            <input onClick={handleSubmit} type="submit" value= "Create todo" className="buttonCreate"/>
            
        </form>
        <div className="todosContainer">
            {
             todos.map((element) => (
                <Todo key={element.id} element={element} onUpdate={handleUpdate} onDelete={handleDelete}/>
             ))   
            }
        </div>

    </div>;
}