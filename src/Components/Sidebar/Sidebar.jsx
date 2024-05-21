const Sidebar = (props) => {
  const { image, name, price } = props.product;
  return (
    <div>
      <div className="card w-72 bg-white text-primary-content mt-2">
        <div className="card-body grid grid-cols-2 items-center">
          <div className="w-24">
            <img className="rounded-lg" src={image} alt="" />
          </div>
          <div>
            <h2 className="text-sm">{name}</h2>
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
