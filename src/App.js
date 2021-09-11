import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [tt, settt] = useState()
  const [qwe, setqwe] = useState('')

  // useEffect(() => {
  //   setInterval(() => {
  //     settt({animationName: 'test'})
  //   }, 2000);
  // }, [])

  // useEffect(() => {
  //   setInterval(() => {
  //     if(qwe==='') {
  //       setqwe('qwe')
  //     } else if (qwe==='qwe') {
  //       setqwe('')
  //     }
  //   }, 10000);
  // }, [])

  useEffect(() => {
    setInterval(() => {
      setqwe('qwe')
      setTimeout(() => {
        setqwe('')
      }, 1000);
    }, 3000);
  }, [])

  return (
    <div className="App">
      <p className={qwe} style={tt}>asd</p>
    </div>
  );
}

export default App;
