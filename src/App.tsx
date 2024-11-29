import './App.css';
import InputField from './app/shared-components/atoms/Input/InputField';
import Btn from './app/shared-components/atoms/Button';
import InputPasswordField from './app/shared-components/atoms/Input/password';
import { faCoffee, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Icon from './app/shared-components/atoms/Icon';
import Logo from './app/shared-components/atoms/Logo';
import H1 from './app/shared-components/atoms/Headings/H1Element';
import Badges from './app/shared-components/atoms/Badge';
import DropDownAtom from './app/shared-components/atoms/DropDown';
import Date from './app/shared-components/atoms/Date';
import LableAtom from './app/shared-components/atoms/Lable';
import InputWithLabel from './app/shared-components/molecules/InputWithLable';
import InputGroupComponet from './app/shared-components/molecules/InputGroup';
import { Placeholder } from 'reactstrap';

function App() {

  return (
    <div className="App">
      {/* <InputField placeholder="dvjksdb" />
      <Btn children={"sdkjbsd"} color='primary' size='lg' />
      <InputPasswordField type='password' />
      <Icon icon={faCoffee} size='10x' color='blue'/>
      <Logo src='/logo192.png' style={{ width: 500, height: 300 }} />
      <H1 children="Kuemsh" />
      <Badges children="Badge" color='primary' />
      <Badges children="Badge" color='success' />
      <Badges children="Badge" color='danger' />
      <DropDownAtom options={["A", "B",]}  style={{size:'lg', padding: 10}} />
      <Date placeholder='skfh' />
      <LableAtom children='sdkjb' style={{ fontSize: '16px', color: 'blue', fontWeight: 'bold' }}/>
      <InputWithLabel InputComponent={InputPasswordField} label='User Name' inputProps={{placeholder:"dvjksdb", type:"text"}} labelProps={{className: '', style:{color: 'blue', float:'left'}}}/>
      <InputWithLabel InputComponent={DropDownAtom} label='User Name' inputProps={{placeholder:"dvjksdb", type:"select", options:["A", "B",]}} labelProps={{className: '', style:{color: 'blue', float:'left'}}}/> */}
      <InputGroupComponet InputComponent={InputField} IconComponent={Icon} inputProps={{placeholder: "askhsdb", className:'border-0'}} IconProps={{ icon:faMagnifyingGlass , size:'2x', color:'gray', style:{padding:5}}} />
    </div>
  );
}

export default App;
