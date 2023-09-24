import { Navigate, useLocation } from "react-router-dom"
import Dashboard from "./Dashboard";
import { auth } from "../../firebase";
import UpdateProfile from "./UpdateProfile";

  export default function PrivateRoutes() {
    const location = useLocation();

    return auth.currentUser ? (
       <>
       {location.pathname === '/dashboard' && <Dashboard />} 
       {location.pathname === '/dashboard/update-profile' && <UpdateProfile/>}
       </>
      
    ) : (
      // keep the previous navigation stack
      <Navigate to="/sign" state={{ from: location }} replace />
    );
  }