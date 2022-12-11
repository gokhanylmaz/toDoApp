import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState()
  const [message, setMessage] = useState([])
  console.log('text', text);
  const onChangeFunc = (e) => {
    setText(e.target.value)
  }
  const messageFunc = () => {
    setMessage(prev => [...prev, text])
    setText('')
  }
  console.log(message)
  return (
    <div className='todoApp text-center mt-5'>
        <h1 className='mb-5 display-3'>To Do App </h1>
        <div className='d-flex justify-content-center mb-5'>
          <input value={text} onChange={onChangeFunc} type="text" placeholder='add' />
          <button onClick={messageFunc} className='btn btn-dark'>Add</button>
        </div>
        {
          message?.map((msg,i)=>(
            <div className='p-2 border' key={i}>{msg}</div>
          ))
        }
    </div>
  );
}

export default App;
