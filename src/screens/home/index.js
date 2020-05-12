import React from "react";

import { ItemPicker } from "./components/item-picker";
import { MenuPreview } from "./components/menu-preview";
import { Summary } from "./components/summary";

import { Wrapper, MenuSummary, MenuBuilder } from "./styles";

export const HomeScreen = () => (
  <Wrapper>
    <MenuSummary>
      <div className="container">
        <div className="row">
          <Summary />
        </div>
      </div>
    </MenuSummary>
    <MenuBuilder className="container">
      <div className="row">
        <div className="col-4">
          <ItemPicker />
        </div>
        <div className="col-8">
          <h2>Menu preview</h2>
          <MenuPreview />
        </div>
      </div>
    </MenuBuilder>
  </Wrapper>
);
