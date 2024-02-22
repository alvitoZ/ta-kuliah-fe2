import { getMethod } from "@/service/auth";
import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

export function Materi() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getMethod.GetMateri().then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <Card className="h-full w-full overflow-y-auto break-words p-6">
      <CardBody className="mr-8 px-0 pb-2">
        {data.map(({ title, body }, i) => {
          return (
            <div key={i}>
              <div className=" text-4xl font-bold text-blue-900">
                <h1 className="p-4">{title}</h1>
              </div>
              <div dangerouslySetInnerHTML={{ __html: body }}></div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}

export default Materi;
