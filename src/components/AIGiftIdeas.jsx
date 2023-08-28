import "./styles/AIGiftIdeas.css";

const AIGiftIdeas = () => {
  return (
    <div id="aichat" className="AI-Gift-Ideas">
      <div className="innerContainer">
        <div className="innerContainer-heading">
          <h1>AI Curated Gift Ideas</h1>
          <p>
            Our AI-powered tool will guide you in choosing the perfect gift when
            you&apos;re unsure about what to buy. Simply fill out the form below
            with information about the recipient and your budget, and we&apos;ll
            suggest a curated list of gifts!
          </p>
        </div>
        <div className="innerContainer-form">
          <form>
            <h3>Gifts Details</h3>
            <div className="form-group">
              <label htmlFor="relationship">Relationship</label>
              <input
                type="text"
                className="form-control"
                id="relationship"
                placeholder="Enter relationship"
                required
              />

              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter age"
                required
              />

              <label htmlFor="occasion">Occasion</label>
              <input
                type="text"
                className="form-control"
                id="occasion"
                placeholder="Enter occasion"
                required
              />

              <label htmlFor="interest">Interest</label>
              <input
                type="text"
                className="form-control"
                id="interest"
                placeholder="Enter interest"
                required
              />

              <label htmlFor="budget">Budget</label>
              <input
                type="number"
                className="form-control"
                id="budget"
                placeholder="Enter budget"
                required
              />
            </div>
          </form>
        </div>
        <div className="innerContainer-button">
          <button type="submit" className="btn">
            Get Gift Suggestions
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIGiftIdeas;
