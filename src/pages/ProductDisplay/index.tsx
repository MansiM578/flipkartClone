import React from "react";
import { Box, Typography, CircularProgress, Grid, styled } from "@mui/material";
import ActionItem from "components/details/ActionItem/actionItem";
import ProductDetail from "components/details/ProductDetail";
import RecentSlide from "components/details/RecentSlide";
import useProductDisplay from "pages/ProductDisplay/useProductDisplay";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));
const RightContianer = styled(Grid)`
  margin-top: 50px;
  padding-left: 25px;
  & > p {
    margin-top: 10px;
  }
`;

const ProductDisplay: React.FC = () => {
  const { item, loading, error } = useProductDisplay();
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  return (
    <Component>
      <Container container>
        <Grid item md={5} xs={12}>
          <ActionItem item={item} />
        </Grid>
        <RightContianer item md={7} xs={12}>
          <ProductDetail item={item} />
        </RightContianer>
      </Container>

      <RecentSlide />
    </Component>
  );
};
export default ProductDisplay;
