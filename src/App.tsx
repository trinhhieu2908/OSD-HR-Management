import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './Configs/configureStore';
import AppRoutes from "./Routes"
import { queryClient } from './Utils/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastContainer
          autoClose={5000}
          draggable={false}
          pauseOnFocusLoss={false}
          limit={10}
        />
        <AppRoutes />
      </Provider>
    </QueryClientProvider>

  )
}

export default App
