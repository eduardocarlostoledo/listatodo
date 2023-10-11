import { useState } from "react";

export default function Todo({element,onUpdate,onDelete}){
    const [isEdit, setIsEdit] = useState(false);
 function FormEdit(){
    const [newValue, SetNewValue] = useState(element.title);

    function handleSubmit(e){
        e.preventDefault();
        
    }
    function handleChange(e){
        const value = e.target.value;
        SetNewValue(value);
    }
    function handleClickUpdateTodo(e){
        onUpdate(element.id, newValue);
        setIsEdit(false)

    }
    return (
        <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange} value={newValue} />
            <button className="button" onClick={handleClickUpdateTodo}>Update</button>
        </form>
        );
    }
 function TodoElement(){
    return (
        <div className="todoInfo">
            <span className="todoTitle">{element.title}</span>
             <button className="button" onClick={() => setIsEdit(true)}>Edit</button> <button className="buttonDelete" onClick={(e) => onDelete(element.id)} >Delete</button>
        </div>);
 }
    return(
    <div className="todo">
        {isEdit ? <FormEdit/> : <TodoElement/>}
    </div>);
}