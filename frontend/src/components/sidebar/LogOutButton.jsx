import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

function LogoutButton() {
    const { logout, loading } = useLogout();

    return (
        <div className='mt-auto '>
            {!loading 
                ? <BiLogOut className="w-6 h-6  text-white cursor-pointer" onClick={logout}/>
                : (
                    // <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                    //</div>
                )}
        </div>
    );
}

export default LogoutButton;