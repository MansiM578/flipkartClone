import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { CartProps } from "types/types";
import useTotalView from "components/cart/TotalView/useTotalView";

const Component = styled(Box)`
  background-color: #fff;
`;

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;

const Price = styled(Box)`
  float: right;
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: 550;
`;

const TotalView: React.FC<CartProps> = ({ cartItems }) => {
  const { price, discount } = useTotalView({ cartItems });
  const len = cartItems?.length;
  const view = cartItems.length > 1 ? `Items` : `Item`;
  return (
    <Component>
      <Header>
        <Heading>PRICE Details</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({len} {view})<Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount ({len} {view})<Price component="span">₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges ({len} {view})<Price component="span">₹40</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount ({len} {view})
          <Price component="span">₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Container>
    </Component>
  );
};

export default TotalView;
