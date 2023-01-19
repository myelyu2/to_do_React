import { useState } from "react";

let globalId = 0;

function App() {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState("")

    function createTodo(event) {
        event.preventDefault()

        setTodos(oldTodoes => {
            setTask('')
            return [...oldTodoes, {todo: task, id: globalId++}]
        })
    }

    function deleteTodo(id) {
        setTodos(oldTodoes => oldTodoes.filter(item => item.id !== id))
    }
 

    return (
        <div>

            <h1>To do App</h1>
            <form onSubmit={createTodo}>
                <input 
                    type="text" 
                    value={task} 
                    onChange={e => {
                    setTask(e.target.value)
                    }}
                />

                <button type="submit" onClick={createTodo}>Add</button>
            </form>
            
            <ul>
                {todos.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <li>{item.todo}</li>
                            <button onClick={() => deleteTodo(item.id)}>Delete</button>
                        </div>
                    ) 
                })}
            </ul>

        </div>
    );
}

export default App;
