import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

//main layout of app
const App = () => {

    const dispatch = useDispatch();
    //const navigate = useNavigate();

    //this will only load at once only when component renders not again and again
    useEffect(() => {
      
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          //const uid = user.uid;
          const {uid,email,displayName} = user;
          dispatch(addUser( {
            uid:uid,email:email,displayName:displayName
          } ));//use distach to action from userslice
          //navigate('/browse');
        } else {
          // User is signed out
          dispatch(removeUser());
          //navigate('/');
        }
      });

    },[]);

    return <RouterProvider router={appRouter}/>
};

export default App;
