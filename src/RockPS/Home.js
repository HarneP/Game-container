import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Hello</p>
      <Link to="/RockPS">Rock Paper Scissors</Link>
    </div>
  );
}
