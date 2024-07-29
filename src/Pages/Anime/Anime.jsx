import React, { useContext, useState, useCallback, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { AnimeData } from "../../Context/Anime"
import { AnimeCard, AnimeStyled, TextHolder, Text } from "./AnimeStyled"
import axios from "axios"
import { throttle } from "lodash"
import CategorySelector from "../../Components/CategorySearchInput/CategorySearchInput"
import Loader from "../../Components/Loader/loader"
import SearchInput from "../../Components/search/input"
import { Container } from "@mui/material"
import Info from "../../Components/InfoPopUp/Info"

export default function Anime() {
  const { animeData, setAnimeData, setFavoriteAnime } = useContext(AnimeData)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAnime, setSelectedAnime] = useState(null)
  const [infoOpen, setInfoOpen] = useState(false)

  const fetchMoreData = useCallback(
    throttle(async () => {
      try {
        const response = await axios.get(
          `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${
            page * 10
          }${
            selectedCategory ? `&filter[categories]=${selectedCategory}` : ""
          }${searchQuery ? `&filter[text]=${searchQuery}` : ""}`,
          {
            headers: {
              Accept: "application/vnd.api+json",
            },
          }
        )
        const newAnimeData = response.data.data
        if (newAnimeData.length === 0) {
          setHasMore(false)
        } else {
          setAnimeData((prevAnimeData) => [...prevAnimeData, ...newAnimeData])
          setPage((prevPage) => prevPage + 1)
        }
      } catch (error) {
        console.error("Error fetching more anime data:", error)
      }
    }, 500),
    [page, selectedCategory, searchQuery, setAnimeData]
  )

  const handleAddToFavorites = (anime) => {
    setFavoriteAnime((prevFavorites) => [...prevFavorites, anime])
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setAnimeData([])
    setPage(1)
    setHasMore(true)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    setAnimeData([])
    setPage(1)
    setHasMore(true)
  }

  const handleCardClick = (anime) => {
    setSelectedAnime(anime)
    setInfoOpen(true)
  }

  const handleCloseInfo = () => {
    setInfoOpen(false)
    setSelectedAnime(null)
  }

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.get(
          `https://kitsu.io/api/edge/anime?page[limit]=10${
            selectedCategory ? `&filter[categories]=${selectedCategory}` : ""
          }${searchQuery ? `&filter[text]=${searchQuery}` : ""}`,
          {
            headers: {
              Accept: "application/vnd.api+json",
            },
          }
        )
        setAnimeData(response.data.data)
      } catch (error) {
        console.error("Error fetching initial anime data:", error)
      }
    }

    fetchInitialData()
  }, [selectedCategory, searchQuery, setAnimeData])

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <SearchInput
          valueProp={searchQuery}
          onChangeProp={handleSearchChange}
        />
      </div>
      <hr style={{ marginTop: "10px" }} />
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
                onClick={() => handleCardClick(anime)}
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
      <Info
        open={infoOpen}
        handleClose={handleCloseInfo}
        anime={selectedAnime}
        onAddToFavorites={handleAddToFavorites}
      />
    </Container>
  )
}
