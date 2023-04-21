import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all",
    };

    this.SearchRef = React.createRef();
  }

  HandleKey = (event) => {
    if (event.key === "Enter") {
      this.props.SearchMovie(this.state.search, this.state.type);
    }
  };

  HandleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.SearchMovie(this.state.search, this.state.type);
      }
    );
  };

  componentDidMount() {
    this.SearchRef.current.focus();
  }

  render() {
    return (
      <>
        {" "}
        <div className="row">
          <div className="col s12">
            <div className="input-field">
              <input
                className="validate"
                id="email_inline"
                placeholder="Search"
                type="search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.HandleKey}
                ref={this.SearchRef}
              />
              <button
                className="btn search-btn"
                onClick={() => {
                  if (this.state.search.length !== 0) {
                    this.props.SearchMovie(this.state.search, this.state.type);
                  }
                }}
              >
                search
              </button>
            </div>
          </div>
          <div>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value="all"
                onChange={this.HandleFilter}
                checked={this.state.type === "all"}
                data-type="all"
              />
              <span>all</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value="movie"
                onChange={this.HandleFilter}
                checked={this.state.type === "movie"}
                data-type="movie"
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value="series"
                onChange={this.HandleFilter}
                checked={this.state.type === "series"}
                data-type="series"
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </>
    );
  }
}

export { Search };
