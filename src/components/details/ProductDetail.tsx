import React from "react";
import {
  Typography,
  Box,
  styled,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: "15px";
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;

const ProductDetail = ({ item }: any) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const mrp = item?.price + item?.discount;

  return (
    <>
      <Typography style={{ fontSize: 20 }}>{item?.name ?? "-"}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        {item?.ratingReviews?.rating} Rating & {item?.ratingReviews?.reviews}{" "}
        Reviews
        <Box component="span">
          <img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{item?.price}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box
          component="span"
          style={{ color: "#878787", textDecoration: "line-through" }}
        >
          ₹{mrp}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          ₹{item?.discount} off
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge /> Get extra 20% off upto ₹50 on 1 item(s) T&C
        </Typography>
        <Typography>
          <StyledBadge /> Get extra 13% off (prce inclusive of duscount) T&C
        </Typography>
        <Typography>
          <StyledBadge /> Sign up or Flipkart Pay Later and get Flipkart Gift
          Card worth ₹100* Know More
        </Typography>
        <Typography>
          <StyledBadge /> Buy 2 items save 5% Buy 3 or more save 10% T&C
        </Typography>
        <Typography>
          <StyledBadge /> 5% Cashback on Flipkart Axis Bank Card
        </Typography>
        <Typography>
          <StyledBadge /> {item?.offers?.[0]?.description}
        </Typography>
      </SmallText>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                {item?.seller?.[0]?.name}
              </Box>
              &nbsp;&nbsp;&nbsp;
              <Box
                component="span"
                style={{
                  color: "#FFFFFF",
                  border: "4px solid #2874f0",
                  borderRadius: "10px",
                  background: "#2874f0",
                  fontSize: "11px",
                }}
              >
                {item?.seller[0].rating}*
              </Box>
              <Typography></Typography>
              <Typography></Typography>
              <Typography>{item?.seller?.[0]?.returns}</Typography>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹100</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="flipkart points" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{item?.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
