import { Link } from 'react-router-dom';

export default function NewHangout() {
  return (
    <div className="bg-white flex max-w-[780px] flex-col items-center pl-16 pr-6 pt-7 pb-12 max-md:px-5">
      <div className="text-stone-800 text-center text-xl font-semibold tracking-wider w-[325px]">
        Schedule a meeting
      </div>
      <div className="self-stretch mt-14 mb-14 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-10">
              <div className="text-black text-sm font-medium tracking-wider">
                Meeting Title
              </div>
              <div className="text-gray-400 text-sm border shadow-2xl bg-white justify-center mt-1.5 pl-3 pr-16 py-4 rounded-xl border-solid border-black items-start max-md:pr-5">
                Title
              </div>
              <div className="text-stone-800 text-base font-medium tracking-wider mt-6">
                Meeting Description
              </div>
              <div className="text-gray-400 text-sm border shadow-2xl bg-white mt-1.5 pl-4 pr-16 pt-4 pb-2.5 rounded-xl border-solid border-black items-start max-md:pr-5">
                Description
              </div>
              <div className="text-stone-800 text-base font-medium tracking-wider mt-7">
                Meeting Date
              </div>
              <div className="border shadow-2xl bg-white flex justify-between gap-5 px-4 py-3 rounded-xl border-solid border-black items-start">
                <div className="text-gray-400 text-sm mt-2">Date</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c98f4acd0a97094f1ffac8a80f0eaef9064e1487fd2e4029fd44240bfabf6b5?apiKey=b1110ce74f26469f8c7944650aef6c79&"
                  className="aspect-[1.12] object-contain object-center w-[19px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col my-auto max-md:mt-10">
              <div className="text-stone-800 text-base font-medium tracking-wider self-stretch">
                Meeting Time
              </div>
              <div className="border shadow-2xl bg-white self-stretch flex items-center justify-between gap-5 mt-2 px-4 py-2.5 rounded-xl border-solid border-black">
                <div className="text-gray-400 text-sm my-auto">Time</div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/375eea48e7ef8858a527be44bc3bcaf8239b8d66f11bcb17e0785a9f3cce846d?apiKey=b1110ce74f26469f8c7944650aef6c79&"
                  className="aspect-[1.05] object-contain object-center w-[22px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div className="text-stone-800 text-base font-medium tracking-wider self-stretch mt-5">
                Meeting Location
              </div>
              <div className="text-gray-400 text-sm border shadow-2xl bg-white self-stretch justify-center mt-1.5 pl-4 pr-16 py-4 rounded-xl border-solid border-black items-start max-md:pr-5">
                Location
              </div>
            {/* Host button that navigates to the Hangout */}
            <Link to="/dashboard/hangout">
              <div className="text-white text-center text-xs font-bold tracking-wider uppercase whitespace-nowrap bg-blue-600 justify-center items-stretch mt-10 px-10 py-4 rounded-3xl max-md:px-5 cursor-pointer">
                Host
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

