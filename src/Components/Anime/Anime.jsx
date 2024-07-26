// Components/Anime/Anime.jsx
import React, { useContext, useState, useCallback, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AnimeData } from "../../Context/Anime";
import { AnimeCard, AnimeStyled, TextHolder, Text } from "./AnimeStyled";
import axios from "axios";
import { throttle } from "lodash";
import Loader from "../Loader/loader";
import CategorySelector from "../CategorySearchInput/CategorySearchInput";
import { Container, Typography } from "@mui/material";

export default function Anime() {
  const { animeData, setAnimeData } = useContext(AnimeData);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchMoreData = useCallback(
    throttle(async () => {
      try {
        const response = await axios.get(
          `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${
            page * 10
          }${
            selectedCategory ? `&filter[categories]=${selectedCategory}` : ""
          }`,
          {
            headers: {
              Accept: "application/vnd.api+json",
            },
          }
        );
        const newAnimeData = response.data.data;
        if (newAnimeData.length === 0) {
          setHasMore(false);
        } else {
          setAnimeData((prevAnimeData) => [...prevAnimeData, ...newAnimeData]);
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error("Error fetching more anime data:", error);
      }
    }, 500), // Throttle to 500ms
    [page, setAnimeData, setHasMore, selectedCategory]
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAnimeData([]);
    setPage(1);
    setHasMore(true);
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.get(
          `https://kitsu.io/api/edge/anime?page[limit]=10${
            selectedCategory ? `&filter[categories]=${selectedCategory}` : ""
          }`,
          {
            headers: {
              Accept: "application/vnd.api+json",
            },
          }
        );
        setAnimeData(response.data.data);
      } catch (error) {
        console.error("Error fetching initial anime data:", error);
      }
    };

    fetchInitialData();
  }, [selectedCategory, setAnimeData]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Anime List
      </Typography>
      <CategorySelector
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {animeData.length > 0 ? (
        <InfiniteScroll
          dataLength={animeData.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<p>No more anime to load</p>}
        >
          <AnimeStyled>
            {animeData.map((anime) => (
              <AnimeCard
                key={anime.id}
                style={{
                  backgroundImage: `url(${anime.attributes?.posterImage?.large})`,
                }}
              >
                <TextHolder>
                  <Text>{anime.attributes?.canonicalTitle || "No Title"}</Text>
                </TextHolder>
              </AnimeCard>
            ))}
          </AnimeStyled>
        </InfiniteScroll>
      ) : (
        <Loader />
      )}
    </Container>
  );
}
