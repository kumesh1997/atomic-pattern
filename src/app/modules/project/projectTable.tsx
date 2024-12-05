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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProjects } from "../../store/reducers/projects.slice";

const ProjectTable = () => {

  const dispatch = useDispatch<AppDispatch>();
  const projectsList = useSelector((state: RootState) => state.projects);

  const initialFormData ={
    projectName: '',
    status: '',
    createdBy: '',
    fromDate: '',
    toDate: ''
  }

  const [ formData, setFormData ] = useState(initialFormData);
  const [ statusOptions, setStatusOptions ] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  useEffect(() => {
    dispatch(fetchProjects({
      projectName: formData.projectName,
      status: formData.status,
      createdBy: null,
      fromDate: null,
      toDate: null
    }));
  }, [formData]);


  const setDropDownOptions = () => {

  }

  return (
    <Container className="container vh-100 vw-100 rounded bg-gray">
      <Row className=" row rounded  p-2">
        <Row className="justify-content-start p-2 mb-2">
          <Col className="col-lg-6 col-md-7 col-sm-12 d-flex align-items-center">
            <Typography
              children="All Projects"
              className="w-auto me-3 fs-5 fw-semibold"
            />
            <Typography children={`Displaying ${projectsList.projects.length} projects`} className="" />
          </Col>
        </Row>
        <Row className="flex-sm-column flex-md-row flex-lg-row">
          <Col>
            <CdInputGroup
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
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
              id="status"
              name="status"
              value={formData.status}
              onSelect={handleInputChange}
              InputComponent={DropDownAtom}
              label="Status"
              options={["Completed", "Delay", "In Progress"]}
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
            headers={["Project ID", "Project Name", "Created By", "Created Date", "Start Date", "End Date", "Status"]}
            data={projectsList.projects}
          />
        </Row>
      </Row>
    </Container>
  );
};

export default ProjectTable;
