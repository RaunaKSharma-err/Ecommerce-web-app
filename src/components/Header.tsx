import { useState } from "react";
import "./header.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface Props{
 value:string
}


const Header = () => {
  let [todoWork, setTodoWork] = useState<string[]>([]);

  const noSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let target = event.target as typeof event.target & {
      todoName: { value: string };
    };
    let todoName = target.todoName.value;

    if (!todoWork.includes(todoName)) {
      setTodoWork([...todoWork, todoName]);
      toast.success("ToDo added successfully");
    } else {
      toast.error("ToDo already exists");
    }
  };
    let list = todoWork.map((value,i)=>{
      return(
      <Todolist value={value} key={i}/>
      )})
  return (
    <>
      <div className="App">
        <ToastContainer />
        <h1 className="text-3xl font-bold mb-16 mt-4 text-center">TODO LIST</h1>
        <form onSubmit={noSubmit}>
          <input
            type="text"
            name="todoName"
            placeholder="Write your text...."
          />
          <button className="btn">Save</button>
        </form>
        {list}
      </div>
    </>
  );
};
export default Header;

const Todolist =({value}:Props)=>{

  return(
    <>
    <div className="Container">
      <p>{value} <span>&times;</span></p>
    </div>
    </>
  )
}
