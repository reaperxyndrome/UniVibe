
export default function Hangoutlist() {

// Container for the Hangoutlist
<div className="flex-col fill-gray-800 overflow-hidden relative flex min-h-[99px] w-full items-stretch mt-3 pl-3.5 pr-6 py-2 max-md:max-w-full max-md:pr-5">
              
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7d28693f13d9f21c26489d01ef02051bc44cc21475fbe70f7f1a8f83e36d23?apiKey=b1110ce74f26469f8c7944650aef6c79&"
                className="absolute h-full w-full object-cover object-center inset-0"
                />
              {/* This is a box that holds the title and date  */}
              <div className="relative flex justify-between gap-5 px-0.5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  {/* This is the title */}
                  <div className="text-white text-base font-bold">Nobar</div>
                  {/* This is the label for the date */}
                  <div className="text-neutral-300 text-xs font-medium whitespace-nowrap mt-2">
                    Due Date
                  </div>
                  {/* This is the detail of the date */}
                  <div className="text-white text-xs font-semibold mt-2.5">
                    10 Oktober, 2023
                  </div>
                </div>
                <div className="flex basis-[0%] flex-col items-stretch mt-7 self-end">
                  {/* This is the label for the time */}
                  <div className="text-neutral-300 text-xs font-medium whitespace-nowrap">
                    Time
                  </div>
                  {/* This is the detail of the time */}
                  <div className="text-white text-xs font-semibold whitespace-nowrap mt-2.5">
                    13.45
                  </div>
                </div>
                <div className="flex grow basis-[0%] flex-col items-stretch mt-6 self-end">
                  {/* This is the label for the location */}
                  <div className="text-neutral-300 text-xs font-medium">
                    Location
                  </div>
                  {/* This is the detail of the location */}
                  <div className="text-white text-xs font-semibold mt-2.5">
                    Mall Grand Indonesia
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/885461b625bfd55a917007c4e9ef65393660c72876d4ab17df5e4f2897c584ae?apiKey=b1110ce74f26469f8c7944650aef6c79&"
                  className="aspect-[3.07] object-contain object-center w-[89px] overflow-hidden self-center shrink-0 max-w-full"
                  />
              </div>
              {/* This is the description */}
              <div className="relative text-white text-xs font-medium bg-orange-500 justify-center mt-1.5 pl-5 pr-16 py-2.5 rounded-2xl items-start max-md:max-w-full max-md:pr-5">
                film the creator jam 13.45
              </div>
            </div>

}
