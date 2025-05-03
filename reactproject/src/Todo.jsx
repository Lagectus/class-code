import React, { useState } from 'react'

const Todo = () => {
    const [ item,setItem] = useState([]);
    const [val,setValue] = useState('');
    const [ editIndex, setEditIndex] = useState(null);
    const addTodo = ()=>{
        if(val === '') return;
        if(editIndex !== null){
            const updateTodos = [...item];
            updateTodos[editIndex] = val;
            setItem(updateTodos);
            setEditIndex(null)
            setValue('')
        }
        else{ setItem([...item,val])
            setValue('')
        }
        
    }
    const handleDel =(index) =>{
        setItem(item.filter((_,i)=>i !== index))
    }
    
    const handleEdit =(index)=>{
        setValue([item[index]]);
        setEditIndex(index);
    }
    
  return (
    <>
        <input onChange={(e)=> setValue(e.target.value)} placeholder='enter todo'></input>
        <button onClick={addTodo}>{ editIndex? 'update' :'add todo'}</button>
        <button onClick={()=>setItem([])}>DEL ALL </button>
        {item && item.map((val,i)=>{
            return (<div key={i}>
            <h1 >{val}</h1>
            <button onClick={()=>handleEdit(i)}>edit</button>
            <button onClick={()=>handleDel(i)}>del</button>
            
            </div>)
        })}
    </>
  )
}

export default Todo