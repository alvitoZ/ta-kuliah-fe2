import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { getMethod } from "@/service/auth";

export function NilaiSiswa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMethod.GetNilai().then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <CardBody className="mr-8 px-0 pb-2">
      <Card className="flex h-full w-full flex-col gap-4 overflow-y-auto p-10">
        <div className="text-xl font-bold">
          <p>Daftar nilai berdasarkan kategori</p>
        </div>
        <table className="min-w-full text-left text-sm font-light">
          <thead className="light:border-neutral-500 border-b font-medium">
            <tr>
              {["No", "Nama Siswa", "C1", "C2", "C3", "C4", "C5", "C6"].map(
                (head, i) => (
                  <th key={i} scope="col" className="px-6 py-4">
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {data.map(({ student_name, nilai }, i) => {
              return (
                <tr key={i} className="light:border-neutral-500 border-b">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {i + 1}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {student_name}
                  </td>
                  {nilai.map(({ nilai }, index) => {
                    return (
                      <td
                        key={index}
                        className="whitespace-nowrap px-6 py-4 font-medium"
                      >
                        {nilai}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </CardBody>
  );
}

export default NilaiSiswa;
