const App = () => {
  return (
    <div>
      <h1>Hello, everyone!</h1>
      <p>We think</p>
      <ul>
        <li>React</li>
        <li>is</li>
        <li>brilliant!</li>
      </ul>
    </div>
  );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));
