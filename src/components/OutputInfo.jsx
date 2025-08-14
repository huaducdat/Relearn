import "./output-section.css";

function OutPutInfo({ userList, removeAction }) {
  if (!userList || userList.length === 0) {
    return <p>List empty.</p>;
  }

  return (
    <section id="output-infor">
      <strong
        style={{
          borderBottom: "2px solid black",
          width: "100%",
          paddingBottom: "1ch",
          fontSize: "1.2rem",
        }}
      >
        {"List User"}
      </strong>
      <ul>
        {userList.map((user, index) => (
          <li key={index} className={index % 2 ? "" : "gray"}>
            <div>
              <b>Name:</b> {user.name}
            </div>
            <div>
              <b>Age:</b> {user.age}
            </div>
            <button onClick={() => removeAction(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OutPutInfo;
