import * as React from "react";

// Defining all of DashboardComponents components
function DashboardComponents(props) {
  return (
    <div className="px-10">
        {/* Contains the upcoming tasks section */}
        <div className="bg-zinc-300 flex flex-col mt-5 pl-4 pr-20 py-3 rounded-xl max-md:max-w-full h-fit max-md:pr-5">
          {/* Contains the upcoming tasks section's title */}
          <div className="text-black text-xl font-semibold max-l flex items-center">
            Upcoming Tasks
          </div>
          {/* Contains the upcoming tasks section's content */}
          <div className="text-black text-base">24 Jan</div>
          {/* Contains the upcoming tasks section's content */}
          <div className="text-black text-base w-[400px] mt-5">
            -&gt; 11:35 do ai homework
            <br />
            -&gt; 13:15 Make DS prototype
          </div>
          {/* Contains the upcoming tasks section's content */}
          <div className="text-black text-base underline mt-4">
            see more
          </div>
        </div>
    </div>
  );
  }

// Exporting the DashboardComponents components so that it can be used by other parts of the application  
export default DashboardComponents;