import React, { Component } from "react";
import { connect } from "react-redux";
import { addMusicList, delMusicList } from "../../redux/actions/music";
class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
  }
  componentDidMount() {}
  handleChange = e => {
    this.setState({
      inputVal: e.target.value
    });
  };
  addMusic = () => {
    const list = this.props.musicList;
    const id = list[list.length - 1].id;
    this.props.addMusicList({ id: id + 1, name: this.state.inputVal });
  };
  delMusic = id => {
    this.props.delMusicList(id);
  };
  render() {
    const { musicList } = this.props;
    return (
      <div>
        <span>music</span>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.addMusic}>add</button>
        <ul>
          {musicList &&
            musicList.map((v, k) => (
              <li key={k}>
                {v.id} {v.name}
                <button onClick={() => this.delMusic(v.id)}>delete</button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    musicList: state.musicData1
  };
};
const mapDispatchToProps = { addMusicList, delMusicList };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Music);
