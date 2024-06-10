import ProfileList from 'components/ProfileList';
import Statistics from 'components/Statistics';
import users from './user.json';
import data from './data.json';
console.log('data:', data);

console.log('users:', users);

export default function App() {
  return (
    <div>
      <ProfileList items={users} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}
