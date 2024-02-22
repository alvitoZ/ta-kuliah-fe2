import React, { useEffect } from "react";

import { useState } from "react";
import CardTugas from "./card-tugas";

const ContainerTugas = ({ kategori, _id, soal, id, data, atasFunc }) => {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [selectedButtonId2, setSelectedButtonId2] = useState(null);

  const handleUpdateSelection = (childId, parentId) => {
    setSelectedButtonId(childId);
    setSelectedButtonId2(parentId);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="py-4 text-base font-bold text-gray-700">
        nomor {id + 1} kategori <span className="capitalize">{kategori}</span>
      </p>
      <div className="flex gap-1">
        <span className="font-bold">{id + 1}.</span>{" "}
        <div dangerouslySetInnerHTML={{ __html: soal }}></div>
      </div>

      {(() => {
        let text = "a";
        let code = text.charCodeAt(0) + data.length;
        const list = [];
        for (let a = 97; a < code; a++) {
          list.push(String.fromCharCode(a));
        }
        return list.map((list, i) => {
          return (
            <CardTugas
              key={i}
              id={i}
              parentId={id}
              abcde={list}
              text={data[i].soal}
              isSelected={selectedButtonId === i && selectedButtonId2 === id}
              onClick={() => {
                // handleFormSoal(kategori, nomor, soal, data[i].soal, i, data);
                atasFunc(data, i, _id, kategori);
                // handleFormChange(i, data, id, kategori, nomor, data[i]._id);
                handleUpdateSelection(i, id);
              }}
            />
          );
        });
      })()}
    </div>
  );
};

export default ContainerTugas;
