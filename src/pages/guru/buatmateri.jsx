import { Input, Card, CardBody } from "@material-tailwind/react";

import React, { useState } from "react";
import { getMethod, postMethod } from "@/service/auth";
import Swal from "sweetalert2";
import Rte from "@/widgets/layout/Rte";

export function BuatMateri() {
  const [data, setData] = React.useState({
    title: ``,
    body: ``,
  });
  const sendData = (data) => {
    postMethod.PostMateri(data).then((res) => {
      Swal.fire(res.data.msg);
      setData({
        title: ``,
        body: ``,
      });
    });
  };

   const [images, setImages] = React.useState([]);
   React.useEffect(() => {
     getMethod.GetImages().then((res) => {
      setImages(res.data.data);
     });
   }, []);

   const [parent, setParent] = useState(``);
  const handleFormSoalChange = (e, _) => {
    setData({
      ...data,
      body: e,
    });
  };

  return (
    <Card className="h-full w-full overflow-y-auto">
      <CardBody className="flex flex-col gap-8 px-0 py-10">
        <div className="border-2 border-gray-700 rounded-xl py-6">
          <div className="px-8">
            <Input
              className=""
              label="title"
              onChange={(e) =>
                setData({
                  ...data,
                  title: e.target.value,
                })
              }
            />
           
            <div className="py-6">
              <Rte
                childData={data.body}
                childFunc={(e) => handleFormSoalChange(e, 0)}
              />
            </div>
          </div>
        </div>
        <button
          className="border-2 border-black bg-blue-600 font-bold text-white hover:bg-green-500"
          onClick={() => sendData(data)}
        >
          Upload Data
        </button>
      </CardBody>
    </Card>
  );
}

export default BuatMateri;
