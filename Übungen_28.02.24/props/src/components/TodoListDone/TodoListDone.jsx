import TodoItem from "../TodoItem/TodoItem";
import "./TodoListDone.css";
const TodoListDone = () => {
    const dataTodo = [
        {
            title: "Send Email"
        },
        {
            title: "Eat Something"
        },
        {
            title: "Drink Alcohol"
        },
        {
            title: "Buy Food"
        },
        {
            title: "Coding some shit"
        },
    ];
    return (
        <>
        <h1>TODO LIST</h1>
        <div className="todo-list-done ">
            <ul>
                <TodoItem title = {dataTodo[0].title}/>
                <TodoItem title = {dataTodo[1].title}/>
                <TodoItem title = {dataTodo[2].title}/>
                <TodoItem title = {dataTodo[3].title}/>
                <TodoItem title = {dataTodo[4].title}/>
            </ul>
        </div>
        </>
    );
}
 
export default TodoListDone;