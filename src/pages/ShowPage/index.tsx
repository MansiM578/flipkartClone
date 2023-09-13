import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducers/Store";
import { CartItem } from "types/types";
import { Box, Button, Grid, styled } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import CartItems from "components/cart/CartItem";
import TotalView from "components/cart/TotalView";
import EmptyCart from "components/cart/EmptyCart";

import useShowPage from "./useShowPage";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));

const Header = styled(Box)`
  padding: 15px 26px;

  background-color: #fff;
  font-weight: 600;
  font-size: 20px;
`;
const Header2 = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
  display: flex;
  border-top: 1px solid #f0f0f0;
`;

const AddressBar = styled(Box)`
  padding-top: 6px;
  margin-left: 10px;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background-color: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));

const SideGrid = styled(Grid)`
  width: 100%;
`;

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const { showData, handleButtonClick, latitude, longitude, address, data } =
    useShowPage();

  if (!cartItems.length) {
    return <EmptyCart />;
  }

  return (
    <Container container>
      <LeftComponent item md={9} xs={12}>
        <Header>Cart ({cartItems.length})</Header>
        <Header2>
          <Button variant="contained" onClick={handleButtonClick}>
            Get Location
          </Button>
          <AddressBar>
            {showData && latitude && longitude ? address : data}
          </AddressBar>
        </Header2>
        {cartItems.map((item: CartItem) => (
          <CartItems key={item.id} cart={item} />
        ))}
        <ButtonWrapper>
          <StyledButton>Place Order</StyledButton>
        </ButtonWrapper>
      </LeftComponent>
      <SideGrid item md={3} sm={12} xs={12}>
        <TotalView cartItems={cartItems} />
      </SideGrid>
    </Container>
  );
};

export default Cart;
