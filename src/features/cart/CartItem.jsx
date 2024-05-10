import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItems from "./DeleteItems";
import UpdateItemQunatity from "./UpdateItemQunatity";
import { getCurrentQuatityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuatityById(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQunatity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItems pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
