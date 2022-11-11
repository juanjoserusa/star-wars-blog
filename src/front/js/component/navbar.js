import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar fixed-top navbar-dark bg-transparent-10 mb-4">
      <Link to="/">
        <div className="ms-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" height={100} />
        </div>
      </Link>

      <div className="dropstart me-5">
        <button
          className="btn btn-primary position-relative"
          type="button"
          id="favoritesButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Mis favoritos
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {(store.favorites.length)}
    <span class="visually-hidden">unread messages</span>
  </span>
		  
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
        >
          {store.favorites.map((favorite, index) => {
            return (
              <li className="d-flex">
                <a className="dropdown-item" href="#">
                  {favorite}
                </a>
                <span
                  className="fa-solid fa-x"
                  onClick={() => {
                    actions.deleteFavorite(index);
                  }}
                >
                  <i class="bi bi-person-dash-fill p-3 mt-2"></i>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};