import { Col, Container, Row } from "reactstrap";
import Typography from "../../shared-components/atoms/Typography/Typography";
import Btn from "../../shared-components/atoms/Button/CdButton";
import CdCard from "../../shared-components/atoms/Card/CdCard";
import CdCardBody from "../../shared-components/atoms/Card/CardBody";
import ChartAtom from "../../shared-components/atoms/Chart/Chart";

const Overview = () => {
  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
  ];

  return (
    <Container>
      <Row className="row">
        <Row>
          <Typography
            children={"Overview"}
            className="w-auto me-3 fs-5 fw-semibold d-flex text-start"
          />
        </Row>
        <Row className="d-flex flex-lg-row flex-md-column flex-sm-column  flex-xs-column">
          <Col className="rounded col-lg-8">
            <CdCard>
              <CdCardBody>
                <Row>
                  <Col className="col-lg-6">
                    <Typography
                      children={"Current Projects"}
                      className="w-auto me-3 fs-5 fw-semibold d-flex text-start"
                    />
                    <Typography
                      children={
                        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, provident eaque libero minima nam odio ipsum ullam alias"
                      }
                      className=" text-start justify-content-center"
                    />
                    <Row>
                      <Col>
                        <Btn
                          block
                          size="sm"
                          color="primary"
                          outline
                          children={"View all Projects"}
                        />
                      </Col>
                      <Col>
                        <Btn
                          block
                          size="sm"
                          children={"Create a New Projects"}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-lg-6">
                    <ChartAtom
                      title={"Chart"}
                      chartOptions={chartOptions}
                      chartSeries={chartSeries}
                      chartType={"line"}
                    />
                  </Col>
                </Row>
              </CdCardBody>
            </CdCard>
          </Col>
          <Col className="rounded col-lg-4 m-lg-0 m-md-3 m-sm-3">
            <Row>
              <Typography
                children={"Quick Links"}
                className="fs-5 fw-semibold text-start"
              />
            </Row>
            <Row className="mb-3">
              <CdCard>
                <CdCardBody>
                  <Typography
                    children={"My Permits"}
                    className="fw-semibold text-start"
                  />
                  <Row className="g-3">
                    <Col>
                      <Typography
                        children={
                          " Lorem, ipsum dolor sit amet consectetur adipisicing"
                        }
                        className=" text-start"
                      />
                    </Col>

                    <Col>
                      <Btn
                        color="primary"
                        size="sm"
                        outline
                        children={"View Permits"}
                      />
                    </Col>
                  </Row>
                </CdCardBody>
              </CdCard>
            </Row>
            <Row className="mb-3">
              <CdCard>
                <CdCardBody>
                  <Typography
                    children={"Apply for Permits"}
                    className="fw-semibold text-start"
                  />
                  <Row className="g-3">
                    <Col>
                      <Typography
                        children={
                          " Lorem, ipsum dolor sit amet consectetur adipisicing."
                        }
                        className=" text-start"
                      />
                    </Col>
                    <Col>
                      <Btn
                        color="primary"
                        size="sm"
                        outline
                        children={"View Permits"}
                      />
                    </Col>
                  </Row>
                </CdCardBody>
              </CdCard>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Overview;
