import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSelectedItems } from "../../../../state/menu/selectors";
import { removeItem } from "../../../../state/menu/actions";

import { MenuItem } from "../../../../components/menu-item";
import { Container } from "./styles";

export const MenuPreview = () => {
  const dispatch = useDispatch();
  const items = useSelector(getSelectedItems);

  const removeItemFromMenu = React.useCallback(
    (id) => dispatch(removeItem(id)),
    [dispatch]
  );

  if (!items.length) {
    return <p>Menu is empty. Please select items from the left-hand menu.</p>;
  }

  return (
    <Container>
      {items.map(({ id, name, dietaries = [] }) => (
        <MenuItem
          key={id}
          name={name}
          dietaries={dietaries}
          onDelete={() => removeItemFromMenu(id)}
        />
      ))}
    </Container>
  );
};
