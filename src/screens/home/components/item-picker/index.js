import * as React from "react";

export const ItemPicker = ({ items = [] }) => (
  <ul className="item-picker">
    {items.map(({ id, name, dietaries = [] }) => (
      <li key={id} className="item">
        <h2>{name}</h2>
        <p>
          {dietaries.map((item, index) => (
            <span key={`${item}-index`} className="dietary">
              {item}
            </span>
          ))}
        </p>
      </li>
    ))}
  </ul>
);
