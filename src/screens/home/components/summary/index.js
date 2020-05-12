import * as React from "react";

export const Summary = () => (
  <React.Fragment>
    <div className="col-6 menu-summary-left">
      <span>5 items</span>
    </div>
    <div className="col-6 menu-summary-right">
      6x <span className="dietary">ve</span>
      4x <span className="dietary">v</span>
      12x <span className="dietary">n!</span>
    </div>
  </React.Fragment>
);
