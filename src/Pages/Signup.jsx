import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup(props) {

    const id = props.id
    const setid = props.setid
    const [uname,setuname] = useState()
    const navigate = useNavigate()

    function handleuname(evt){
    setuname(evt.target.value)
    }
    
    const [pass,setpass] = useState()
    
    function handlepass(evt){
    setpass(evt.target.value)
    }
    
function add(){
    setid([...id,{id:uname,password:pass}])
    navigate("/")
}

    return (<div className="bg-black p-10 ">
        <div className="bg-[#EFEFEF] p-10 rounded-md">
            <h1 className="text-2xl font-medium">Hey hi</h1>
            <p>Signup here :)</p>
            <div className="flex flex-col w-52 gap-2 my-2">
                <input type="text"
                    className="bg-transparent border border-black rounded-md p-1"
                    placeholder="Username" onChange={handleuname} value={uname}/>

                <input type="text"
                    className="bg-transparent border border-black rounded-md p-1"
                    placeholder="Password" onChange={handlepass} value={pass}/>

                <input type="text"
                    className="bg-transparent border border-black rounded-md p-1"
                    placeholder="Confirm Password" />

                <button className="bg-[#FCA201] w-24 py-1 rounded-md" onClick={add}>Signup</button>
            </div>
            <p>have an account ? <Link to={'/'} className="underline">Login</Link></p>
        </div>

    </div>
    )
}

export default Signup