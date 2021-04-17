import React from "react";
import founder from "../founder.jpg";
// import Circle from "../about_ellipse2.svg";npm

const AboutPage = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} about-page pb-3`}>

            <div className="container ">

                {/* <h2 className="mb-0">Welcome to Graceworths Musical Academy</h2>
                <p className=" text-center">creating the foundation for lifelong learning</p> */}

                <h2 className="pt-5 pb-3">About Us</h2>

                <h5 className="bold text-center">Our Founder</h5>
                <img className="founder-img mx-auto" src={founder} alt="founder" />

                <p className="pb-0 mb-0">It is with great pleasure I introduce myself as the founder and CEO of Graceworths arts and resources.
                I am excited to you on this website and we hope you will enjoy reaping all the benefits provided in our highly resourceful packages especially
                for your kids and young adults.</p>
                <p className="pb-0 mb-0">
                    Our kids so innocentand blank on the pages of their minds dependson what parents and their minds depends on what parents and the environment writes on the pure pages of their minds. The foundation of their thinking culture is built on the strength of intelligence solidified on
                    on the exposure we create on their minds today.</p>
                <p className="pb-0 mb-0">
                    Creative thinking starts with innovative minds.</p>
                <p className="pb-0 mb-0">
                    I have observed over these few years past twenty years of experience as an educationist the innocency of children in determining the varying intelligent quotient. Mostly, children's
                    educational inabilities can be traced to not filling their minds with highly educative and creative programs and resources. Though, the busy and tight daily scheduled might be an excuse but the future of your treasures can not be jeopardized.</p>
                <p className="pb-0 mb-0">
                    That's our main business an after school or weekend packages to keep your kids up to task in a very relaxing and creative (approach)</p>
                <p className="pb-0 mb-0">
                    However, we hold our dear consultants "", talent hunt programmers and family/ young adults musical needs.</p>
                <p className="pb-0 mb-0">
                    We shall keep to our pledge for excellent service and attention to details. We are committed to giving you the kind of service you always crave for and meet your educational needs and expectations.</p>
                <p className="pb-0 mb-5">
                    Thank you for being a part of our community and our story
                    <br />
                    Sincerely,
                   <p className="para">
                        Olambintan D. O. (Mrs)
                    <br />
                        BA.Ed (Music)<br />
                        TRCN certified<br />
                        Lagos State Examination Board (Music Examiner).
                    </p>
                </p>

                <span className="bold ">Our Organisation:</span>
                <br />
                <em>"The secret of getting ahead is getting started...start your kids on a journey to creative thinking."</em>

                <p className="pb-0 mb-0">Graceworths Institute loves to discover the innermost potentials in your creative world in terms of music, arts and vocation. The institute runs various sessions targeted at prepping children and adults.</p>

                <p className="pb-0 mb-0">Graceworths delights in engaging people to showcase their hidden strengths. The institute has planned programs for all ages that individuals can fit into as preffered.</p>

                <p className="pb-0 mb-0">We specially have programs for young kids...give your kids the best start to a world of fulfilled total education in creativity and expressivity through music art.</p>
            </div>

            {/* <img src={Circle} className="about_ellipse" alt="decor"/>
            <img src={Circle2} className="about_ellipse2" alt="decor" /> */}
        </div >
    );
};

export default AboutPage;
