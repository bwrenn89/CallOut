import React from 'react';
import { AmplifyProvider, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

// Import your routes or components
import YourAppRoutes from './YourAppRoutes'; // Replace this with your routes file

// Configure Amplify
Amplify.configure(awsExports);

function App() {
  return (
    <AmplifyProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Welcome, {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
            <YourAppRoutes user={user} />
          </div>
        )}
      </Authenticator>
    </AmplifyProvider>
  );
}

export default App;
