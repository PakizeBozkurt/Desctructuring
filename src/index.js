import React from "react";
import ReactDOM from "react-dom";
import cars from "./cars";

const [honda, tesla] = cars; //desctructure array object
const {
  speedStats: { topSpeed: hondaTopSpeed }, //destructure item object from each array also acess inherited item & gave custome name using :
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
const {
  coloursByPopularity: [teslaTopColour], // acess first element from element array using []
} = honda;
const {
  coloursByPopularity: [hondaTopColour],
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
