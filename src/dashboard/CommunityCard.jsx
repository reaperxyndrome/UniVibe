import { useNavigate } from "react-router";
import "./CommunityCardStyle.css";

function CommunityCard(){
    return(
        <div className="community-card">
            <img src="" className="Community-icon"></img>
            <div className="information">
                <h4 ><a href="">Community name</a></h4>
                <p className="Description">Community description</p>
            </div>
            {/*use nav is useless*/}
            <button onClick={useNavigate() } className="Join-Button">JOIN</button>
        </div>
    )
}

export default CommunityCard;