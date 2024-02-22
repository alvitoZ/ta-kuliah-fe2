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
import axios from "axios";
import { postMethod } from "@/service/auth";

export function RegisterSiswa() {
  const [data, setData] = useState({
    fullname: "",
    password: "",
    email: "",
    gender: "0",
    role: "siswa",
    image: "",
  });
  const nav = useNavigate();
  const handleRegister = (data) => {
    postMethod.Register(data).then((res) => {
      nav("/auth/sign-in");
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-60 -translate-x-2/4">
        <Typography variant="small" className="py-4 text-center font-bold">
          Register Siswa
        </Typography>
        <CardBody className="mb-4 flex flex-col gap-4">
          {/* <form> */}
          <div className="mb-4 flex flex-col gap-3">
            <Typography
              as="span"
              variant="small"
              className="text-left font-bold"
            >
              NAMA LENGKAP
            </Typography>
            <Input
              onChange={(e) =>
                setData({
                  ...data,
                  fullname: e.target.value,
                })
              }
              color="blue"
              type="text"
              label="Masukkan nama kamu"
              size="lg"
              required
              className={`form-control`}
            />
            <Typography
              as="span"
              variant="small"
              className="text-left font-bold"
            >
              EMAIL
            </Typography>
            <Input
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              color="blue"
              type={"text"}
              label="Masukkan email"
              required
              size="lg"
              className={`form-control `}
            />
            <Typography
              as="span"
              variant="small"
              className="text-left font-bold"
            >
              PASSWORD
            </Typography>
            <Input
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              color="blue"
              type={"password"}
              label="***********"
              required
              size="lg"
              className={`form-control `}
            />
            <Typography
              as="span"
              variant="small"
              className="text-left font-bold"
            >
              KONFIRMASI PASSWORD
            </Typography>
            <Input
              color="blue"
              type={"password"}
              // value={(e) => (e !== data.password ? setError("error") : "")}
              label="***********"
              size="lg"
              className={`form-control `}
            />
            <div className="flex flex-col items-start">
              <Typography
                as="span"
                variant="small"
                className="text-left font-bold"
              >
                Jenis Kelamin :
              </Typography>
              <div className="">
                <div className="flex- flex items-center">
                  <Radio
                    onChange={(e) =>
                      setData({
                        ...data,
                        gender: e.target.value,
                      })
                    }
                    id="rbpriauser"
                    name="color"
                    value={0}
                    color="blue"
                  />
                  <Typography>Laki-Laki</Typography>
                </div>
                <div className="flex flex-row items-center">
                  <Radio
                    id="rbwanitauser"
                    name="color"
                    color="blue"
                    onChange={(e) =>
                      setData({
                        ...data,
                        gender: e.target.value,
                      })
                    }
                    value={1}
                  />
                  <Typography>Perempuan</Typography>
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
          {/* </form> */}
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
  );
}

export default RegisterSiswa;
