import { UseTodoContext } from "../hooks/UseTodoContext"

//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TodoItemsDetails = ({todoItem}) => {

    const { dispatch } = UseTodoContext()

    const handleClick = async () => {
        const response = await fetch('/api/todolist/'+todoItem._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_TODO', payload: json})
        }
    }

    return (
        <div className="todoItems-details">
            <h4>{todoItem.title}</h4>
            <p><strong>Description : </strong>{todoItem.description}</p>
            <p><strong>Created At : </strong>{formatDistanceToNow(new Date(todoItem.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TodoItemsDetails