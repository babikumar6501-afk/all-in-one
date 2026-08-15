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

function searchCard(item) {

  return `

  <article class="card">

    <a
      href="details.html?id=${item.id}"
      class="poster-wrap"
    >

      <img
        src="${item.poster}"
        alt="${escapeHTML(
          item.title
        )}"
        loading="lazy"
      >


      <span class="rating">

        ★ ${item.rating}

      </span>


      <span class="type-badge">

        ${escapeHTML(
          item.category
        )}

      </span>

    </a>


    <div class="card-body">

      <h3>

        <a
          href="details.html?id=${item.id}"
        >

          ${escapeHTML(
            item.title
          )}

        </a>

      </h3>


      <div class="meta">

        ${item.year}

        •

        ${escapeHTML(
          item.language?.[0] || ""
        )}

      </div>


      <div class="chips">

        ${(item.quality || [])

          .map(
            quality =>
              `<span>
                ${escapeHTML(
                  quality
                )}
               </span>`
          )

          .join("")}

      </div>

    </div>

  </article>

  `;

}


/* =========================
   SEARCH PAGE
========================= */

function renderSearch() {

  const query =
    new URLSearchParams(
      location.search
    ).get("q") || "";


  document.querySelector(
    "#app"
  ).innerHTML = `

  <header class="header">

    <div class="nav">

      <a
        class="logo"
        href="index.html"
      >

        <span>CV</span>

        CineVerse

      </a>


      <form
        class="search search-page"
      >

        <input
          id="q"
          value="${escapeHTML(
            query
          )}"
          placeholder="Search the catalog..."
        >

        <button type="submit">
          ⌕
        </button>

      </form>

    </div>

  </header>


  <main class="container">


    <div class="page-title">

      <span class="eyebrow">
        SEARCH
      </span>


      <h1>
        Find your next watch
      </h1>


      <p id="count"></p>

    </div>


    <div
      id="results"
      class="grid"
    ></div>


  </main>

  `;


  const input =
    document.querySelector(
      "#q"
    );


  const results =
    document.querySelector(
      "#results"
    );


  const count =
    document.querySelector(
      "#count"
    );


  function runSearch() {

    const term =
      input.value
        .trim()
        .toLowerCase();


    const resultsData =
      animeData.filter(
        item => {

          const searchable = [

            item.title,

            item.category,

            item.type,

            ...(item.genres || []),

            ...(item.language || []),

            item.year,

            item.status

          ]

            .join(" ")

            .toLowerCase();


          return (
            !term ||
            searchable.includes(
              term
            )
          );

        }
      );


    count.textContent =

      `${resultsData.length} result${
        resultsData.length === 1
          ? ""
          : "s"
      } found`;


    results.innerHTML =

      resultsData.length

        ? resultsData
            .map(searchCard)
            .join("")

        : `

          <div class="empty">

            No matching titles found.

          </div>

          `;

  }


  input.addEventListener(
    "input",
    runSearch
  );


  document
    .querySelector(".search-page")
    .addEventListener(
      "submit",
      event => {

        event.preventDefault();

        runSearch();

      }
    );


  runSearch();

}


document.addEventListener(
  "DOMContentLoaded",
  renderSearch
);
