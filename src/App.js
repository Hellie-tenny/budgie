import './App.css';
import Deposit from './components/Deposit';

function App() {
  return (
    <div className="App">
      <Deposit />
      <div className="header">
        <h1 id='logo-text'>Budgie.</h1>
      </div>
      <div className='main'>
        <div className='grid-item'></div>
        <div className='grid-item'>
          <div className='transact'>
            <button id='deposit'>Deposit</button>
            <button id='withdraw'>Withdraw</button>
          </div>
          
        </div>
        <div className='grid-item'>
          <h2 id="balance">1,000,000,000</h2>
          <div className='pockets'>
            <ul>
              <li>Cash</li>
              <li>Mpamba</li>
              <li>Airtel Money</li>
              <li>Bank</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
