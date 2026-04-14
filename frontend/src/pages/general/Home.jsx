import React, { useEffect, useState } from "react";
import "../../styles/reels.css";
import ReelFeed from "../../components/ReelFeed";
import api from "../../utils/api";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api
      .get("/api/food")
      .then((response) => {
        console.log(response.data);
        setVideos(response.data.foodItems);
      })
      .catch(() => {});
  }, []);

  async function likeVideo(item) {
    const response = await api.post("/api/food/like", {
      foodId: item._id,
    });

    if (response.data.like) {
      console.log("Video liked");
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id
            ? { ...v, likeCount: v.likeCount + 1 }
            : v
        )
      );
    } else {
      console.log("Video unliked");
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id
            ? { ...v, likeCount: v.likeCount - 1 }
            : v
        )
      );
    }
  }

  async function saveVideo(item) {
    const response = await api.post("/api/food/save", {
      foodId: item._id,
    });

    if (response.data.save) {
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id
            ? { ...v, savesCount: v.savesCount + 1 }
            : v
        )
      );
    } else {
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id
            ? { ...v, savesCount: v.savesCount - 1 }
            : v
        )
      );
    }
  }

  return (
    <ReelFeed
      items={videos}
      onLike={likeVideo}
      onSave={saveVideo}
      emptyMessage="No videos available."
    />
  );
};

export default Home;