import React, { useState } from "react";
// import home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRouter } from "../routes/routes";
import Login from "../pages/Login";
import { loggedInUser } from "../storageOperations/storageOperations";

const AppRouter = () => {
  const [update, setUpdate] = useState(0);
  return (
    <>
      <Routes>
        {publicRoutes.map((e, i) => (
          <Route
            path={e.path}
            element={<e.element setUpdate={setUpdate} />}
            key={i}
          ></Route>
        ))}

        {loggedInUser() &&
          privateRouter.map((e, i) => (
            <Route path={e.path} element={<e.element />} key={i}></Route>
          ))}
        <Route path="*" element={<Login />}></Route>
      </Routes>
      ;
    </>
  );
};

export default AppRouter;
