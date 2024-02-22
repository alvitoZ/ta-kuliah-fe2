import React from "react";

const TugasGagal = ({ kategori, total_benar, nilai, hasilParent }) => {
  return (
    <div className="max-w-xs overflow-hidden rounded bg-blue-gray-300">
      <div>
        <div className="h-8 text-center text-base font-bold"></div>
        <div className="bg-black text-center text-base font-bold text-blue-900">
          <p className="pb-2">Kumpulkan Jawaban</p>
        </div>
      </div>
      <div
        className="flex flex-col gap-3 p-6
      "
      >
        <p className="text-base font-bold text-gray-800">Detail Nilai</p>
        <p className="text-base font-bold text-red-400">
          Total Nilai Kamu: {nilai ? nilai : 0}%
        </p>
        <p className="text-base font-bold text-gray-800">
          Total jawaban benar: {total_benar ? total_benar : 0}
        </p>
        <p className="text-base font-bold text-gray-800">
          Kategori Penilaian: {kategori ? kategori : ""}
        </p>
        <div>
          {nilai === 100 ? (
            <div></div>
          ) : (
            <p className="text-base font-bold text-gray-800">
              Komentar: Kamu sepertinya mengalami kesulitan dalam mengerjakan
              pertanyaan di dalam kategori <span className="capitalize text-red-400">{kategori}</span>, jika ada yang ingin ditanya silahkan diskusikan dengan Guru mu, Oke!
            </p>
          )}
          <button
            className="w-fit bg-red-500 py-2 px-4 hover:bg-blue-500 hover:text-white"
            onClick={() => hasilParent()}
          >
            {nilai < 100 ? "Kembali" : "Lanjut"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TugasGagal;
