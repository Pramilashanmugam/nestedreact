import css from './App.module.css';
import NavBarForm from "./components/NavBarForm";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;