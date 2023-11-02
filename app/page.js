import Image from "next/image";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import bannerImg from "../public/images/banner.webp";
import morisonImg from "../public/images/morrison.webp";
import borofficeImg from "../public/images/boroffice.webp";


const getData = async (context) => {
 
  const url = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`;

  try {
    const res = await fetch(url);
    const repo = await res.json();
    return repo;
    revalidate: 1
  } catch (error) {}
};

const Home = async (data) => {

  const {data:{ header , footer }} = await getData();

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
              <div className="banner-inner-img">
                <Image
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
                <Image
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