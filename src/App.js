import Navbar from "./components/Navbar/Navbar";
import { About, Help, Products } from "./components/Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import Productitem from "./components/Pages/Productitem";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Carts from "./components/Carts";
import Error from "./components/Pages/error";

export default function App() {
  let state = useSelector((state) => state);
  let [product, setProduct] = useState();
  let [page, setPage] = useState(0);
  // console.log(state)
  const token = state.auth.logedIn;
  // console.log(loginToken);
  const url = `https://fakse-store-api.herokuapp.com/api/v1/products?limit=10&offset=${page * 10
    }`;
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        const { data } = response;
        // console.log(data)
        setProduct(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [url]);

  return (
    <div>
      <BrowserRouter>
        <Navbar token={token} />
        <Routes>
          {/* {isLogin &&  */}
          <Route
            path="/"
            element={<Products product={product} setPage={setPage} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />

          <Route path="/SignIn" element={<SignIn />} />

          <Route path="/SignUp" element={<SignUp />} />

          <Route path=":id" element={token ? <Productitem product={product} /> : <Error />} />
        </Routes>
      </BrowserRouter>

      {state.cart.showCart && <Carts />}
    </div>
  );
}
