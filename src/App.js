import React from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const data = [
    {
      name: "Frana James",
      role: "User",
      description:
        "Love using the app. There's a learning curve. But totally worth it.",
      photo:
        "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Ronald Hubbard",
      role: "User",
      description:
        "I use the service to meet friends. Satisfied with the work of the program. Recomend for everybody!",
      photo:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Megan Perez",
      role: "Product analyst",
      description:
        "A great app that changed my day planning for the better! Now meetings are only in Slated.",
      photo:
        "https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Michelle Hubbard",
      role: "Creative director",
      description:
        "Awesome! I really like this service because there is nothing superfluous in it.",
      photo:
        "https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Jishnu Choyi",
      role: "Programmer",
      description:
        "Greatly improved my productivity. Recommended to all my friends.",
      photo:
        "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className="App">
      <div className="section--header">
        <h1>Reviews & Testimonials</h1>
      </div>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="cards">
            <div className="card-testimonial">
              <div className="image">
                <img src={item.photo} alt="not" />
              </div>
              <div className="card-description">
                <h4 className="desc">{item.description}</h4>
                <h3 className="name">{item.name}</h3>
                <h5 className="role">{item.role}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
