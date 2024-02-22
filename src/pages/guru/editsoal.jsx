import React, { useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import { useNavigate, Link } from "react-router-dom";

export function EditSoal() {
  const nav = useNavigate();
  const [temp, setTemp] = React.useState("");
  useEffect(() => {
    nav(`/guru/Edit-Soal${temp ? "/" + temp : ""}`);
  }, [temp]);

  return (
    <div className="mx-auto center rounded-lg border-2 border-gray-700 p-1">
      <div className="flex flex-col gap-4">
        <p className="text-blue-300">Select Kategori</p>
        <Select
          size="lg"
          label="Pilih Kategori"
          color="blue"
          onChange={(e) => setTemp(e)}
        >
          <Option value="c1">C1</Option>
          <Option value="c2">C2</Option>
          <Option value="c3">C3</Option>
          <Option value="c4">C4</Option>
          <Option value="c5">C5</Option>
          <Option value="c6">C6</Option>
        </Select>
        { <Link to={"/guru/Edit-Soal"}>kembali</Link>}
      </div>
    </div>
  );
}

export default EditSoal;
