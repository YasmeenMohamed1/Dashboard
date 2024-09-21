import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaEdit, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
 
  const [errors, setErrors] = useState({
    passError: "",
    phoneError: "",
    companyNameError: "",
    emailError: "",
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
 
  const validateInputs = () => {
    let valid = true;
    const newErrors = {
      passError: "",
      phoneError: "",
      companyNameError: "",
      emailError: "",
    };

    if (!companyName) {
      newErrors.companyNameError = "اسم المستخدم مطلوب";
      valid = false;
    }

    if (!phone || phone.length <= 8) {
      newErrors.phoneError = "يوجد خطأ في رقم الجوال";
      valid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.emailError = "البريد الالكتروني غير صحيح";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.passError = "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.";
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
    <Container fluid style={{ height: "100vh", backgroundColor: "#F5F7FA" }}>
      <Row className="justify-content-center align-items-center" style={{ height: "100%" }}>
        <Col xs={12} md={8} className="d-flex justify-content-center">
          <div style={{ width: "100%", backgroundColor: "white", padding: "40px", borderRadius: "6px"}}>

          <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <button variant="link" style={{ textDecoration: "none", border:"none",padding:"10px", }}>
                تعديل الملف الشخصي <FaEdit /> 
              </button>
            </div>

            <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <Row className="justify-content-center mb-3">
                <Col xs={12} className="text-center">
                  <div style={{ position: "relative", display: "inline-block" }}>
                    <Image 
                      src="https://via.placeholder.com/150" 
                      roundedCircle 
                      width="150" 
                      height="150" 
                      alt="Profile" 
                    />
                    <FaEdit 
                      style={{ 
                        position: "absolute", 
                        top: "115px", 
                        right: "-15px", 
                        cursor: "pointer", 
                        fontSize: "20px" 
                      }} 
                      title="تغيير الصورة"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center mb-3">
                <Col xs={12} className="text-center">
                    <h4 className="text-dark mb-4">اسم الشركه</h4>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="companyName">
                    <Form.Label className="text-dark">اسم الشركه</Form.Label>
                    <Form.Control
                      style={{ backgroundColor: "#F5F7FA", borderColor: "#F5F7FA" , borderRadius: "10px"}}
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                    <p className="text-danger">{errors.companyNameError}</p>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="phone">
                    <Form.Label className="text-dark">الجوال</Form.Label>
                    <Form.Control
                      style={{ backgroundColor: "#F5F7FA", borderColor: "#F5F7FA", borderRadius: "10px" }}
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <p className="text-danger">{errors.phoneError}</p>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="email">
                    <Form.Label className="text-dark">البريد الالكتروني</Form.Label>
                    <Form.Control
                      style={{ backgroundColor: "#F5F7FA", borderColor: "#F5F7FA" , borderRadius: "10px"}}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <p className="text-danger">{errors.emailError}</p>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="formPassword">
                    <Form.Label className="text-dark">كلمة المرور</Form.Label>
                    <div>
                      <span
                        className="input-group-text"
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer", backgroundColor: "#F5F7FA" ,}}
                      >
                        <Form.Control
                          style={{ backgroundColor: "#F5F7FA", borderColor: "#F5F7FA", borderRadius: "10px" }}
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      <p className="text-danger">{errors.passError}</p>
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center mt-5">
                 
                <button
                  className="px-4 py-2 text-dark"
                  style={{
                    border:"none",
                    backgroundColor:"white"
                  }}
                  type="button"
                >
                 تسجيل الخروج<FaSignOutAlt style={{ marginRight: "8px" }} /> 
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

