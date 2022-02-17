import React from "react";
import CounterControl from "../../components/ReduxTest/CounterControl";
import CounterView from "../../components/ReduxTest/CounterView";

export default function ReduxTest() {
  return (
    <div>
      <CounterView />
      <CounterControl />
    </div>
  );
}
