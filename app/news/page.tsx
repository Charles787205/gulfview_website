import { NewsType } from "@/types";
import { NextRequest } from "next/server";
import Image from "next/image";

const NewsPage = async () => {
  const res = await import("../api/news/route");

  const newsArr = await (await res.GET(null)).json();
  console.log(newsArr[0]);
  return (
    <div className="flex flex-col items-center">
      {newsArr.length != 0 ? (
        newsArr.map((news: NewsType) => {
          return (
            <div className="">
              {news.headline}

              <Image
                src={news.images[0].url.toString()}
                width={100}
                height={100}
                alt="pic"
              />
            </div>
          );
        })
      ) : (
        <h1 className="m-auto mt-10 text-[30px]">No news yet</h1>
      )}
    </div>
  );
};

export default NewsPage;
