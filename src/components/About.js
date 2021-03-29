import React from "react";
// import Circle from "../about_ellipse2.svg";npm

const AboutPage = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} about-page pb-3`}>

            <div className="container ">

                <h2 className="mb-0">Welcome to Graceworths Musical Academy</h2>
                <p className=" text-center">creating the foundation for lifelong learning</p>

                <h2 className="pt-3 pb-5">About The Founder</h2>
                <p>Our founder is experienced and a professional teacher, she has presented students for professional and graded exams over the years with excellent results.
                    <br />
                    She has trained many who have become professionals on musical instruments with experience of over 15 years.
                    <br />
                    <span className="bold">From the founder:</span>
                    <br />
                    <em>"The secret of getting ahead is getting started...start your kids on a journey to creative thinking."</em>
                </p>

                <h2 className="pt-5 pb-3">About Us</h2>
                

                <p>Graceworths Institute loves to discover the innermost potentials in your creative world in terms of music, arts and vocation. The institute runs various sessions targeted at prepping children and adults.</p>

                <p>Graceworths delights in engaging people to showcase their hidden strengths. The institute has planned programs for all ages that individuals can fit into as preffered</p>

                <p>We specially have programs for young kids...give your kids the best start to a world of fulfilled total education in creativity and expressivity through music art.
            </p>
            </div>

            {/* <img src={Circle} className="about_ellipse" alt="decor"/>
            <img src={Circle2} className="about_ellipse2" alt="decor" /> */}
        </div>
    );
};

export default AboutPage;
