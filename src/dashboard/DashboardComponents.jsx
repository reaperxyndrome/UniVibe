// import * as React from "react";
import Cookies from "js-cookie"

function DashboardComponents() {
  const handleSignOut = () => {
    Cookies.remove("token")
    Cookies.remove("role")
    Cookies.remove("username")
  }
  return (
    <div className="px-10">
        <div className="bg-zinc-300 flex flex-col mt-5 pl-4 pr-20 py-3 rounded-xl max-md:max-w-full h-fit max-md:pr-5">
          <div className="text-black text-xl font-semibold max-l flex items-center">
            Upcoming Tasks
          </div>
          <div className="text-black text-base">24 Jan</div>
          <div className="text-black text-base w-[400px] mt-5">
            -&gt; 11:35 do ai homework
            <br />
            -&gt; 13:15 Make DS prototype
          </div>
          <div className="text-black text-base underline mt-4">
            see more
          </div>
        </div>
        <button onClick={handleSignOut}>sign out</button>
    </div>
  );
  }
export default DashboardComponents;