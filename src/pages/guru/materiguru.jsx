import { deleteMethod, updateMethod, getMethod } from "@/service/auth";
import Rte from "@/widgets/layout/Rte";
import { Card, CardBody, Input } from "@material-tailwind/react";
import React from "react";
import Swal from "sweetalert2";

export function MateriGuru() {
  const [data, setData] = React.useState([]);
  const [postData, setPostData] = React.useState({
    title: "",
    body: "",
  });

  const handleFormSoalChange = (event) => {
    setPostData({
      ...postData,
      body: event,
    });
  };

  React.useEffect(() => {
    getMethod.GetMateri().then((res) => {
      setData(res.data.data);
    });
  }, []);

  const editMateri = (id, data) => {
    Swal.fire({
      title: `update materi ini?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, update!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `materi berhasil diupdate`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          updateMethod.UpdateMateri(id, data).then((res) => {
            window.location.reload();
          });
        });
      }
    });
  };

  const deleteMateri = (id, data) => {
    Swal.fire({
      title: `hapus materi ini?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `materi berhasil dihapus`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          deleteMethod.DeleteMateriById(id).then((res) => {
            window.location.reload();
          });
        });
      }
    });
  };
  return (
    <Card className="h-full w-full overflow-y-auto break-words p-6">
      <CardBody className="mr-8 px-0 pb-2">
        {data.map(({ title, body, _id }, i) => {
          return (
            <div key={i}>
              <div className=" text-4xl font-bold text-blue-900">
                <h1 className="p-4">{title}</h1>
              </div>
              <Input
                label="title"
                defaultValue={title}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    title: e.target.value,
                  })
                }
              />
              <Rte
                childData={body}
                childFunc={(e) => handleFormSoalChange(e)}
              />
              <div className="flex flex-row items-center justify-center gap-10 rounded-md border-2 border-red-600 p-4 hover:border-green-500">
                <div
                  onClick={() => deleteMateri(_id)}
                  className="flex items-center justify-center rounded-lg"
                >
                  <button className="w-fit bg-red-500 p-2 text-white hover:bg-blue-600">
                    Hapus Materi
                  </button>
                </div>
                <div
                  onClick={() => editMateri(_id, postData)}
                  className="flex items-center justify-center rounded-lg"
                >
                  <button className="w-fit bg-green-500 p-2 text-white hover:bg-blue-600">
                    Edit Materi
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}

export default MateriGuru;
