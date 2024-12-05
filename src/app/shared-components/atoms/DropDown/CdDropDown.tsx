import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { Input } from "reactstrap";

interface StyleProp {
  width?: number;
  fontSize?: number;
  padding?: number;
  size?: SizeProp
}

type SelectInputProps = {
  id: string;
  options: string [];
  valid?: boolean;
  invalid?: boolean;
  plainText?: boolean;
  addon?: boolean;
  className?: string;
  placeHolder?: string;
  label?: string;
  onSelect: (data: any) => void;
  defaultChecked?: string;
  width?: string;
  style?: React.CSSProperties | StyleProp;
  feedback?: string;
  required?: boolean;
  value?: string;
  disabled?: boolean;
};

const DropDownAtom: React.FC<SelectInputProps> = ({ 
  id,
  options,
  valid,
  invalid,
  plainText,
  addon,
  className,
  placeHolder = "All",
  label,
  onSelect,
  defaultChecked,
  width,
  style,
  feedback,
  required = false,
  value,
  disabled = false, }) => {

  const [selected, setSelected] = useState<string | undefined>(defaultChecked);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelected(newValue);

    const syntheticEvent = {
      target: {
        name:  id,  // or use another property to uniquely identify the input
        value: newValue,
      }
    };
    
    // Pass the synthetic event to the onSelect handler
    onSelect(syntheticEvent);  
  };

  const optionList = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  

  return (
    <Input
        aria-label={id}
        id={id}
        type="select"
        valid={valid}
        invalid={invalid}
        plaintext={plainText}
        addon={addon}
        className={className}
        onChange={onChange}
        value={value ?? selected}
        disabled={disabled}
        style={{
          ...style,
          width: width,
        }}
      >
        {!defaultChecked && <option value={""}>{placeHolder}</option>}
        {optionList}
      </Input>
  );
};

export default DropDownAtom;
