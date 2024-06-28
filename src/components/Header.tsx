import { useState } from "react";
import "./header.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  value: string;
  index: number;
  todoWork: string[];
  setTodoWork: (v: string[]) => void;
}

const Header = () => {
  let [todoWork, setTodoWork] = useState<string[]>([]);
  //to fetch data from the input bar
  const noSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let target = event.target as typeof event.target & {
      todoName: { value: string };
    };
    let todoName = target.todoName.value;
    
    if (!todoWork.includes(todoName)) {
      //sees if there is any same todo or not
      setTodoWork([...todoWork, todoName]);
      toast.success("ToDo added successfully");
    } else {
      toast.error("ToDo already exists");
    }
  };
  let list = todoWork.map((value, i) => {
    //display the data to the user interface
    return (
      <Todolist
        value={value}
        key={i}
        index={i}
        todoWork={todoWork}
        setTodoWork={setTodoWork}
        />
      );
    });
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

const Todolist = ({ value, index, todoWork, setTodoWork }: Props) => {
  const Delete = () => {
    let finalData = todoWork.filter((v, i) => i != index); // it filter the data clicked and shows all data except the index data which is clicked
    setTodoWork(finalData);
  };
  let [workCompleted, setWorkComplted] = useState(false);
  return (
    <>
      <div className="Container">
        <p className={workCompleted?'workDone':''} onClick={()=>setWorkComplted(!workCompleted)}>
          {value} <span onClick={Delete}>&times;</span>
        </p>
      </div>
    </>
  );
};
