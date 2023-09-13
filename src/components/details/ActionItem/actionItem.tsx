import { Box, Button, styled } from "@mui/material";
import React from "react";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

import { ActionItemProps } from "types/types";
import useActionItem from "components/details/ActionItem/useActionItem";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  width: "auto",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "auto",
  height: "auto",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 50,
  bordeRadius: 2,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

const ImageBox = styled(Box)`
  padding: "15px 20px";
  border: "1px solid #f0f0f0";
  width: 90%;
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ActionItem: React.FC<ActionItemProps> = ({ item }) => {
  const { handleAddToCart } = useActionItem({ item });

  return (
    <LeftContainer>
      <ImageBox>
        <Image src={item?.images[0]} alt="image1" />
      </ImageBox>

      <StyledButton
        variant="contained"
        sx={{ marginRight: "10px", background: "#ff9f00" }}
        onClick={handleAddToCart}
      >
        <Cart />
        ADD TO CART
      </StyledButton>

      <StyledButton variant="contained" style={{ background: "#fb541d" }}>
        <Flash />
        BUY NOW
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
