import * as React from "react";
import { useState, useEffect } from "react";
import { getMethod } from "@/service/auth";
import { Card, CardBody } from "@material-tailwind/react";
import Chart from "chart.js/auto";
import { CategoryScale, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { filterNameKategori, loop } from "@/helpers/filterkategori";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(CategoryScale, ArcElement, Tooltip, Legend, ChartDataLabels);

export function KelompokGrafik() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getMethod.GetNilais().then((res) => {
      setChartData(res.data.data);
    });
  }, []);

  const data = loop(filterNameKategori(chartData));

  const dataPie = {
    labels: ["C1", "C2", "C3", "C4", "C5", "C6"],
    datasets: [
      {
        label: "Grafik Total Nilai",
        data: data.map((data) => data),
        backgroundColor: ["#8AFEFD", "yellow", "pink", "#FF4A4A", "#04FF17", "#C7FC00"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const dataBar = {
    labels: ["C1", "C2", "C3", "C4", "C5", "C6"],
    datasets: [
      {
        label: "Grafik Total Nilai",
        data: data.map((data) => data),
        backgroundColor:["#8AFEFD", "yellow", "pink", "#FF4A4A", "#04FF17", "#C7FC00"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="py-5">
      <Card className="">
        <CardBody className="">
          <div className="flex h-auto w-full flex-row flex-wrap justify-evenly">
            <div className="border-2 border-gray-400 p-6 rounded-lg">
              <Bar
                data={dataBar}
                height={300}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Nilai Dari C1 sampai C6",
                    },
                  },
                }}
              />
            </div>
            <div className="border-2 border-gray-400 p-6 rounded-lg">
              <Pie
                data={dataPie}
                options={{
                  plugins: {
                    datalabels: {
                      formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map((data) => {
                          sum += data;
                        });
                        let percentage = ((value * 100) / sum).toFixed(2) + "%";
                        return percentage;
                      },
                      color: "#000",
                    },
                    title: {
                      display: true,
                      text: "Nilai Dari C1 sampai C6",
                    },
                  },
                }}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default KelompokGrafik;
