import { Box, Typography, Button, styled, ButtonGroup } from "@mui/material";
import React from "react";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "reducers/CartSlice";

import { addEllipsis } from "utils/common_utils";
import { useDispatch } from "react-redux";
import { CartItemProps } from "types/types";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0f0;
  display: flex;
  background-color: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;
const ButtonComponent = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const CartItems: React.FC<CartItemProps> = ({ cart }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const mrp = (cart?.price || 0) + (cart?.discount || 0);
  const dispatch = useDispatch();
  const handleDeleteFromCart = (itemId: string) => {
    dispatch(deleteFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId: string) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId: string) => {
    dispatch(decreaseQuantity(itemId));
  };
  return (
    <Component>
      <LeftComponent>
        <img
          src={cart?.image}
          alt="product"
          style={{ height: 110, width: 110 }}
        />
        <ButtonComponent>
          <StyledButton onClick={() => handleDecreaseQuantity(cart.id)}>
            -
          </StyledButton>
          <Button>{cart?.quantity}</Button>
          <StyledButton onClick={() => handleIncreaseQuantity(cart.id)}>
            +
          </StyledButton>
        </ButtonComponent>
      </LeftComponent>
      <Box sx={{ margin: "20px" }}>
        <Typography> {addEllipsis(cart?.name)}</Typography>
        <SmallText>
          Seller: {cart?.sellerName}
          <Box component="span">
            {" "}
            <img
              src={fassured}
              alt="flipkart"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </SmallText>
        <Typography sx={{ margin: "20px 0" }}>
          <Box component="span" sx={{ fontWeight: 28, fontSize: 18 }}>
            ₹{cart?.price}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box
            component="span"
            sx={{ color: "#878787", textDecoration: "line-through" }}
          >
            ₹{mrp}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" sx={{ color: "#388E3C" }}>
            ₹{cart?.discount} off
          </Box>
        </Typography>
        <Remove onClick={() => handleDeleteFromCart(cart.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItems;
