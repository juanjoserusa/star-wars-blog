import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Details = () => {
  const parametro = useParams();
  const { store, actions } = useContext(Context);
  const character = store[parametro.type][parametro.id - 1];



  return (
    <div className="container">
      
      <div className="card detailsCards position-absolute top-50 start-50 translate-middle bg-black text-white">
        
        <div className=" card-header d-flex justify-content-center"><h1>Details</h1></div>

        <div className="card-body">
          {parametro.type == "vehicles" ? (
            <img
              className="card-img-top "
              src={store.vehiclesurl[parametro.id]}
              alt="Card image cap"
              style={{ heith: "25%", width: "25%" }}
            />
          ) : (
            <img
              className="card-img-top rounded"
              src={
                "https://starwars-visualguide.com/assets/img/" +
                parametro.type +
                "/" +
                parametro.id +
                ".jpg"
              }
              alt="Card image cap"
              style={{ heith: "50%", width: "50%" }}
            />
          )}
          <br />
          <br />
          <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{character?.name}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque sed odio sit amet tempor. Pellentesque sed finibus tortor, ut euismod ante. Proin porttitor quam a nisl bibendum, id elementum nulla pellentesque. Fusce laoreet vitae justo non pellentesque. Fusce sed fermentum velit. Nulla sit amet enim nec lectus elementum sollicitudin. Maecenas eget maximus sem, sed accumsan ipsum. Maecenas sit amet pretium ante, quis rhoncus ex. In euismod egestas metus, quis elementum nibh pulvinar a. Proin pulvinar libero non auctor facilisis.</p>
        <p class="card-text">
        <div>
                <p className="card-text">Gender: {character?.properties.gender}</p>
              </div>
              <div>
                <p className="card-text">Hair color: {character?.hair_color}</p>
              </div>
              <div>
                <p className="card-text ">Eye color: {character?.eye_color}</p>
              </div>
        </p>
      </div>
    </div>
  </div>
</div>
          <h5 className="card-title">{character?.name}</h5>
          {parametro?.type == "characters" ? (
            <div className="d-flex flex-row justify-content-evenly">
              <div>
                <p className="card-text">Gender: {character?.gender}</p>
              </div>
              <div>
                <p className="card-text">Hair color: {character?.hair_color}</p>
              </div>
              <div>
                <p className="card-text">Eye color: {character?.eye_color}</p>
              </div>
            </div>
          ) : null}

          {parametro?.type == "planets" ? (
            <div className="d-flex flex-row justify-content-evenly">
              <div>
                <p className="card-text">Climate: {character?.climate}</p>
              </div>
              <div>
                <p className="card-text">Population: {character?.population}</p>
              </div>
            </div>
          ) : null}

          {parametro?.type == "vehicles" ? (
            <div className="d-flex flex-row justify-content-evenly">
              <div>
                <p className="card-text">
                  Cost_in_credits: {character?.cost_in_credits}
                </p>
              </div>
              <div>
                <p className="card-text">Model: {character?.model}</p>
              </div>
              <div>
                <p className="card-text">Manufacturer: {character?.manufacturer}</p>
              </div>
            </div>
          ) : null}
        </div>
        
        <div className="card-footer text-center">
          <Link to={"/"}>
            <button className="btn btn-primary back">Volver atras<i class="bi bi-reply-fill"></i></button>
          </Link>
        </div>

      </div>
    </div>
  );
};















<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>