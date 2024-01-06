import * as React from "react";

function DashboardComponents(props) {
  return (
      <div className="bg-zinc-300 self-stretch flex flex-col mt-5 pl-4 pr-20 py-3 rounded-xl items-start max-md:max-w-full max-md:pr-5 flex items-center absolute right-100 bottom-100">
      <div className="text-black text-xl font-semibold self-stretch max-l flex items-center absolute">
        Upcoming Tasks
      </div>
      <div className="justify-center text-black text-base">24 Jan</div>
      <div className="justify-center text-black text-base w-[400px] mt-5">
        -&gt; 11:35 do ai homework
        <br />
        -&gt; 13:15 Make DS prototype
      </div>
      <div className="justify-center text-black text-base underline mt-4">
        see more
      </div>
    </div>
  );
  }
export default DashboardComponents;