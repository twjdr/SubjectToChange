import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";

// const { AccountData, ContractData, ContractForm } = newContextComponents;
const { AccountData } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // Assuming we're observing the store for changes.
  var state = drizzle.store.getState();
  console.log('state', state);

  if (state.drizzleStatus.initialized) {
    // destructure drizzle and drizzleState from props
    return (
      <div className="App">
        <div>
          <img src={logo} alt="drizzle-logo" />
          <h1>Drizzle Examples</h1>
          <p>
            Examples of how to get started with Drizzle in various situations.
        </p>
        </div>

        <div className="section">
          <h2>Active Account</h2>
          <AccountData
            drizzle={drizzle}
            drizzleState={drizzleState}
            accountIndex={0}
            units="ether"
            precision={3}
          />
        </div>
      </div>
    );
  }

  return 'Loading...';
};
