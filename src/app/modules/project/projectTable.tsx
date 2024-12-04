import { Col, Container, Row } from "reactstrap";
import Typography from "../../shared-components/atoms/Typography/Typography";
import InputWithLabel from "../../shared-components/molecules/InputWithLable/CdInputWithLable";
import DropDownAtom from "../../shared-components/atoms/DropDown/CdDropDown";
import CdInputGroup from "../../shared-components/molecules/InputGroup/CdInputGroup";
import InputField from "../../shared-components/atoms/Input/CdInputField";
import Icon from "../../shared-components/atoms/Icon/CdIcon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../shared-components/atoms/Button/CdButton";
import Date from "../../shared-components/atoms/Date/CdDate";
import DataTable from "../../shared-components/organisms/Table/DataTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProjects } from "../../store/reducers/projects.slice";

const ProjectTable = () => {

  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <Container className="container vh-100 vw-100 rounded bg-gray">
      <Row className=" row rounded  p-2">
        <Row className="justify-content-start p-2 mb-2">
          <Col className="col-lg-6 col-md-7 col-sm-12 d-flex align-items-center">
            <Typography
              children="All Projects"
              className="w-auto me-3 fs-5 fw-semibold"
            />
            <Typography children="Displaying 145554 projects" className="" />
          </Col>
        </Row>
        <Row className="flex-sm-column flex-md-row flex-lg-row">
          <Col>
            <CdInputGroup
              InputComponent={InputField}
              IconComponent={Icon}
              IconProps={{
                icon: faMagnifyingGlass,
              }}
              label={"Project Name"}
              labelProps={{style: { float: "left" } }}
            />
          </Col>
          <Col>
            <InputWithLabel
              InputComponent={DropDownAtom}
              label="Status"
              options={["A", "B"]}
              labelProps={{style: { float: "left" } }}
            />
          </Col>
          <Col>
            <InputWithLabel
              InputComponent={DropDownAtom}
              label="Created By"
              options={["A", "B"]}
              labelProps={{style: { float: "left" } }}
            />
          </Col>
          <Col>
            <InputWithLabel
              InputComponent={Date}
              label="Date"
              labelProps={{ className: "", style: { float: "left" } }}
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <Btn children={"Create"} color="primary" />
          </Col>
        </Row>
        <Row className="row mt-5">
          <DataTable
            bordered
            hover
            responsive
            className="table-responsive "
            headers={["ID", "NAME", "ROLE"]}
            data={[
              [1, "John Doe", "Admin"],
              [2, "John Doe", "Admin"],
              [3, "John Doe", "Admin"],
              [4, "John Doe", "Admin"],
            ]}
          />
        </Row>
      </Row>
    </Container>
  );
};

export default ProjectTable;
