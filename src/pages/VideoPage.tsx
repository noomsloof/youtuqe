import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Video } from "../types";
import { API_KEY } from "../config";

export default function VideoPage() {
  const { id } = useParams<{ id: string }>(); // ใช้ useParams เพื่อดึง id จาก URL
  const [video, setVideo] = useState<Video | null>(null);

  // ใช้ useEffect ดึงข้อมูลวิดีโอจาก YouTube API
  useEffect(() => {
    if (id) {
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.items.length > 0) {
            setVideo(data.items[0]); // เก็บข้อมูลวิดีโอที่ได้
          }
        });
    }
  }, [id]);

  if (!video) {
    return <div>Loading...</div>; // ถ้ายังไม่ได้รับข้อมูลให้แสดง "Loading..."
  }

  return (
    <div>
      <h1>{video.snippet.title}</h1>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <p>{video.snippet.description}</p>
      {/* ใช้ iframe แสดงวิดีโอจาก YouTube */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title={video.snippet.title}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
