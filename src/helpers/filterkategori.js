const chartData = [
  {
    _id: "651a79b1120ff5ea41cd9a95",
    student_name: "kitan",
    session_id: "GrRu8iDH2j-7",
    nilai: [
      {
        kategori: "c1",
        nilai: 0,
        _id: "651a79b1120ff5ea41cd9a96",
      },
      {
        kategori: "c2",
        nilai: 33.3,
        _id: "651a79b1120ff5ea41cd9a97",
      },
      {
        kategori: "c3",
        nilai: 3000,
        _id: "651aaeba6e3fe34a28c173b3",
      },
      {
        kategori: "c4",
        nilai: 0,
        _id: "651a79b1120ff5ea41cd9a99",
      },
      {
        kategori: "c5",
        nilai: 0,
        _id: "651a79b1120ff5ea41cd9a9a",
      },
      {
        kategori: "c6",
        nilai: 0,
        _id: "651a79b1120ff5ea41cd9a9b",
      },
    ],
    __v: 0,
    createdAt: "2023-10-02T08:05:05.818Z",
    updatedAt: "2023-10-02T11:51:22.980Z",
  },
  {
    _id: "651a79c7120ff5ea41cd9b04",
    student_name: "ikuyo",
    session_id: "OUUT3QuuGKYT",
    nilai: [
      {
        kategori: "c1",
        nilai: 25,
        _id: "651a79c7120ff5ea41cd9b05",
      },
      {
        kategori: "c3",
        nilai: 33.3,
        _id: "651a79c7120ff5ea41cd9b07",
      },
    ],
    __v: 0,
    createdAt: "2023-10-02T08:05:27.074Z",
    updatedAt: "2023-10-02T12:38:23.639Z",
  },
  {
    _id: "651e81e7ec9ea0cd0bb36c49",
    student_name: "mengkitan",
    session_id: "I6d660Xyoj82",
    nilai: [
      {
        kategori: "c1",
        nilai: 50,
        _id: "651e81e7ec9ea0cd0bb36c4a",
      },
    ],
    __v: 0,
    createdAt: "2023-10-05T09:29:11.513Z",
    updatedAt: "2023-10-05T09:29:11.513Z",
  },
  {
    _id: "651e8265ec9ea0cd0bb36c93",
    student_name: "kitan",
    session_id: "vG5MyPjLbugB",
    nilai: [
      {
        kategori: "c1",
        nilai: 50,
        _id: "651e8265ec9ea0cd0bb36c94",
      },
    ],
    __v: 0,
    createdAt: "2023-10-05T09:31:17.685Z",
    updatedAt: "2023-10-05T09:31:17.685Z",
  },
  {
    _id: "651e82cfec9ea0cd0bb36cdd",
    student_name: "ikuyo",
    session_id: "Ua4Vg-06MuAF",
    nilai: [
      {
        kategori: "c1",
        nilai: 25,
        _id: "651e82cfec9ea0cd0bb36cde",
      },
    ],
    __v: 0,
    createdAt: "2023-10-05T09:33:03.161Z",
    updatedAt: "2023-10-05T09:33:03.161Z",
  },
  {
    _id: "651e82daec9ea0cd0bb36d15",
    student_name: "ikuyo",
    session_id: "F9maHF1kRtKp",
    nilai: [
      {
        kategori: "c1",
        nilai: 50,
        _id: "651e82daec9ea0cd0bb36d16",
      },
    ],
    __v: 0,
    createdAt: "2023-10-05T09:33:14.031Z",
    updatedAt: "2023-10-05T09:33:14.031Z",
  },
  {
    _id: "651e82e3ec9ea0cd0bb36d4d",
    student_name: "mengkitan",
    session_id: "1TXYRhqcuHoB",
    nilai: [
      {
        kategori: "c1",
        nilai: 75,
        _id: "651e82e3ec9ea0cd0bb36d4e",
      },
    ],
    __v: 0,
    createdAt: "2023-10-05T09:33:23.450Z",
    updatedAt: "2023-10-05T09:33:23.450Z",
  },
  {
    _id: "651e8338ec9ea0cd0bb36e23",
    student_name: "ikuyo",
    session_id: "Dx4m5KCph2pl",
    nilai: [
      {
        kategori: "c1",
        nilai: 100,
        _id: "651e8338ec9ea0cd0bb36e24",
      },
      {
        kategori: "c2",
        nilai: 100,
        _id: "651e8338ec9ea0cd0bb36e25",
      },
      {
        kategori: "c3",
        nilai: 100,
        _id: "651e8338ec9ea0cd0bb36e26",
      },
      {
        kategori: "c4",
        nilai: 100,
        _id: "651e8338ec9ea0cd0bb36e27",
      },
      {
        kategori: "c5",
        nilai: 0,
        _id: "651e8338ec9ea0cd0bb36e28",
      },
      {
        kategori: "c6",
        nilai: 100,
        _id: "651e8338ec9ea0cd0bb36e29",
      },
    ],
    __v: 0,
    createdAt: "2023-10-05T09:34:48.129Z",
    updatedAt: "2023-10-05T09:34:48.129Z",
  },
];

export const filterNameKategori = (params) => {
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

export const loop = (params) => {
  const c1 = [];
  const c2 = [];
  const c3 = [];
  const c4 = [];
  const c5 = [];
  const c6 = [];
  for (let data of params) {
    if (data.kategori === "c1") {
      c1.push(data);
    } else if (data.kategori === "c2") {
      c2.push(data);
    } else if (data.kategori === "c3") {
      c3.push(data);
    } else if (data.kategori === "c4") {
      c4.push(data);
    } else if (data.kategori === "c5") {
      c5.push(data);
    } else {
      c6.push(data);
    }
  }

  return [
    filtered(c1).length,
    filtered(c2).length,
    filtered(c3).length,
    filtered(c4).length,
    filtered(c5).length,
    filtered(c6).length,
  ];

  // return {
  //   c1: filtered(c1).length,
  //   c2: filtered(c2).length,
  //   c3: filtered(c3).length,
  //   c4: filtered(c4).length,
  //   c5: filtered(c5).length,
  //   c6: filtered(c6).length,
  // };
};

export const filtered = (arr) => {
  const ids = arr.map(({ name }) => name);
  const filtered = arr.filter(
    ({ name }, index) => !ids.includes(name, index + 1)
  );
  return filtered;
};

// console.log(loop(filterNameKategori(chartData)));

// export const loop = (array) => {
//   const categories = new Set(array.map((data) => data.kategori)); // membuat koleksi kategori yang unik
//   const result = [];
//   for (let category of categories) {
//     result.push({
//       kategori: category,
//       total: filtered(array.filter((data) => data.kategori === category))
//         .length,
//     });
//   }
//   return result.sort((a, b) => a.kategori.localeCompare(b.kategori));
// };
