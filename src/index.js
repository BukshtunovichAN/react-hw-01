import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import users from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => (
  <div>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </li>
      ))}
    </ul>
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
