import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1599379126660-d10b7e1831c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="Image"
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1599379126660-d10b7e1831c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="Image"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="Edit" />
            </Link>
            <img src={Delete} alt="Delete" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          rerum
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam
          fugit eius laboriosam enim dignissimos exercitationem doloremque vero
          quam! Veritatis, officiis esse praesentium cumque assumenda odit
          laborum voluptate illum. Id quaerat adipisci odit exercitationem,
          eaque ullam vel impedit officiis sit dolore molestiae molestias culpa
          perspiciatis natus voluptas, porro est libero! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illum asperiores ea facilis vel a
          laboriosam sed non nesciunt delectus recusandae cupiditate dolor
          voluptate tempora laborum explicabo cumque ex expedita dolore minima,
          quo, ipsam id aspernatur dolores. Dolorum nihil unde sunt accusamus
          magnam maxime nemo asperiores a voluptatum, quod aspernatur recusandae
          expedita alias aut minus officiis laboriosam fugiat ratione non soluta
          iusto! Vero, nesciunt ducimus. Cupiditate maxime tempora, enim placeat
          eligendi, in nobis harum sunt corrupti, alias sint consequuntur
          suscipit a vero quis aliquid et ducimus. Totam unde quod autem omnis
          expedita beatae nesciunt rerum consectetur temporibus reprehenderit?
          Asperiores, perferendis nulla.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
