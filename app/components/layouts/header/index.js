"use client";
import { useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { isEmpty, isArray } from "lodash";
import getPathNameFromUrl from "../../../../src/utils/miscellaneous";


const Header = ({ data }) => {
  // console.log('header -------> ', data )

  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle } = data;

  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <header className="main-header">
        <div className="header-inner flex justify-center py-4">
          <div className="container">
            <div className="header-inner-data flex justify-around items-center">
              <Link href="/">

              {
				siteLogoUrl ? (
				<img className="mr-2" src={ siteLogoUrl } alt={ `${ siteTitle } logo` }
				width="800"
                height="800"/>
				) : <TailwindIcon/>
			    }
                
              </Link>

              <ul className="navbar flex">
                {!isEmpty(headerMenuItems) && headerMenuItems.length
                  ? headerMenuItems.map((menuItem) => (
                      <li className="mr-2 ml-2">
                        {
                          <a
                            href="#"
                            dangerouslySetInnerHTML={{ __html: menuItem.title }}
                          ></a>
                        }
                      </li>
                    ))
                  : null}

                {/* <ul className="navbar flex">
                            <li className="mr-2 ml-2"><a href="void:;">Home</a></li>
                            <li className="mr-2 ml-2"><a href="void:;">About</a></li>
                            <li className="mr-2 ml-2"><a href="void:;">Portfolio</a></li>
                            <li className="mr-2 ml-2"><a href="void:;">In the News</a></li>
                            <li className="mr-2 ml-2"><a href="void:;">Contact</a></li>
                            <li className="mr-2 ml-2"><a href="void:;">Investor Portal</a></li>
                        </ul> */}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
