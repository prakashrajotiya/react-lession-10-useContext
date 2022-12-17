import MemberCard from "./membercard";
import { NavLink } from "react-router-dom";
import Loader from "./loader";
const MemberList = (props) => {
  console.log(props.loading);
  if (props.loading) {
    return <Loader />;
  } else if (props.memberData.length > 0) {
    const memberList = props.memberData.map((member) => {
      return (
        <div className="col-12 col-md-4 mb-3" key={member.id}>
          <NavLink to={`/member/${member.login}`}>
            <MemberCard member={member} />
          </NavLink>
        </div>
      );
    });

    return memberList;
  } else if (!props.loading && props.memberData.length == 0) {
    return <div>Not data found</div>;
  }
};
export default MemberList;
