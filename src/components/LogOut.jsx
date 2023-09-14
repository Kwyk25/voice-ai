import { useNavigate } from "react-router-dom";


function LogOutBtn() {
    let navigate = useNavigate()

    function handleLogOut(){
        sessionStorage.removeItem('token')
        window.location.reload()
        navigate('/')
        
    }

    return (
        <div>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

export default LogOutBtn;