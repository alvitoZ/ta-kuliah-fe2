import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography, Input } from "@material-tailwind/react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { updateMethod, getMethod } from "@/service/auth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function EditUser() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    password: "",
    email: "",
    gender: "",
  });
  const [role, setRole] = useState("");

  useEffect(() => {
    getMethod.GetUserById(id).then((res) => {
      setRole(res.data.data.role);
      setData({
        fullname: res.data.data.fullname,
        password: res.data.data.password,
        email: res.data.data.email,
      });
    });
  }, []);

  const edit = (id, data) => {
    updateMethod.EditUser(id, data).then((res) => {
      Swal.fire(`data berhasil di update`);
      Navigate(`/admin/data-${role}`);
    });
  };

  return (
    <CardBody className="mr-8 px-0 pb-2">
      <Card className="flex h-full w-full flex-col gap-8 p-10">
        <div className=" text-xl font-bold">
          <p>Halaman Edit User {role}</p>
        </div>
        <Input
          label="fullname"
          defaultValue={data.fullname}
          onChange={(e) => {
            setData({
              ...data,
              fullname: e.target.value,
            });
          }}
        />
        <Input
          label="password"
          defaultValue={data.password}
          onChange={(e) => {
            setData({
              ...data,
              password: e.target.value,
            });
          }}
        />
        <Input
          label="email"
          defaultValue={data.email}
          onChange={(e) => {
            setData({
              ...data,
              email: e.target.value,
            });
          }}
        />
        <div
          className="w-fit rounded-lg border-2 border-green-200 text-blue-500 hover:cursor-pointer hover:text-green-300"
          onClick={() => edit(id, data)}
        >
          <div className="p-2">
            <BorderColorIcon />
            <span
              className="font-bold text-gray-700 hover:cursor-pointer"
              onClick={() => edit(id, data)}
            >
              edit
            </span>
          </div>
        </div>
      </Card>
    </CardBody>
  );
}

export default EditUser;
