import { useState } from "react"

function Todoform(props) {
    const arr = props.arr
    const setarr = props.setarr

    const [newarr,setnewarr] = useState('')
    function handlechange(evt){
        setnewarr(evt.target.value)
    }

    function add(){
        setarr([...arr , {id:arr.length+1, activity:newarr}])
        setnewarr('')
    }

    return (
        <div>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input className="border border-black p-1" type="text" value={newarr} onChange={handlechange} placeholder="Next activity ?" />
                    <button className="bg-black text-white p-1 border border-black" onClick={add}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Todoform