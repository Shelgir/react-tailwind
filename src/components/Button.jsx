import React from "react";

export default function Button(props) {
  return (
    <>
      <div>
        <button class="bg-blue-400 hover:bg-blue-600 transition-colors ease-in text-white font-bold py-2 px-4 rounded-full">
          {props.text}
        </button>
      </div>
    </>
  );
}
