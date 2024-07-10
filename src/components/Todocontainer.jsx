import Todoform from "./Todoform"
import Todolist from "./Todolist"
import { useState } from "react"
function Todocontainer() {
    
    const [arr,setarr] = useState([
    
])

    return (
        <div>
            <div className="flex gap-3 flex-wrap">
                <Todoform arr={arr} setarr={setarr}/>
                <Todolist arr={arr} setarr={setarr}/>
            </div>
        </div>
    )
}
export default Todocontainer