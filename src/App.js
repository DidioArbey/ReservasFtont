import AuthProvider from './auth/AuthProvider';
import logo from './logo.svg';
import AppRouter from './routers/AppRouter';
// import './App.css';

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>

    </div>
  );
}

export default App;
