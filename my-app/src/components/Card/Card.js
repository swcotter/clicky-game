import React from "react";
import "./Card.css";
// import { url } from "inspector";

const Card = ({ id, name, image, isPicked}) => (
    // <div className={`mdc-layout-grid__cell--span-3--order-${Number(id)}`}>
    <div>
        {name}
        <div
            className="card"
            key={id}
            data-id={id}
            name={name}
            style={{ backgroundImage: `url(${image})` }}
            status={isPicked}
        >
        </div>
    </div>
)

export default Card;