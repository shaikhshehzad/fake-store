import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Cart() {
  const [user, setUser] = useState({});
  const getCartItems = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/carts/${id}`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
    setUser(response?.data);
  };

  const id = useSelector((state) => state.product.id);

  useEffect(() => {
    getCartItems(id);
  }, []);

  return (
    <div>
      Cart
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
