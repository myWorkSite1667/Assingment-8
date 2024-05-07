import logo from './logo.svg';
import './App.css';
import Shop from './component/shop/Shop';
import StorageCart from './component/StorageCart/StorageCart';

function App() {

  return (
    <div className="App">
        <div className="mainbody">
        <div className="shop">
        <Shop></Shop>
        </div>
     <div className="addstorage">
     <StorageCart></StorageCart>
     </div>
        </div>
    </div>
  );
}

export default App;
