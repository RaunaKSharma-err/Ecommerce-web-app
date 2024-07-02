import React,{ useState } from "react";
import "./header.css";

interface Props{
  uname:string;
  uemail:string;
  upassword:string;
  umessage:string;
  index?:number;
}

const Header = () => {
  let [uDetails, setUdetails] = useState({
    uname:'',
    uemail:'',
    upassword:'',
    umessage:'',
    index:''
  });
  let [userData,setUserData]=useState<{uname:string,uemail:string,upassword:string,umessage:string}[]>([]);
  const getValue=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    let oldValue = {...uDetails};
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setUdetails({...oldValue,[inputName]:inputValue})
  }
  
  
  const Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();     
    let oldUserFormData = {uname:uDetails.uname,uemail:uDetails.uemail,upassword:uDetails.upassword,umessage:uDetails.umessage};
    let userInputValidation = userData.filter((v)=> v.uemail == uDetails.uemail || v.uname == uDetails.uname)
    if (userInputValidation.length == 1){
      alert('Email or Name Already exists..')
    }else{
      let finalData = [...userData,oldUserFormData];
      setUserData(finalData);
      setUdetails({
        uname:'',
        uemail:'',
        upassword:'',
        umessage:'',
        index:''
      })
    }
  };

    const deleteRow = (indexNum:number) =>{
      let remainingRows = userData.filter((v,i)=>i!= indexNum)
      setUserData(remainingRows);
    }

    const editRow=(indexNum:number)=>{
      let updatedRow = userData.filter((v,i)=>i==indexNum)[0] as Props;
       updatedRow['index'] = indexNum;
       setUdetails(updatedRow);
       
    }

  return (
    <>
      <div className="App">
        <div className="Container">
          <form onSubmit={Submit}>
            <label>UserName</label>
            <input
              type="text"
              placeholder="Name"
              onChange={getValue}
              className="form-control"
              name='uname'
              value={uDetails.uname}
            />
            <label>Email</label>
            <input
              onChange={getValue}
              type="email"
              placeholder="password"
              className="form-control"
              name='uemail'
              value={uDetails.uemail}
            />
            <label>Password</label>
            <input
              onChange={getValue}
              type="text"
              placeholder="password"
              className="form-control"
              name='upassword'
              value={uDetails.upassword}
            />
            <label>text</label>
            <textarea
              onChange={getValue}
              className="form-control pl-3 pt-5"
              placeholder="text"
              name='umessage'
              value={uDetails.umessage}
            />
            <button className="btn">{uDetails.index!== ''?'Update':'Save'}</button>
          </form>
        </div>
      </div>
      <div className="overflow-x-auto mb-16 mt-7">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th>
        <td>Name</td>
        <td>Email</td>
        <td>Password</td>
        <td>message</td>
        <td>Action</td>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {userData.length >= 1?
      userData.map((object,index)=>{
      return(
      <tr key={index}>
        <th>{index+1}</th>
        <td>{object.uname}</td>
        <td>{object.uemail}</td>
        <td>{object.upassword}</td>
        <td>{object.umessage}</td>
        <button className="btn" onClick={()=>editRow(index)}>Update</button>
        <button className="btn" onClick={()=>deleteRow(index)}>Delete</button>
      </tr>
      )})
      :
      <tr><th>No data found..!</th></tr>
      }
    </tbody>
  </table>
</div>
    </>
  );
};

export default Header;
