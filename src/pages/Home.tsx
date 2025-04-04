import { useState, useEffect } from "react";
import { Video } from "../types";
import { Form, Link } from "react-router-dom";  // นำเข้า Link สำหรับการนำทาง
import { API_KEY } from "../config";
import { Button, Container, FormControl, Nav, Navbar, NavbarCollapse } from "react-bootstrap";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);

  return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
        <Container fluid className="d-flex justify-content-between align-items-center">

          <div className="d-flex align-item-center">
            <div><i className="bi bi-list"></i></div>
            <Navbar.Brand href="#home"> <i className="bi bi-caret-right-square-fill"></i> Youtuqe</Navbar.Brand>
          </div>

          <div style={{ width: "30%" }}>
            <Nav className="ml-auto d-flex align-items-center flex-grow-1">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
              <i className="bi bi-mic"></i>
            </Nav>
          </div>

          <div className="d-flex align-items-center custom-gap-20">
            <Nav><button className="custom-nav-create"> <i className="bi bi-plus big-text"></i> <p className="m-0 small-text">สร้าง</p></button></Nav>
            <Nav><button className="custom-nav-notify"> <i className="bi bi-bell"></i> </button> </Nav>
            <Nav><div className="custom-nav-profile"></div></Nav>
          </div>

        </Container>
      </Navbar>

      <div>
        {videos.map((video) => (
          <div key={video.id}>
            <Link to={`/watch/${video.id}`}>
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
              <h3>{video.snippet.title}</h3>
            </Link>
          </div>

        ))}
      </div></>
  );
}
