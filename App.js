import logo from './logo.svg';
import './App.css';
import Counter from './components/myCounter';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { Navbar, Pagination } from 'react-bootstrap';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';
import TodoListComponent from './components/todolist';
import EditTaskModalComponent from './components/edittaskmodal';
import PaginationComponent from './components/pagination';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent/>  
      </header>
      <body>
         <TodoListComponent/>
         <EditTaskModalComponent/>
         <PaginationComponent/>
         <FooterComponent/>
      </body>
    </div>
  );
}

export default App;
