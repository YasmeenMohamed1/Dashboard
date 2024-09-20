import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AddUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [branch, setBranch] = useState("");
  const [errors, setErrors] = useState({
    passError: "",
    phoneError: "",
    userNameError: "",
    cityError: "",
    userTypeError: "",
    branchError: "",
    emailError: "",
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
 
  const validateInputs = () => {
    let valid = true;
    const newErrors = {
      passError: "",
      phoneError: "",
      userNameError: "",
      cityError: "",
      userTypeError: "",
      branchError: "",
      emailError: "",
    };

    if (!userName) {
      newErrors.userNameError = "اسم المستخدم مطلوب";
      valid = false;
    }
    if (!userType) {
      newErrors.userTypeError = "نوع المستخدم مطلوب";
      valid = false;
    }
    if (!branch) {
      newErrors.branchError = "الفرع مطلوب";
      valid = false;
    }

    if (!city) {
      newErrors.cityError = "المدينة مطلوبة";
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
            <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="userName">
                    <Form.Label className="text-dark">اسم المستخدم</Form.Label>
                    <Form.Control
                      style={{ backgroundColor: "#F5F7FA", borderColor: "#F5F7FA" , borderRadius: "10px"}}
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    <p className="text-danger">{errors.userNameError}</p>
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
                  <Form.Group controlId="city">
                    <Form.Label className="text-dark">المدينة</Form.Label>
                    <Form.Control
                      style={{ backgroundColor: "#F5F7FA", borderColor: "#F5F7FA" , borderRadius: "10px"}}
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                    <p className="text-danger">{errors.cityError}</p>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="userType">
                    <Form.Label className="text-dark">نوع المستخدم</Form.Label>
                    <Form.Control
                      style={{ backgroundColor: "#F5F7FA", borderColor: "#F5F7FA" , borderRadius: "10px"}}
                      type="text"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      required
                    />
                    <p className="text-danger">{errors.userTypeError}</p>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="branch">
                    <Form.Label className="text-dark">اسم الفرع</Form.Label>
                    <Form.Select
                      style={{ backgroundColor: "#F5F7FA", borderColor: "#F5F7FA" , borderRadius: "10px"}}
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      required
                    >
                      <option value="">اختر الفرع</option>
                      <option value="branch1">فرع 1</option>
                      <option value="branch2">فرع 2</option>
                      <option value="branch3">فرع 3</option>
                    </Form.Select>
                    <p className="text-danger">{errors.branchError}</p>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3 justify-content-center align-items-center">
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
                <Button
                  className="px-4 py-2 bg-light"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #135D66 0%, #22A6B6 100%)",
                  }}
                  type="submit"
                >
                  حفظ المستخدم
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
