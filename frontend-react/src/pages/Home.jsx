import React from "react";
import Leaderboards from "../components/Leaderboards/Leaderboards";
import Profile from "../components/Profile/Profile";
import BattleCharacter from "../components/BattleCharacter/BattleCharacter";
import Settings from "../components/Settings/Settings";
import UserProfile from "../components/UserProfile/UserProfile";
import "./Home.css"
import bg from "../assets/img/4455.jpg"

export default function Home(){
    return(
        <div className="container">
            <img src={bg} alt="" />
            <Profile/>
            <div className="container-box">
                <BattleCharacter/>
                <Leaderboards/>
                <Settings/>
                <UserProfile/>
            </div>
        </div>
    )
}