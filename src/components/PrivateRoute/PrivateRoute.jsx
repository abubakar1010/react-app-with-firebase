import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({children}) => {
    const {user,loading} =  useContext(AuthContext)

    if (loading) {
        return (
            <div className=" flex items-center justify-center h-screen">
                <Spinner className="w-20 h-20"  color="pink" />
            </div>
        )
    }

    if (user) {
        return children
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivateRoute;