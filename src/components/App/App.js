import { Route, Routes } from "react-router-dom";
import { Error } from "../Error/Error";
import { Home } from "../Home/Home";
import { User } from "../User/User";
import { Admin } from "../Admin/Admin";
import LoginForm from "../LoginForm/LoginPageForm";
import CreateNewUser from "../CreateNewUserForm/CreateNewUserForm";
import "./App.css";

const App = () => {
  return (
    <main className="app column center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/create-account" element={<CreateNewUser />} />
        <Route path="/user/:userId" element={<User/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default App
