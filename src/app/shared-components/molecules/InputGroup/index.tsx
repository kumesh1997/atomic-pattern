import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { InputGroup } from "reactstrap";
import { CSSModule } from "reactstrap/types/lib/utils";

interface StyleProp {
    width?: number;
    fontSize?: number;
    padding?: number;
  }

interface PropsTypes {
  IconComponent?: React.FC<any>;
  InputComponent: React.FC<any>;
  className? : string;
  inputProps: {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    id?: string;
    type?: string | "submit";
    options?: string[];
    children?: React.ReactNode;
    color?: string;
    onClick?: (key: any) => void;
    outline?: boolean | undefined;
    size?: string;
    style?: CSSModule | StyleProp;
    active?: boolean;
    disabled?: boolean;
    tag?: React.ElementType;
    href?: string;
    value?: string;
    as?: string;
    name?: string;
    cssModule?: CSSModule;
    target?: string;
    title?: string;
    close?: boolean;
    block?: boolean;
    placeholder?: string;
  };
  IconProps?: {
    color?: string;
    className?: string;
    size: SizeProp;
    style?: CSSModule | StyleProp;
    active?: boolean;
    disabled?: boolean;
    name?: string;
    cssModule?: CSSModule;
    icon: IconProp;
  };
}

const InputGroupComponet : React.FC<PropsTypes> = (props: PropsTypes) => {
    const {IconComponent, IconProps, InputComponent, inputProps, className} = props;
    return (
        <InputGroup className= {`border border-1 border-secondary rounded-sm p-1 ${className}`}>
        {IconComponent && (
          <IconComponent icon={IconProps?.icon} {...IconProps} />
        )}
        <InputComponent {...inputProps} />
      </InputGroup>
    );
}

export default InputGroupComponet;