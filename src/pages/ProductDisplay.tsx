import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectItems,
  selectItemDetails,
} from "reducers/ProductSlice";
import { useAppDispatch } from "reducers/Store";
import { Box, Typography, CircularProgress, Grid, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductDetails } from "reducers/ProductSlice";
import ActionItem from "components/details/actionItem";
import ProductDetail from "components/details/ProductDetail";
import { FormatStrikethrough, StrikethroughS } from "@mui/icons-material";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2f2;
`;
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});
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

  // const { id } = useParams();

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
        <Grid item md={4} sm={8} xs={12}>
          <ActionItem item={item} />
        </Grid>
        <RightContianer item sm={8} xs={12}>
          <ProductDetail item={item} />
        </RightContianer>
      </Container>
      {/* <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        alt="phone1"
      /> */}
    </Component>
  );
};
export default ProductDisplay;
