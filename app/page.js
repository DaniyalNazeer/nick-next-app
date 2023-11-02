import Image from "next/image";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import bannerImg from "../public/images/banner.webp";
import morisonImg from "../public/images/morrison.webp";
import borofficeImg from "../public/images/boroffice.webp";
// import type {  GetStaticProps } from 'next'

const getData = async (context) => {
  const url = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`;

  try {
    // const url = 'https://allycapitalgroup.chiccolacreative.com/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer'
    const res = await fetch(url);
    const repo = await res.json();
    return repo;
  } catch (error) {}
};
const Home = async () => {
  const {data:{ header , footer }} = await getData();


  //const header = getStaticProps();
  //  console.log("twst", header.then(e=> e ) )

  return (
    <div>
      <Header data={header} />

      <main className="">
        <div className="banner-main-wrap">
          <div className="container">
            <div className="banner-main-inner flex flex-row items-center justify-center">
              <div className="banner-inner-content">
                <h1>
                  Partner with a <br />
                  <strong>
                    Proven <span>Ally</span>
                  </strong>{" "}
                  <br />
                  for <strong>Estate</strong>
                </h1>
              </div>
              <div>
                <Image
                  // style={{ width:100 , height : 400 }}
                  src={bannerImg}
                  width={"500px"}
                  height={"500px"}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-info-wrap items-center">
          <div className="container">
            <div className="about-info-inner flex flex-row items-center justify-center">
              <div className="about-info-img">
                {/* <Image src="./images/boroffice.webp" alt="banner" /> */}
                <Image
                  // style={{ width:100 , height : 400 }}
                  src={morisonImg}
                  width={"500px"}
                  height={"500px"}
                  alt="Picture of the author"
                />
              </div>
              <div className="about-info-box">
                <h2>About Us</h2>
                <p>
                  Ally Capital Group (ACG) strategically identifies and executes
                  on commercial and multifamily properties across the investment
                  landscape with the goal of maximizing value for investors and
                  stakeholders. Through our innovative business model and strong
                  alliances, we have earned a reputation for consistently
                  securing opportunities, efficiently closing deals, and quickly
                  adding value to each asset in our portfolio.
                </p>
                <a
                  href="void:;"
                  className="read-more flex flex-row justify-center"
                >
                  Our Team
                </a>
              </div>
            </div>

            <div className="about-info-inner flex flex-row items-center justify-center">
              <div className="about-info-box about-info-box2">
                <h2>Portfolio</h2>
                <p>
                  We target opportunistic commercial real estate investments
                  across all product types and stages of life. From ground-up
                  development that enhance a community to extensive
                  redevelopment projects that breathe new life into a property,
                  ACG focuses on investments in iconic locations throughout the
                  Southeast and beyond.{" "}
                </p>
                <a
                  href="void:;"
                  className="read-more flex flex-row justify-center"
                >
                  Portfolio
                </a>
              </div>
              <div className="about-info-img about-info-img2">
                {/* <Image src="./images/morrison.webp" alt="banner" /> */}
                <Image
                  // style={{ width:100 , height : 400 }}
                  src={borofficeImg}
                  width={"500px"}
                  height={"500px"}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
};

export default Home;

//  const getStaticProps = (async (context) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
//   return { props: { repo } }
// })
// getStaticProps();
//  async function getStaticProps() {

// const  data  = await axios.get( 'http://localhost/nick/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer');
// console.log("data", data )
//   return{
//   props: {

//     data: data || {},

//   },

//   revalidate: 1,

// };
//  }

// const getStaticProps = (async (context) => {

//     try {
//       const res = await fetch('http://localhost/nick/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer')
//       const repo = await res.json()

//       return repo

//     } catch (error) {

//     }
//     getStaticProps();

//   })

// const getStaticProps = (async (context) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
//   console.log(repo )
//   return { props: { repo } }
// })
