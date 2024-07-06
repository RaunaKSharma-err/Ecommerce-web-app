import './App.css'


interface Props{
    cat:(string[]);
    setGetCatName:(v:string)=>void;
}
export default function Sidebar({cat , setGetCatName}:Props) {
    let catItems = cat.map((v,i)=>{
        return(      
    <button className="btn" key={i} onClick={()=>setGetCatName(v)}>{v}</button>
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
