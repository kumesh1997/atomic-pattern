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

const LoginForm = () => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.users);

  interface userType{
    email: string
    password: string
  }

  const initialFormData : userType = {
    email: '',
    password: ''
  }

  const handleLogin = () => {
    const userEmail = initialFormData.email;
    const userPassword = initialFormData.password;
    if( userEmail && userPassword ){
      console.log('no user data')
    }
    dispatch(login({email: 'tharindukumesh09@gmail.com' , password: '1234' }))
    .unwrap()
        .then(() => {
          navigate('/dashboard'); // Navigate on successful login
        })
        .catch((error) => {
          console.error('Login failed:', error);
        });
   
  };

  return (
    <Row>
      <Col md style={{
        backgroundImage: "url('/assets/images/login_bg.jpg')",
      }}
      className="container-fluid bg-cover bg-center min-vh-100 no-repeat-bg">
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
                  id="username"
                  // value={initialFormData.email}
                  onChange={(e) => initialFormData.email= e.target.value }
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
                <InputWithLabel
                  id="password"
                  // value={initialFormData.password}
                  onChange={(e) => initialFormData.password= e.target.value }
                  InputComponent={InputPasswordField}
                  inputPlaceHolder="Enter your Password"
                  label="Password"
                  type="password"
                  labelProps={{
                    className: "",
                    style: { color: "gray", float: "left" },
                  }}
                />
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
