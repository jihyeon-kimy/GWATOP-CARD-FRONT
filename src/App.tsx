import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { routers } from "./router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const { autoLogin } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("GWATOP_CARD")) {
      autoLogin();
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
