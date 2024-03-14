import React from "react";
import { useContext } from "react";
import { userContext } from "../contexts/UserContext";

export default function Loading() {
  const { loading } = useContext(userContext);

  if (loading) {
    return (
      <div>
        <div id="loading">
          <div className="loader"></div>
        </div>
      </div>
    );
  }
}
