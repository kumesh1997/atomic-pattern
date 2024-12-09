import { Col, Container, Row } from "reactstrap";
import Typography from "../../shared-components/atoms/Typography/Typography";
import InputWithLabel from "../../shared-components/molecules/InputWithLable/CdInputWithLable";
import DropDownAtom from "../../shared-components/atoms/DropDown/CdDropDown";
import CdInputGroup from "../../shared-components/molecules/InputGroup/CdInputGroup";
import InputField from "../../shared-components/atoms/Input/CdInputField";
import Icon from "../../shared-components/atoms/Icon/CdIcon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../shared-components/atoms/Button/CdButton";
import DataTable from "../../shared-components/organisms/Table/DataTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProjects } from "../../store/reducers/projects.slice";
import DateInput from "../../shared-components/atoms/Input/Date/DateInput";
import PaginationComponent from "../../shared-components/atoms/Pagination/pagination";

const ProjectTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projectsList = useSelector((state: RootState) => state.projects);

  const initialFormData = {
    projectName: "",
    status: "",
    createdBy: "",
    fromDate: "",
    toDate: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

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
    dispatch(
      fetchProjects({
        projectName: formData.projectName,
        status: formData.status,
        createdBy: formData.createdBy,
        fromDate: formData.fromDate,
        toDate: null,
        page,
        limit,
      })
    );
    setDropDownOptions();
  }, [page, limit, formData, projectsList.projects]);

  const setDropDownOptions = () => {
    const options = getDropDownData(projectsList.projects);
  };

  const getDropDownData = (data: any[]) => {
    if (data.length === 0) return [];
    const fieldNames = Object.keys(data[0]);
    return fieldNames;
  };

  return (
    <Container className="container vh-100 vw-100 rounded bg-gray">
      <Row className=" row rounded  p-2">
        <Row className="justify-content-start p-2 mb-2">
          <Col className="col-lg-6 col-md-7 col-sm-12 d-flex align-items-center">
            <Typography
              children="All Projects"
              className="w-auto me-3 fs-5 fw-semibold"
            />
            <Typography
              children={`Displaying ${projectsList.projects.length} projects`}
              className=""
            />
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
              labelProps={{ style: { float: "left" } }}
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
              options={["Completed", "Delayed", "In Progress", "Not Started"]}
              labelProps={{ style: { float: "left" } }}
            />
          </Col>
          <Col>
            <InputWithLabel
              id="createdBy"
              name="createdBy"
              value={formData.createdBy}
              onSelect={handleInputChange}
              InputComponent={DropDownAtom}
              label="Created By"
              options={["User 1", "User 2", "User 3"]}
              labelProps={{ style: { float: "left" } }}
            />
          </Col>
          <Col>
            <DateInput
              id="fromDate"
              value={formData.fromDate}
              onChange={handleInputChange}
              label="Date"
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
            headers={[
              "Project ID",
              "Project Name",
              "Created By",
              "Created Date",
              "Start Date",
              "End Date",
              "Status",
            ]}
            data={projectsList.projects}
          />
        </Row>
      </Row>
      <Col>
      <PaginationComponent
          currentPage={page}
          totalCount={projectsList.totalCount}
          pageSize={limit}
          onPageChange={(newPage: number) => setPage(newPage)}
        />
      </Col>
    </Container>
  );
};

export default ProjectTable;
