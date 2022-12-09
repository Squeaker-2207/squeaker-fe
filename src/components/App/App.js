import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "../Error/Error";
import { Home } from "../Home/Home";
import { User } from "../User/User";
import { Admin } from "../Admin/Admin";
import CreateNewUser from "../CreateNewUserForm/CreateNewUserForm";
import "./App.css";

const App = () => {
  const [isAdminTabClicked, SetIsAdminClicked] = useState(false);
  return (
    <main className="app column center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={<Admin SetIsAdminClicked={SetIsAdminClicked} />}
        />
        <Route path="/create-account" element={<CreateNewUser />} />
        <Route
          path="/user/:userId"
          element={<User isAdminTabClicked={isAdminTabClicked} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default App;
