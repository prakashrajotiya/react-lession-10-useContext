import SearchBar from "./searchBar";
import MemberList from "./MemberList";
import { useEffect, useState } from "react";
import Location from "./Location";
const Search = () => {
  const [memberData, setmemberData] = useState([]);
  const [memberList, setmemberList] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    apiCall1();
  }, []);

  async function apiCall1() {
    setloading(true);
    const res = await Promise.all([
      fetch("https://api.github.com/users/dinesh"),
      fetch("https://api.github.com/users/suresh"),
      fetch("https://api.github.com/users/rahul"),
      fetch("https://api.github.com/users/atishbhu"),
      fetch("https://api.github.com/users/risacker"),
      fetch("https://api.github.com/users/prakashrajotiya"),
    ]);
    const data = await res[0].json();
    const data1 = await res[1].json();
    const data2 = await res[2].json();
    const data3 = await res[3].json();
    const data4 = await res[4].json();
    const data5 = await res[5].json();
    const result = [data, data1, data2, data3, data4, data5];
    // console.log("promise all", result);
    setmemberData(result);
    setmemberList(result);
    setloading(false);
  }

  return (
    <>
      <SearchBar memberList={memberData} setmemberData={setmemberList} />
      {/* <Location /> */}
      <div className="memberlist">
        <div className="row gutter-md">
          <MemberList memberData={memberList} loading={loading} />
        </div>
      </div>
    </>
  );
};
export default Search;
