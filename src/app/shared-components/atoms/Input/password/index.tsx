import { colors } from "@mui/joy";
import { Input } from "reactstrap";
import { CSSModule } from "reactstrap/types/lib/utils";

interface StyleProp {
    width: number;
    fontSize: number;
    padding: number;
  }
  
  interface propsTypes {
    children?: React.ReactNode;
    color?: string;
    onClick?: (key:any) => void;
    className?: string;
    id?: string;
    type?: 'password' | undefined;
    outline?:boolean | undefined;
    size?:string
    style?:CSSModule | StyleProp
    active?:boolean
    disabled?:boolean
    tag?: React.ElementType ;
    href?:string
    value?:string
    as?:string;
    name?: string
    cssModule?: CSSModule;
    target?: string;
    title?:string
    close?:boolean
    block?:boolean
    placeholder?: string
  }

const InputPasswordField = (props: propsTypes) => {
    const { children, placeholder, type } = props;
    return (
      <Input type={type} placeholder={placeholder}>
      </Input>
    );
  };
  
  export default InputPasswordField;