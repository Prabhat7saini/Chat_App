const UserListItem = ({ handleFunction, result }) => {
  return (
    <div className="contact"
      onClick={handleFunction}
    >
      <div className="avatar" key={result._id}>
        <img
          alt={result.username}
          src={result.profilePic}
        />
      </div>
        <h4>{result.username}</h4>
    </div>
  );
};

export default UserListItem;