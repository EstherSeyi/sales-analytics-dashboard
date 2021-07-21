import styled from "styled-components";
import { FaShoppingBag } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { AiFillAppstore, AiTwotoneSetting } from "react-icons/ai";
import { BsFillCursorFill, BsPeopleFill } from "react-icons/bs";

import logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";

const AppContainer = styled.section`
  height: 100vh;
  width: 95%;
  max-width: 2000px;
  margin: 0 auto;

  .sidebar {
    padding: 0.5em 0;
  }

  .logo-container {
    align-items: center;
  }

  .main {
    height: calc(100% - 50px - 1em - 2rem);
    overflow-y: scroll;
  }
  .logo {
    width: 50px;
    height: 50px;
    margin-right: 0.5em;
  }
  .logo-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-blue);
  }
  .ml-4 {
    margin-left: 1em;
  }

  .nav-area,
  .footer {
    display: none;
  }

  .mobile-footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    color: var(--textbold-blue);
  }

  .footer-dets {
    font-size: 0.625rem;
    font-weight: 500;
    color: var(--navtext-grey);
  }

  @media (min-width: 700px) {
    display: flex;

    .sidebar {
      flex: 1 1 20%;
      padding-top: 2em;
    }
    .side-content {
      width: 90%;
      margin: 0 auto;
      height: 95%;
      border-right: 2px solid var(--sideborder-grey);
      position: relative;
    }
    .main {
      flex: 2 2 75%;
      height: calc(100% - 2em);
      padding-top: 2em;
    }

    .nav-area {
      display: block;
      margin-top: 2em;
    }
    .menu-header {
      color: var(--textbold-blue);
      font-weight: 700;
      margin-bottom: 0.75em;
      font-size: 1.125rem;
    }
    .nav-item {
      padding: 0.5em 0;
      font-weight: 700;
      color: var(--navtext-grey);
    }

    .nav-link {
      display: block;
      width: 100%;
    }

    .nav-link:hover,
    .nav-link:focus,
    .nav-link:active {
      color: var(--primary-blue);
    }

    .nav-link:focus,
    .nav-link:active {
      border-right: 3px solid var(--primary-blue);
    }

    .footer {
      display: flex;
      position: absolute;
      bottom: 0px;
      flex-direction: column;
      font-size: 1rem;
      font-weight: 700;
      color: var(--textbold-blue);
    }

    .business-section {
      margin-top: 2em;
    }
    .mobile-footer {
      display: none;
    }
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <AppContainer>
      <aside className="sidebar">
        <div className="side-content">
          <div className="flex logo-container">
            <img src={logo} alt="logo" className="logo" />
            <span className="logo-text">Tumbas</span>
          </div>

          <nav className="nav-area">
            <p className="menu-header">Menu</p>
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <AiFillAppstore />
                  <span className="ml-4">Overview</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <RiFileList3Fill />
                  <span className="ml-4">Orders</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FaShoppingBag />
                  <span className="ml-4">Products</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <AiTwotoneSetting />
                  <span className="ml-4">Settings</span>
                </Link>
              </li>
            </ul>

            <div className="business-section">
              <p className="menu-header">Business</p>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <BsFillCursorFill />
                    <span className="ml-4">Shipment</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <BsPeopleFill />
                    <span className="ml-4">Employee</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <footer className="footer">
            <span>&copy; Tumbas. 2020</span>
            <span className="footer-dets">
              Platform for solution of all types
            </span>
            <span className="footer-dets">of business to be more advanced</span>
          </footer>
        </div>
      </aside>
      <main className="main">{children}</main>

      <footer className="mobile-footer">
        <span>&copy; Tumbas. 2020</span>
        <span className="footer-dets">
          Platform for solution of all types of business to be more advanced
        </span>
      </footer>
    </AppContainer>
  );
};

export default Layout;
