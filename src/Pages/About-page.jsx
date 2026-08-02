import Navbar from "../Components/Navbar";

const AboutPage = () => {
    return (
        <>
            <Navbar />
           <section className="about-section">
            <div className="about">
                <h2 className="text-primary"><img className="logo" src="src/assets/Booklogo.png" alt="LearnHub Logo" /> About LearnHub </h2> 
                <hr></hr>
                <p>LearnHub is an online learning platform that offers a wide range of courses and resources to help individuals enhance their skills and knowledge. Our mission is to provide accessible and high-quality education to learners worldwide.</p>
                <p>We believe that learning should be a lifelong journey, and we strive to create an engaging and interactive learning experience for our users. Our courses are designed by industry experts and cover various topics, including technology, business, arts, and more.</p>
                <p>At LearnHub, we are committed to empowering learners to achieve their goals and reach their full potential. Join us today and start your learning journey!</p>
            </div>
            </section>
        </>
    );
}

export default AboutPage;
