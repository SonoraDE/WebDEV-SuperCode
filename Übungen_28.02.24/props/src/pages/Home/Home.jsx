import TodoList from "../../components/TodoList/TodoList";
import TodoListDone from "../../components/TodoListDone/TodoListDone";
import "./Home.css";
const Home = () => {
    return (
        <>
        <TodoList/>
        <TodoListDone/>
        </>
    );
}
 
export default Home;