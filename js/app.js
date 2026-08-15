const DATA = animeData;


/* =========================
   CATEGORY LINKS
========================= */

const categoryLinks = [

  ["Movies", "movies.html"],

  ["Web Series", "webseries.html"],

  ["Anime", "anime.html"],

  ["K-Drama", "kdrama.html"],

  ["C-Drama", "cdrama.html"],

  ["J-Drama", "jdrama.html"]

];


/* =========================
   SECURITY
========================= */

function escapeHTML(value = "") {

  return String(value).replace(
    /[&<>"']/g,

    char => ({

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"

    }[char])

  );

}


/* =========================
   CARD
========================= */

function card(item) {

  return `

  <article class="card">

    <a
      href="details.html?id=${item.id}"
      class="poster-wrap"
    >

      <img
        src="${item.poster}"
        alt="${escapeHTML(item.title)}"
        loading="lazy"
      >

      <span class="rating">
        ★ ${escapeHTML(item.rating)}
      </span>

      <span class="type-badge">
        ${escapeHTML(item.category)}
      </span>

    </a>


    <div class="card-body">

      <h3>

        <a href="details.html?id=${item.id}">
          ${escapeHTML(item.title)}
        </a>

      </h3>


      <div class="meta">

        ${item.year}

        <span>•</span>

        ${escapeHTML(item.language?.[0] || "")}

      </div>


      <div class="chips">

        ${(item.quality || [])
          .slice(0, 3)
          .map(
            quality =>
              `<span>${escapeHTML(quality)}</span>`
          )
          .join("")}

      </div>

    </div>

  </article>

  `;

}


/* =========================
   HEADER
========================= */

function renderHeader() {

  return `

  <header class="header">

    <div class="nav">


      <a
        href="index.html"
        class="logo"
      >

        <span>CV</span>

        CineVerse

      </a>


      <nav>

        ${categoryLinks
          .map(
            ([name, url]) =>
              `<a href="${url}">${name}</a>`
          )
          .join("")}

      </nav>


      <form
        class="search"
        action="search.html"
      >

        <input
          name="q"
          id="globalSearch"
          placeholder="Search movies, anime, dramas..."
          autocomplete="off"
        >

        <button type="submit">
          ⌕
        </button>


        <div id="searchSuggest"></div>

      </form>


    </div>

  </header>

  `;

}


/* =========================
   MOBILE NAV
========================= */

function renderBottomNav() {

  return `

  <div class="bottom-nav">

    <a href="index.html">
      ⌂
      <small>Home</small>
    </a>

    <a href="search.html">
      ⌕
      <small>Search</small>
    </a>

    <a href="movies.html">
      ▶
      <small>Movies</small>
    </a>

    <a href="anime.html">
      ✦
      <small>Anime</small>
    </a>

  </div>

  `;

}


/* =========================
   SECTION
========================= */

function section(title, items, link = "") {

  return `

  <section class="section">


    <div class="section-head">

      <h2>
        ${title}
      </h2>


      ${
        link
          ? `<a href="${link}">View all →</a>`
          : ""
      }

    </div>


    <div class="grid">

      ${
        items.length
          ? items.map(card).join("")
          : `<div class="empty">
              No content available.
             </div>`
      }

    </div>


  </section>

  `;

}


/* =========================
   HOME
========================= */

function homePage() {

  const latest = [...DATA]
    .sort((a, b) => b.year - a.year);


  const popular = [...DATA]
    .sort(
      (a, b) =>
        Number(b.rating) -
        Number(a.rating)
    );


  const recent = [...DATA]
    .reverse();


  return `


  <section class="hero">

    <div class="hero-content">

      <span class="eyebrow">
        YOUR ENTERTAINMENT UNIVERSE
      </span>


      <h1>

        Discover stories worth

        <em>watching.</em>

      </h1>


      <p>

        Movies, web series, anime and
        Asian dramas in one modern
        entertainment catalog.

      </p>


      <div class="hero-actions">

        <a
          class="btn primary"
          href="search.html"
        >
          Explore Catalog
        </a>


        <a
          class="btn ghost"
          href="anime.html"
        >
          Browse Anime
        </a>

      </div>

    </div>

  </section>


  <div class="category-strip">

    ${categoryLinks
      .map(
        ([name, url]) => `

        <a href="${url}">

          ${name}

          <span>→</span>

        </a>

      `
      )
      .join("")}

  </div>


  ${section(
    "Latest Releases",
    latest.slice(0, 6)
  )}


  ${section(
    "Trending",
    popular.slice(0, 6)
  )}


  ${section(
    "Popular",
    popular.slice(0, 4)
  )}


  ${section(
    "Recently Added",
    recent.slice(0, 6)
  )}

  `;

}


/* =========================
   CATEGORY PAGE
========================= */

function categoryPage(category) {

  const items =
    DATA.filter(
      item =>
        item.category === category
    );


  const genres = [
    ...new Set(
      items.flatMap(
        item => item.genres || []
      )
    )
  ].sort();


  const qualities = [
    ...new Set(
      items.flatMap(
        item => item.quality || []
      )
    )
  ];


  return `

  <div class="page-title">

    <span class="eyebrow">
      COLLECTION
    </span>


    <h1>
      ${escapeHTML(category)}
    </h1>


    <p>
      ${items.length}
      title${items.length === 1 ? "" : "s"}
      available.
    </p>

  </div>


  <div class="toolbar">


    <select id="sort">

      <option value="latest">
        Latest
      </option>

      <option value="oldest">
        Oldest
      </option>

      <option value="rating">
        Highest Rated
      </option>

      <option value="az">
        A-Z
      </option>

    </select>


    <select id="genre">

      <option value="">
        All Genres
      </option>

      ${genres
        .map(
          genre =>
            `<option>${escapeHTML(
              genre
            )}</option>`
        )
        .join("")}

    </select>


    <select id="quality">

      <option value="">
        All Quality
      </option>

      ${qualities
        .map(
          quality =>
            `<option>${quality}</option>`
        )
        .join("")}

    </select>


    <select id="status">

      <option value="">
        All Status
      </option>

      <option>
        Completed
      </option>

      <option>
        Ongoing
      </option>

    </select>


  </div>


  <div
    id="categoryGrid"
    class="grid"
  >

    ${items.map(card).join("")}

  </div>

  `;

}


/* =========================
   SEARCH SUGGESTIONS
========================= */

function setupSearch() {

  const input =
    document.querySelector(
      "#globalSearch"
    );


  const suggest =
    document.querySelector(
      "#searchSuggest"
    );


  if (!input) return;


  input.addEventListener(
    "input",
    () => {

      const query =
        input.value
          .trim()
          .toLowerCase();


      if (!query) {

        suggest.innerHTML = "";

        suggest.classList.remove(
          "show"
        );

        return;

      }


      const results =
        DATA.filter(
          item =>
            item.title
              .toLowerCase()
              .includes(query)
        ).slice(0, 5);


      suggest.innerHTML =
        results.length

          ? results
              .map(
                item => `

                <a
                  href="details.html?id=${item.id}"
                >

                  <img
                    src="${item.poster}"
                    alt=""
                  >

                  <span>

                    ${escapeHTML(
                      item.title
                    )}

                    <small>

                      ${escapeHTML(
                        item.category
                      )}

                      •
                      ${item.year}

                    </small>

                  </span>

                </a>

                `
              )
              .join("")

          : `<div class="no-suggest">
               No results
             </div>`;


      suggest.classList.add(
        "show"
      );

    }
  );


  document.addEventListener(
    "click",
    event => {

      if (
        !event.target.closest(
          ".search"
        )
      ) {

        suggest.classList.remove(
          "show"
        );

      }

    }
  );


  setupFilters();

}


/* =========================
   FILTERS
========================= */

function setupFilters() {

  const grid =
    document.querySelector(
      "#categoryGrid"
    );


  if (!grid) return;


  const controls = [

    document.querySelector("#sort"),

    document.querySelector("#genre"),

    document.querySelector("#quality"),

    document.querySelector("#status")

  ];


  function applyFilters() {

    let items =
      DATA.filter(
        item =>
          item.category ===
          document.body.dataset.category
      );


    const sort =
      controls[0].value;

    const genre =
      controls[1].value;

    const quality =
      controls[2].value;

    const status =
      controls[3].value;


    if (genre) {

      items =
        items.filter(
          item =>
            item.genres?.includes(
              genre
            )
        );

    }


    if (quality) {

      items =
        items.filter(
          item =>
            item.quality?.includes(
              quality
            )
        );

    }


    if (status) {

      items =
        items.filter(
          item =>
            item.status === status
        );

    }


    if (sort === "latest") {

      items.sort(
        (a, b) =>
          b.year - a.year
      );

    }


    if (sort === "oldest") {

      items.sort(
        (a, b) =>
          a.year - b.year
      );

    }


    if (sort === "rating") {

      items.sort(
        (a, b) =>
          Number(b.rating) -
          Number(a.rating)
      );

    }


    if (sort === "az") {

      items.sort(
        (a, b) =>
          a.title.localeCompare(
            b.title
          )
      );

    }


    grid.innerHTML =
      items.length

        ? items.map(card).join("")

        : `<div class="empty">
             No titles match
             these filters.
           </div>`;

  }


  controls.forEach(
    control =>
      control.addEventListener(
        "change",
        applyFilters
      )
  );

}


/* =========================
   START
========================= */

function mount() {

  const page =
    document.body.dataset.page;


  const app =
    document.querySelector(
      "#app"
    );


  let content = "";


  if (page === "home") {

    content =
      homePage();

  }


  if (page === "category") {

    content =
      categoryPage(
        document.body.dataset.category
      );

  }


  app.innerHTML =
    renderHeader() +

    `<main class="container">
      ${content}
     </main>` +

    renderBottomNav();


  setupSearch();

}


document.addEventListener(
  "DOMContentLoaded",
  mount
);
