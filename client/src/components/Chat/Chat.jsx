/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export const Chat = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setName(query.get("name"));
    setRoom(query.get("room"));
  }, []);

  return <div> This is Chat component !</div>;
};
