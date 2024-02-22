import { Routes, Route } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import {
  Navbar,
  Footer,
  Sidenav,
  DashboardNavbar,
  Home,
} from "@/widgets/layout";
import { RegisterSiswa } from "@/widgets/layout/RegisterSiswa";
import { RegisterGuru } from "@/widgets/layout/RegisterGuru";
import { RegisterAdmin } from "@/widgets/layout/RegisterAdmin";
import { SignIn } from "@/pages/auth";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function Auth() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const navbarRoutes = [
    {
      name: "dashboard",
      path: "/dashboard/home",
      icon: ChartPieIcon,
    },
    {
      name: "profile",
      path: "/dashboard/home",
      icon: UserIcon,
    },
    {
      name: "sign in",
      path: "/auth/sign-in",
      icon: ArrowRightOnRectangleIcon,
    },
  ];

  const auth = [
    {
      title: "auth pages",
      layout: "auth",
      pages: [
        {
          name: "home",
          path: "/home",
          element: <Home />,
        },
        {
          name: "sign in",
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          name: "register siswa",
          path: "/register/siswa",
          element: <RegisterSiswa />,
        },
        {
          name: "register guru",
          path: "/register/guru",
          element: <RegisterGuru />,
        },
        {
          name: "register admin",
          path: "/register/admin",
          element: <RegisterAdmin />,
        },
      ],
    },
  ];

  return (
    <div className="bgImage min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={auth}
        brandImg={
          sidenavType === "light"
            ? "/img/Donor_Darah.png"
            : "/img/Donor_Darah.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <div className="container relative z-40 mx-auto p-4">
          <Navbar routes={navbarRoutes} />
        </div>
        <Routes>
          {auth.map(
            ({ layout, pages }) =>
              layout === "auth" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
