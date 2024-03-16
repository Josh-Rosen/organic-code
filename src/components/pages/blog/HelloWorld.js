import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const HelloWorld = ({ data, router }) => {
  return (
    <div className="center">
      <Header props={data} />
      <div className="blogpost">
        <h3>
          <span className='green'>#</span> Introduction
        </h3>
        <div className="blogPostSection">
          <p>
            Welcome to Organic Code! My name is Josh, and I'm a Senior Software Engineer who is excited to start writing about software.
          </p>
          <p>
            This blog will be my digital canvas to articulate and share my journey, insights, and perspectives on the dynamic world of software engineering.
          </p>
        </div>
        <h3>
          <span className='green'>#</span> Future Posts
        </h3>
        <div className="blogPostSection">
          <p>
            I'm eager to dive in and discuss a variety of topics I've encountered in my career, including:
          </p>
          <ul>
            <li>Backend Engineering: The ins and outs of creating server-side software</li>
            <li>Infrastructure: Developing and deploying scalable architecture</li>
            <li>Databases: Exploring SQL and NoSQL solutions and tradeoffs</li>
            <li>Observability: The art of monitoring systems and gaining actionable insights</li>
            <li>Documentation: Crafting clear and effective guides and manuals</li>
            <li>Code Reviews: Best practices for constructively reviewing code</li>
            <li>Mentorship: Sharing knowledge and growing together in the tech industry</li>
            <li>And more!</li>
          </ul>
        </div>
        <h3>
          <span className='green'>#</span> My Embarking Thoughts
        </h3>
        <div className="blogPostSection">
          <p>
            I looking forward to start sharing my perspectives on software. A huge thank you for reading my first post. This is just the beginning, so stay tuned for more insights and discussions!
          </p>
        </div>
        </div>
      <Footer />
    </div>
  );
};

export default HelloWorld;
