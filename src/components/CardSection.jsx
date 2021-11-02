import React from "react";
import Card from "./Card";

export default function CardSection() {
  return (
    <>
      <div className="w-full bg-white h-3/5 p-7 flex justify-around">
        <Card title="Shelgir" age="12" />
        <Card title="Karma" age="14" />
      </div>
    </>
  );
}
