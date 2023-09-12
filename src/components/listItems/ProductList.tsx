import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  fetchItems,
  selectItems,
  selectLoading,
  selectError,
  selectItemDetails,
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
import { addRecentItem } from "reducers/RecentItemsSlice";

const ComponentBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  margin-top: 25px;
`;

const Component = styled(Box)`
  margin-top: 55px;
`;

const Phone = styled(Box)`
  margin: 15px 20px;
  display: flex;
  background: #f1f1f1f1;
`;

const PhoneText = styled(Typography)`
  font-size: 22px;
  margin-right: 25px;
  margin-top: 15px;
  line-height: 32px;
`;

const Image = styled("img")({
  height: "280px",
  padding: " 0 auto 25px",
  position: "relative",
  width: "200px",
});

const Text1 = styled(Typography)`
  color: #212121;
  display: block;
  font-size: 14px;
  line-height: 1.43;
  padding-bottom: 5px;
  text-decoration: none;
`;

const RateBox = styled(Box)`
  cursor: auto;
  display: flex;
  margin-left: 25px;
`;

const ProductRating = styled(Box)`
  background-color: #388e3c;
  border-radius: 2px;
  color: #fff;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  padding: 2px 4px 2px 6px;
  vertical-align: middle;
`;

const Assured = styled("img")({
  height: "21px",
  margin: "0 0 0 8px",
  width: "77px",
});

const Model = styled(Box)`
  padding: 25px 15px;
  text-align: center;
  background-color: #ffffff;
  overflow: hidden;
  align-items: center;
`;
const Block = styled(Grid)`
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Review = styled(Box)`
  color: #878787;
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
`;

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const item = useSelector(selectItemDetails);

  const mrp: number = (item?.price || 0) + (item?.discount || 0);

  console.log(items);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleProductView = () => {
    dispatch(
      addRecentItem({
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
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  return (
    <Box>
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
            sx={{ background: "#ffffff" }}
          >
            {items?.map((item) => (
              <Block item xs={2} sm={2} md={3} key={item.id}>
                <Link
                  to={`product/${item.id}`}
                  onClick={handleProductView}
                  style={{ textDecoration: "none" }}
                >
                  <Model textAlign="center">
                    <Image src={item.images[0]} alt="phone1" />
                    <Text1>{item.name}</Text1>
                    <RateBox>
                      <ProductRating>
                        {item?.ratingReviews?.avg_rating} ★
                      </ProductRating>
                      <Review component="span">
                        ({item?.ratingReviews?.rating})
                      </Review>
                      <Assured
                        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                        alt="assured"
                      ></Assured>
                    </RateBox>
                  </Model>
                </Link>
              </Block>
            ))}
          </Grid>
        </ComponentBox>
      </Component>
    </Box>
  );
};

export default ProductList;
