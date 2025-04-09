import { useState, useEffect } from "react";
import { Video } from "../types";
import { Link } from "react-router-dom";
import { API_KEY } from "../config";
import HeaderBar from "../components/HeaderBar";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);

  const dynamicSpace = {
    marginTop: isOpen ? '130px' : '130px', // เปลี่ยน marginTop ตาม isOpen
    marginLeft: isOpen ? '280px' : '120px', // เปลี่ยน marginLeft ตาม isOpen
  };


  return (
    <>

      <HeaderBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="home-layout-grid">
        <div style={dynamicSpace}>

          <div className="home-layout-grid-content">

            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>

          </div>

          <div>
            {videos.map((video) => (
              <div key={video.id}>
                <Link to={`/watch/${video.id}`}>
                  <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                  <h3>{video.snippet.title}</h3>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
