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
    marginLeft: isOpen ? '280px' : '120px',
  };


  return (
    <>
      <HeaderBar isOpen={isOpen} toggleSidebar={toggleSidebar}></HeaderBar>

      <div style={dynamicSpace}>
        <div className="home-layout">

          <div className="content-layout">

            {videos.map((video) => (
              <div key={video.id} className="content-card">

                <div className="img-card"> <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} /> </div>
                <div className="text-card">{video.snippet.title}</div>
                {/* <Link to={`/watch/${video.id}`}>
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <h3>{video.snippet.title}</h3>
                  </Link> */}
              </div>

            ))}

          </div>

        </div>
      </div>
    </>
  );
}
