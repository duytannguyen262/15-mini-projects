import React from "react";

function MenuItem(props) {
  const { id, img, title, category, price, desc } = props;
  return (
    <>
      <article className="menu-item">
        <img src={img} alt={title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
          </header>
          <p className="item-text">{desc}</p>
          <button className="category-tag">{category}</button>
        </div>
      </article>
    </>
  );
}

export default MenuItem;
