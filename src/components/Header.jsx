import { useLocation } from "react-router-dom";
function Header(){
    const location = useLocation()
    const {value} = location.state
    return(
        <>
        <h1 className="text-3xl font-medium">Hello {value}! 👋</h1>
        <p>I help you manage your activities :)</p>
        </>
    )
}

export default Header