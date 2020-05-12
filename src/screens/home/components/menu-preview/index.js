import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSelectedItems } from "../../../../state/menu/selectors";
import { removeItem } from "../../../../state/menu/actions";

import { Badge } from "../../../../components/badge";

export const MenuPreview = () => {
  const dispatch = useDispatch();
  const items = useSelector(getSelectedItems);

  const removeItemFromMenu = React.useCallback(
    (id) => dispatch(removeItem(id)),
    [dispatch]
  );

  return (
    <ul className="menu-preview">
      {items.map(({ id, name, dietaries = [] }, index) => (
        <li key={id} className="item">
          <h2>{name}</h2>
          <p>
            {dietaries.map((item, index) => (
              <Badge key={`${item}-index`} text={item} />
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
