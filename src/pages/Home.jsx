import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../api/api.js";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts?cat=${cat}`);
        setPosts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempora!",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita vitae consequuntur? Doloremque iste error consectetur eligendi blanditiis illo commodi eum. Eaque maxime inventore, dicta ea, dolor modi nam nemo ab voluptatibus, magni vel in atque itaque? Autem, itaque quaerat!",
  //     img: "https://images.unsplash.com/photo-1599379126660-d10b7e1831c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempora!",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita vitae consequuntur? Doloremque iste error consectetur eligendi blanditiis illo commodi eum. Eaque maxime inventore, dicta ea, dolor modi nam nemo ab voluptatibus, magni vel in atque itaque? Autem, itaque quaerat!",
  //     img: "https://images.unsplash.com/photo-1687728383816-139da84391a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80",
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempora!",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita vitae consequuntur? Doloremque iste error consectetur eligendi blanditiis illo commodi eum. Eaque maxime inventore, dicta ea, dolor modi nam nemo ab voluptatibus, magni vel in atque itaque? Autem, itaque quaerat!",
  //     img: "https://images.unsplash.com/photo-1519799478955-1c5b789a6bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempora!",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita vitae consequuntur? Doloremque iste error consectetur eligendi blanditiis illo commodi eum. Eaque maxime inventore, dicta ea, dolor modi nam nemo ab voluptatibus, magni vel in atque itaque? Autem, itaque quaerat!",
  //     img: "https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80",
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempora!",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita vitae consequuntur? Doloremque iste error consectetur eligendi blanditiis illo commodi eum. Eaque maxime inventore, dicta ea, dolor modi nam nemo ab voluptatibus, magni vel in atque itaque? Autem, itaque quaerat!",
  //     img: "https://images.unsplash.com/photo-1599964815811-30b9aea11d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  //   },
  // ];

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.length > 0 &&
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`../upload/${post.img}`} alt="Image" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
