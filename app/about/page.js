"use client";
import {useState}  from "react";
import Head from "next/head";
import Link from "next/link";
import { isEmpty , isArray} from "lodash";
import Image from "next/image"; 
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import react from 'react';
import Header from '../components/layouts/header/index';
import Footer from '../components/layouts/footer/index';
import BaseLayout from '../base-layout/base-layout'
// reactstrap components

const page = () => {

    //const [modalOpen, setModalOpen] = useState(false);

    

  return (
    <BaseLayout>
      <div>
        <div className="about-us-wrap">
          <div className="container">
            <div className="about-us-inner">
              <div className="about-us-box">
                <h2>About Us</h2>
                <p>
                  Our highly experienced, multifaceted team of professionals –
                  and the relationships and expertise they bring to the table –
                  are our greatest strength. This experience, combined with our
                  intimate market awareness, enables us to navigate the
                  fast-moving commercial real estate market confidently and
                  competitively, while honing in on profitable opportunities
                  others often miss.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-team-wrap">
          <div className="container">
            <div className="custom-container">
              <div className="our-team-head">
                <h3>
                  Our <span>Team</span>
                </h3>
              </div>
              <div className="our-team-inner flex-row">
                <div className="our-team-box">
                  <div className="team-box-img">
                    <img
                      src="images/MG_3134_edited_edited.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-box-content">
                    <h4>Andrew Wright</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
                <div className="our-team-box">
                  <div className="team-box-img">
                    <img
                      src="images/matt-best_1_edited.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-box-content">
                    <h4>Andrew Wright</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
                <div className="our-team-box">
                  <div className="team-box-img">
                    <img
                      src="images/Best-5_edited.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-box-content">
                    <h4>Andrew Wright</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
                <div className="our-team-box">
                  <div className="team-box-img">
                    <img
                      src="images/Will-Sadlowski-brick shot_edited.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-box-content">
                    <h4>Andrew Wright</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
                <div className="our-team-box">
                  <div className="team-box-img">
                    <img
                      src="images/Chris-ACG_edited.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-box-content">
                    <h4>Andrew Wright</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
                <div className="our-team-box">
                  <div className="team-box-img">
                    <img
                      src="images/Best-3-ACG_edited.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-box-content">
                    <h4>Andrew Wright</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
                <div className="our-team-box">
                  <div className="team-box-img">
                    <img
                      src="images/Kevin.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-box-content">
                    <h4>Andrew Wright</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
                <div className="our-team-box">
                  <div className="team-box-img">
                    <img
                      src="images/Best-6_edited.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-box-content">
                    <h4>Andrew Wright</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
                <div className="our-team-box">
                  <div className="team-box-img">
                    <img
                      src="images/Carrie_Brick-BG-Close-up_edited.webp"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-box-content">
                    <h4>Andrew Wright</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
                <div className="team-box-backdescribe" id="backDescribeShow">
                  <div className="box-backdescribe-container">
                    <div className="team-backdescribe-btn">
                      <button className="cross-btn" id="crossBtn">
                        X
                      </button>
                    </div>
                    <div className="team-backdescribe-inner">
                      <div className="team-backdescribe-box">
                        <div className="backdescribe-box-img">
                          <img
                            src="images/MG_3134_edited_edited.webp"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="backdescribe-box-content">
                          <h4>Andrew Wright</h4>
                          <span>Chief Executive Officer</span>
                          <p>
                            A highly driven entrepreneur, Andrew Wright has
                            built a reputation as a leader and innovator in the
                            real estate and investment space. As the managing
                            partner of Ally Capital Group (ACG), Mr. Wright
                            focuses on investor relations, equity formation,
                            deal sourcing and capitalizing on investment
                            opportunities. His extensive network, combined with
                            experience in all aspects of the real estate
                            business, has allowed ACG to acquire hundreds of
                            millions in property value across multiple asset
                            classNamees in several states since 2009.
                          </p>
                          <p>
                            A highly driven entrepreneur, Andrew Wright has
                            built a reputation as a leader and innovator in the
                            real estate and investment space. As the managing
                            partner of Ally Capital Group (ACG), Mr. Wright
                            focuses on investor relations, equity formation,
                            deal sourcing and capitalizing on investment
                            opportunities. His extensive network, combined with
                            experience in all aspects of the real estate
                            business, has allowed ACG to acquire hundreds of
                            millions in property value across multiple asset
                            classNamees in several states since 2009.
                          </p>
                          <p>
                            A highly driven entrepreneur, Andrew Wright has
                            built a reputation as a leader and innovator in the
                            real estate and investment space. As the managing
                            partner of Ally Capital Group (ACG), Mr. Wright
                            focuses on investor relations, equity formation,
                            deal sourcing and capitalizing on investment
                            opportunities. His extensive network, combined with
                            experience in all aspects of the real estate
                            business, has allowed ACG to acquire hundreds of
                            millions in property value across multiple asset
                            classNamees in several states since 2009.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
  
}

export default page;
