import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const REACT_APP_SERVER_DOMIN = process.env.REACT_APP_SERVER_DOMIN;


  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_DOMIN}/users`) 
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, );

  const deleteUserByEmail = async (email) => {
    const confirmed = window.confirm(`Are you sure you want to delete the user with email: ${email}?`);
    if (!confirmed) {
      return; // User canceled the deletion
    }
    
    try {
      await axios.delete(`${REACT_APP_SERVER_DOMIN}/users/${email}`);
      // Handle successful deletion
      console.log(`User with email ${email} deleted.`);
    } catch (error) {
      console.error(error);
      // Handle deletion error
    }
  };



  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
        <div>
        <Link to="/create-vendor" className="btn btn-primary">
          <i className="material-icons md-plus"></i> Create vendor
        </Link>

        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          {loading ? (
            <p>Loading users...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {users.map((user) => (
                <div className="card card-user shadow-sm" key={user._id}>
                  <div className="card-header">
                    <div className="flex justify-between">
                      <img
                        className="w-16 h-16 rounded-full"
                        src={user.image1}
                        alt="User pic 1"
                      />
                      <img
                        className="w-16 h-16 rounded-full"
                        src={user.image2}
                        alt="User pic 2"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mt-2">{user.firstName}</h5>
                    <div className="card-text text-gray-500">
                      <h5 className="mb-1">{user.lastName}</h5>
                      <p className="mb-1">
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                      </p>
                    </div>
                    <button
                      className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => deleteUserByEmail(user.email)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserComponent;