import React, { useState, useEffect } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { deleteMethod, getMethod, postMethod } from "@/service/auth";
import Swal from "sweetalert2";
import "./DialogPostImage.css";

function DialogPostImage({ child }) {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState({
    alt: "",
    image: null,
  });
  const [images, setImages] = useState([]);
  const [imgData, setImgData] = useState(null);
  const [opendialog, setOpenDialog] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(!opendialog);
    setShowConfirmation(false); // Close confirmation when opening the dialog
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setData({
        alt: e.target.files[0].name,
        image: e.target.files[0],
      });
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
        setShowConfirmation(true); // Show confirmation when a new image is selected
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const postGambar = () => {
    if (data.image) {
      postMethod.PostImage(data)
        .then((res) => {
          Swal.fire({
            title: "Berhasil",
            icon: "success",
          });
          setRefresh((v) => !v);
          handleOpenDialog();
        })
        .catch(() => {
          Swal.fire({
            title: "gagal",
            icon: "error",
          });
        });
    } else {
      Swal.fire({
        title: "Gagal, tidak ada gambar yang dipilih",
        icon: "error",
      });
    }
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
          title: "Gambar berhasil dihapus",
          icon: "success",
          confirmButtonText: "Tutup",
        }).then(() => {
          deleteMethod.DeleteImageById(id).then(() => {
            setRefresh((v) => !v);
          });
        });
      }
    });
  };

  useEffect(() => {
    getMethod.GetImages().then((res) => {
      setImages(res.data.data);
    });
  }, [refresh]);

  return (
    <>
      <div className="w-fit cursor-pointer rounded-lg bg-green-500 font-bold text-white  hover:opacity-50">
        <p onClick={handleOpenDialog} className="p-2">
          Open Image
        </p>
      </div>
      <Dialog
        open={opendialog}
        fullWidth
        className="h-full w-80 overflow-auto"
      >
        <DialogHeader>Tambah Gambar Untuk Soal/Jawaban Baru</DialogHeader>
        <Button variant="outlined" color="blue" onClick={handleOpenDialog}>
            Batal
          </Button>
          
        <DialogBody divider className="flex h-full w-full flex-wrap p-4">
          <div className="flex h-40 w-40 flex-col items-center rounded-md border-2 border-gray-500">
            {imgData && <img className="max-w-32 max-h-32" src={imgData} alt="your image" />}
            <input
              onChange={onChangePicture}
              className="block w-32 cursor-pointer rounded-lg border border-gray-600 bg-gray-50 text-sm text-gray-900 focus:outline-none light:border-gray-600 light:bg-gray-700 light:text-gray-400 light:placeholder-gray-400"
              type="file"
            />
          </div>
          <small className="mx-auto text-red-600">*Ekstensi file yang diizinkan hanya <b><i>.jpg</i></b> dan <b><i>.jpeg</i></b></small>
          {images.map(({ image, alt, _id }, i) => {
            if (!image.endsWith("jpg") && !image.endsWith("jpeg")) {
              return null;
            }
            return (
              <div
              key={i}
              onClick={() => child(`${import.meta.env.VITE_BASEURL}/images/` + image)}
              className="relative flex h-40 w-40 cursor-pointer flex-col items-center rounded-md border-2 bg-gray-700 active:opacity-70"
            >
              <img
                className="max-w-32 max-h-32"
                src={`${import.meta.env.VITE_BASEURL}/images/${image}`}
                alt={alt}
              />
              <div className="text-white mt-2">{alt}</div> {/* Display file name */}
              <div className="absolute top-20 cursor-pointer rounded-md bg-red-500 hover:bg-green-600">
                <p
                  className="p-1 text-xs text-white"
                  onClick={() => hapusGambar(_id)}
                >
                  Hapus?
                </p>
              </div>
            </div>
            );
          })}
        </DialogBody>
        <DialogFooter className="flex w-full flex-row gap-4">
          {showConfirmation && (
            <Button variant="gradient" color="blue" onClick={postGambar}>
              Upload Gambar
            </Button>
          )}

        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DialogPostImage;



/* kodingan yg lama
import React, { useState, useEffect } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { deleteMethod, postMethod, getMethod } from "@/service/auth";
import Swal from "sweetalert2";
import "./DialogPostImage.css";

function DialogPostImage({ child }) {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState({
    alt: "",
    image: null,
  });
  const [images, setImages] = useState([]);
  const [imgData, setImgData] = useState(null);
  const [opendialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenDialog = () => setOpenDialog(!opendialog);

  const onFileChange = (e) => {
    if (e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setData({
        alt: selectedImage.name,
        image: selectedImage,
      });
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(selectedImage);
    }
  };

  const postGambar = () => {
    const imageData = selectedImage || data;
    if (imageData.image) {
      // Display a confirmation modal before actually posting to the database
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin mengunggah gambar ini?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Unggah!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Call your API to post the image to the database
          postMethod.PostImage(imageData)
            .then((res) => {
              Swal.fire({
                title: "Berhasil",
                icon: "success",
              });
              setRefresh((v) => !v);
              handleOpenDialog();
            })
            .catch(() => {
              Swal.fire({
                title: "gagal",
                icon: "error",
              });
            });
        }
      });
    } else {
      Swal.fire({
        title: "Gagal, tidak ada gambar yang dipilih",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    // Fetch images when the component mounts
    getMethod.GetImages().then((res) => {
      setImages(res.data.data);
    });
  }, [refresh]);

  return (
    <>
      <div className="w-fit cursor-pointer rounded-lg bg-green-500 font-bold text-white  hover:opacity-50">
        <p onClick={handleOpenDialog} className="p-2">
          Open Image
        </p>
      </div>
      <Dialog
        open={opendialog}
        handler={handleOpenDialog}
        fullWidth
        className="h-full w-80 overflow-auto"
      >
        <DialogHeader>Tambah Gambar Untuk Soal/Jawaban Baru</DialogHeader>
        <DialogBody divider className="flex h-full w-full flex-wrap p-4">
          {imgData && (
            <div
              className="flex h-40 w-40 cursor-pointer flex-col items-center rounded-md border-2 bg-gray-700 active:opacity-70"
              onClick={() => postGambar()}
            >
              <img className="max-w-32 max-h-32" src={imgData} alt="your image" />
              <div className="absolute top-20 cursor-pointer rounded-md bg-green-500 hover:bg-green-600">
                <p className="p-1 text-xs text-white">Konfirmasi Unggah</p>
              </div>
            </div>
          )}
          <div className="flex h-40 w-40 flex-col items-center rounded-md border-2 border-gray-500">
            <img className="max-w-32 max-h-32" src={imgData} alt="your image" />
            <input
              onChange={onFileChange}
              className="block w-32 cursor-pointer rounded-lg border border-gray-600 bg-gray-50 text-sm text-gray-900 focus:outline-none light:border-gray-600 light:bg-gray-700 light:text-gray-400 light:placeholder-gray-400"
              type="file"
            />
          </div>
        </DialogBody>
        <DialogFooter className="flex w-full flex-row gap-4">
          <Button variant="outlined" color="blue" onClick={handleOpenDialog}>
            Batal
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DialogPostImage;

*/
