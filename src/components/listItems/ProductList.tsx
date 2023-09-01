import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  fetchItems,
  selectItems,
  selectLoading,
  selectError,
} from "reducers/ProductSlice";
import {
  Box,
  Typography,
  Divider,
  Grid,
  styled,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "reducers/Store";

const ComponentBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const Component = styled(Box)`
  margin-top: 55px;
  background: #f1f1f1f1;
`;

const Phone = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const PhoneText = styled(Typography)`
  font-size: 22px;
  margin-right: 25px;
  line-height: 32px;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
  objectFit: "cover",
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Model = styled(Box)`
  padding: "25px 15px";
  text-align: center;
  background-color: #ffffff;
  overflow: hidden;
  align-items: center;
`;
const Block = styled(Grid)`
  height: "300px";
`;

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  return (
    <Component>
      <Phone>
        <PhoneText>Product List</PhoneText>
      </Phone>
      <Divider />
      <ComponentBox>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 3, lg: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        >
          {items?.map((item) => (
            <Block item xs={2} sm={2} md={2} key={item.id}>
              <Link
                to={`product/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Model textAlign="center" style={{ padding: "25px 15px" }}>
                  <Image src={item.images[0]} alt="phone1" />
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </Model>
              </Link>
            </Block>
          ))}
        </Grid>
      </ComponentBox>
    </Component>
  );
};

export default ProductList;
