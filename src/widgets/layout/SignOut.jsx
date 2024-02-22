import { IconButton, Tooltip } from "@material-tailwind/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function SignOut() {
  const navigate = useNavigate();
  return (
    <Tooltip content="Sign-Out">
      <IconButton
        variant="text"
        color="blue-gray"
        onClick={() => {
          Swal.fire({
            title: "Yakin ingin keluar?",
            text: "Anda akan keluar dari dashboard",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, keluar!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                "Berhasil Keluar!",
                "Silahkan masuk kembali untuk melihat dashboard"
              ).then((_) => {
                localStorage.removeItem("token");
                navigate("/auth/home", { replace: true });
              });
            }
          });
        }}
      >
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-blue-gray-500" />
      </IconButton>
    </Tooltip>
  );
}

export default SignOut;
