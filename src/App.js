import './App.css';
import Box from './component/Box'
function App(props) {
  return (
    <main>
      <Box num="첫번째는" name="붕어빵"/>
      <Box num="두번째는" name="군고구마"/>
      <Box num="세번째는" name="호빵"/>
      <Box num="네번째는" name="탕후루"/>
    </main>
  );
}

export default App;
