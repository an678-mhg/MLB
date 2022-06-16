import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../../components/Private/PrivateRoute";
import TopLoading from "../../components/Loading/TopLoading";
import Info from "../Info";
import Search from "../Search";
const Cart = lazy(() => import("../Cart"));
const Header = lazy(() => import("../../components/Header/Header"));
const Product = lazy(() => import("../Product"));
const ProductDetails = lazy(() => import("../ProductDetails"));
const HomePage = lazy(() => import("./HomePage"));
const Footer = lazy(() => import("../../components/Footer"));
const CheckOut = lazy(() => import("../CheckOut"));
const ThankYou = lazy(() => import("../ThankYou"));
const Order = lazy(() => import("../Order"));
const OrderDetails = lazy(() => import("../OrderDetails"));
const NotFound = lazy(() => import("../NotFound"));

const Client = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<TopLoading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:category" element={<Product />} />
          <Route path="/product/details/:id" element={<ProductDetails />} />
          <Route
            path="/check-out"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route
            path="/order"
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route
            path="/edit-info/:id"
            element={
              <PrivateRoute>
                <Info />
              </PrivateRoute>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Client;
