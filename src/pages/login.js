// Ensure this component is treated as a client component
"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Login() {
  // Initialize the Next.js router
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle the login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login validation (use real authentication in production)
    if (username === 'test' && password === 'password') {
      // Redirect to the main page after successful login
      router.push('/main');
    } else {
      // Display an error message for invalid credentials
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ width: '100%', padding: '10px' }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
