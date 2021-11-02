import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden crd">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <strong>{props.age}</strong> Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </>
  );
}
