import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getMethod } from "@/service/auth";

export const HomeGuru = () => {
  const [fullname, setFullname] = React.useState("");
  React.useEffect(() => {
    getMethod.GetUser().then((res) => {
      setFullname(res.data.data.fullname);
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
        <CardBody className="flex flex-col gap-4">
          <p className="text-2xl font-extrabold text-light-blue-400">
            Selamat Datang ibu/bapak guru <span className="text-blue-700">{fullname}.</span>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomeGuru;
