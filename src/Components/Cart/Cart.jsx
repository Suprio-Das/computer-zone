import Sidebar from "../Sidebar/Sidebar";
import cartIcon from "../../../public";

const Cart = ({ cart, removeAllFromCart, chooseOne }) => {
  // console.log(cart);
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
  }
  // console.log(quantity);
  return (
    <div>
      <div className="drawer drawer-end z-[1]">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative text-end mb-3">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary indicator"
          >
            <img className="w-[35px]" src={cartIcon} alt="" />
            <span className="indicator-item badge badge-secondary">
              {quantity}
            </span>
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {cart.map((product) => (
              <Sidebar key={product.id} product={product}></Sidebar>
            ))}
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary" onClick={chooseOne}>
                Choose One
              </button>
              <button className="btn btn-primary" onClick={removeAllFromCart}>
                Choose Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
