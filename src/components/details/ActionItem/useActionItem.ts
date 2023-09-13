import { ActionItemProps } from "types/types";
import { addItemToCart } from "reducers/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function useActionItem({ item }: ActionItemProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mrp: number = (item?.price || 0) + (item?.discount || 0);

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
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
    navigate("/cart");
  };

  return { handleAddToCart };
}

export default useActionItem;
