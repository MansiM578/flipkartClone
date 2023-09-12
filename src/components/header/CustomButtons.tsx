import React, { useState } from "react";
import { Badge, Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import LoginDialog from "components/login/LoginDialog";
import { CartProps } from "types/types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "reducers/Store";
import { logout } from "reducers/UserSlice";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;
const LogoutButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  margin-left: 5px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButtons: React.FC<CartProps> = ({ cartItems }) => {
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

  return (
    <Wrapper>
      {isLoggedIn ? (
        <LogoutButton variant="contained" onClick={handleLogout}>
          Logout
        </LogoutButton>
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      {isLoggedIn ? (
        <Container>
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Badge
              color="error"
              badgeContent={cartItems.length}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <ShoppingCart sx={{ fontSize: "20px", paddingRight: "3px" }} />
              <Typography>Cart</Typography>
            </Badge>
          </Link>
        </Container>
      ) : (
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Container sx={{ paddingTop: "3px", color: "inherit" }}>
            <ShoppingCart sx={{ fontSize: "20px", paddingRight: "3px" }} />

            <Typography>Cart</Typography>
          </Container>
        </Link>
      )}
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
export default CustomButtons;
