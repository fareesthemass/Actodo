function Todoitem(props) {
    const arr = props.arr
    const setarr = props.setarr

    function handledelete(deleteid) {
     var temparr = arr.filter((item)=>{
        if(item.id === deleteid){
            return false
        }
        else{
            return true
        }
     })
     setarr(temparr)
    }
    
    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.item.activity}</p>
            <button className="text-red-600" onClick={()=>handledelete(props.item.id)}>Delete</button>
        </div>
    )
}
export default Todoitem