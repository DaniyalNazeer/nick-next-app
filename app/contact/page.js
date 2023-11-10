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
      {/* <!-- Contact Main Section Start Here --> */}
    <div className="contact-main-wrap">
       <div className="container">
        <div className="custom-container">
            <div className="contact-main-inner flex-row">
                <div className="contact-main-box">
                    <div className="contact-main-content">
                        <div className="contact-main-logo">
                            <img src="images/Ally Capital Group-white.webp" alt="img" className="img-fluid"/>
                        </div>
                        <p>1211 North Westshore Boulevard, Suite 800  |  Tampa, FL 33607</p>
                        <h5>CONNECT</h5>
                        <p>For general inquiries, please contact us via email or phone at:</p>
                        <a href="void:;" className="email-link">info@allycapitalgroup.com</a>
                        <h5>MEDIA INQUIRIES</h5>
                        <p>For media or press inquiries, please contact us via email at:</p>
                        <a href="void:;" className="email-link">info@allycapitalgroup.com</a>
                    </div>
                    <div className="contact-main-form">
                        <h3>Contact Us</h3>
                        <form action="">
                            <div className="form-group">
                                <label for="first-name">First Name</label>
                                <input type="text" name="first-name" required/>
                            </div>
                            <div className="form-group">
                                <label for="last-name">Last Name</label>
                                <input type="text" name="last-name" required/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" required/>
                            </div>
                            <div className="form-group">
                                <label for="message">Write A Message</label>
                                <textarea name="message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    {/* <!-- Contact Main Section End Here --> */}
      </BaseLayout>
    </div>
  )
}

export default page
