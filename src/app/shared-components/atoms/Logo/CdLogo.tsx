
interface StyleProp {
    width: number;
    height?: number;
    padding?: 2;
  }
  

interface propsTypes{
    src: string;
    alt?: string;
    style? : StyleProp;
    className: string;
}

const Logo = (props : propsTypes) => {
    const {style} = props;
    return ( <img style={style} {...props}/> );
}

export default Logo;