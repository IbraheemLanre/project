import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "3c78f9ef36081fa6389430209a09e56a2e956eca572e1d8b807a3e2338fdd0dc/stage";
// const newsKey = "b1f5497f9cf44b24922304484871e59a";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News App</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
