import { Routes, Route } from "react-router-dom";
import { Sidenav, DashboardNavbar, Footer } from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";

export function Admin() {
  // const [role, setRole] = useState("");
  // useEffect(() => {
  //   getMethod.GetUser().then((res) => {
  //     if(res.data.data.role !== "admin"){
  //         na
  //     }
  //   });
  // }, []);

  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className={`min-h-screen bg-blue-gray-50/50 `}>
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "light"
            ? "/img/Donor_Darah.png"
            : "/img/Donor_Darah.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "admin" &&
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

export default Admin;
