import { FormGroup } from 'reactstrap';
import LableAtom from '../../atoms/Lable/CdLable';
import { InputProps } from 'reactstrap';


interface PropsTypes extends InputProps {
    label: string;
    InputComponent: React.FC<any>;
    IconComponent?: React.FC<any>;
    id?: string;
    options?: string[];
    inputPlaceHolder?: string;
    labelProps?: {
      className?: string;
      style?: React.CSSProperties;
    };
  }

  const InputWithLabel: React.FC<PropsTypes> = ({ label, InputComponent, labelProps,inputPlaceHolder, id, IconComponent, options, ...props }) => {
    return (
      <FormGroup>
        <LableAtom id={''} {...labelProps} children={label} />
        <InputComponent id={id} placeholder={inputPlaceHolder} {...props} options={options? options : ""} />
      </FormGroup>
    );
  };
  
  export default InputWithLabel;