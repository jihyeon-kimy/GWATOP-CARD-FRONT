import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { useRouter } from "../../hooks/useRouter";
import { selectIsLoggedIn, setRedirectPath } from "../../store/authSlice";

interface authorizationProps {
  children: React.ReactNode;
}

export const Authorization: React.FC<authorizationProps> = ({ children }) => {
  const { routeTo, currentPath } = useRouter();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  const redirectPath =
    currentPath.split("/")[2] === "" ? "/" : `/${currentPath.split("/")[2]}`;

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(setRedirectPath(redirectPath));
      return routeTo("/login");
    }
  }, [isLoggedIn, routeTo]);

  if (!isLoggedIn) return <></>;
  return <>{children}</>;
};

export default Authorization;
