import o from './MyPosts.module.css';
import React from "react";
import Post from './Posts/Post';
import {NavLink} from "react-router-dom";

const MyPosts = () => {
    return (
        <section className={o.posts}>
            <div className={o.actionPost}>
                <NavLink to="#" className={o.actionBtn}>Add post</NavLink>
                <NavLink to="#" className={o.actionBtn}>Remove post</NavLink>
                <NavLink to="#" className={o.actionBtn}>Edit profile</NavLink>
            </div>
            <Post message='Hi, how are you?' like="267" comets="15" share="12"/>
            <Post message="It's my first post." like="787" comets="25" share="52"/>
            <Post message="I'm fine!!!" like="138" comets="65" share="552"/>
        </section>
    );
};

export default MyPosts;