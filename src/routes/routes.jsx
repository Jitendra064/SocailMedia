// import AddPost2 from "../pages/AddPost2";
// import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const publicRoutes = [
  {
    name: "login",
    path: "/login",
    element: Login,
  },
  {
    name: "signup",
    path: "/signup",
    element: Signup,
  },
];

// export const privateRouter = [
//   {
//     name: "home",
//     path: "/",
//     element: Home,
//   },
//   {
//     name: "addPost",
//     path: "/addPost",
//     element: AddPost2,
//   },
// ];
