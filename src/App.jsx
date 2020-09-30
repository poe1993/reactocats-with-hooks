import React from 'react'
function PageHeader() {
  return (
    <head lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Octodex</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/screen.css" />
    </head>
  )
}
function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <div>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GithubLogo"
                />
              </li>
              <li>
                <a href="#">Octodex</a>
              </li>
            </div>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div>
        <div>© 2013 – 2020 GitHub, Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}
function Octocat(props) {
  return (
    <article>
      <div>
        <a href={props.res}>
          <img src={props.image} width="400" height="400" alt={props.alt} />
        </a>
      </div>
      <ul>
        <li>
          {props.number}:
          <a href={props.res}>
            <h1>{props.name}</h1>
          </a>
        </li>
        <li>
          <a href={props.uref}>
            <img
              src={props.creator}
              width="24px"
              height="24px"
              alt={props.creatoralt}
            />
          </a>
        </li>
      </ul>
    </article>
  )
}
function Octocats() {
  return (
    <html>
      <PageHeader />
      <body>
        <Header />
        <main>
          <section>
            <Octocat
              name="Terracottocat"
              number="#150"
              image="https://octodex.github.com//images/Terracottocat_Single.png"
              res="https://octodex.github.com//terracottocat/"
              alt="Terracottocat"
              uref="https://github.com/chubbmo"
              creator="https://github.com/chubbmo.png"
              creatoralt="chubbmo"
            />
            <Octocat
              name="Octogatos"
              number="#148"
              image="https://octodex.github.com//images/Octogatos.png"
              res="https://octodex.github.com//octogatos/"
              alt="Octogatos"
              uref="https://github.com/cameronfoxly"
              creator="https://github.com/cameronfoxly.png"
              creatoralt="cameronfoxly"
            />

            <Octocat
              name="Sentrytocat"
              number="#143"
              image="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
              res="https://octodex.github.com//sentrytocat/"
              alt="Sentrytocat"
              uref="https://github.com/cameronmcefee"
              creator="https://github.com/cameronmcefee.png"
              creatoralt="cameronfoxly"
            />

            <Octocat
              name="Boxertocat"
              number="#141"
              image="https://octodex.github.com//images/boxertocat_octodex.jpg"
              res="https://octodex.github.com//boxertocat/"
              alt="Boxertocat"
              uref="https://github.com/rubyjazzy"
              creator="https://github.com/rubyjazzy.png"
              creatoralt="rubyjazzy"
            />

            <Octocat
              name="Surftocat"
              number="#140"
              image="https://octodex.github.com//images/surftocat.png"
              res="https://octodex.github.com//suftocat/"
              alt="Surftocat"
              uref="https://github.com/jeejkang"
              creator="https://github.com/jeejkang.png"
              creatoralt="jeejkang"
            />

            <Octocat
              name="Scubatocat"
              number="#138"
              image="https://octodex.github.com//images/scubatocat.png"
              res="https://octodex.github.com//scubatocat/"
              alt="Scubatocat"
              uref="https://github.com/cameronfoxly"
              creator="https://github.com/cameronfoxly.png"
              creatoralt="cameronfoxly"
            />

            <Octocat
              name="Dinotocat"
              number="#130"
              image="https://octodex.github.com//images/dinotocat.png"
              res="https://octodex.github.com//dinotocat/"
              alt="Dinotocat"
              uref="https://github.com/heyhayhay"
              creator="https://github.com/heyhayhay.png"
              creatoralt="heyhayhay"
            />

            <Octocat
              name="Hulatocat"
              number="#139"
              image="https://octodex.github.com//images/hula_loop_octodex03.gif"
              res="https://octodex.github.com//hulatocat/"
              alt="Hulatocat"
              uref="https://github.com/heyhayhay"
              creator="https://github.com/heyhayhay.png"
              creatoralt="heyhayhay"
            />

            <Octocat
              name="Maxtocat"
              number="#109"
              image="https://octodex.github.com//images/maxtocat.gif"
              res="https://octodex.github.com//Maxtocat/"
              alt="Maxtocat"
              uref="https://github.com/jeejkang"
              creator="https://github.com/jeejkang.png"
              creatoralt="jeejkang"
            />

            <Octocat
              name="Daftpunktocat-thomas"
              number="#101"
              image="https://octodex.github.com//images/daftpunktocat-thomas.gif"
              res="https://octodex.github.com//daftpunktocat-thomas/"
              alt="Daftpunktocat-thomas"
              uref="https://github.com/jeejkang"
              creator="https://github.com/jeejkang.png"
              creatoralt="jeejkang"
            />

            <Octocat
              name="Daftpunktocat-guy"
              number="#100"
              image="https://octodex.github.com//images/daftpunktocat-guy.gif"
              res="https://octodex.github.com//daftpunktocat-guy/"
              alt="Daftpunktocat-guy"
              uref="https://github.com/jeejkang"
              creator="https://github.com/jeejkang.png"
              creatoralt="jeejkang"
            />

            <Octocat
              name="Nyantocat"
              number="#46"
              image="https://octodex.github.com//images/nyantocat.gif"
              res="https://octodex.github.com//nyantocat/"
              alt="cameronmcefee"
              uref="https://github.com/cameronmcefee"
              creator="https://github.com/cameronmcefee.png"
              creatoralt="cameronmcefee"
            />
          </section>
        </main>
        <Footer />
      </body>
    </html>
  )
}

function App() {
  return <Octocats />
}

export default App
