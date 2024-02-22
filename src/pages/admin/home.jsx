import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getMethod } from "@/service/auth";
import { Link } from "react-router-dom";

export const HomeAdmin = () => {
  const [fullname, setFullname] = React.useState("");
  React.useEffect(() => {
    getMethod.GetUser().then((res) => {
      setFullname(res.data.data.fullname);
    });
  }, []);
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  React.useEffect(() => {
    getMethod.GetUsers("guru").then((res) => {
      setData(res.data.data);
    });
    getMethod.GetUsers("siswa").then((res) => {
      setData2(res.data.data);
    });
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <Card className="">
        <CardBody className="flex flex-row gap-4">
          <SearchIcon />
          <div>mencari sesuatu....</div>
        </CardBody>
      </Card>
      <Card className="">
        <p className="p-6 text-2xl font-extrabold text-blue-500">
          Selamat datang, <span className="text-blue-700">{fullname}</span>
        </p>
        <CardBody className="p-8">
          <Card className="">
            <CardBody className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="text-2xl font-extrabold text-blue-500">
                  Jumlah Guru : {data.length}
                </p>

                <Link to={"/admin/data-guru"}>
                  <p className="w-fit rounded-md border-2 border-light-green-600 p-2 font-bold text-light-green-600 hover:border-red-500 hover:text-red-500">
                    Lihat Data Guru
                  </p>
                </Link>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-extrabold text-blue-500">
                  Jumlah Siswa : {data2.length}
                </p>
                <Link to={"/admin/data-siswa"}>
                  <p className="w-fit rounded-md border-2 border-light-green-600 p-2 font-bold text-light-green-600 hover:border-red-500 hover:text-red-500">
                    Lihat Data Siswa
                  </p>
                </Link>
              </div>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomeAdmin;
