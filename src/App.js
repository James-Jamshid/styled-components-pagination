import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Otp from "./components/OtpAnimation/Otp";
import Home from "./components/Pagination/Home";

const App = () => {
  return (
    <div>
      <Home />
      <Otp />
    </div>
  );
};

export default App;
