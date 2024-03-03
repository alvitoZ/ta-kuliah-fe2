import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ListRegister } from "@/widgets/layout/ListRegister";
//using api
import { postMethod } from "@/service/auth";
//end api

export function SignIn() {
  const nav = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    password: "",
  });
  const handleLogin = (data) => {
    postMethod
      .Login(data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        nav(`/${res.data.role}/dashboard/`, { replace: true });
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <Typography variant="small" className="py-4 text-center font-bold">
            Web Pembelajaran Diferensiasi
          </Typography>
          <div className="px-7">
            <Typography variant="h5" className="mt-2 text-left font-bold">
              Selamat Datang kembali !
            </Typography>
            <Typography variant="small" className="mt-0 text-left font-bold">
              Ayo masuk dan mulai belajar
            </Typography>
          </div>
          <CardBody className="mb-4 flex flex-col gap-4">
            <form>
              <div className="mb-4 flex flex-col gap-3">
                <Typography
                  as="span"
                  variant="small"
                  className="text-left font-bold"
                >
                  Email
                </Typography>
                <Input
                  color="blue"
                  type="text"
                  label="Masukkan email kamu"
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
                  Password
                </Typography>
                <Input
                  color="blue"
                  type={"password"}
                  label="Masukkan Kata Sandi"
                  size="lg"
                  className={`form-control `}
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                />
                <div className="flex flex-row items-center gap-2">
                  <input type="checkbox" />
                  <Typography
                    as="span"
                    variant="small"
                    className="text-left font-bold"
                  >
                    Ingat Saya
                  </Typography>
                </div>
              </div>
              <Button
                color="blue"
                variant="gradient"
                fullWidth
                onClick={() => handleLogin(data)}
              >
                Login
              </Button>
            </form>
            <Typography
              as="span"
              variant="small"
              className="my-2 text-center font-bold"
            >
              Belum punya akun?
            </Typography>
            <ListRegister />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
