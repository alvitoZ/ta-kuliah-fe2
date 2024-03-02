import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { deleteMethod, getMethod, postMethod } from "@/service/auth";
import Swal from "sweetalert2";
import React from "react";
import "./DialogPostImage.css";

export function DialogPostImage({ child }) {
  //
  const [refresh, setRefresh] = React.useState(false);

  const [data, setData] = React.useState({
    alt: "",
    image: null,
  });
  const [images, setImages] = React.useState([]);
  const [imgData, setImgData] = React.useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setData({
        alt: e.target.files[0].name,
        image: e.target.files[0],
      });
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  //FOR DIALOG
  const [opendialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => setOpenDialog(!opendialog);
  //END FOR DIALOG

  const postGambar = (data) => {
    if (data.image) {
      postMethod
        .PostImage(data)
        .then((res) => {
          Swal.fire({
            title: "Berhasil",
            icon: "success",
          });
          setRefresh((v) => !v);
          handleOpenDialog();
        })
        .catch((err) => {
          Swal.fire({
            title: "gagal",
            icon: "error",
          });
        });
    }
    Swal.fire({
      title: "gagal tidak ada gambar yang diplih",
      icon: "error",
    });
  };

  const hapusGambar = (id) => {
    Swal.fire({
      title: "Hapus Gambar ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Gambar berhasil dihapus`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          deleteMethod.DeleteImageById(id).then((res) => {
            setRefresh((v) => !v);
          });
        });
      }
    });
  };

  React.useEffect(() => {
    getMethod.GetImages().then((res) => {
      setImages(res.data.data);
    });
  }, [refresh]);

  //
  return (
    <>
      <div className="w-fit cursor-pointer rounded-lg bg-green-500 font-bold text-white  hover:opacity-50">
        <p onClick={() => handleOpenDialog()} className="p-2">
          Open Image
        </p>
      </div>
      <Dialog
        open={opendialog}
        // handler={handleOpenDialog}
        fullWidth
        className="h-full w-80 overflow-auto"
      >
        <DialogHeader>Tambah Gambar Untuk Soal/Jawaban Baru</DialogHeader>
        <div>
          <DialogBody divider className="flex h-full w-full flex-wrap p-4">
            <div className="flex h-40 w-40 flex-col items-center rounded-md border-2 border-gray-500">
              <img
                className="max-w-32 max-h-32"
                src={imgData}
                alt="your image"
              />
              <input
                // onChange={(e) => console.log(e.target.files[0].name)}
                onChange={(e) => onChangePicture(e)}
                className="block w-32 cursor-pointer rounded-lg border border-gray-600 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                type="file"
              />
            </div>
            {images.map(({ image, alt, _id }, i) => {
              if (!image.endsWith("jpg") && !image.endsWith("png") && !image.endsWith("jpeg")) {
                return;
              }
              return (
                <div
                  key={i}
                  onClick={() =>
                    child(`${import.meta.env.VITE_BASEURL}/images/` + image)
                  }
                  className="relative flex h-40 w-40 cursor-pointer flex-col items-center rounded-md border-2 bg-gray-700 active:opacity-70"
                >
                  <img
                    className="max-w-32 max-h-32"
                    src={`${import.meta.env.VITE_BASEURL}/images/${image}`}
                    alt={alt}
                  />
                  <div className="absolute top-20 cursor-pointer rounded-md bg-red-500 hover:bg-green-600">
                    <p
                      className="p-1 text-xs text-white"
                      onClick={() => hapusGambar(_id)}
                    >
                      hapus?
                    </p>
                  </div>
                </div>
              );
            })}
          </DialogBody>
          <DialogFooter className="flex w-full flex-row gap-4">
            <Button
              variant="gradient"
              color="red"
              onClick={() => postGambar(data)}
            >
              tambah gambar
            </Button>
            <Button variant="outlined" color="red" onClick={handleOpenDialog}>
              batal
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}

export default DialogPostImage;
