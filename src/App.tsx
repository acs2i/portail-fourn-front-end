import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Navigation/Sidebar";
import LoginPage from "./pages/login/LoginPage";
import Navbar from "./components/Navigation/Navbar";
import RapportsList from "./pages/rapports/RapportsList";
import ChangeSupplier from "./pages/suppliers/ChangeSuppliers";
import OrderTodo from "./pages/orders/OrdersTodo";
import PropOrders from "./pages/orders/PropOrders";
import Cadencement from "./pages/orders/Cadencement";
import OrderInProgress from "./pages/orders/OrdersInProgress";
import OrderDone from "./pages/orders/OrdersDone";
import SellStock from "./pages/sell/SellStock";

// Composant PrivateRoute
const PrivateRoute = ({ isAuth }: any) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  const location = useLocation();
  const excludedPaths = ["/login"];
  const isAuth = Boolean(useSelector((state: any) => state.auth.token));

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location.pathname]);

  const shouldShowNavbar = !excludedPaths.some((path) =>
    path.startsWith("*")
      ? location.pathname.startsWith(path.slice(1))
      : location.pathname === path
  );

  return (
    <>
      {shouldShowNavbar && <Sidebar />}
      {shouldShowNavbar && <Navbar />}
      <div className={isAuth ? "ml-[250px] mt-[60px]" : ""}>
        <Routes>
          {/* Routes publiques */}
          <Route path="/login" element={<LoginPage />} />

          {/* Routes privées */}
       
            <Route path="/" element={<Home />} />
            <Route path="/rapports" element={<RapportsList />} />
            <Route path="/change-supplier" element={<ChangeSupplier />} />
            <Route path="/orders-todo" element={<OrderTodo />} />
            <Route path="/orders-progress" element={<OrderInProgress />} />
            <Route path="/orders-done" element={<OrderDone />} />
            <Route path="/proposal_order" element={<PropOrders />} />
            <Route path="/sell-stock" element={<SellStock />} />
            <Route path="/cadencement" element={<Cadencement />} />
      
          <Route path="*" element={<Navigate to={isAuth ? "/" : "/login"} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
