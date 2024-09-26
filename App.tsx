import AuthStack from './src/navigation/AuthStack';
import { Provider } from 'react-redux';
import { store } from './src/redux-data/store';

const App = () => {
  return (
   <Provider store={store}>
   <AuthStack/>
   </Provider>
  );
};

export default App;