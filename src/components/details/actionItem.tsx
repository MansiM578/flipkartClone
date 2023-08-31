import { Box, Button, styled } from "@mui/material";
import React from "react";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { addItemToCart } from "reducers/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionItemProps } from "types/types";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
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

const ActionItem: React.FC<ActionItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mrp: number = (item?.price || 0) + (item?.discount || 0);
  console.log(mrp);

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: item?.id ?? "",
        name: item?.name ?? "",
        image: item?.images[0] ?? "",
        quantity: 1,
        price: item?.price ?? 0,
        discount: item?.discount ?? 0,
        sellerName: item?.seller[0]?.name ?? "Unknown Seller",
        maxPrice: mrp,
      })
    );
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={item?.images[0]} alt="image1" />
      </Box>

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
