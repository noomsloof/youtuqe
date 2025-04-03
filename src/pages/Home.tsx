import { useState, useEffect } from "react";
import { Video } from "../types";
import { Link } from "react-router-dom";  // นำเข้า Link สำหรับการนำทาง
import { API_KEY } from "../config";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);

  return (
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
  );
}
