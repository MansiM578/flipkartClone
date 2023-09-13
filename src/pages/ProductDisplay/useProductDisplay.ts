import { useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectItemDetails,
} from "reducers/ProductSlice";
import { useAppDispatch } from "reducers/Store";
import { useParams } from "react-router-dom";
import { getProductDetails } from "reducers/ProductSlice";
import { useEffect } from "react";

function useProductDisplay() {
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

  return { item, loading, error };
}

export default useProductDisplay;
