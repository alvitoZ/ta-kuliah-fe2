export const setMessage = (
  icon = "warning",
  title = "Peringatan",
  text = "Terjadi kesalahan tidak dikenal"
) => {
  Swal.fire({ icon, title, html: text });
};
export const genResponseMessage = (res, typeError) => {
  console.log("res, typeError", { res, typeError });

  let msg = "";
  if (typeError === "FAILED") {
    msg =
      typeof res.MESSAGE != "undefined"
        ? res.MESSAGE
        : "Terjadi kesalahan tidak di kenal!";
    // jika msg terdapat syntax atau error maka tampilkan pesan kesalah di bawah ini
    if (msg.includes("syntax") || msg.includes("error:")) {
      msg = "Terjadi kesalahan tidak di kenal!";
    } else {
      msg = res.MESSAGE;
    }
  } else {
    msg = typeof res.MESSAGE != "undefined" ? res.MESSAGE : "Berhasil";
  }
  return msg; //tampilkan msg
};
export const genResponseErrorMessage = (res, typeError) => {
  console.log("error, typeError", { res, typeError });
  let msg = "";
  if (typeError === "undefined") {
    msg =
      typeof res.message != "undefined" ? res.message : "Data Gagal Tersimpan!";
    // jika msg terdapat syntax atau error maka tampilkan pesan kesalah di bawah ini
    if (msg.includes("syntax") || msg.includes("error:")) {
      msg = "Terjadi kesalahan tidak di kenal!";
    } else {
      msg = res.message;
    }
  } else {
    msg = typeof res.message != "undefined" ? res.message : "Berhasil";
  }
  return msg; //tampilkan msg
};
export const cetakLog = (log, tipe) => {
  // akan melakukan console.log pada saat mode development, maka ketika mode production maka tidak akan mencetak console.log
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    if (tipe === "log") {
      console.log(log);
    } else {
      console.error(log);
    }
  }
};
