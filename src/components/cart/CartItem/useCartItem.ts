import { CartItemProps } from "types/types";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "reducers/CartSlice";
import { useDispatch } from "react-redux";

function useCartItem({ cart }: CartItemProps) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const mrp = (cart?.price || 0) + (cart?.discount || 0);
  const dispatch = useDispatch();
  const handleDeleteFromCart = (itemId: string) => {
    dispatch(deleteFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId: string) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId: string) => {
    dispatch(decreaseQuantity(itemId));
  };

  return {
    fassured,
    mrp,
    handleDeleteFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  };
}

export default useCartItem;
