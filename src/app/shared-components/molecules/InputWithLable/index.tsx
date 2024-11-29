import { FormGroup } from 'reactstrap';
import LableAtom from '../../atoms/Lable';


interface PropsTypes {
    label: string;
    InputComponent: React.FC<any>;
    inputProps: {
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      className?: string;
      id?: string;
      style?: React.CSSProperties;
      value?: string;
      name?: string;
      placeholder?: string;
      type: string | 'password'
      options?: string[];
    };
    labelProps?: {
      className?: string;
      style?: React.CSSProperties;
    };
  }

  const InputWithLabel: React.FC<PropsTypes> = ({ label, InputComponent, inputProps, labelProps }) => {
    return (
      <FormGroup>
        <LableAtom htmlFor={inputProps.id} {...labelProps} children={label} />
        <InputComponent {...inputProps} />
      </FormGroup>
    );
  };
  
  export default InputWithLabel;