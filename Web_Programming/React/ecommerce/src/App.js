import './App.css';
import ProductList from './Components/ProductList.jsx';
import ShoppingCart from './Components/ShoppingCart.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

function App() {
  return (
    <>
      <Provider store={store}>
        <ShoppingCart />
        <ProductList />
      </Provider>
    </>
  );
}

export default App;
