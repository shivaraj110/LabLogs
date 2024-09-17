type codeInput = {
  code: string;
  title: string;
};
const Card = (codeInput: codeInput) => {
  return (
    <div className="card">
      <div className="header">
        <div className="top">
          <div className="circle">
            <span className="red circle2" />
          </div>
          <div className="circle">
            <span className="yellow circle2" />
          </div>
          <div className="circle">
            <span className="green circle2" />
          </div>
          <div className="title">
            <p id="title2">{codeInput.title}</p>
          </div>
        </div>
      </div>
      <div className="code-container">
        <textarea className="area code" id="code" name="code" readOnly>
          {codeInput.code}
        </textarea>
      </div>
    </div>
  );
};
export default Card;
