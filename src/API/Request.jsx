import axios from "axios"

export async function AnimeApi() {
  try {
    const response = await axios.get("https://kitsu.io/api/edge/anime", {
      headers: {
        Accept: "application/vnd.api+json",
      },
    })
    return response.data
  } catch (error) {
    console.log(`Fetchanje nije uspelo`, error)
  }
}

export async function MangaApi() {
  try {
    const response = await axios.get("https://kitsu.io/api/edge/manga", {
      headers: {
        Accept: "application/vnd.api+json",
      },
    })
    return response.data
  } catch (error) {
    console.log(`Fetchanje nije uspelo`, error)
  }
}

export async function fetchAnimeGenres(id) {
  try {
    const response = await axios.get(
      `https://kitsu.io/api/edge/anime/${id}/genres`,
      {
        headers: {
          Accept: "application/vnd.api+json",
        },
      }
    )
    return response.data.data
  } catch (error) {
    console.error(`Fetchanje žanrova za anime ${id} nije uspelo`, error)
    return []
  }
}

// import axios from "axios"
// export async function AnimeApi() {
//   const allAnime = []
//   let url = "https://kitsu.io/api/edge/anime"

//   try {
//     while (url) {
//       const response = await axios.get(url, {
//         headers: {
//           Accept: "application/vnd.api+json",
//         },
//       })
//       console.log(`Response data:`, response.data)
//       allAnime.push(...response.data.data)
//       url = response.data.links.next || null
//     }

//     return allAnime
//   } catch (error) {
//     console.log(`Fetchanje nije uspelo`, error)
//   }
// }

// export async function MangaApi() {
//   const allManga = []
//   let url = "https://kitsu.io/api/edge/manga"

//   try {
//     while (url) {
//       const response = await axios.get(url, {
//         headers: {
//           Accept: "application/vnd.api+json",
//         },
//       })

//       allManga.push(...response.data.data)

//       url = response.data.links.next || null
//     }

//     return allManga
//   } catch (error) {
//     console.log(`Fetchanje nije uspelo`, error)
//   }
// }
