import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col
          md={4}
          className="d-none d-md-flex flex-column justify-content-center align-items-center"
          style={{
            backgroundColor: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100%", height: "auto", maxWidth: "505px" }}
          />
          <h2 className="text-gradient"style={{ textAlign: "right" }}>
            سواء كنت شركة كبيرة أو صغيرة، يتيح لك تطبيقنا إدارة عمليات الشحن بسهولة وكفاءة
          </h2>
        </Col>

        <Col
          md={8}
          xs={12}
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            padding: "40px",
            background: "#135D66",
            borderTopRightRadius: "30px", 
            borderBottomRightRadius: "30px", 
          }}
        >
          <h2 className="text-light">إنشاء حساب جديد</h2>
          <Form style={{ width: "100%", maxWidth: "500px" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "80%", height: "auto", maxWidth: "250px" }}
              
            />
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="formCompanyName" >
                  <Form.Label className="text-light">اسم الشركة</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#8AB7BD",
                      borderColor: "#8AB7BD",
                    }}
                    type="text"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label className="text-light">الجوال</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#8AB7BD",
                      borderColor: "#8AB7BD",
                    }}
                    type="tel"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="text-light">البريد الالكتروني</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#8AB7BD",
                      borderColor: "#8AB7BD",
                    }}
                    type="email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formCity">
                  <Form.Label className="text-light">المدينة</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#8AB7BD",
                      borderColor: "#8AB7BD",
                    }}
                    type="text"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="formPassword">
                  <Form.Label className="text-light">كلمة المرور</Form.Label>
                  <div className="input-group">
                    <span
                      className="input-group-text"
                      onClick={togglePasswordVisibility}
                      style={{
                        cursor: 'pointer',
                        backgroundColor: "#8AB7BD",
                      
                      }}
                    >
                    <Form.Control
                      style={{
                        backgroundColor: "#8AB7BD",
                        borderColor: "#8AB7BD",
                      
                      }}
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label className="text-light">تأكيد كلمة المرور</Form.Label>
                  <div className="input-group">
                    <span
                      className="input-group-text"
                      onClick={toggleConfirmPasswordVisibility}
                      style={{
                        cursor: 'pointer',
                        border: "none",
                        backgroundColor: "#8AB7BD",
                       
                      }}
                    >
                    <Form.Control
                      style={{
                        backgroundColor: "#8AB7BD",
                        borderColor: "#8AB7BD",

                      }}
                      type={showConfirmPassword ? "text" : "password"}
                      required
                    />
                    
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center mt-5">
              <Button className="px-5 bg-light" style={{ color: "#135D66" }} type="submit">
                إنشاء الحساب
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
