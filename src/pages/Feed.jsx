import { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext";
import SideBar from "../components/SideBar";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex gap-4">
      <SideBar />
      <div className="videos">
        {!videos ? (
          <Loading type={"video"} />
        ) : (
          videos.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
