import p from './Profile.module.css';
import React from "react";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = () => {
    return (
        <section className={p.profile} id='profile'>
            <ProfileInfo />
            <MyPosts/>
        </section>
    );
};

export default Profile;