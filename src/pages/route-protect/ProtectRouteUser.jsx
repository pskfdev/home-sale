import React, { useState, useEffect } from "react";
//Functions
import { currentUser } from "../../functions/auth";
//Components
import LoadingtoRedirect from "./LoadingtoRedirect";

function ProtectRouteUser({ element }) {
  const token = localStorage.getItem("token");
  const [ok, setOk] = useState(false);

  const checkUser = () => {
    if (token) {
      currentUser(token)
        .then((res) => {
          setOk(true);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return ok ? element : <LoadingtoRedirect />;
}

export default ProtectRouteUser;
