import styled from "styled-components";

/* Layout */
export const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

/* Sidebar */
export const SidebarWrapper = styled.aside`
  min-height: 100%;

  /* 🖥 desktop → participate in layout */
  position: sticky;
  top: 0;

  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(18px);
  border-right: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  flex-direction: column;
  color: #e5e7eb;

  z-index: 10;

  width: ${({ open }) => (open ? "200px" : "72px")};
  padding: ${({ open }) => (open ? "32px 24px" : "32px 12px")};

  transition:
    width 0.3s ease,
    padding 0.3s ease;

  /* 📱 mobile → overlay drawer */
  @media (max-width: 1024px) {
   position: relative;
    left: 0;
    bottom: 0;
    top: 0;

    height: 70px;
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0 10px;

    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

export const SidebarToggle = styled.button`
  position: absolute;
  top: 20px;
  right: -14px;

  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;

  background: #22d3ee;
  color: #020617;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 12px rgba(34, 211, 238, 0.6);
  @media (max-width: 1024px) {
    display: none;
  }
`;

/* Logo */
export const Logo = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;

  span {
    color: #22c55e;
  }
`;

/* Navigation */
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    gap: 0;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 10px 14px;
  border-radius: 12px;

  cursor: pointer;
  font-size: 16px;

  color: ${({ $active }) => ($active ? "#ffffff" : "#94a3b8")};
  background: ${({ $active }) =>
    $active ? "rgba(34,211,238,0.15)" : "transparent"};

  svg {
    font-size: 20px;
    color: ${({ $active }) => ($active ? "#22d3ee" : "#64748b")};
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
  }

  &:hover {
    background: rgba(34, 211, 238, 0.12);

    svg {
      color: #38bdf8;
    }
  }
`;

/* Divider */
export const Divider = styled.div`
  margin: 32px 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
`;

/* Main Content */
export const Content = styled.main`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
`;

export const SlidebarContainer = styled.div``;
