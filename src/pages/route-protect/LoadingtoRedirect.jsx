import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function LoadingtoRedirect() {
  const [count, setCount] = useState(3);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((current) => {
        if (current === 1) {
          clearInterval(interval);
          setRedirect(true);
        }

        return current - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-red-500 mt-9">
        No Permission, Redirect in {count}
      </h1>
    </div>
  );
}

export default LoadingtoRedirect;
