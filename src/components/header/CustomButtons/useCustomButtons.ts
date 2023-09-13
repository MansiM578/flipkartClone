import { useSelector, useDispatch } from "react-redux";
import { RootState } from "reducers/Store";
import { logout } from "reducers/UserSlice";
import { useState } from "react";

function useCustomButtons() {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userData = useSelector((state: RootState) => state.auth.userData);
  const dispatch = useDispatch();

  const openDialog = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    console.log(userData);

    dispatch(logout());
  };

  return { open, setOpen, isLoggedIn, openDialog, handleLogout };
}

export default useCustomButtons;
