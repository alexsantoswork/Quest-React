import './App.css';
import TitleStyling from './components/titleStyling/titleStyling'
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">

       <>
          <TitleStyling title='Quest React Basic'/>
          <Button label='Concluído' />
       </>

      </header>
    </div>
  );
}

export default App;
