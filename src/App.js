function App(){

  const title = 'Greetings from React'
  const body = 'This is my React mess'
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" }
  ]

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>

      <div className="comments"></div>
      <h3>Comments: {comments.length}</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

}

export default App