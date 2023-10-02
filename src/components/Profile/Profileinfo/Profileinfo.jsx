import p from "./Profileinfo.module.css";
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div className={p.headProfile}>
            <div className={p.avatar}>
                <img
                    src="https://t4.ftcdn.net/jpg/04/98/77/71/360_F_498777116_uKag8YBb0UIA5b3Tr3ioYUkhxGm7jyRL.jpg"/>
                <div className={p.description}>
                    <p>Danya Lila <span className={p.descriptionBio}>Wrestling KMS</span></p>
                </div>
            </div>
            <div className={p.infoProfile}>
                <div className={p.infoItems}>
                    <p>30<span className={p.infoText}>Posts</span></p>
                </div>
                <div className={p.infoItems}>
                    <p>50<span className={p.infoText}>Folowing</span></p>
                </div>
                <div className={p.infoItems}>
                    <p>70<span className={p.infoText}>Folowings</span></p>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;