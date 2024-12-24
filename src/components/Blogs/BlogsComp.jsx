import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: "src/assets/images/project1.png",
    title: "Booking Management System",
    description:
      "“This is a law firm management dashboard designed to organize and display bookings, departments, and lawyer profiles. It features a clean, user-friendly interface with a navigation sidebar for quick access to various sections like bookings, team, and services.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image:"src/assets/images/project2.png",
    title: "Flute Files Publishing Dashboard",
    description:
      "An online platform dedicated to selling sheet music for flutists, featuring a collection of best-selling Christian arrangements. Users can explore sheet music, books, FAQs, and a catalog with options to log in/register for a seamless shopping experience.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image:"src/assets/images/project3.png",
    title: "R;pple - Online Mental Health Support",
    description:
      "A platform dedicated to transforming harmful online searches into opportunities for mental health support by discreetly intercepting flagged terms and guiding users to free, 24/7 resources. It aims to foster hope and provide solutions for those in need through compassionate intervention. ",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
