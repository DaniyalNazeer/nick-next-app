'use client'
import { useContext,useState }  from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { isEmpty, isArray } from 'lodash';
import  getPathNameFromUrl  from '../../../../src/utils/miscellaneous';
import Image from 'next/image'


const Header = ({ data }) => {

    // console.log('header -------> ', data )
    
    const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle } = data;
    
    const [ isMenuVisible, setMenuVisibility ] = useState( false );
    
    return(
        <>
        <Head>

            <title>{ siteTitle }</title>
            

        </Head>

        <header className="main-header">
            <div className="header-inner flex justify-center py-4">
                <div className="container">
                    <div className="header-inner-data flex justify-around items-center">
                    <Link href="/">


	    {
		     <Image
            // style={{ width:100 , height : 400 }} 
            src={ siteLogoUrl}
            width={'500px'}
            height={'500px'}
            alt="Picture of the author"
            
            
            />
	    }
					
								
							</Link>      

                            <ul className="navbar flex">
                            
                         

                            { ! isEmpty( headerMenuItems ) && headerMenuItems.length ? headerMenuItems.map( menuItem => (
								<li className="mr-2 ml-2">
										{ <a href="#"
										   dangerouslySetInnerHTML={ { __html: menuItem.title } } >
                                        
                                       </a> }
                                </li>   
									
								) ) : null }

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
    )
    
}


export default Header;
