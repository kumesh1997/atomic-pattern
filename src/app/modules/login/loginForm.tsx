import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Logo from "../../shared-components/atoms/Logo/CdLogo";
import CdCard from "../../shared-components/atoms/Card/CdCard";
import CdCardBody from "../../shared-components/atoms/Card/CardBody";
import InputField from "../../shared-components/atoms/Input/CdInputField";
import InputWithLabel from "../../shared-components/molecules/InputWithLable/CdInputWithLable";
import InputPasswordField from "../../shared-components/atoms/Input/password/CdPassword";
import Btn from "../../shared-components/atoms/Button/CdButton";
import Typography from "../../shared-components/atoms/Typography/Typography";
import H6 from "../../shared-components/atoms/Headings/H6Element";
import H3 from "../../shared-components/atoms/Headings/H3Element";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { login } from "../../store/reducers/users.slice";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as z from "zod";
import { toast } from "react-toastify";

// Define Zod schema for form validation
const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .nonempty("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.users);

  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Validate form data using Zod
    const validationResult = loginSchema.safeParse(formData);

    if (!validationResult.success) {
      // If validation fails, set errors
      const errors: { email?: string; password?: string } = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0] === "email") {
          errors.email = err.message;
        }
        if (err.path[0] === "password") {
          errors.password = err.message;
        }
      });
      setFormErrors(errors);
      return; // Exit the function if validation fails
    }

    // Proceed with login if validation passes
    const { email, password } = formData;
    if (email && password) {
      dispatch(login({ email: email, password: password }))
        .unwrap()
        .then((response) => {
          if (response) {
            toast.success("User Login successfull");
            navigate("/dashboard"); // Navigate on successful login
          }
        })
        .catch((error) => {
          toast.error("Login failed! ");
          resetForm();
          console.error("Login failed:", error);
        });
    } else {
      console.log("Please enter both username and password");
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <Row>
      <Col
        md
        style={{
          backgroundImage: "url('/assets/images/login_bg.jpg')",
        }}
        className="container-fluid bg-cover bg-center min-vh-100 no-repeat-bg"
      >
        <CdCard className="rounded-3 col-lg-4 col-md-6 col-sm-6 mx-auto mt-5 ">
          <CdCardBody>
            <Row>
              <Container className="mb-5 d-flex flex-column justify-content-center align-items-center text-center">
                <Logo
                  src="/assets/images/user.png"
                  style={{ width: 150, height: 150 }}
                  className="align-content-center"
                />
                <H3 children="Login to Access Department Dashboard" />
                <H6 children="Login below to access your department dashboard." />
              </Container>
              <Form>
                <InputWithLabel
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  InputComponent={InputField}
                  label="User Name"
                  inputProps={{
                    type: "text",
                  }}
                  inputPlaceHolder="username@email.com"
                  labelProps={{
                    className: "",
                    style: { color: "gray", float: "left" },
                  }}
                />
                {formErrors.email && (
                  <Typography
                    children={formErrors.email}
                    className="text-danger mt-1"
                  />
                )}

                <InputWithLabel
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  InputComponent={InputPasswordField}
                  inputPlaceHolder="Enter your Password"
                  label="Password"
                  type="password"
                  labelProps={{
                    className: "",
                    style: { color: "gray", float: "left" },
                  }}
                />

                {formErrors.password && (
                  <Typography
                    children={formErrors.password}
                    className="text-danger mt-1"
                  />
                )}
                <Btn
                  children={"Login"}
                  style={{ width: 100 }}
                  color="secondary"
                  block
                  outline
                  size="lg"
                  className="mt-5"
                  onClick={handleLogin}
                />
                <Typography
                  children={"Forgot your username or password?"}
                  className="mt-3 text-start"
                />
              </Form>
            </Row>
          </CdCardBody>
        </CdCard>
      </Col>
    </Row>
  );
};

export default LoginForm;
