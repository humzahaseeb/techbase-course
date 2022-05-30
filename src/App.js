import './App.css';
import SetData from './components/SetData';
import DataFetching from './components/DataFetching';
import Form from './components/Form';
import ConditionalRendering from './components/ConditionalRendering';
import FileUpload from './components/FileUpload';
import ComponentA from './components/CustomHooks/ComponentA';
import ComponentB from './components/CustomHooks/ComponentB';

function App() {
  return (
    <div className="App">
      {/* <ConditionalRendering /> */}
      {/* <Form /> */}
      {/* <DataFetching /> */}
      {/* <SetData /> */}
      {/* <FileUpload /> */}
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default App;
