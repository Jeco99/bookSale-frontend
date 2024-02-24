import { Outlet } from "react-router-dom";

import Sidebar_Component from "../component/sidebar";
// import Add_BookForm from "../component/add_book/add_book";

export default function MainPage(){
    return (
       
        <div className="flex">
            <Sidebar_Component />
            <main>
                <Outlet />
            </main>
        </div>
  
    )
}