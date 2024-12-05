import { CSSProperties } from "react";
import TableRowAtom from "../../../atoms/Table/TableRow/CdTableRow";
import TableCell from "../../../atoms/Table/TableCell/CdTableCell";


type TableDataRowProps = {
    data: { [key: string]: any };
    className?: string;
    style?: CSSProperties;
    onClick?: (data: any) => void;
    control?: any;
  };

const DataRow : React.FC<TableDataRowProps> = ({ data, className, style, onClick, control }) => {
    return (
        <TableRowAtom
          className={className}
          style={style}
          onClick={() => onClick && onClick(data)}
        >
          {Object.entries(data).map(([key, value], index) => (
            <TableCell key={index} >{value}</TableCell>
          ))}
        </TableRowAtom>
      );
}

export default DataRow;