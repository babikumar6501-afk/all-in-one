/*
========================================================
CINEVERSE CONTENT DATABASE
========================================================

नया content add करने के लिए सिर्फ इसी file को edit करें.

Supported types:

movie
webseries
anime
kdrama
cdrama
jdrama

*/

// =============================
// ADD NEW POSTS HERE
// =============================

const animeData = [

  {
    id: 1,

    type: "movie",

    category: "Movies",

    title: "Balan The Boy 2026",

    poster:
      "https://image.tmdb.org/t/p/original/7H0KRnM0aZS5BHjoZBxriitYSvJ.jpg",

    banner:
      "https://image.tmdb.org/t/p/original/7H0KRnM0aZS5BHjoZBxriitYSvJ.jpg",

    description:
      "A fictional sci-fi adventure created for demonstrating the CineVerse catalog.",

    year: 2026,

    genres: [
      "Action",
      "Sci-Fi",
      "Adventure"
    ],

    language: [
      "English",
      "Hindi"
    ],

    country: "USA",

    quality: [
      "480p",
      "720p",
      "1080p"
    ],

    rating: "8.2",

    status: "Completed",

    seasons: [],

    downloads: {

      "480p":
        "https://example.com/legal/neon-horizon-480p",

      "720p":
        "https://example.com/legal/neon-horizon-720p",

      "1080p":
        "https://example.com/legal/neon-horizon-1080p"

    }

  },


  {
    id: 2,

    type: "webseries",

    category: "Web Series",

    title: "Midnight Protocol",

    poster:
      "https://placehold.co/600x900/151522/f0eaff?text=Midnight+Protocol",

    banner:
      "https://placehold.co/1600x700/0c101b/f0eaff?text=Midnight+Protocol",

    description:
      "A fictional technology thriller series used as demonstration content.",

    year: 2026,

    genres: [
      "Thriller",
      "Drama"
    ],

    language: [
      "English"
    ],

    country: "UK",

    quality: [
      "480p",
      "720p",
      "1080p"
    ],

    rating: "8.6",

    status: "Ongoing",

    seasons: [

      {
        season: 1,

        episodes: [

          {
            number: 1,

            title: "The Signal",

            downloads: {

              "480p":
                "https://example.com/legal/midnight-s1e1-480p",

              "720p":
                "https://example.com/legal/midnight-s1e1-720p",

              "1080p":
                "https://example.com/legal/midnight-s1e1-1080p"

            }

          },

          {
            number: 2,

            title: "Ghost Server",

            downloads: {

              "480p":
                "https://example.com/legal/midnight-s1e2-480p",

              "720p":
                "https://example.com/legal/midnight-s1e2-720p",

              "1080p":
                "https://example.com/legal/midnight-s1e2-1080p"

            }

          }

        ]

      },

      {
        season: 2,

        episodes: [

          {
            number: 1,

            title: "New Rules",

            downloads: {

              "720p":
                "https://example.com/legal/midnight-s2e1-720p",

              "1080p":
                "https://example.com/legal/midnight-s2e1-1080p"

            }

          }

        ]

      }

    ]

  },


  {
    id: 3,

    type: "anime",

    category: "Anime",

    title: "Skybound Legends",

    poster:
      "https://placehold.co/600x900/111827/dbeafe?text=Skybound+Legends",

    banner:
      "https://placehold.co/1600x700/0b1220/dbeafe?text=Skybound+Legends",

    description:
      "A fictional fantasy anime created for testing the catalog system.",

    year: 2025,

    genres: [
      "Fantasy",
      "Adventure"
    ],

    language: [
      "Japanese",
      "English",
      "Hindi"
    ],

    country: "Japan",

    quality: [
      "720p",
      "1080p"
    ],

    rating: "9.0",

    status: "Completed",

    seasons: [

      {
        season: 1,

        episodes: [

          {
            number: 1,

            title: "The Floating City",

            downloads: {

              "720p":
                "https://example.com/legal/skybound-s1e1-720p",

              "1080p":
                "https://example.com/legal/skybound-s1e1-1080p"

            }

          },

          {
            number: 2,

            title: "Wind Trial",

            downloads: {

              "720p":
                "https://example.com/legal/skybound-s1e2-720p",

              "1080p":
                "https://example.com/legal/skybound-s1e2-1080p"

            }

          }

        ]

      }

    ]

  },


  {
    id: 4,

    type: "kdrama",

    category: "K-Drama",

    title: "Seoul After Rain",

    poster:
      "https://placehold.co/600x900/211522/fce7f3?text=Seoul+After+Rain",

    banner:
      "https://placehold.co/1600x700/170e18/fce7f3?text=Seoul+After+Rain",

    description:
      "A fictional Korean romance drama.",

    year: 2026,

    genres: [
      "Romance",
      "Drama"
    ],

    language: [
      "Korean",
      "English"
    ],

    country: "South Korea",

    quality: [
      "720p",
      "1080p"
    ],

    rating: "8.8",

    status: "Ongoing",

    seasons: [

      {
        season: 1,

        episodes: [

          {
            number: 1,

            title: "First Meeting",

            downloads: {

              "720p":
                "https://example.com/legal/seoul-s1e1-720p",

              "1080p":
                "https://example.com/legal/seoul-s1e1-1080p"

            }

          }

        ]

      }

    ]

  },


  {
    id: 5,

    type: "cdrama",

    category: "C-Drama",

    title: "Moonlit Dynasty",

    poster:
      "https://placehold.co/600x900/1c1728/ede9fe?text=Moonlit+Dynasty",

    banner:
      "https://placehold.co/1600x700/100d18/ede9fe?text=Moonlit+Dynasty",

    description:
      "A fictional Chinese historical fantasy drama.",

    year: 2025,

    genres: [
      "Historical",
      "Fantasy"
    ],

    language: [
      "Mandarin",
      "English"
    ],

    country: "China",

    quality: [
      "480p",
      "720p",
      "1080p"
    ],

    rating: "8.4",

    status: "Completed",

    seasons: [

      {
        season: 1,

        episodes: [

          {
            number: 1,

            title: "The Moon Seal",

            downloads: {

              "480p":
                "https://example.com/legal/moonlit-s1e1-480p",

              "720p":
                "https://example.com/legal/moonlit-s1e1-720p",

              "1080p":
                "https://example.com/legal/moonlit-s1e1-1080p"

            }

          }

        ]

      }

    ]

  },


  {
    id: 6,

    type: "jdrama",

    category: "J-Drama",

    title: "Tokyo Signal",

    poster:
      "https://placehold.co/600x900/171923/e0e7ff?text=Tokyo+Signal",

    banner:
      "https://placehold.co/1600x700/0d1018/e0e7ff?text=Tokyo+Signal",

    description:
      "A fictional Japanese mystery drama.",

    year: 2026,

    genres: [
      "Mystery",
      "Drama"
    ],

    language: [
      "Japanese",
      "English"
    ],

    country: "Japan",

    quality: [
      "720p",
      "1080p"
    ],

    rating: "8.7",

    status: "Ongoing",

    seasons: [

      {
        season: 1,

        episodes: [

          {
            number: 1,

            title: "Unknown Caller",

            downloads: {

              "720p":
                "https://example.com/legal/tokyo-s1e1-720p",

              "1080p":
                "https://example.com/legal/tokyo-s1e1-1080p"

            }

          }

        ]

      }

    ]

  }

];
