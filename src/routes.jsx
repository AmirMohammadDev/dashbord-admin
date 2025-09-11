import NewUser from "./pages/NewUser/NewUser";
import Home from "./pages/Home/Home";
import UserList from "./pages/Users/UserList";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
let routes=[
        {path:"/home",element:<Home/>},
        {path:"/users",element:<UserList/>},
        {path:"/newUser",element:<NewUser/>},
        {path:"/products",element:<Products/>},
        {path:"/login",element:<Login/>},
]
export default routes;