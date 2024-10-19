import React from "react";
import footerStyles from "../styles/Footer.module.scss"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export const metadata = {
    url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const Footer = () => {
    return (
        <div>
            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles["logo-details"]}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>Amit kumar</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link
                                href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804791&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9075215%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF-Wbx8gfYW_WfOAiihW8dTUuuPCGCMdxVigRm3ryTixzDOIjGAmrrEaAn_uEALw_wcB"
                                target="_blank"
                            >
                                <i>
                                    {" "}
                                    <FaFacebookF />{" "}
                                </i>
                            </Link>
                            <Link href="https://twitter.com/i/flow/login" target="_blank">
                                <i>
                                    {" "}
                                    <FaTwitter />{" "}
                                </i>{" "}
                            </Link>
                            <Link
                                href="https://www.instagram.com/notgetin18/"
                                target="_blank"
                            >
                                <i>
                                    {" "}
                                    <FaInstagram />{" "}
                                </i>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/notgetin18/"
                                target="_blank"
                            >
                                <i>
                                    {" "}
                                    <FaLinkedinIn />{" "}
                                </i>
                            </Link>
                            <Link href="#">
                                <i>
                                    {" "}
                                    <FaYoutube />{" "}
                                </i>
                            </Link>
                        </div>
                    </div>
                    <div className={footerStyles["link-boxes"]}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Get started</a>
                            </li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Services</li>
                            <li>
                                <a href="#">App design</a>
                            </li>
                            <li>
                                <a href="#">Web design</a>
                            </li>
                            <li>
                                <a href="#">Logo design</a>
                            </li>
                            <li>
                                <a href="#">Banner design</a>
                            </li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li>
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#">My account</a>
                            </li>
                            <li>
                                <a href="#">Prefrences</a>
                            </li>
                            <li>
                                <a href="#">Purchase</a>
                            </li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Courses</li>
                            <li>
                                <a href="#">HTML & CSS</a>
                            </li>
                            <li>
                                <a href="#">JavaScript</a>
                            </li>
                            <li>
                                <a href="#">Photography</a>
                            </li>
                            <li>
                                <a href="#">Photoshop</a>
                            </li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles["input-box"]}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li>
                                <input type="text" placeholder="Enter your email" />
                            </li>
                            <li>
                                <input type="button" value="Subscribe" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles["bottom-details"]}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}>
                            {" "}
                            Copyright © 2023
                            <Link href="/>"> Amit kumar.</Link> All rights reserved{" "}
                        </span>
                        <span className={footerStyles.policy_terms}>
                            <Link href="/">Privacy policy</Link>
                            <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
