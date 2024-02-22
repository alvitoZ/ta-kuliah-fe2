import React, { useState } from "react";

const CardTugas = ({ id, abcde, text, isSelected, onClick }) => {
  const buttonClassName = isSelected ? "bg-red-700 text-white" : "";
  const coba = () => {
    onClick();
  };

  return (
    <div
      className={`border-[2px] border-black py-2 rounded-lg ${
        buttonClassName ? buttonClassName : "bg-[#f1f0f0] "
      }  cursor-pointer text-center text-sm font-bold hover:bg-green-500`}
      // onClick={() => setClicked("bg-red-700")}
      onClick={coba}
    >
      {/* <p>{abcde}) Gerak suatu benda dan lintasannya berupa garis lurus</p> */}
      <div className="flex justify-start gap-6 items-center">
        <p className="text-xl font-bold text-start">{abcde}.</p>
        <span>
          {" "}
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </span>
      </div>
    </div>
  );
};

export default CardTugas;
