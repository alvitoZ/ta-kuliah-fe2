import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { getMethod } from "@/service/auth";
import { useNavigate } from "react-router-dom";
import Search from "@/widgets/layout/Search";
import { useMaterialTailwindController, setOpenAccordion } from "@/context";

export function NilaiKelompokSiswa() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getMethod.GetNilais().then((res) => {
      setData(res.data.data);
    });
  }, []);

  const [controller, dispatch] = useMaterialTailwindController();

  return (
    <CardBody className="mr-8 flex flex-col gap-4 px-0 pb-2">
      <Search />
      <Card className="flex h-full w-full flex-col items-start justify-start overflow-y-auto px-8">
        <div className="py-4 text-xl font-bold">
          <p>Daftar nilai berdasarkan kategori</p>
        </div>

        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="light:border-neutral-500 border-b font-medium">
                    <tr>
                      {["No", "Aksi", "C1", "C2", "C3", "C4", "C5", "C6"].map(
                        (head, i) => {
                          return (
                            <th key={i} scope="col" className="px-6 py-4">
                              {head}
                            </th>
                          );
                        }
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(({ student_name, nilai }, i) => {
                      return (
                        <tr
                          key={i}
                          className="light:border-neutral-500 border-b"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {i + 1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            <div
                              className="w-fit rounded-lg border-2 border-black bg-green-300 text-white"
                              onClick={() => {
                                setOpenAccordion(dispatch, i);
                                Navigate("/guru/Nilai-Grafik-Siswa", {
                                  replace: true,
                                });
                              }}
                            >
                              <button className="p-1 hover:bg-blue-300">
                                Show Grafik
                              </button>
                            </div>
                          </td>
                          {nilai.map((_, index) => {
                            return (
                              <td
                                key={index}
                                className="whitespace-nowrap px-6 py-4 font-medium"
                              >
                                {student_name}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </CardBody>
  );
}

export default NilaiKelompokSiswa;
