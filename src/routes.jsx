import { UserCircleIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Profile,
  HomeAdmin,
  DataSiswa,
  DataGuru,
  Pengaturan,
} from "@/pages/admin";
import {
  TugasSiswa,
  HomeSiswa,
  NilaiSiswa,
  Materi,
  PengaturanSiswa,
} from "./pages/siswa/";
import {
  HomeGuru,
  NilaiSiswaGuru,
  BuatSoal,
  BuatMateri,
  EditSoal,
  MateriGuru,
  PengaturanGuru,
  NilaiKelompokSiswa,
  NilaiGrafik,
  KelompokGrafik,
} from "./pages/guru";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    title: "Dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Dashboard",
        path: "/dashboard",
        element: <HomeAdmin />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Pengaturan",
        path: "/pengaturan",
        element: <Pengaturan />,
      },
    ],
  },
  {
    layout: "admin",
    title: "Manajemen Data",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Data Guru",
        path: "/data-guru",
        element: <DataGuru />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Data Siswa",
        path: "/data-siswa",
        element: <DataSiswa />,
      },
    ],
  },

  {
    layout: "siswa",
    title: "Dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Dashboard",
        path: "/dashboard",
        element: <HomeSiswa />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Edit profil",
        path: "/pengaturan",
        element: <PengaturanSiswa />,
      },
    ],
  },
  {
    layout: "siswa",
    title: "Siswa",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Materi Fisika:Gerak",
        path: "/materi",
        element: <Materi />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Latihan Tugas",
        path: "/Latihan-Tugas",
        element: <TugasSiswa />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Nilai Siswa",
        path: "/Nilai-Siswa",
        element: <NilaiSiswa />,
      },
    ],
  },

  {
    layout: "guru",
    title: "Dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Dashboard",
        path: "/dashboard",
        element: <HomeGuru />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Pengaturan",
        path: "/edit-profil",
        element: <PengaturanGuru />,
      },
    ],
  },
  {
    layout: "guru",
    title: "Guru",
    pages: [
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Buat Soal",
        path: "/Buat-Soal",
        element: <BuatSoal />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Edit Soal",
        path: "/Edit-Soal",
        element: <EditSoal />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Buat Materi",
        path: "/Buat-Materi",
        element: <BuatMateri />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Edit Materi",
        path: "/edit-materi",
        element: <MateriGuru />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Nilai Siswa",
        path: "/Nilai-Siswa",
        element: <NilaiSiswaGuru />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Nilai Kelompok Siswa",
        path: "/Nilai-Kelompok-Siswa",
        element: <NilaiKelompokSiswa />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Nilai Grafik Siswa",
        path: "/Nilai-Grafik-Siswa",
        element: <NilaiGrafik />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Kelompok Kategori",
        path: "/Kelompok-Kategori",
        element: <KelompokGrafik />,
      },
    ],
  },
];

export default routes;
