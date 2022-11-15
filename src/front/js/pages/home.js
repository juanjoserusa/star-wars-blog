
import React, { useEffect, useContext } from "react";
import Cards from "/workspace/star-wars-blog/src/front/js/component/card.js";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

   return (
    <div className="container">
      <h1 className="display-4 py-1 fw-bolder text-center">Characters</h1>
      <div className="row d-flex flex-column wrapScroll mb-3  ">
        
        <div className="cards d-flex  ">
          {store.characters.map((people, index) => {
            return (<div key={index} className="col-3"> <Cards object={people} type="personas" id={index + 1}/></div>)
          })}
        </div>
      </div>

      <h1 className="display-4 py-1 fw-bolder text-center">Planets</h1>
      <div className="row d-flex flex-column wrapScroll mb-3 ">
        
        <div className="cards d-flex ">
          
            {store.planets.map((planets, index) => (
              <div key={index } className="col-3"> <Cards object={planets} type="planetas" id={index + 1}/> </div>
            ))}
          
        </div>
      </div>

      <h1 className="display-4 py-1 fw-bolder text-center">Vehicles</h1>
      <div className="row d-flex flex-column wrapScroll mb-3">
        
        <div className="cards d-flex ">
            {store.vehicles.map((vehicles, index) => (
              <div key={index} className="col-3"> <Cards object={vehicles} type="vehiculos" id={index + 1}/> </div>
            ))}          
        </div>
      </div>
    </div>
  );
};