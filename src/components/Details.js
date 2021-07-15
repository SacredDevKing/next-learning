
import { useEffect, useState } from 'react';
import CardTodo from './Card';
import AddTodo from './AddTodo';
const Details = (props) => {

    const [getTodos, setTodos] = useState([]);

    const getData = async () => {
        const respose = await fetch('http://localhost:3000/api/gettodos')
        const resData = await respose.json();
        setTodos(resData)
    }

    useEffect(() => {
        getData();
    }, [])

    const delTodo = async (id) => {
        try {
            const deleteUserData = await fetch(`http://localhost:3000/api/${id}`, {
                method: 'DELETE'
            })
            setTodos(getTodos.filter(deluser => deluser.id !== id))
            const data = await deleteUserData.json();
        } catch (error) {

            console.log("error")
        }
    }
    return (
        <div>

            <AddTodo getData={getData} />
            <h1>All Todos</h1>
            {
                getTodos.length === 0 ? <p>No Todos added yet</p> : getTodos.map((data, index) => {
                    return (
                        <div key={index}>
                            <CardTodo todosData={data} delTodo={delTodo} getData={getData} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Details;