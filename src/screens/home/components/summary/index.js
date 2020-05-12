import * as React from "react";
import { useSelector } from "react-redux";

import {
  getSelectedItemsCount,
  getSummaryArray,
} from "../../../../state/menu/selectors";
import { Badge } from "../../../../components/badge";

export const Summary = () => {
  const numberOfItems = useSelector(getSelectedItemsCount);
  const summmary = useSelector(getSummaryArray);
  const numberOfItemsText = numberOfItems === 1 ? "item" : "items";

  return (
    <React.Fragment>
      <div className="col-6 menu-summary-left">
        <span>{`${numberOfItems} ${numberOfItemsText}`}</span>
      </div>
      <div className="col-6 menu-summary-right">
        {summmary.map(({ label, count }) => (
          <React.Fragment>
            {count}x <Badge text={label} />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};
