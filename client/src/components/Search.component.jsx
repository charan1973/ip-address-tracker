import arrowIcon from "../assets/icon-arrow.svg";

const Search = ({ ipInput, setIpInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex" }}>
        <input
          className="input"
          type="text"
          placeholder="Enter an IP address"
          onChange={(e) => setIpInput(e.target.value)}
          value={ipInput}
        />
        <button className="button">
          <img src={arrowIcon} alt="search-icon" width={10} height={10} />
        </button>
      </div>
    </form>
  );
};

export default Search;
