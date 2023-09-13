import { useAppDispatch } from "reducers/Store";
import { addRecentItem } from "reducers/RecentItemsSlice";
import { useSelector } from "react-redux";
import {
  fetchItems,
  selectItems,
  selectLoading,
  selectError,
  selectItemDetails,
} from "reducers/ProductSlice";
import { useEffect } from "react";

function useProductList() {
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

  return { items, loading, error, handleProductView };
}

export default useProductList;
