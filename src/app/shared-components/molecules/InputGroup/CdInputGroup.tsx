import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FormGroup, InputGroup } from "reactstrap";
import { CSSModule } from "reactstrap/types/lib/utils";
import { InputProps } from "reactstrap";
import LableAtom from "../../atoms/Lable/CdLable";

interface StyleProp {
    width?: number;
    fontSize?: number;
    padding?: number;
  }

interface PropsTypes extends InputProps {
  IconComponent?: React.FC<any>;
  InputComponent: React.FC<any>;
  label: string;
  id?: string;
  className? : string;
  IconProps?: {
    color?: string;
    className?: string;
    size?: SizeProp;
    style?: CSSModule | StyleProp;
    active?: boolean;
    disabled?: boolean;
    name?: string;
    cssModule?: CSSModule;
    icon: IconProp;
    labelProps?: {
      className?: string;
      style?: React.CSSProperties;
    };
  };
}

const CdInputGroup : React.FC<PropsTypes> = ({IconComponent, IconProps, InputComponent, className, id, labelProps, label, ...props}) => {
    return (
      <FormGroup>
        <LableAtom htmlFor={id} {...labelProps} children={label} />
        <InputGroup className= {`d-flex align-items-center border rounded ${className}`}>
        {IconComponent && (
          <IconComponent icon={IconProps?.icon} {...IconProps} className="ms-1 me-2" />
        )}
        <InputComponent {...props} className="form-control border-0" />
      </InputGroup>
      </FormGroup>
    );
}

export default CdInputGroup;