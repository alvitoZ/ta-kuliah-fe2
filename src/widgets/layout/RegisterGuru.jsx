import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Input,
  Radio,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ListRegister } from "@/widgets/layout/ListRegister";
import { postMethod } from "@/service/auth";

export function RegisterGuru() {
  const [data, setData] = useState({
    fullname: "",
    password: "",
    email: "",
    gender: "",
    role: "guru",
    image: "",
  });
  const nav = useNavigate();
  const handleRegister = (data) => {
    postMethod.Register(data).then((res) => {
      nav("/auth/sign-in");
    });
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-60 -translate-x-2/4">
          <Typography variant="small" className="py-4 text-center font-bold">
            Register Guru
          </Typography>
          <CardBody className="mb-4 flex flex-col gap-4">
            <div className="mb-4 flex flex-col gap-3">
              <Typography
                as="span"
                variant="small"
                className="text-left font-bold"
              >
                NAMA LENGKAP
              </Typography>
              <Input
                required
                color="blue"
                type="text"
                label="Masukkan nama kamu"
                size="lg"
                className={`form-control`}
                onChange={(e) =>
                  setData({
                    ...data,
                    fullname: e.target.value,
                  })
                }
              />
              <Typography
                as="span"
                variant="small"
                className="text-left font-bold"
              >
                EMAIL
              </Typography>
              <Input
                
                color="blue"
                type={"text"}
                label="Masukkan email"
                size="lg"
                required
                className={`form-control `}
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
              />
              <Typography
                as="span"
                variant="small"
                className="text-left font-bold"
              >
                PASSWORD
              </Typography>
              <Input
                
                color="blue"
                type={"password"}
                label="**********"
                size="lg"
                required
                className={`form-control `}
                onChange={(e) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
              />
              <Typography
                as="span"
                variant="small"
                className="text-left font-bold"
              >
                KONFIRMASI PASSWORD
              </Typography>
              <Input
                required
                color="blue"
                type={"password"}
                label="**********"
                size="lg"
                className={`form-control `}
              />
              <div className="flex flex-col items-start">
                <Typography
                  as="span"
                  variant="small"
                  className="text-left font-bold"
                >
                  Pilih Role kamu :
                </Typography>
                <div className="">
                  <div className="flex- flex items-center">
                    <Radio required id="rbpriauser" name="color" color="blue" />
                    <Typography>Guru</Typography>
                  </div>
                </div>
              </div>
            </div>
            <Button
              color="blue"
              variant="gradient"
              fullWidth
              onClick={() => handleRegister(data)}
            >
              Daftar
            </Button>
            <Typography
              as="span"
              variant="small"
              className="my-2 text-center font-bold"
            >
              Sudah punya akun?{" "}
              <Link to="/auth/sign-in" className="text-red-600">
                Masuk
              </Link>
            </Typography>
            <ListRegister />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default RegisterGuru;
