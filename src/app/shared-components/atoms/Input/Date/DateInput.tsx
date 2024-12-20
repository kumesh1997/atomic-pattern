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

    const syntheticEvent = {
      target: {
        name:  id,
        value: date,
      }
    };
    onChange(syntheticEvent); // Pass the updated value
  };

  const handleDateClick = () => {
    if (!disabled && !readonly) {
      document.getElementById(id)?.focus();
    }
  };

  return (
    <FormGroup className="form-group">
      {label && (
        <LableAtom
          children={label}
          id={id}
        />
      )}
      <div
        className="input-wrapper"
        onClick={handleDateClick}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: disabled || readonly ? "not-allowed" : "pointer",
        }}
      >
          {/* FontAwesome Calendar Icon */}
          <i className="fas fa-calendar-alt" style={{ marginRight: "8px" }}></i>
      <Input
        aria-label={id}
        id={id}
        valid={valid}
        invalid={invalid}
        className={className}
         placeholder={placeHolder || "Select Date"}
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
      </div>
    </FormGroup>
  );
};

export default DateInput;
