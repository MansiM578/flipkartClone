import React, { useState } from "react";
import { Badge, Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { CartItem } from "reducers/CartSlice";
import { RootState } from "reducers/Store";
import { useSelector } from "react-redux";

//components
import LoginDialog from "components/login/LoginDialog";

type CartItemProps = {
  cart: CartItem | null;
};

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

const CustomButtons = ({ cartItems }: any) => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={() => openDialog()}>
        Login
      </LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
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
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
export default CustomButtons;
