import UsersTable from '../components/UsersTable'
import SidebarContent from "../components/Sidebar/SidebarContent.jsx";
// import {useHistory} from "react-router-dom";
// import {useEffect} from "react";

const Users = () => {
    return (
    <div>
        <SidebarContent/>
        <UsersTable/>
    </div>
  )
}

export default Users