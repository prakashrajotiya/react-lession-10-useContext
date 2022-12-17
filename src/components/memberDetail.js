import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MemberDetail = () => {
  const param = useParams();
  const [userInfo, setuserInfo] = useState({});
  console.log(userInfo);
  useEffect(() => {
    apiCall();
  }, []);
  async function apiCall() {
    const res = await fetch(`https://api.github.com/users/${param.login}`);
    const data = await res.json();
    setuserInfo(data);
  }
  return (
    <div className="pt-3">
      <h1>{userInfo.name} Detail</h1>
      <img className="img-fluid" src={userInfo.avatar_url}></img>
      <h3>Name : {userInfo.name}</h3>
      <h3>public Repository : {userInfo.public_repos}</h3>
      <h3>Last Updated : {userInfo.updated_at}</h3>
    </div>
  );
};
export default MemberDetail;
