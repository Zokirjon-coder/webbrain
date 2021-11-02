import './App.css';
// import Login from './Components/LogIn/Login';
// import Foods from './Components/Foods/Foods';
import Sidebar from './Components/sidebar/Sidebar';
import { Container } from './Components/style/styled';

function App() {
  return (
    <div className="App">

      <Container>
        <Sidebar />
      </Container>

    </div>
  );
}

export default App;
