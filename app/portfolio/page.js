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

<BaseLayout>

<div>
    <div className="current-portfolio-wrap">
        <div className="container">
            <div className="custom-container">
                <div className="current-portfolio-head">
                    <h3><span>Current</span> Portfolio</h3>
                </div>
                <div className="current-portfolio-inner flex-row">
                    <div className="current-portfolio-item">
                        <a href="void:;">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>THE EXCHANGE HOTEL</h4>
                        </a>
                    </div>
                    <div className="current-portfolio-item">
                        <a href="void:;">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>THE EXCHANGE HOTEL</h4>
                        </a>
                    </div>
                    <div className="current-portfolio-item">
                        <a href="void:;">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>THE EXCHANGE HOTEL</h4>
                        </a>
                    </div>
                    <div className="current-portfolio-item">
                        <a href="void:;">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>THE EXCHANGE HOTEL</h4>
                        </a>
                    </div>
                    <div className="current-portfolio-item">
                        <a href="void:;">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>THE EXCHANGE HOTEL</h4>
                        </a>
                    </div>
                    <div className="current-portfolio-item">
                        <a href="void:;">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>THE EXCHANGE HOTEL</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  

    {/* <!-- Realized Portfolio Section Start Here --> */}
    <div className="realized-portfolio-wrap">
        <div className="container">
            <div className="custom-container">
                <div className="realized-portfolio-head">
                    <h3><span>Realized</span> Portfolio</h3>
                </div>
                <div className="realized-portfolio-inner flex-row">
                    <div className="realized-portfolio-item">
                        <div className="realized-item-img">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>The Avenue</h4>
                        </div>
                    </div>
                    <div className="realized-portfolio-item">
                        <div className="realized-item-img">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>The Avenue</h4>
                        </div>
                    </div>
                    <div className="realized-portfolio-item">
                        <div className="realized-item-img">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>The Avenue</h4>
                        </div>
                    </div>
                    <div className="realized-portfolio-item">
                        <div className="realized-item-img">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>The Avenue</h4>
                        </div>
                    </div>
                    <div className="realized-portfolio-item">
                        <div className="realized-item-img">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>The Avenue</h4>
                        </div>
                    </div>
                    <div className="realized-portfolio-item">
                        <div className="realized-item-img">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>The Avenue</h4>
                        </div>
                    </div>
                    <div className="realized-portfolio-item">
                        <div className="realized-item-img">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>The Avenue</h4>
                        </div>
                    </div>
                    <div className="realized-portfolio-item">
                        <div className="realized-item-img">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>The Avenue</h4>
                        </div>
                    </div>
                    <div className="realized-portfolio-item">
                        <div className="realized-item-img">
                            <img src="images/current-portfolio-img1.webp" alt="img" className="img-fluid" />
                            <h4>The Avenue</h4>
                        </div>
                    </div>
                    <div className="realized-item-backdescribe">
                            <div className="realized-backdescribe-container">
                                <div className="realized-backdescribe-btn">
                                    <button className="cross-btn" id="crossBtn2">X</button>
                                </div>
                                <div className="realized-backdescribe-inner">
                                    <div className="realized-backdescribe-box">
                                        <div className="realized-backdescribe-img">
                                            <img src="images/realized-img1.webp" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="realized-backdescribe-content">
                                            <h4>Andrew Wright</h4>
                                            <span>Chief Executive Officer</span>
                                            <ul>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                                <li>
                                                    <img src="images/pro-icon1.webp" alt="icon" className="img-fluid" />
                                                    <p><span>Strategy:</span> Value Add</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Realized Portfolio Section End Here --> */}
</div>  

</BaseLayout>

  )
}

export default page
