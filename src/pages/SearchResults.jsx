import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import Sidebar from "../components/SideBar";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState(null);

  const query = searchParams.get("search_query");

  useEffect(() => {
    getData(`/search?query=${query}`).then((res) => setResults(res.data.data));
  }, [query]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col gap-5 px-4">
        <h2>{query} için sonuçlar </h2>
        {!results ? (
          <Loading type={"video"} />
        ) : (
          results.map(
            (item) =>
              item.type === "video" && (
                <VideoCard type={"deneme"} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default SearchResults;
