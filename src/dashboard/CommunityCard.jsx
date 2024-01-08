import "./CommunityCardStyle.css";

function CommunityCard(){
    return(
        <div className="flex flex-col items-center rounded-lg shadow-md bg-[antiquewhite] w-56 p-5">
            <img src="" className="w-[60px] h-[60px] bg-black relative"></img>
            <div className="text-center mt-4 mb-5">
                <h2 className="font-bold mb-3">Community Name</h2>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum augue sit amet neque varius.
                </p>
            </div>
            <button className=" p-2 px-4 rounded-md bg-white">Join this community</button>
        </div>
    )
}

export default CommunityCard;