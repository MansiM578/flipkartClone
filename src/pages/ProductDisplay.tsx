import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectItemDetails,
} from "reducers/ProductSlice";
import { useAppDispatch } from "reducers/Store";
import { Box, Typography, CircularProgress, Grid, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductDetails } from "reducers/ProductSlice";
import ActionItem from "components/details/ActionItem/actionItem";
import ProductDetail from "components/details/ProductDetail";
import RecentSlide from "components/details/RecentSlide";

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
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const item = useSelector(selectItemDetails);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  return (
    <Component>
      <Container container>
        <Grid item md={5} sm={12} xs={12}>
          <ActionItem item={item} />
        </Grid>
        <RightContianer item md={7} sm={12} xs={12}>
          <ProductDetail item={item} />
        </RightContianer>
      </Container>

      <RecentSlide />
    </Component>
  );
};
export default ProductDisplay;
