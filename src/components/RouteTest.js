import React from "react";
import { Link } from "react-router-dom";

function RouteTest() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/diary"}>DIARY</Link>
        </li>
        <li>
          <Link to={"/new"}>NEW</Link>
        </li>
        <li>
          <Link to={"/edit"}>EDIT</Link>
        </li>
      </ul>
    </div>
  );
}

export default RouteTest;
