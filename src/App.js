import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chakra Alt Provider Test
        </p>
        <Button colorScheme='blue'>Button</Button>
      </header>
    </div>
  );
}

export default App;
