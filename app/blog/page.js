import Link from "next/link";

export default function Blog() {
  return (
    <main>

      <section className="hero">

        <h1>
          Casino Guides & Reviews
        </h1>

        <p>
          Learn about casinos, games and responsible gaming.
        </p>

      </section>



      <section className="cards">


        <div className="card">


          <img
            src="/stake-review.jpg"
            alt="Stake Casino Review"
            style={{
              width:"100%",
              borderRadius:"20px"
            }}
          />


          <h2>
            Is Stake a Good Casino?
          </h2>


          <p>
            Complete review, popular games
            and how to play smart.
          </p>



          <Link href="/blog/stake-review">

            <button>
              Read Article
            </button>

          </Link>


        </div>


      </section>


    </main>
  );
}
