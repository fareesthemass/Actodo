import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const id = props.id

    const [checklogin, setchecklogin] = useState(true)
    const [uname, setuname] = useState()
    const [pass, setpass] = useState()
    const navigate = useNavigate()

    function handleuname(evt) {
        setuname(evt.target.value)
    }



    function handlepass(evt) {
        setpass(evt.target.value)
    }


    var checked = false
    function check() {
        id.forEach((item) => {
            if (item.id === uname && item.password === pass) {
                console.log('successfull')
                checked = true
                navigate('/landing',{state:{value:uname}})
            }
        }
        )
        if (checked === false) {
            console.log('failed')
            setchecklogin(false)
        }

    }

    return (
        <div className="bg-black p-10 ">
            <div className="bg-[#EFEFEF] p-10 rounded-md">
                <h1 className="text-2xl font-medium">Hey hi 👋</h1>
                {checklogin ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Signup before login !</p>}

                <div className="flex flex-col w-52 gap-2 my-2">
                    <input type="text"
                        className="bg-transparent border border-black rounded-md p-1"
                        placeholder="Username"
                        onChange={handleuname} value={uname} />

                    <input type="text"
                        className="bg-transparent border border-black rounded-md p-1"
                        placeholder="Password"
                        onChange={handlepass} value={pass} />

                    <button className="bg-[#8272DA] w-24 py-1 rounded-md" onClick={check}>Login</button>
                </div>
                <p>Don't have an account ? <Link to={'/signup'} className="underline">Signup</Link></p>
            </div>

        </div>
    )
}

export default Login