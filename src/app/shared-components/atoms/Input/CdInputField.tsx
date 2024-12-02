import { Input } from "reactstrap";
import { CSSModule } from "reactstrap/types/lib/utils";
import { InputProps } from "reactstrap";

interface StyleProp {
    width: number;
    fontSize: number;
    padding: number;
    borderRadius ?: '25px';
  }
  
  interface PropsTypes extends InputProps {
    children?: React.ReactNode;
    color?: string;
    onClick?: (key:any) => void;
    className?: string;
    id?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    outline?:boolean | undefined;
    size?: 5;
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
    borderRadious?: string
  }

const InputField = (props: PropsTypes) => {
    const { placeholder, } = props;
    return (
      <Input placeholder={placeholder} style={{borderRadius: '10px'}} {...props} />
    );
  };
  
  export default InputField;