import React from "react";

const pays = (props) => (
    <div className="row no-gutters border m-2">
        <div className="col-4">
            <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
        </div>
        <div className="col">
            <h5>Nom : {props.nom}</h5>
            <div>Capitale : {props.capital}</div>
            <div>Region : {props.region}</div>
        </div>
    </div>
);

export default pays;