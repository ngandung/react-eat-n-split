const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;

  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
      <FormAddFriend />
      <Button>Add Friend</Button>
    </>
  );
}

function Button({children}) {
  return <button className="button">{children}</button>;
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return <form className="form-add-friend">
    <label>👩🏼‍🤝‍👩🏻 Friend Name</label>
    <input type="text"></input>

    <label>🖼 Image URL</label>
    <input type="text"></input>

    <Button>Add</Button>
  </form>
}

function FormSplitBill() {
  return <form className="form-split-bill">
    <label>💰 Bill Value</label>
    <input type="text"></input>

    <label>🙍‍♂️ Your Expense</label>
    <input type="text"></input>

    <label>🙍 Friend's expense</label>
    <input type="text" disabled></input>

    <label>🤑 Who is paying the bill</label>
    <select>
      <option value="user">You</option>
      <option value="friend">Friend</option>
    </select>

    <Button>Split bill</Button>
  </form>
}
