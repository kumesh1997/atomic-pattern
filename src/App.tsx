import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import renderRoutes from './app/config/routings/RenderRoutes';
import { appRoutes } from './app/config/routings/routesConfig';
import InputField from './app/shared-components/atoms/Input/CdInputField';
import Btn from './app/shared-components/atoms/Button/CdButton';
import InputPasswordField from './app/shared-components/atoms/Input/password/CdPassword';
import { faCoffee, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Icon from './app/shared-components/atoms/Icon/CdIcon';
import Logo from './app/shared-components/atoms/Logo/CdLogo';
import H1 from './app/shared-components/atoms/Headings/H1Element';
import Badges from './app/shared-components/atoms/Badge/CdBadge';
import DropDownAtom from './app/shared-components/atoms/DropDown/CdDropDown';
import Date from './app/shared-components/atoms/Date/CdDate';
import LableAtom from './app/shared-components/atoms/Lable/CdLable';
import InputWithLabel from './app/shared-components/molecules/InputWithLable/CdInputWithLable';
import CdInputGroup from './app/shared-components/molecules/InputGroup/CdInputGroup';
import { Placeholder } from 'reactstrap';
import TableHeaderRow from './app/shared-components/molecules/Table/TableHeaderRow/TableHeaderRow';
import LoginForm from './app/modules/login/loginForm';
import ProjectTable from './app/modules/project/projectTable';
import Overview from './app/modules/dashboard/overview';

function App() {

  return (
    // <div className="App">
    //   <InputField placeholder="dvjksdb" />
    //   <Btn children={"sdkjbsd"} color='primary' size='lg' />
    //   <InputPasswordField type='password' />
    //   <Icon icon={faCoffee} size='10x' color='blue'/>
    //   <Logo src='/logo192.png' style={{ width: 500, height: 300 }} />
    //   <H1 children="Kuemsh" />
    //   <Badges children="Badge" color='primary' />
    //   <Badges children="Badge" color='success' />
    //   <Badges children="Badge" color='danger' />
    //   <DropDownAtom options={["A", "B", "C"]} style={{size:'lg', padding: 10}} />
    //   <Date placeholder='skfh' />
    //   <LableAtom children='sdkjb' style={{ fontSize: '16px', color: 'blue', fontWeight: 'bold' }}/>
    //   <InputWithLabel InputComponent={InputPasswordField} label='User Name' inputProps={{placeholder:"dvjksdb", type:"text"}} labelProps={{className: '', style:{color: 'blue', float:'left'}}}/>
    //   <InputWithLabel InputComponent={DropDownAtom} label='User Name' inputProps={{placeholder:"dvjksdb", type:"select", options:["A", "B",]}} labelProps={{className: '', style:{color: 'blue', float:'left'}}}/>
    //   <CdInputGroup InputComponent={InputField} IconComponent={Icon} inputProps={{placeholder: "askhsdb", className:'border-0'}} IconProps={{ icon:faMagnifyingGlass , size:'2x', color:'gray', style:{padding:5}}} />
    //   <TableHeaderRow headers={["A", "B"]} />
    //   <LoginForm />
    //   <Overview />
    //   <ProjectTable />
    // </div>
    <BrowserRouter>
      <Routes>{renderRoutes(appRoutes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
