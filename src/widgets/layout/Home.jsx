import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Card, Typography, Button, IconButton } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { BorderAllRounded } from "@mui/icons-material";

const customText = (e, i) => {
  return (
    <p key={i} className="p-2 text-black">
      {e}
    </p>
  );
};

export function Home() {
  const split = `1. Masukkan Nama Lengkap -2. Masukkan Email -3. Masukkan Password -4. Konfirmasi Password Sebelumnya -5. Pilih Role Optional`;
  const nav = useNavigate();
  useEffect(() => {
    nav("/auth/home", { replace: true });
  }, []);
  return (
    <div className=" container mx-auto">
    
      <Card className="w-full max-w-full p-4 text-light-blue-400">
          <img className="center mx-auto" src="../../public/img/container.jpg" width={"80%"} height={"auto"} alt="img" srcset=""></img>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Register siswa
        </Typography>
        {split
          .split("-")
          .slice(0, 4)
          .map((e, i) => {
            return customText(e, i);
          })}
        <p className="p-2 text-black">5. Pilih Jenis Kelamin</p>
        <Link to="/auth/register/siswa">
          <Button
            variant="text"
            color="black"
            className="flex items-center gap-1 px-4"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            Register Siswa
          </Button>
        </Link>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Register guru
        </Typography>
        {split.split("-").map((e, i) => {
          return customText(e, i);
        })}
        <Link to="/auth/register/guru">
          <Button
            variant="text"
            color="blue-gray"
            className=" flex items-center gap-1 px-4"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            Register Guru
          </Button>
        </Link>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Register admin
        </Typography>
        {split.split("-").map((e, i) => {
          return customText(e, i);
        })}
        <Link to="/auth/register/admin">
          <Button
            variant="text"
            color="blue-gray"
            className=" flex items-center gap-1 px-4"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            Register Admin
          </Button>
        </Link>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Login admin/siswa/guru
        </Typography>
        {split
          .split("-")
          .slice(0, 3)
          .map((e, i) => {
            return customText(e, i);
          })}
        <Link to="/auth/sign-in">
          <Button
            variant="text"
            color="blue-gray"
            className=" flex items-center gap-1 px-4"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            Login
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default Home;
