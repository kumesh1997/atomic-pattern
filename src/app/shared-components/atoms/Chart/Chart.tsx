import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, CardTitle } from 'reactstrap';

interface ChartAtomProps {
  title: string;
  chartOptions: any;
  chartSeries: any;
  chartType: "line" | "bar" | "pie" | "area";
  height?: number;
  borderColor?: 'transparent',
}

const ChartAtom: React.FC<ChartAtomProps> = ({
  title,
  chartOptions,
  chartSeries,
  chartType,
  height = 100,
  borderColor
}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type={chartType}
          height={height}
          borderColor={borderColor}
        />
      </CardBody>
    </Card>
  );
};

export default ChartAtom;
