import * as React from "react";

import { Badge } from "../badge";

import { Container, Title, InfoRow, RemoveButton } from "./styles";

export const MenuItem = ({ name, dietaries, onPress = () => {}, onDelete }) => {
  return (
    <Container onClick={onPress}>
      <Title>{name}</Title>
      <InfoRow>
        {dietaries.map((item, index) => (
          <Badge key={`${item}-index`} text={item} />
        ))}
      </InfoRow>
      {typeof onDelete === "function" ? (
        <RemoveButton onClick={onDelete}>x</RemoveButton>
      ) : null}
    </Container>
  );
};
