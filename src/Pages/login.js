import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    passError: "",
    confirmPassError: "",
    phoneError: "",
    companyNameError: "",
    cityError: "",
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const validateInputs = () => {
    let valid = true;
    const newErrors = { passError: "", confirmPassError: "", phoneError: "", companyNameError: "", cityError: "" };

    if (!companyName) {
      newErrors.companyNameError = 'اسم الشركة مطلوب';
      valid = false;
    }

    if (!city) {
      newErrors.cityError = 'المدينة مطلوبة';
      valid = false;
    }

    if (!phone || phone.length <= 8 || !phone.startsWith('2')) {
      newErrors.phoneError = 'يوجد خطأ في رقم الجوال';
      valid = false;
    }

    if (password.length < 6) {
      newErrors.passError = "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassError = "كلمة المرور وتأكيد كلمة المرور غير متطابقتان.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    console.log("تم إنشاء الحساب بنجاح!");
  };

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
          <h2 className="text-gradient" style={{ textAlign: "right" }}>
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
          <Form style={{ width: "100%", maxWidth: "500px" }} onSubmit={handleSubmit}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "80%", height: "auto", maxWidth: "250px" }}
            />
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="companyName">
                  <Form.Label className="text-light">اسم الشركة</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#8AB7BD",
                      borderColor: "#8AB7BD",
                    }}
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  
                  />
                  <p className="text-danger">{errors.companyNameError}</p>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="phone">
                  <Form.Label className="text-light">الجوال</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#8AB7BD",
                      borderColor: "#8AB7BD",
                    }}
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                   
                  />
                  <p className="text-danger">{errors.phoneError}</p>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="email">
                  <Form.Label className="text-light">البريد الالكتروني</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#8AB7BD",
                      borderColor: "#8AB7BD",
                    }}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                   
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="city">
                  <Form.Label className="text-light">المدينة</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#8AB7BD",
                      borderColor: "#8AB7BD",
                    }}
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    
                  />
                  <p className="text-danger">{errors.cityError}</p>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="formPassword">
                  <Form.Label className="text-light">كلمة المرور</Form.Label>
                  <div>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                      />
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <p className="text-danger">{errors.passError}</p>
                  </div>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label className="text-light">تأكيد كلمة المرور</Form.Label>
                  <div>
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        
                      />
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <p className="text-danger">{errors.confirmPassError}</p>
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
