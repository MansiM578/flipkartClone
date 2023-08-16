import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  fetchItems,
  selectItems,
  selectLoading,
  selectError,
} from "reducers/ProductSlice";
import { useAppDispatch } from "reducers/Store";
import {
  Box,
  Typography,
  Divider,
  Grid,
  styled,
  CircularProgress,
  Link,
} from "@mui/material";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f1f1f1f1;
`;
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

function ProductDisplay() {
  const dispatch = useAppDispatch();
  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  // const { id } = useParams();

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
      {/* {items?.map((item) => (
        <Grid item xs={2} sm={2} md={2} key={item.id}>
          <Text>{item.id}</Text>
        </Grid>
      ))} */}
      Hello
    </Component>
  );
}
export default ProductDisplay;
