// Defining the CommunityCard component which is used in the Community section of the dashboard
function CommunityCard(){
    return(
        // Contains all the elements of a community card in Communities.jsx
        <div className="flex flex-col items-center rounded-lg shadow-md bg-[antiquewhite] w-56 p-5">
            {/* An image element which displays the community's logo or picture */}
            <img src="" className="w-[60px] h-[60px] bg-black relative"></img>
            <div className="text-center mt-4 mb-5">
                {/* A heading for the community's name */}
                <h2 className="font-bold mb-3">Community Name</h2>
                {/* A paragraph which contains the community's description */}
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum augue sit amet neque varius.
                </p>
            </div>
            {/* A button that users can click to join a community */}
            <button className=" p-2 px-4 rounded-md bg-white">Join this community</button>
        </div>
    )
}

// Exporting CommunityCard so that it can be used by other parts of the application
export default CommunityCard;