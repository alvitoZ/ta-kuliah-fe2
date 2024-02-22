import { BorderClearOutlined, BorderColor } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
export const ListRegister = () => {
  return (
    <div className="ml-6">
       <p              as="span"
              variant="small"
              className="my-2 text-center font-bold"
            >
              atau
      </p>
      <ul className="list-disc">
        <li className="font-bold text-green-600">
          <Link to={"/auth/register/siswa"}>Daftar Untuk Siswa</Link>
        </li>
        <li className="font-bold text-yellow-700">
          <Link to={"/auth/register/guru"}>Daftar Untuk Guru</Link>
        </li>
        <li className="font-bold text-blue-500">
          <Link to={"/auth/register/admin"}>Daftar Untuk Admin</Link>
        </li> 
      </ul>
    </div>
  );
};
