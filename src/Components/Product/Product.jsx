import cartIcon from "../../../public";

const Product = (props) => {
  const { image, name, price } = props.product;

  return (
    <div>
      <div className="card w-80 bg-white text-black shadow-xl mx-auto">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => props.handleAddToCart(props.product)}
              className="btn btn-primary"
            >
              Add To Cart
              <img className="w-[25px]" src={cartIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
