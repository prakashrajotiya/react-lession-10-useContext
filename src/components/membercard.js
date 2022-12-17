const MemberCard = (props) => {
  // console.log(props);
  const { avatar_url, login, public_repos } = props.member;
  return (
    <div className="membercard">
      <img src={avatar_url} />
      <div className="membercard-info">
        <h2>{login}</h2>
        <p>{public_repos}</p>
      </div>
    </div>
  );
};
export default MemberCard;
