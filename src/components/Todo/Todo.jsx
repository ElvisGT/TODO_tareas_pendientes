import React,{useRef,useState} from 'react';
import '../../static/Css/style.css';
import {useTODO} from '../../hooks/useTODO';

const Todo = () => {
    const {todo,addTodo,removeTodo} = useTODO();
    const addInput = useRef(null);
    const searchInput = useRef(null); 
    const [searchList,setSearchList] = useState([]);


    const handleAddTODO = (todo ) => {
        if(todo.length > 0){
            addTodo(todo);
        }
        addInput.current.value = null; //Esto es para limpiar el input cuando agregamos un todo
    }

    const handleRemoveTODO = (todo ) => {
        removeTodo(todo);
    }

    const handleChange = () => {
        setSearchList(searchInput.current.value);
    }
    
    const showTODOS = todo.todo.filter(item => {
        return item.toLowerCase().includes(searchList.toLowerCase());
    })

    return(
        <div className="container">
            <div className="box">
                <label htmlFor="search" className="form-label">Has agregado {todo.todo.length} TODOs a la lista</label>
                <input type="text" className="form-control" id="search" placeholder="Buscar TODO" onChange={handleChange} ref={searchInput}></input>
                
                <h1 className="box-title">Crea tu primer TODO!</h1>
                
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agregar TODO</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" id="search" placeholder="Agregar" ref={addInput}></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button onClick={() => handleAddTODO(addInput.current.value)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Guardar TODO</button>
                        </div>
                        </div>
                    </div>
                    </div>
                

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agregar TODO a la lista
                </button>


                <div className="box-list">
                    <ul>
                        {
                            showTODOS.map(item => (
                            <li key={item}>{item} <button type="button" className="btn-close" aria-label="Close" onClick={() => handleRemoveTODO(item)}></button></li>
                            ))
                        }
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export {Todo};