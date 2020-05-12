import * as React from "react";
import { useSelector } from "react-redux";

import {
  getSelectedItemsCount,
  getSummaryArray,
} from "../../../../state/menu/selectors";
import { Badge } from "../../../../components/badge";

import { SummaryLeft, SummaryRight } from "./styles";

export const Summary = () => {
  const numberOfItems = useSelector(getSelectedItemsCount);
  const summmary = useSelector(getSummaryArray);
  const numberOfItemsText = numberOfItems === 1 ? "item" : "items";

  return (
    <React.Fragment>
      <SummaryLeft className="col-6">
        <span>{`${numberOfItems} ${numberOfItemsText}`}</span>
      </SummaryLeft>
      <SummaryRight className="col-6">
        {summmary.map(({ label, count }) => (
          <span key={label}>
            {count}x <Badge text={label} />
          </span>
        ))}
      </SummaryRight>
    </React.Fragment>
  );
};
