import { useState, useEffect } from "react";
import { Video } from "../types";
import { Link } from "react-router-dom";
import { API_KEY } from "../config";
import HeaderBar from "../components/HeaderBar";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);

  return (
    <>
      <HeaderBar />
      <div style={{ height: '110px' }}></div>
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
