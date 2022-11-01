import './App.css';
import LoginForm from "./LoginForm";

function App() {
  const handleLogin = values => {
    // Display the form data to console
    console.log(`User name: ${values.username}`);
    console.log(`Password: ${values.password}`);
    console.log(`DOB: ${values.dob}`);
  }
  return (
    <div className="App">
      <div className="login-form">
        <h2>Redux form</h2>
        { /* Call the login form */ }
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}
export default App;
