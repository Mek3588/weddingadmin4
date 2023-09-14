import React, { useEffect, useState } from "react";

const TopTotal = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    // Fetch total sales data
    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/total-Sales`)
      .then((response) => response.json())
      .then((data) => {
        setTotalSales(data.totalSales);
      })
      .catch((error) => {
        console.error("Error fetching total sales:", error);
      });

    // Fetch total orders data
    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/total-orders`)
      .then((response) => response.json())
      .then((data) => {
        setTotalOrders(data.totalOrders);
      })
      .catch((error) => {
        console.error("Error fetching total orders:", error);
      });

    // Fetch total products data
    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/total-Products`)
      .then((response) => response.json())
      .then((data) => {
        setTotalProducts(data.totalProducts);
      })
      .catch((error) => {
        console.error("Error fetching total products:", error);
      });
  }, []);

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-usd-circle"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Sales</h6>
              <span>birr {totalSales}</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-success">
              <i className="text-success fas fa-bags-shopping"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Orders</h6>
              <span>{totalOrders}</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-warning">
              <i className="text-warning fas fa-shopping-basket"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Products</h6>
              <span>{totalProducts}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
