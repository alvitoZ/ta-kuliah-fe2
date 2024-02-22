import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Card, CardBody } from "@material-tailwind/react";

const Search = () => {
  return (
    <Card className="">
      <CardBody className="flex flex-row gap-4">
        <SearchIcon />
        <div>mencari sesuatu....</div>
      </CardBody>
    </Card>
  );
};

export default Search;
