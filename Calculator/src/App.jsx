import Display from './components/Display'
import styles from "./App.module.css"
import ButtonContainer from './components/ButtonContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
         <Display />
         <ButtonContainer></ButtonContainer>
    </div>
  );
};

export default App
