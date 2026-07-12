import Link from "next/link";

export default function Casinos() {
  return (
    <main>

      <section className="hero">

        <h1>
          Top Online Casinos
        </h1>

        <p>
          Compare trusted online casinos,
          ratings and features.
        </p>

      </section>



      <section className="cards">


        <div className="card">


          <div className="casino-logo">
            🎰
          </div>


          <h2>
            Stake Casino
          </h2>


          <div className="rating">
            ⭐⭐⭐⭐⭐
          </div>


          <p>
            Rating: 4.8/5
          </p>


          <p>
            ✅ Large game selection
            <br />
            ✅ Fast payments
            <br />
            ✅ Crypto support
            <br />
            ✅ Live casino
          </p>



          <p>
            Stake is a popular online
            casino platform with many
            games and entertainment options.
          </p>



          <a
            href="https://stake.com/?c=EIJ1YRw3"
            target="_blank"
            rel="noopener noreferrer"
          >

            <button>
              Visit Stake
            </button>

          </a>


        </div>




        <div className="card">


          <div className="casino-logo">
            🎲
          </div>


          <h2>
            Coming Soon
          </h2>


          <p>
            New casino review coming soon.
          </p>


        </div>




        <div className="card">


          <div className="casino-logo">
            🃏
          </div>


          <h2>
            Coming Soon
          </h2>


          <p>
            New casino review coming soon.
          </p>


        </div>


      </section>



      <section className="hero">


        <h2>
          How We Rate Casinos
        </h2>


        <p>
          We compare games, payment options,
          user experience and important casino
          features to help players make informed
          decisions.
        </p>


      </section>


    </main>
  );
}
