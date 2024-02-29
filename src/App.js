
import { useState } from 'react';
import './App.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='dropdown-container'>
      <h1>Should you use a dropdown?</h1>
      <div>
      <button className='btn' onClick={() => setIsOpen((prev) => !prev)}>Dropdown
      {!isOpen?
        <img className='icon' src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png'/>:
        <img className='icon' src='https://www.freeiconspng.com/thumbs/arrow-down-icon-png/black-arrow-down-icon-png-16.png'/>
      }
      </button>
      </div>
    </div>
  );
}

export default App;
