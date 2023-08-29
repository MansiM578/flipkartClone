import React from "react";
import { Button, ButtonGroup, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "reducers/CartSlice";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const GroupedButton = () => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (itemId: string) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId: string) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <Component>
      <StyledButton> -</StyledButton>
      <Button>1</Button>
      <StyledButton>+</StyledButton>
    </Component>
  );
};
export default GroupedButton;
