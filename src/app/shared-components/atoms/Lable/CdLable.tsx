import { CSSProperties } from "react";
import { Label } from "reactstrap";

type LabelProps = {
  id: string;
  hidden?: boolean;
  check?: boolean;
  size?: "sm" | "lg";
  children: string;
  style?: CSSProperties;
  required?: boolean;
  className?: string;
};

const LableAtom: React.FC<LabelProps> = ({
  id,
  hidden,
  check,
  size,
  children,
  style,
  required = false,
  className,
}) => {
  //style={{ fontSize: '16px', color: 'blue' }}
  return (
    <Label
      className={className}
      id={`${id}-label`}
      hidden={hidden}
      check={check}
      size={size}
      style={{ ...style }}
      aria-label={children}
    >
      {required ? <span style={{ color: "red" }}>* </span> : null}
      {children}
    </Label>
  );
};

export default LableAtom;
