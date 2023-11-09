import './App.css';
import Cards from './components/Cards';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Header from './components/Header';
import React, { useState } from 'react';



function App(){
let data = [
    {
        id: 1,
        title: "Akbar Birbal",
        author: "by Wonder House Books  |  25 April 2018",
        price: 89,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533691116l/41068481._SY475_.jpg",
        amount: 1,
      },
      {
        id: 2,
        title: "My First Book of Pencil Control",
        author: "by Wonder House Books | 25 April 2018",
        price: 57,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533186651l/41026014._SY475_.jpg",
        amount: 1,
      },
      {
        id: 3,
        title: "Akbar Birbal",
        author: "by Wonder House Books  |  25 April 2018",
        price: 89,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533691116l/41068481._SY475_.jpg",
        amount: 1,
      },
      {
        id: 4,
        title: "My First Book of Pencil Control",
        author: "by Wonder House Books | 25 April 2018",
        price: 57,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533186651l/41026014._SY475_.jpg",
        amount: 1,
      },
      {
        id: 5,
        title: "My First 1000 Words",
        author: "by Wonder Books|1 January 2018",
        price: 149,
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1596400774i/54789768.jpg",
        amount: 1,
      },
      {
        id: 6,
        title: "101 Panchatantra Stories for Children",
        author: "by Om Books | 30 September 2020",
        price: 135,
        img: "https://th.bing.com/th/id/OIP.CvtpL4LtNuzC56tjlrPmOgHaK2?pid=ImgDet&w=768&h=1125&rs=1",
        amount: 1,
      
      },
      {
        id: 7,
        title: "101 Panchatantra Stories for Children",
        author: "by Om Books | 30 September 2020",
        price: 135,
        img: "https://th.bing.com/th/id/OIP.CvtpL4LtNuzC56tjlrPmOgHaK2?pid=ImgDet&w=768&h=1125&rs=1",
        amount: 1,
      
      },
      {
        id: 8,
        title: "101 Panchatantra Stories for Children",
        author: "by Om Books | 30 September 2020",
        price: 135,
        img: "https://th.bing.com/th/id/OIP.CvtpL4LtNuzC56tjlrPmOgHaK2?pid=ImgDet&w=768&h=1125&rs=1",
        amount: 1,
      
      },
      {
        id: 9,
        title: "Akbar Birbal",
        author: "by Wonder House Books  |  25 April 2018",
        price: 89,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533691116l/41068481._SY475_.jpg",
        amount: 1,
      },
      {
        id: 10,
        title: "My First Book of Pencil Control",
        author: "by Wonder House Books | 25 April 2018",
        price: 57,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533186651l/41026014._SY475_.jpg",
        amount: 1,
      },
      {
        id: 11,
        title: "Akbar Birbal",
        author: "by Wonder House Books  |  25 April 2018",
        price: 89,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533691116l/41068481._SY475_.jpg",
        amount: 1,
      },
      {
        id: 12,
        title: "My First Book of Pencil Control",
        author: "by Wonder House Books | 25 April 2018",
        price: 57,
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533186651l/41026014._SY475_.jpg",
        amount: 1,
      },
    ]; 
      
      let [cartItems, setCartItems] = useState([]);
      const [total, setTotal] = useState(0);
      const [isCartVisible, setIsCartVisible] = useState(false);
      let handleAddCart = (data) => {
        setCartItems([...cartItems, data]);
        setTotal((prevTotal) => prevTotal + data.price);
      };
    
      let handleRemoveItems = (data) => {
        let dataIndex = cartItems.findIndex((obj) => obj.id === data.id);
    
        if (dataIndex !== -1) {
          let removedItem = cartItems[dataIndex];
          let updatedCart = [...cartItems];
          updatedCart.splice(dataIndex, 1);
    
          setCartItems(updatedCart);
          setTotal((prevTotal) => prevTotal - removedItem.price);
        }
      };
      const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };
      return (
        <div id='root'>
          <div className='Nav'>
            <Navbar 
             cartItems={cartItems}
             total={total}
             toggleCartVisibility={toggleCartVisibility}
           />
          </div>
    
          <div className='py-5 bg-dark'>
            <ul>
              <Header />
            </ul>
          </div>
    
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-4">
                
                <div className="row">
                  {data.map((data, index) => (
                    <Cards key={index} data={data} handleAddCart={handleAddCart} />
                  ))}
                </div>
              </div>
              <div className="col-sm-6 mt-4">
                <h2>Cart</h2>
                {cartItems.length > 0 ? (
                  <div>
                    <ol className="list-group list-group-numbered">
                      {cartItems.map((data, index) => (
                        <Cart key={index} data={data} handleRemoveItems={handleRemoveItems} />
                      ))}
                    </ol>
                    <div>
                      <h2>Total Rs: {total}</h2>
                    </div>
                  </div>
                ) : (
                  <h4>No Items In The Cart</h4>
                )}
              </div>
            </div>
          </div>
    
          <div className="py-5 bg-dark">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2023
            </p>
          </div>
        </div>
      );
    }
    
    export default App;