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
          className="btn btn-primary position-relative  glow-on-hover "
          type="button"
          id="favoritesButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          Mis favoritos
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {(store.favorites.length)}
    <span class="visually-hidden">unread messages</span>
  </span>
		  
        </button>
        <ul
          className="dropdown-menu text-light bg-dark"
          aria-labelledby="dropdownMenuButton1"
        >
          {store.favorites.map((favorite, index) => {
            return (
              <li className="d-flex navegacion">
                
                <a className="dropdown-item text-light bg-darkp-2 " href="#">
                  {favorite}
                </a>
                <span
                  className="fa-solid fa-x"
                  onClick={() => {
                    actions.deleteFavorite(index);
                  }}
                >
                  <i class="bi bi-trash me-4 text-danger boton"></i>
                </span>
                
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};