import { Label } from 'reactstrap';

interface PropsTypes {
    htmlFor?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

const LableAtom : React.FC<PropsTypes>  = (props : PropsTypes) => {
    const {htmlFor, className, style, children} = props;
    //style={{ fontSize: '16px', color: 'blue' }}
    return (
        <Label htmlFor={htmlFor} className={className} style={style}>
          {children}
        </Label>
      );
}

export default LableAtom;