const params =
  new URLSearchParams(
    window.location.search
  );

const id =
  Number(params.get("id"));


const item =
  animeData.find(
    content =>
      content.id === id
  );


/* =========================
   ESCAPE
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
   HEADER
========================= */

function detailHeader() {

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

        <a href="movies.html">
          Movies
        </a>

        <a href="webseries.html">
          Web Series
        </a>

        <a href="anime.html">
          Anime
        </a>

        <a href="kdrama.html">
          K-Drama
        </a>

        <a href="cdrama.html">
          C-Drama
        </a>

        <a href="jdrama.html">
          J-Drama
        </a>

      </nav>


      <a
        class="back"
        href="index.html"
      >
        ← Home
      </a>

    </div>

  </header>

  `;

}


/* =========================
   DOWNLOAD BUTTON
========================= */

function qualityButtons(
  downloads
) {

  if (!downloads) return "";


  return Object.entries(
    downloads
  )

    .map(
      ([quality, url]) => `

      <a
        class="download"
        href="${url}"
        target="_blank"
        rel="noopener"
      >

        <span>
          ${escapeHTML(
            quality
          )}
        </span>

        <b>
          Download ↗
        </b>

      </a>

      `
    )

    .join("");

}


/* =========================
   SEASONS
========================= */

function renderSeasons() {

  if (
    !item.seasons ||
    !item.seasons.length
  ) {

    return `

      <div class="download-grid">

        ${qualityButtons(
          item.downloads
        )}

      </div>

    `;

  }


  return item.seasons

    .map(
      season => `

      <div class="season">

        <h3>
          Season ${season.season}
        </h3>


        ${season.episodes

          .map(
            episode => `

            <div class="episode">

              <div>

                <strong>
                  Episode
                  ${episode.number}
                </strong>


                <span>
                  ${escapeHTML(
                    episode.title || ""
                  )}
                </span>

              </div>


              <div
                class="episode-downloads"
              >

                ${qualityButtons(
                  episode.downloads
                )}

              </div>

            </div>

            `
          )

          .join("")}

      </div>

      `
    )

    .join("");

}


/* =========================
   DETAILS
========================= */

function renderDetails() {

  const app =
    document.querySelector(
      "#app"
    );


  if (!item) {

    app.innerHTML = `

      ${detailHeader()}

      <main class="container">

        <div class="empty large">

          Content not found.

          <br><br>

          <a href="index.html">
            Return Home
          </a>

        </div>

      </main>

    `;

    return;

  }


  document.title =
    `${item.title} | CineVerse`;


  app.innerHTML = `

  ${detailHeader()}


  <main class="detail">


    <div
      class="detail-banner"
      style="
        background-image:
        linear-gradient(
          90deg,
          rgba(7,7,11,.98),
          rgba(7,7,11,.45),
          rgba(7,7,11,.95)
        ),
        url('${item.banner}');
      "
    ></div>


    <div class="detail-inner">


      <img
        class="detail-poster"
        src="${item.poster}"
        alt="${escapeHTML(
          item.title
        )}"
      >


      <div class="detail-info">


        <span class="eyebrow">

          ${escapeHTML(
            item.category
          )}

          •

          ${item.year}

        </span>


        <h1>
          ${escapeHTML(
            item.title
          )}
        </h1>


        <p>
          ${escapeHTML(
            item.description
          )}
        </p>


        <div class="facts">

          <span>
            ★ ${item.rating}
          </span>

          <span>
            ${escapeHTML(
              item.status
            )}
          </span>

          <span>
            ${escapeHTML(
              item.country || "—"
            )}
          </span>

        </div>


        <div class="chips big">

          ${(item.genres || [])

            .map(
              genre =>
                `<span>
                  ${escapeHTML(
                    genre
                  )}
                 </span>`
            )

            .join("")}

        </div>


        <div class="facts">

          <span>
            Language:
            ${(item.language || [])
              .map(escapeHTML)
              .join(", ")}
          </span>


          <span>
            Quality:
            ${(item.quality || [])
              .join(", ")}
          </span>

        </div>


      </div>

    </div>


    <section class="download-section">


      <div class="section-head">

        <h2>

          ${
            item.seasons?.length
              ? "Seasons & Episodes"
              : "Download Options"
          }

        </h2>


        <span class="legal-note">
          Demo links only
        </span>

      </div>


      ${renderSeasons()}


    </section>


  </main>

  `;

}


document.addEventListener(
  "DOMContentLoaded",
  renderDetails
);
