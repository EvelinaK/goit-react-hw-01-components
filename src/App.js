import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./data/User.json";
import StaticticList from "./components/Statistic/Statistics";
import statistical from "./data/Statistical-data.json";
import friends from "./data/Friends.json";
import FriendsList from "./components/Friends/FriendsList";
import transactions from "./data/Transaction.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
const App = () => {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        url={user.avatar}
        stats={user.stats}
      />
      <StaticticList stats={statistical} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
