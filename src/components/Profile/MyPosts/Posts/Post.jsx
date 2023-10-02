import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import y from "./Post.module.css";
import React from "react";



const Post = (props) => {
  return (
    <section className={y.post}>
      <div className={y.itemPost}>
        <div className={y.avatar}>

          <img src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593111703?e=2147483647&v=beta&t=VYkw5GvugUIP8zfh_3puWETBrtdygEUqqaU5fghxkyc" />
          
          <div className={y.info}>
            <p><span className={y.userName}>Name</span> <br /> <span className={y.dataPost}>4 days ago</span></p>
          </div>

        </div>

        <div className={y.postImg}>
          <img src="https://cdn-img1.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery" />
        </div>

        <div className={y.description}>
          {props.message}
        </div>


        <div className={y.btn}>
          <span className={y.btnItem}><span className={y.btnLike}><FontAwesomeIcon icon={faHeart} /></span> {props.like}</span>
          <span className={y.btnItem}><span className={y.btnComRep}><FontAwesomeIcon icon={faComment} /></span> {props.comets}</span>
          <span className={y.btnItem}><span className={y.btnComRep}><FontAwesomeIcon icon={faShare} /></span> {props.share}</span>
        </div>
      </div>
    </section>
  );
};

export default Post;
