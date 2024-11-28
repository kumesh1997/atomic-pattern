import './App.css';
import InputField from './app/shared-components/atoms/Input/InputField';
import Btn from './app/shared-components/atoms/Button';


function App() {

  return (
    <div className="App">
      <InputField placeholder="dvjksdb" />
      <Btn children={"sdkjbsd"} color='primary' size='lg' />
    </div>
  );
}

export default App;
