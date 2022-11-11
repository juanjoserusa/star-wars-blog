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
      <div className="card     bg-black text-white mw-100 mh-100 ">
        <div className=" card-header d-flex justify-content-between">
          <h1>Detalle</h1>
        </div>

        <div className="card-body mw-100 mh-100d">
          <div className="row">
          <div className="col-6 ">
            {parametro.type == "vehicles" ? (
              <img
                className="card-img-center "
                src={store.vehiclesurl[parametro.id]}
                alt="Card image cap"
                style={{ heith: "50%", width: "50%" }}
              />
            ) : (
              <img
                className="card-img-center rounded d-block mx-auto"
                src={
                  "https://starwars-visualguide.com/assets/img/" +
                  parametro.type +
                  "/" +
                  parametro.id +
                  ".jpg"
                }
                alt="Card image cap"
                style={{ heith: "35%", width: "35%" }}
              />
            )}
            
          </div>
          <div className="col-6">
          <h4 className="card-title nombre text-center mb-3">{character?.name}</h4>
          
            <h5 className="respuesta text-center mb-1"> Description:</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pellentesque sed odio sit amet tempor. Pellentesque sed finibus
              tortor, ut euismod ante. <br /><br />Proin porttitor quam a nisl bibendum, id
              elementum nulla pellentesque.<br /><br /> Fusce laoreet vitae justo non
              pellentesque. Fusce sed fermentum velit. Nulla sit amet enim nec
              lectus elementum sollicitudin. Maecenas eget maximus sem, sed
              accumsan ipsum. Maecenas sit amet pretium ante, quis rhoncus ex.
              In euismod egestas metus, quis elementum nibh pulvinar a. <br /><br />Proin
              pulvinar libero non auctor facilisis.
            </p>
          </div>
          </div>
          
          <hr className="barra"/>
          
          {parametro?.type == "characters" ? (
            <div className="d-flex flex-row justify-content-between">
              <div>
                <p className="text-center detalle">Gender: </p>
                <p className="text-capitalize text-center ">{character?.gender}</p>
              </div>
              <div>
                <p className="card-text text-center detalle">Hair color: </p>
                <p className="text-capitalize text-center ">{character?.hair_color}</p>
              </div>
              <div>
                <p className="text-center detalle">Eye color:</p>{" "}
                <p className="text-capitalize text-center ">{character?.eye_color}</p>
              </div>
            </div>
          ) : null}

          {parametro?.type == "planets" ? (
            <div className="d-flex flex-row justify-content-evenly">
              <div>
                <p className=" card-text text-center detalle">Climate:</p>
                <p className="text-capitalize text-center "> {character?.climate}</p>
              </div>
              <div>
                <p className="card-text text-center detalle">Population:</p> 
                <p className="text-capitalize text-center ">{character?.population}</p>
              </div>
            </div>
          ) : null}

          {parametro?.type == "vehicles" ? (
            <div className="d-flex flex-row justify-content-evenly">
              <div>
                <p className="card-text text-center detalle">Cost_in_credits:</p>
                  <p className="text-capitalize text-center "> {character?.cost_in_credits}
                </p>
              </div>
              <div>
                <p className="card-text text-center detalle">Model:</p> 
                <p className="text-capitalize text-center ">{character?.model}</p>
              </div>
              <div>
                <p className="card-text text-center detalle">
                  Manufacturer:</p>
                  <p className="text-capitalize text-center "> {character?.manufacturer}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="card-footer text-center mt-0">
          <Link to={"/"}>
            <button className="btn btn-primary back">
              Volver atras<i class="bi bi-reply-fill"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
