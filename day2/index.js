import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Navbar = (props) => {
  return (
    <>
      <h1>i am nav {props.name} </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        earum quas modi explicabo voluptates quam temporibus, perferendis eum
        voluptas esse, minima impedit beatae. Rem tenetur repellendus facere
        architecto eum molestias.
      </p>
    </>
  );
};

root.render(
  <Navbar />
  // <div>
  //   <h2>Introduction:-</h2>
  //   <p>
  //     I am akshay vikas gurme.My native palace is latur,Maharastra.I did my
  //     graduation in computer from pravara rural engineering college
  //     loni,Ahamdanager.
  //   </p>
  //   <h2>Project title:</h2>
  //   <p>Image Classification using deep learning:</p>
  //   <p>
  //     Precise classification of different kinds of images in general, is an
  //     important topic nowadays. It is not only a relevant topic in the field of
  //     academic research, but also in many applications ranging from face
  //     detection etc. Many useful applications can be built based on such a
  //     classification system. but todays recognition systems are hu- man
  //     dependant where a human has to recognize and categorize the images
  //     himself.Precise classification of different kinds of images in general, is
  //     an important topic nowadays. It is not only a relevant topic in the field
  //     of academic research, but also in many applications ranging from face
  //     detection etc. Many useful applications can be built based on such a
  //     classification system. but todays recognition systems are hu- man
  //     dependant where a human has to recognize and categorize the images
  //     himself.
  //   </p>
  // </div>
);
