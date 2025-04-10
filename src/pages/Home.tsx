import { useState, useEffect } from "react";
import { Video } from "../types";
import { API_KEY } from "../config";
import HeaderBar from "../components/HeaderBar";
import { Link } from "react-router-dom";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const savedVideos = localStorage.getItem("videos");
  
    // ถ้ามีข้อมูลใน LocalStorage แล้วใช้ข้อมูลนั้น
    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    } else {
      // ถ้าไม่มีข้อมูลใน LocalStorage ให้ดึงข้อมูลจาก API
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
  
          const channelIds = data.items.map((video: Video) => video.snippet.channelId);
  
          if (channelIds.length > 0) {
            // ดึงข้อมูลจากช่อง YouTube โดยใช้ channelId ที่ได้
            fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(",")}&key=${API_KEY}`)
              .then((res) => res.json())
              .then((channelData) => {
                // ตรวจสอบและแน่ใจว่ามีการอัปเดตข้อมูลรูปโปรไฟล์ที่ถูกต้อง
                const updatedVideos = data.items.map((video: Video, index: number) => {
                  const channel = channelData.items[index];
  
                  // ตรวจสอบช่องเพื่อให้มั่นใจว่ารูปโปรไฟล์ช่องมีค่า
                  const channelThumbnail = channel?.snippet?.thumbnails?.default?.url || 'https://www.example.com/default-thumbnail-url.jpg';
                  return {
                    ...video,
                    channelThumbnail,  // เพิ่มช่องทางภาพโปรไฟล์
                  };
                });
  
                setVideos(updatedVideos);
                // เก็บข้อมูลลงใน LocalStorage
                localStorage.setItem("videos", JSON.stringify(updatedVideos));
              })
              .catch((error) => console.error("Error fetching channel data:", error));
          }
        })
        .catch((error) => console.error("Error fetching video data:", error));
    }
  }, []);


  const dynamicSpace = {
    marginLeft: isOpen ? '280px' : '120px',
  };

  const formatViews = (num: string) => {
    const n = parseInt(num);
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return n.toString();
  };

  function timeSince(date: string) {
    const now = new Date();
    const publishedDate = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - publishedDate.getTime()) / 1000);
  
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(diffInSeconds / 3600);
    const days = Math.floor(diffInSeconds / (3600 * 24));
  
    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    return "Just now";
  }


  return (
    <>
      <HeaderBar isOpen={isOpen} toggleSidebar={toggleSidebar}></HeaderBar>

      <div style={dynamicSpace}>
        <div className="home-layout">

          <div className="content-layout">

            {videos.map((video: Video) =>  (
              
              <div key={video.id} className="content-card">
                <Link to={`/watch/${video.id}`}>
                  <div className="img-card"> <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} /> </div>
                  <div className="text-card">
                    <img src={video.channelThumbnail} alt="Channel" style={{height:'50px', width:'50px', borderRadius:'50px', margin:'5px'}}/>
                    <div>
                      <div className="title-card">{video.snippet.title}</div>
                      <div className="channel-card">{video.snippet.channelTitle}</div>
                      <div className="channel-card">{video.statistics?.viewCount ? formatViews(video.statistics.viewCount) : "No view count available"} - {timeSince(video.snippet.publishedAt)} {/* คำนวณเวลาอัปโหลด */}</div>
                    </div>
                    </div>
                </Link>
              </div>

            ))}

          </div>

        </div>
      </div>
    </>
  );
}
