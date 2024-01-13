import { useNavigate } from "react-router-dom";


function CommunityCard(props){
    const navigate= useNavigate()
    return(
        <div className="flex flex-col items-center rounded-lg shadow-md bg-[antiquewhite] w-56 p-5">
            <img src={props.icon} className="w-[60px] h-[60px] bg-black relative"></img>
            <div className="text-center mt-4 mb-5">
                <h2 className="font-bold mb-3">{props.name}</h2>
                <p className="text-sm text-black">{props.description}
                </p>
            </div>
            <button className=" p-2 px-4 rounded-md bg-white" onClick={()=>{navigate('/dashboard/'+props.chatname)}}>Join this community</button>
        </div>
    )
}

export default CommunityCard;