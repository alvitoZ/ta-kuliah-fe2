import * as React from "react";
import { useState, useEffect } from "react";
import { getMethod } from "@/service/auth";
import { Card, CardBody } from "@material-tailwind/react";
import { AccordionChild } from "@/widgets/layout";
import { useMaterialTailwindController } from "@/context";

export function NilaiGrafik() {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    getMethod.GetNilais().then((res) => {
      setChartData(res.data.data);
    });
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [controller, dispatch] = useMaterialTailwindController();
  const { openAccordion } = controller;
  const [expanded, setExpanded] = useState(openAccordion);

  return (
    <div className="py-5">
      <Card className="bg-gray-500">
        <CardBody className="">
          {chartData.map(({ nilai, student_name }, index) => {
            return (
              <AccordionChild
                expanded={expanded}
                handleChange={handleChange}
                index={index}
                sesi={`${index + 1} ${student_name}`}
                nilai={nilai}
                key={index}
              />
            );
          })}
        </CardBody>
      </Card>
    </div>
  );
}

export default NilaiGrafik;
