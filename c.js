const c = [
  {
    nomor: "1",
    soal: "",
  },
  {
    nomor: "2",
    soal: "",
  },
  {
    nomor: "3",
    soal: "",
  },
  {
    nomor: "4",
    soal: "",
  },
];
const c2 = [
  {
    nomor: "1",
    soal: "ktiannnnnn",
    jawaban: [
      { soal: "1", status: "1" },
      { soal: "2", status: "2" },
      { soal: "3", status: "3" },
      { soal: "4", status: "4" },
    ],
  },
  //   {
  //     nomor: "2",
  //     soal: "kitann",
  //     jawaban: [
  //       { soal: "1", status: "1" },
  //       { soal: "2", status: "2" },
  //       { soal: "3", status: "3" },
  //       { soal: "4", status: "4" },
  //     ],
  //   },
];
const c3 = [
  {
    nomor: "1",
    soal: "ktiannnnnn",
    jawaban: [{ soal: "1", status: "1" }],
  },
  {
    nomor: "2",
    soal: "ktiannnnnn",
    jawaban: [{ soal: "1", status: "1" }],
  },
];

// const removeFieldsJawaban = (parentIndex, childIndex) => {
//   let data = [...c];
//   //   data[childIndex];
//   let jawaban = data[parentIndex].jawaban[childIndex];
//   data.splice(jawaban, 1);
//   // setSoal(data);
//   return { data, jawaban, parentIndex, childIndex };
// };

const removeFieldsSoal2 = (index) => {
  let data = [...c];
  data.splice(index, 1);
  return data;
};
// console.log(removeFieldsSoal2(2));

const c4 = [
  {
    nomor: 0,
    soal: "",
    jawaban: [
      { soal: "kjkj", status: false },
      { soal: "", status: false },
    ],
  },
  {
    nomor: 0,
    soal: "",
    jawaban: [
      { soal: "", status: false },
      { soal: "", status: false },
      { soal: "", status: false },
    ],
  },
  {
    nomor: 0,
    soal: "",
    jawaban: [{ soal: "", status: false }],
  },
];

const removeFieldsJawaban = (parentIndex, childIndex) => {
  let data = [...c4];
  //   data[childIndex];
  let jawaban = data[parentIndex].jawaban[childIndex];
  data[parentIndex].jawaban.splice(childIndex, 1);
  // setSoal(data);
  return { data: c4[0].jawaban, jawaban, parentIndex, childIndex };
};
// console.log(removeFieldsJawaban(0, 1));

const addFieldsJawaban = (parentIndex) => {
  let data = [...c3];

  let object = {
    soal: "",
    status: "",
  };

  data[parentIndex].jawaban.push(object);
  let jawaban = data[parentIndex].jawaban;
  let jawaban2 = data[1].jawaban;

  return {
    data,
    jawaban,
    jawaban2,
  };
};

// console.log(addFieldsJawaban(0));

let alphabet = "abcdefghijklmnopqrstuvwxyz";
// alphabet = [...alphabet[0]];
// console.log(alphabet[0]);

const coba = [
  {
    coba: "meong",
    kitan: "kitan",
  },
];

// console.log(coba[0].kitan);s

const filterNameKategori = (params) => {
  const arr = [];
  for (let data of params) {
    for (let entry of data.nilai) {
      if (entry.nilai > 0) {
        // arr.push(data.student_name);
        arr.push({
          name: data.student_name,
          kategori: entry.kategori,
          nilai: entry.nilai,
        });
      }
    }
  }
  return arr;
};

const filtered = (arr) => {
  const ids = arr.map(({ name }) => name);
  const filtered = arr.filter(
    ({ name }, index) => !ids.includes(name, index + 1)
  );
  return filtered;
};

const loop2 = (array) => {
  const categories = new Set(array.map((data) => data.kategori)); // membuat koleksi kategori yang unik
  const result = [];
  for (let category of categories) {
    result.push({
      kategori: category,
      total: filtered(array.filter((data) => data.kategori === category))
        .length,
    });
  }
  return result.sort((a, b) => a.kategori.localeCompare(b.kategori));
};

console.log(loop2(filterNameKategori(test)));

// const loop = (params) => {
//   const c1 = [];
//   const c2 = [];
//   const c3 = [];
//   const c4 = [];
//   const c5 = [];
//   const c6 = [];
//   for (let data of params) {
//     if (data.kategori === "c1") {
//       c1.push(data);
//     } else if (data.kategori === "c2") {
//       c2.push(data);
//     } else if (data.kategori === "c3") {
//       c3.push(data);
//     } else if (data.kategori === "c4") {
//       c4.push(data);
//     } else if (data.kategori === "c5") {
//       c5.push(data);
//     } else {
//       c6.push(data);
//     }
//   }
//   return {
//     c1: filtered(c1).length,
//     c2: filtered(c2).length,
//     c3: filtered(c3).length,
//     c4: filtered(c4).length,
//     c5: filtered(c5).length,
//     c6: filtered(c6).length,
//   };
// };
