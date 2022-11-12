import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Cards = (props) => {
  const { name } = useParams();
  const { store, actions } = useContext(Context);
  const [single, setSingle] = useState({});
  console.log(store, "cards");
  useEffect(() => {
    if (name) {
      setSingle(props.object.filter((object) => object.name === name));
    }
  });

  let type = "";
  switch (props.type) {
    case "personas":
      type = "characters";
      return (
                      
        <div
          className="card d-inline-block rounded "
          style={{ width: "14rem" }}
         
        >
          <div className="face front">  
            <img
            className="card-img-top rounded"
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              props.id +
              ".jpg"
            }
            alt="Card image cap"
            style={{ heitgh: "100%", width: "100%" }}
          />
          </div>
          
          <div className="face back">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>Gender: {props.object.gender}</div>
              <div>Hair color: {props.object.hair_color}</div>
              <div>Eye color: {props.object.eye_color}</div>
              <div className="row-direction justify-content-between d-flex">
                <Link to={`/info/${type}/${props.id}`}>
                  <span href="#" className="btn btn-primary">
                    Más información <i class="bi bi-person"></i>
                  </span>
                </Link>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger  "
                  onClick={() => {
                    actions.addToFavorites(props.object.name);
                  }}
                >
                  <i className="bi bi-heart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    case "planetas":
      type = "planets";
      return (
        <div className="card d-inline-block rounded" style={{ width: "14rem" }}>
          <div className="face front">
          <img
            src={
              props.id == 1
                ? "https://oakthorne.net/wiki/images/Tatooine.jpg"
                : "https://starwars-visualguide.com/assets/img/planets/" +
                  props.id +
                  ".jpg"
            }
            className="card-img-top customMaxHeight"
            alt="..."
            style={{ heith: "100%", width: "100%" }}
          />
          </div>
          <div className="face back">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>Terrain: {props.object.climate}</div>
              <div>Population: {props.object.population}</div>
              <div className="row-direction justify-content-between d-flex">
                <Link to={`/info/${type}/${props.id}`}>
                  <span href="#" className="btn btn-primary">
                    Más información <i class="bi bi-globe"></i>
                  </span>
                </Link>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {
                    actions.addToFavorites(props.object.name);
                  }}
                >
                  <i className="bi bi-heart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    case "vehiculos":
      type = "vehicles";
      return (
        <div className="card d-inline-block rounded" style={{ width: "14rem" }}>
          <div className="face front">
          <img
            className="card-img-top"
            src={store.vehiclesurl[props.id]}
            alt="Card image cap"
            style={{ heith: "100%", width: "100%" }}
          />
          </div>
          <div className="face back">
            <h5 className="card-title">{props.object.name}</h5>
            <div className="card-text">
              <div>Cost in credits: {props.object.cost_in_credits}</div>
              <div>Model: {props.object.model}</div>
              
              <div className="row-direction justify-content-between d-flex">
                <Link to={`/info/${type}/${props.id}`}>
                  <span href="#" className="btn btn-primary">
                    Más informacion <i class="bi bi-car-front"></i>
                  </span>
                </Link>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {
                    actions.addToFavorites(props.object.name);
                  }}
                >
                  <i class="bi bi-heart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
export default Cards;