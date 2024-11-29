import { Input } from "reactstrap";

interface StyleProp {
    width: number;
    fontSize: number;
    padding: number;
  }
  
  interface PropsTypes {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    id?: string;
    style?: React.CSSProperties | StyleProp;
    value?: string;
    name?: string;
    placeholder? : string
  }

const Date : React.FC<PropsTypes> = (props : PropsTypes) => {
    const {className, id, onChange, style, value, name, placeholder} = props;
    return (
        <Input
          type="date"
          className={className}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          value={value}
          name={name}
        />
      );
}

export default Date;