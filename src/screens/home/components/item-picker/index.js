import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAvailableItems } from "../../../../state/menu/selectors";
import { addItem } from "../../../../state/menu/actions";

import { MenuItem } from "../../../../components/menu-item";
import { Container } from "./styles";

export const ItemPicker = () => {
  const dispatch = useDispatch();
  const items = useSelector(getAvailableItems);

  const addItemToMenu = React.useCallback((id) => dispatch(addItem(id)), [
    dispatch,
  ]);

  return (
    <Container>
      {items.map(({ id, name, dietaries = [] }) => (
        <MenuItem
          key={id}
          name={name}
          dietaries={dietaries}
          onPress={() => addItemToMenu(id)}
        />
      ))}
    </Container>
  );
};
