import { useEffect, useState, Component } from "react";
// const Profile = () => {
//   const [profileInfo, setprofileInfo] = useState({});
//   useEffect(() => {
//     console.log("use effect");
//     apiCall();
//   }, []);
//   async function apiCall() {
//     const res = await fetch("https://api.github.com/users/prakashrajotiya");
//     const data = await res.json();
//     console.log(data);
//   }
//   return <div>This is Profile Page</div>;
// };

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {} };
    console.log("profile constructor called");
  }
  async componentDidMount() {
    console.log("profile component did mount");
    const data = await fetch("https://api.github.com/users/prakashrajotiya");
    const res = await data.json();
    this.setState({ userInfo: res });
    console.log(res);
  }
  componentDidUpdate() {
    console.log("profile compoenent did update");
  }
  render() {
    const { bio, avatar_url } = this.state.userInfo;
    console.log("profile render called");
    return (
      <>
        <img
          src={avatar_url}
          loading="lazy"
          style={{ width: "200px", height: "200px" }}
        />
        <div>{this.props.name}</div>
        <div>{bio}</div>
      </>
    );
  }
}

export default Profile;
