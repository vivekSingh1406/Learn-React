import React, { useState } from "react";

function StateHook() {
  const [color, setColor] = useState("ravi");

  return (
    <>
      <h1>{color} singh bais!</h1>
      <button type="button" onClick={() => setColor("vivek")}>  vivek </button>
      <button type="button" onClick={() => setColor("vikash")}> vikash </button>
      <button type="button" onClick={() => setColor("ankit")}>  ankit </button>
      <button type="button" onClick={() => setColor("nikku")}>  nikku </button>
    </>
  );
}

export default StateHook;
