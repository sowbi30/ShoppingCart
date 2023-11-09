// ... (previous imports)

function Navbar({ cartItems, total, toggleCartVisibility }) {
    return (
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container px-4 px-lg-5'>
          <ul className="nav" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li className="nav-item">
              <a className="navbar-brand" aria-current="page" href="#">Start Bootstrap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Home</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" >About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Shop</a>
              <ul className="dropdown-menu" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </li>
            <form className="d-flex">
              <button
                className='btn btn-outline-dark'
                type='button'
                onClick={toggleCartVisibility}
              >
                <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItems.length}</span>
                <span className="ms-1">Total Rs: {total}</span>
              </button>
            </form>
          </ul>
          <div className='collapse navbar-collapse'>
            <ul className="nav nav-tabs d-flex justify-content-end" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {/* Your content goes here */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  