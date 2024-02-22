import { fromThis } from "./example.js";

export const filterJawaban = (params) => {
  const benar = [];
  const salah = [];
  for (let arr of params.jawaban) {
    if (arr.jawaban.status === true) {
      benar.push(arr);
    } else {
      salah.push(arr);
    }
  }
  return {
    benar,
    salah,
  };
};

export const jumlah = (data) => {
  const result =
    (10 / (data.benar.length + data.salah.length)) * data.benar.length;
  return {
    kategori:
      data.benar.length > 0 ? data.benar[0].kategori : data.salah[0].kategori,
    nilai: Number(result.toFixed(2)) * 10,
  };
};

export const resultArr = (array) => {
  const arr = [];
  for (let index = 0; index < array.length; index++) {
    arr.push(jumlah(filterJawaban(array[index])));
  }
  return arr;
};

// console.log(filterJawaban(test[0]));
// console.log(jumlah(filterJawaban(test[0])));
// console.log(resultArr(fromThis));
