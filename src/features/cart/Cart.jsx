import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import Emptycart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  function handleClear() {
    dispatch(clearCart());
  }
  if (!cart.length) return <Emptycart />;

  return (
    <div className="py-3 px-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart,{username}</h2>
      <ul className="mt-3 divide-y divide-stone-300 border-b border-stone-300">
        {cart.map((items) => (
          <CartItem item={items} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClear}>
          clear cart{" "}
        </Button>
      </div>
    </div>
  );
}

export default Cart;
