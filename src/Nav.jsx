import React, { useRef, useEffect, useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  message,
  Button as AntButton,
  Space,
} from "antd";
import { Button as BootButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Images/WingsWay logo.png";
import "./App.css";
import ModalForm from "./ModalForm";

function NavMenu({ handleModalOpen }) {
  const [expanded, setExpanded] = useState(false); // Manage navbar collapse
  const [hideNavbar, setHideNavbar] = useState(false); // Hide navbar on scroll
  const [showDropdown, setShowDropdown] = useState(false); // Manage dropdown visibility on hover
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  const [form] = Form.useForm(); // useForm hook for handling form operations
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [countryCode, setCountryCode] = useState("+971"); // Default country code
  const [selectWidth, setSelectWidth] = useState("30%");
  const [dropdownWidth, setDropdownWidth] = useState("30%");

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992); // Mobile and tablet sizes (<= 992px)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleDropdownToggle = (nextShow) => {
    setShowDropdown(nextShow);
  };

  useEffect(() => {
    // Function to handle click and focus outside of the dropdown and navbar
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick); // Added touchstart for mobile devices
    document.addEventListener("focusin", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick); // Clean up touchstart event listener
      document.removeEventListener("focusin", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        ref={navbarRef}
        collapseOnSelect
        expand="lg"
        className={`bg-body-white fixed-top ${hideNavbar ? "hidden" : ""}`} // Make navbar fixed
        expanded={expanded}
        style={{ backgroundColor: "white" }}
      >
        <Container style={{ backgroundColor: "white" }}>
          <img
            src={logo}
            className="img-fluid responsive-logo"
            alt="WingsWay logo"
          />

          {/* Toggle button to collapse/expand the navbar */}
          {/* <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={handleNavbarToggle}
          /> */}

          {isMobile ? (
            // Mobile Button (replace hamburger menu)
            <BootButton
              className="btn-lg Demobutton m-auto TabDemoButton "
              onClick={handleModalOpen}
            >
              Book A Free Demo Class
            </BootButton>
          ) : (
            <>
              {/* Regular Navbar for Desktop */}
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  {/* Add your navigation links here */}
                </Nav>

                {/* Desktop Button */}
                <BootButton
                  className="btn-lg d-none d-lg-inline Demobutton"
                  onClick={handleModalOpen}
                >
                  Book A Free Demo Class
                </BootButton>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavMenu;
