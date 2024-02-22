import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography, Input } from "@material-tailwind/react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { updateMethod, getMethod } from "@/service/auth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function EditNilai() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState({
    nilai: 0,
  });

  useEffect(() => {
    getMethod.GetNilaiById(id).then((res) => {
      setData(res.data.data.nilai);
    });
  }, []);

  // console.log(data);
  const edit = (Parentid, id, data) => {
    updateMethod.EditNilai(Parentid, id, data).then((res) => {
      Swal.fire(`data berhasil di update`);
      Navigate("/guru/Nilai-Siswa");
    });
  };

  return (
    <CardBody className="mr-8 px-0 pb-2">
      <Card className="flex h-full w-full flex-col gap-8 p-10">
        <div className="py-4 pl-5 text-xl font-bold">
          <p>Halaman Edit Nilai</p>
        </div>
        {data.map(({ kategori, nilai, _id }, i) => {
          return (
            <div key={i} className="flex flex-col gap-4">
              <p className="font-semibold">{kategori}</p>
              <Input
                type="number"
                label="nilai"
                defaultValue={nilai}
                onChange={(e) => {
                  setPostData({
                    ...postData,
                    nilai: e.target.value,
                  });
                }}
              />
              <div
                className="w-fit rounded-lg border-2 border-green-200 text-blue-500 hover:cursor-pointer hover:text-green-300"
                onClick={() => edit(id, _id, postData)}
              >
                <button className="p-2">
                  <BorderColorIcon />
                  <span className="font-bold hover:cursor-pointer">
                    Edit Nilai ?
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </Card>
    </CardBody>
  );
}

export default EditNilai;
