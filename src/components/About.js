import React from "react";
import founder from "../founder.jpg";




const AboutPage = ({ bgColor }) => {
    return (
        <div id="about" className={` ${bgColor} about-page pb-3`}>

            <div className="container">

                {/* <h2 className="pt-5 pb-3" >About Us</h2> */}

                <h5 className="bold text-center pt-5 pb-5">Founder</h5>
                <img className="founder-img mx-auto" src={founder} alt="founder" />

                <p className="pb-0 mb-0">It is with great pleasure I introduce myself- the Founder and CEO of Graceworths arts and resources.
                I am excited to have you on this website and we hope you will enjoy reaping all the benefits provided in our highly resourceful packages especially
                for your kids and young adults.</p>
                <p className="pb-0 mb-0">
                    Our kids so innocent and blank on the pages of their minds depend on what we parents and the environment write on this pure pages of their minds.
                    The foundation of their thinking culture is built on the strength of intelligence and solidified on the exposure created on their minds today.</p>
                <p className="pb-0 mb-0">
                    Creative thinking starts with innovative minds.</p>
                <p className="pb-0 mb-0">
                    I have observed over the past twenty years of experience as an educationist the innocence of children in determining the varying intelligent quotient.
                    Mostly, children's
                    educational inabilities can be traced to not filling their minds with highly educative and creative programs and resources.
                    Though, the busy and tight daily schedules might be an excuse but the future of your treasures can not be jeopardized.</p>
                <p className="pb-0 mb-0">
                    Our main focus is to help fill in the gap after school or during the weekend to keep your kids up to task in a very relaxing and creative (approach)</p>
                <p className="pb-0 mb-0">
                    Other areas of our services focuses on talent hunt programs, events, kids praise club, album creations, etc.
                </p>
                <p className="pb-0 mb-0">
                    We shall keep to our pledge for excellent service and attention to detail. We are committed to giving you the kind of service you always crave for and hope to meet your educational needs and expectations.</p>
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

                <p className="pb-0 mb-0">We specially have programs for young kids to engage them for after school and weekend programs
                <br />
                Give your kids the best start to a world of fulfilled total education in creativity and expressivity through music art.</p>
            </div>


        </div >
    );
};

export default AboutPage;
