
import Todoitem from "./Todoitem"
function Todolist(props){
const arr = props.arr
const setarr = props.setarr
    return(
        <div className="bg-[#BDB4EA] p-2 border rounded-md flex-grow">
           <h1 className="text-2xl font-medium">Today's Activity</h1>
           {arr.length===0? <p>You haven't add any activity yet</p>:""}
           
           {arr.map((item,index)=>{
            return(<Todoitem item={item} index={index} arr={arr} setarr={setarr}/>)
           })}
        </div>
    )
}

export default Todolist