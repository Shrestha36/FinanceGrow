import { useState } from "react";
import {
  FiGrid,
  FiBarChart2,
  FiClock,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SidebarWrapper,
  SidebarToggle,
  Logo,
  Nav,
  NavItem,
  Divider,
} from "../styles/slideBar.style";

function Slidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // ✅ ALWAYS CLOSED BY DEFAULT
  const [open, setOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem("user");

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false); // auto close after click
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    navigate("/login");
    setOpen(false);
  };

  return (
    <SidebarWrapper open={open}>
      <SidebarToggle onClick={() => setOpen((prev) => !prev)}>
        {open ? "‹" : "›"}
      </SidebarToggle>

      <Logo>
        {open ? (
          <>
            FINANCE<span>GROW</span>
          </>
        ) : (
          "FG"
        )}
      </Logo>

      <Nav>
        <NavItem
          $active={pathname === "/home"}
          onClick={() => handleNavigate("/home")}
        >
          <FiGrid />
          {open && <span>Dashboard</span>}
        </NavItem>

        <NavItem
          $active={pathname.includes("analytics")}
          onClick={() => handleNavigate("/home/monthly-analysis")}
        >
          <FiBarChart2 />
          {open && <span>Analytics</span>}
        </NavItem>

        <NavItem
          $active={
            isLoggedIn
              ? pathname.includes("settings")
              : pathname.includes("login")
          }
          onClick={() =>
            handleNavigate(isLoggedIn ? "/home/settings" : "/login")
          }
        >
          {isLoggedIn ? <FiSettings /> : <FiClock />}
          {open && <span>{isLoggedIn ? "Settings" : "Login"}</span>}
        </NavItem>

        {/* ✅ Logout only when logged in */}
        {isLoggedIn && (
          <NavItem onClick={handleLogout}>
            <FiLogOut />
            {open && <span>Logout</span>}
          </NavItem>
        )}
      </Nav>

      <Divider />
    </SidebarWrapper>
  );
}

export default Slidebar;
