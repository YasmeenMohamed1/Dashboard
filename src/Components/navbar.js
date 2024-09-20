import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      style={{
        position: "fixed",
        right: 0,
        top: 0,
      }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container className="d-flex flex-column"   style={{
           position: "fixed",
           right: 0,
           top: 0, 
        height: "100vh",
        background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)",
        width: "250px",
      }}>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "240px", height: "120px", marginBottom: "20px" }}
            />
          </Navbar.Brand>
          <Nav className="h3 p-3 flex-column" style={{ width: "100%" }}>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              القائمة الرئيسية
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              لوحة التحكم
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              شحنات دليفري
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              شحنات بيك اب
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              المستخدمون
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              المالية
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              الإعدادات
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              الملف الشخصي
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              سياسة الخصوصية
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              الأحكام والشروط
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              اتصل بنا
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="*"
              activeclassname="active"
              style={{ color: "white" }}
            >
              شارك التطبيق
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;