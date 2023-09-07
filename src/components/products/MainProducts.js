import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import axios from "axios";

const MainProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All category");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_DOMIN}/Product`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  const filteredProducts = selectedCategory === "All category"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Create new
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All category">All category</option>
                <option value="decor">decor</option>
                <option value="flowers">flower</option>
                <option value="cars">cars</option>
                <option value="hotel">hotel</option>
              </select>
            </div>
            
          </div>
        </header>

        <div className="card-body">
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="row">
              {filteredProducts.map(({ _id, ...product }) => (
                <Product product={product} key={_id} />
              ))}
            </div>
          )}

          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
