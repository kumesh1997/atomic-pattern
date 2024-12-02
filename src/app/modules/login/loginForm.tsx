import { Container, Form, FormGroup } from "reactstrap";
import Logo from "../../shared-components/atoms/Logo/CdLogo";
import CdCard from "../../shared-components/atoms/Card/CdCard";
import CdCardBody from "../../shared-components/atoms/Card/CardBody";
import H1 from "../../shared-components/atoms/Headings/H1Element";
import H5 from "../../shared-components/atoms/Headings/H5Element";
import InputField from "../../shared-components/atoms/Input/CdInputField";
import InputWithLabel from "../../shared-components/molecules/InputWithLable/CdInputWithLable";
import InputPasswordField from "../../shared-components/atoms/Input/password/CdPassword";
import Btn from "../../shared-components/atoms/Button/CdButton";
import CdInputGroup from "../../shared-components/molecules/InputGroup/CdInputGroup";
import Typography from "../../shared-components/atoms/Typography/Typography";

const LoginForm = () => {
  return (
    <div className="container mt-5">
      <CdCard className="card mx-auto">
        <CdCardBody>
          <Container>
            <Container>
              <Form>
                <Logo src="/logo192.png" style={{ width: 50, height: 50 }} />
                <H1 children="Login to Access Department Dashboard" />
                <H5 children="Login below to access your department dashboard." />
                <InputWithLabel
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
                />
                <Typography children={'Forgot your username of password'} className="mt-3 text-start" />
              </Form>
            </Container>
          </Container>
        </CdCardBody>
      </CdCard>
    </div>
  );
};

export default LoginForm;
