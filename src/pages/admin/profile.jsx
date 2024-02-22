import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
export function Profile() {
  //FOR TABS
  const navigate = useNavigate();
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 mb-6 -mt-16 lg:mx-4">
        <CardBody className="p-4">
          <div>coming soon</div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
