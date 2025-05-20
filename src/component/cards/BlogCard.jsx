import React from "react";
import ProtoTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

function BlogCard({ img, title, desc, authorCategory, date, name }) {
  return (
    <article
      className="aai-post-wrapper"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div className="aai-post-item">
        <Link href="/blog-details" className="aai-post-thumb-wrapper d-block">
          <Image
            src={img.src}
            height={img.height}
            width={img.width}
            className="img-fluid aai-post-thumb"
            alt=""
          />
        </Link>
        <div className="aai-post-content">
          <div className="aai-post-meta d-flex flex-wrap gap-3">
            <Link href="#" className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-user"></i>
              <span>{authorCategory}</span>
            </Link>
            <Link href="#" className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-clock"></i>
              <span>{date}</span>{" "}
            </Link>
            <Link href="#" className="d-flex align-items-center gap-2">
              <i className="fa-regular fa-folder"></i>
              <span>{name}</span>
            </Link>
          </div>
          <h3 className="aai-post-title">
            <Link href="/blog-details">{title}</Link>
          </h3>
          <p className="aai-post-exerpt mb-3">{desc}</p>
          <Link
            href="/blog-details"
            className="aai-post-readmore d-flex align-items-center gap-2"
          >
            <span>Read More</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}
BlogCard.propTypes = {
  img: ProtoTypes.string,
  title: ProtoTypes.string,
  desc: ProtoTypes.string,
  authorCategory: ProtoTypes.string,
  date: ProtoTypes.string,
  name: ProtoTypes.string,
};

export default BlogCard;
