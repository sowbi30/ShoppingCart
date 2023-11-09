function Cart({ data, handleRemoveItems }) {
    const handleClick = () => {
      handleRemoveItems(data);
    };
  
    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p>{data.title} <br /> Author: {data.author}</p>
            <span>Price: Rs {data.price}</span>
          </div>
          <button className="btn btn-sm btn-danger" onClick={handleClick}>
            x
          </button>
        </div>
      </li>
    );
  }
  export default Cart;