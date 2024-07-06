import './App.css'


interface Props{
    cat:(string[]);
    setGetCat:(v:string)=>void;
}
export default function Sidebar({cat , setGetCat}:Props) {
    let catItems = cat.map((v,i)=>{  
      console.log(v);
        return(      
    <button className="btn" key={i} onClick={()=>setGetCat(v)}>{v}</button>
    )})
  return (
  <>
  <div className="sidebar">
          <h1 className="text-3xl font-bold  text-center p-3 text-black">
            Catogories
          </h1>
          {catItems}
        </div>
  </>
  )
}
