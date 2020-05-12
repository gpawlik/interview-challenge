import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSelectedItems } from "../../../../state/menu/selectors";
import { removeItem } from "../../../../state/menu/actions";

export const MenuPreview = () => {
  const dispatch = useDispatch();
  const items = useSelector(getSelectedItems);

  const removeItemFromMenu = React.useCallback(
    (id) => dispatch(removeItem(id)),
    [dispatch]
  );

  return (
    <ul className="menu-preview">
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
          <button
            className="remove-item"
            onClick={() => removeItemFromMenu(id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};
