import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAvailableItems } from "../../../../state/menu/selectors";
import { addItem } from "../../../../state/menu/actions";

export const ItemPicker = () => {
  const dispatch = useDispatch();
  const items = useSelector(getAvailableItems);

  const addItemToMenu = React.useCallback((id) => dispatch(addItem(id)), [
    dispatch,
  ]);

  return (
    <ul className="item-picker">
      {items.map(({ id, name, dietaries = [] }) => (
        <li key={id} className="item" onClick={() => addItemToMenu(id)}>
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
};
