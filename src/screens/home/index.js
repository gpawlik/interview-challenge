import React from "react";

import items from "./items";

import { ItemPicker } from "./components/item-picker";
import { MenuPreview } from "./components/menu-preview";
import { Summary } from "./components/summary";

export const HomeScreen = () => (
  <div className="wrapper">
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <Summary />
        </div>
      </div>
    </div>
    <div className="container menu-builder">
      <div className="row">
        <div className="col-4">
          <ItemPicker items={items} />
        </div>
        <div className="col-8">
          <h2>Menu preview</h2>
          <MenuPreview />
        </div>
      </div>
    </div>
  </div>
);
