import React,{useState,useEffect,useReducer} from 'react';


const initialState = {
    favorites:[]
}

const reducer = (state,action) =>{
    switch(action.type){
        case 'ADD':
            return {
            ...state,
            favorites:[...state.favorites,action.payload]

        }
    }
}



const Practica = () => {
        const [state,setState] = useState([]);
        const [favorites,dispatch] = useReducer(reducer,initialState);

 
        useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_end=5')
                .then(response => response.json())
                .then(data => setState(data))

        },[])

        const handleClick = (favorite) => {
            // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            //     method:"PUT",
            //     body:JSON.stringify({
            //         useID:1,
            //         title:{title},
            //     }),
            //     headers: {
            //         'Content-type': 'application/json; charset=UTF-8',
            //       },
            // })
            // .then(response => response.json())
            // .then(data => lol.data(data))

            dispatch({type:'ADD',payload:favorite})

        }

        


    return(
        <React.Fragment>
            <ul>
                {state.length > 0 ?
                    state.map(item => (
                        <li key={item.id}>{item.title}<button onClick={() => handleClick(item)}>Agregar a favoritos</button></li>

                    ))

                    :
                    <h1>Cargando...</h1>
                }
            </ul>
            
            <ul>
                {    
                    favorites.favorites.map(item => (
                        <li key={item.id}>
                            {item.id}
                            {'-'}
                            {item.title}
                        </li>
                    ))

                }

            </ul>
           
        </React.Fragment>
    );
}

export {Practica};