import { FormFeedback, FormGroup, Input } from "reactstrap";
import { CSSProperties } from "react";
import LableAtom from "../../Lable/CdLable";

type DateInputProps = {
  id: string;
  valid?: boolean;
  invalid?: boolean;
  className?: string;
  placeHolder?: string;
  label?: string;
  onChange: (data: any) => void;
  defaultValue?: string;
  value?: string;
  width?: string;
  style?: CSSProperties;
  feedback?: string;
  required?: boolean;
  onFocus?: () => void;
  disabled?: boolean;
  readonly?: boolean;
};

const DateInput: React.FC<DateInputProps> = ({
  valid,
  invalid,
  className,
  placeHolder,
  label,
  onChange,
  defaultValue,
  value,
  width,
  style,
  feedback,
  required,
  onFocus,
  id,
  disabled = false,
  readonly = false,
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    onChange({
      name: id,
      value: date
    }); // Pass the updated value
  };

  return (
    <FormGroup className="form-group">
      {label && (
        <LableAtom
          children={label}
          id={id}
        />
      )}
      <Input
        aria-label={id}
        id={id}
        valid={valid}
        invalid={invalid}
        className={className}
        placeholder={placeHolder}
        onChange={handleChange}
        onFocus={onFocus}
        value={value}
        defaultValue={defaultValue}
        style={{
          ...style,
          width: width,
        }}
        type="date"
        disabled={disabled}
        readOnly={readonly}
      />
    </FormGroup>
  );
};

export default DateInput;
