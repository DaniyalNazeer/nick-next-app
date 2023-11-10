"use client";
import {useState}  from "react";
import Head from "next/head";
import Link from "next/link";
import { isEmpty , isArray} from "lodash";
import Image from "next/image"; 
import react from 'react';
import Header from '../components/layouts/header/index'
import Footer from '../components/layouts/footer/index'
import BaseLayout from '../base-layout/base-layout'

const page = () => {
  return (
    <div>
      <BaseLayout>
      
      {/* <!-- Blog main Section Start Here --> */}
    <div className="blog-main-wrap">
       <div className="container">
        <div className="custom-container">
            <div className="blog-main-inner flex-row">
                <div className="blog-main-box">
                    <div className="blog-main-img">
                        <img src="images/b1.webp" alt="img" className="img-fluid"/>
                    </div>
                    <div className="blog-main-content">
                        <span className="tag-date">Aug 1</span>
                       
                            <h4>Ellison, Alfonso and Capitano families purchase historic Ybor building for $9.25 million</h4>
                            <p>Three major Tampa Bay players in construction, development and design have, together, acquired a building in Ybor City. The building</p>
                        
                    </div>
                </div>
                <div className="blog-main-box">
                    <div className="blog-main-img">
                        <img src="images/b2.webp" alt="img" className="img-fluid"/>
                    </div>
                    <div className="blog-main-content">
                        <span className="tag-date">Aug 1</span>
                        
                            <h4>Ellison, Alfonso and Capitano families purchase historic Ybor building for $9.25 million</h4>
                            <p>Three major Tampa Bay players in construction, development and design have, together, acquired a building in Ybor City. The building</p>
                        
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    {/* <!-- Blog main Section End Here --> */}
      
      </BaseLayout>
    </div>
  )
}

export default page
