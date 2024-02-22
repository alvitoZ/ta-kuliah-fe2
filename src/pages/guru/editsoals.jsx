import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { deleteMethod, getMethod, updateMethod } from "@/service/auth";
import Swal from "sweetalert2";
import Rte from "@/widgets/layout/Rte";
import { useParams, Link, useNavigate } from "react-router-dom";

export function EditSoals() {
  const [soal, setSoal] = useState({
    soal: "",
  });
  const handleFormSoalChange = (event) => {
    setSoal({
      soal: event,
    });
    // console.log(data);
  };

  const sendData = (category, id, data, nomor) => {
    // console.log({ category, id, data });
    Swal.fire({
      title: `Update Soal nomor ${nomor} ini?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Update!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `data berhasil diupdate`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          updateMethod.EditSoal(category, id, data).then((res) => {
            window.location.reload();
          });
        });
      }
    });
  };

  const deleteData = (category, id, nomor) => {
    Swal.fire({
      title: `Hapus Soal nomor ${nomor} ini?`,
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `data berhasil diHapus`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          console.log(category, id);
          deleteMethod.DeleteSoalById(category, id).then((res) => {
            window.location.reload();
          });
        });
      }
    });
  };

  const { category } = useParams();
  //default value
  const [defaultValue, setDefaultValue] = useState([]);
  useEffect(() => {
    getMethod.SoalList(category).then((res) => {
      setDefaultValue(res.data.data);
    });
  }, []);

  return (
    <div className="py-10">
      <div className="grid gap-4 px-60">
        <Link to={"/guru/Edit-Soal"}>
          <button className="w-fit rounded-lg bg-blue-600 p-2 text-white hover:bg-red-600">
            ganti kategori ?
          </button>
        </Link>
        {defaultValue.map((parent, parentIndex) => {
          return (
            <div key={parentIndex} className="flex flex-col gap-10">
              <div className="">
                <Typography
                  variant="h6"
                  className="flex items-center text-blue-900"
                >
                  Soal: {parentIndex + 1}
                </Typography>
                <div className="py-6">
                  <Rte
                    childData={parent.soal}
                    childFunc={(e) => handleFormSoalChange(e)}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-10">
                <div
                  onClick={() =>
                    deleteData(category, parent._id, parentIndex + 1)
                  }
                  className="flex items-center justify-center rounded-lg"
                >
                  <button className="w-fit bg-red-500 p-2 text-white hover:bg-blue-600">
                    Hapus Soal
                  </button>
                </div>
                <div
                  onClick={() =>
                    sendData(category, parent._id, soal, parentIndex + 1)
                  }
                  className="flex items-center justify-center rounded-lg"
                >
                  <button className="w-fit bg-green-500 p-2 text-white hover:bg-blue-600">
                    Edit Soal
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EditSoals;
