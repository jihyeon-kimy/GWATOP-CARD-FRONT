import { logIn, logOut } from "../store/authSlice";
import { useAppDispatch } from "./useRedux";

const GWATOP_CARD = "GWATOP_CARD";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const autoLogin = () => {
    if (localStorage.getItem(GWATOP_CARD) === null) return;

    const name = localStorage.getItem(GWATOP_CARD);
    dispatch(logIn(name));
  };

  const userLogIn = (name: string) => {
    dispatch(logIn(name));
    localStorage.setItem(GWATOP_CARD, name);
  };

  const userLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem(GWATOP_CARD);
  };

  return { autoLogin, userLogIn, userLogOut };
};

export default useAuth;
