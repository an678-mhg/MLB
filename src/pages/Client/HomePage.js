import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductsList from "../../components/Products/ProductsList";

const HomePage = () => {
  return (
    <div className="container">
      <Banner />
      <ProductsList category="Phone" title="Điện thoại di động" />
      <ProductsList category="Laptop" title="Máy tính xách tay" />
      <ProductsList category="Watch" title="Đồng hồ" />
      <ProductsList category="Tablet" title="Máy tính bảng" />
    </div>
  );
};

export default HomePage;
