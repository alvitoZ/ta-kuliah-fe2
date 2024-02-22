import { Card, CardBody, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { updateMethod, getMethod, deleteMethod } from "@/service/auth";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const Pengaturan = () => {
  //
  const [postData, setPostData] = useState({
    fullname: "",
    password: "",
    image: null,
  });
  const [refresh, setRefresh] = useState(false);
  //

  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setPostData({
        ...postData,
        image: e.target.files[0],
      });
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const changeEmail = (id, data) => {
    Swal.fire({
      title: `update dengan email : ${email.email}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, update!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `email berhasil diupdate`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          updateMethod.UpdateEmail(id, data).then((res) => {
            setRefresh((v) => !v);
          });
        });
      }
    });
  };

  const [data, setData] = useState({
    _id: "",
    fullname: "",
    password: "",
    email: "",
    gender: "",
    role: "",
    image: "",
  });

  const [email, setEmail] = useState({
    email: "",
  });

  useEffect(() => {
    getMethod.GetUser().then((res) => {
      setPostData({
        ...postData,
        fullname: res.data.data.fullname,
        password: res.data.data.password,
      });
      setData(res.data.data);
    });
  }, [refresh]);

  const editProfil = (id, data) => {
    Swal.fire({
      title: `update dengan nama : ${postData.fullname} dan password: ${postData.password}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, update!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `data berhasil diupdate`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          updateMethod.EditProfil(id, data).then((res) => {
            setRefresh((v) => !v);
          });
        });
      }
    });
  };

  const deleteImage = (data) => {
    Swal.fire({
      title: `hapus gambar ini?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `gambar berhasil dihapus`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          deleteMethod.DeleteImageFile(data.image);
          setRefresh((v) => !v);
        });
      }
    });
  };
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <Card className="">
        <CardBody className="flex flex-row gap-4">
          <SearchIcon />
          <div>mencari sesuatu....</div>
        </CardBody>
      </Card>
      <div className="w-fit rounded-md bg-red-600">
        <div className="px-2 py-1 text-white">
          <PersonIcon />
          <span>Edit Informasi Akun</span>
        </div>
      </div>
      <Card className="">
        <CardBody className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-8">
            <p className="font-bold text-gray-600">Informasi Profil</p>
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <img
                className="h-28 w-28 object-cover hover:scale-150"
                src={
                  imgData
                    ? imgData
                    : `${import.meta.env.VITE_BASEURL}/images/` + data.image
                }
                alt="your image"
              />
              <div className="flex w-52 flex-col items-center rounded-md bg-red-600 md:w-full ">
                <p className="pt-2 text-white">Upload Foto</p>
                <input
                  type="file"
                  className="p-2 text-white"
                  onChange={onChangePicture}
                />
              </div>
              <div className="flex h-fit cursor-pointer items-center rounded-md bg-gray-600 text-white hover:bg-green-500 ">
                <button
                  className="py-1 px-2"
                  onClick={() => deleteImage(data.image)}
                >
                  hapus
                </button>
              </div>
            </div>
            <p>Maksimal ukuran file 1 MB</p>
          </div>
        </CardBody>
      </Card>
      <Card className="flex h-full flex-col justify-start gap-4 md:flex-row">
        <CardBody className="flex flex-col flex-wrap gap-4">
          <Typography
            as="span"
            variant="small"
            className=" text-left font-bold"
          >
            NAMA
          </Typography>
          <Input
            color="blue"
            type="text"
            size="lg"
            className={`form-control`}
            defaultValue={data.fullname}
            onChange={(e) =>
              setPostData({
                ...postData,
                fullname: e.target.value,
              })
            }
          />
          <Typography
            as="span"
            variant="small"
            className=" text-left font-bold"
          >
            EMAIL
          </Typography>
          <div className="">
            <Input
              color="blue"
              type="text"
              size="lg"
              className={`form-control`}
              defaultValue={data.email}
            />
            <div className="flex gap-1 py-4">
              <input
                type="text"
                className="border-2 border-gray-700"
                placeholder="Email baru"
                onChange={(e) =>
                  setEmail({
                    email: e.target.value,
                  })
                }
              />
              <button
                className=" bg-blue-gray-300 text-white hover:bg-green-500"
                onClick={() => changeEmail(data._id, email)}
              >
                <p className="p-[4px] px-2 text-sm">Update Email</p>
              </button>
            </div>
          </div>
          <Typography
            as="span"
            variant="small"
            className=" text-left font-bold"
          >
            PASSWORD
          </Typography>
          <Input
            color="blue"
            type="text"
            size="lg"
            className={`form-control`}
            defaultValue={data.password}
            onChange={(e) =>
              setPostData({
                ...postData,
                password: e.target.value,
              })
            }
          />
          <Typography
            as="span"
            variant="small"
            className=" text-left font-bold"
          >
            ROLE
          </Typography>
          <div className="w-fit rounded-md bg-red-600">
            <div className="px-2 py-1 text-white">
              <PersonIcon />
              <span>{data.role}</span>
            </div>
          </div>
        </CardBody>
        <div className="flex w-[30%] flex-col gap-4 p-4">
          <Typography
            as="span"
            variant="small"
            className=" text-left font-bold"
          >
            JENIS KELAMIN
          </Typography>
          <div className="h-4 w-10 rounded-lg bg-green-400"></div>
          <div
            onClick={() => editProfil(data._id, postData)}
            className="flex items-start justify-start rounded-lg"
          >
            <button className="w-fit bg-green-500 p-2 text-white hover:bg-blue-600">
              Edit Profil
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Pengaturan;
