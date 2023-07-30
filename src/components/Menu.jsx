import React, { useEffect, useState } from "react";
import api from "../api/api.js";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/posts?cat=${cat}`);
        setPosts(res.data.data);

        console.log(res.data.data);
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

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
