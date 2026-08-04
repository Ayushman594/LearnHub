import Navbar from '../Components/Navbar'
import {useLocation} from 'react-router-dom'
import {useState} from 'react'
function ReadBlogs() {
  const [hidebutton,setHideButton]=useState(false);
  const location = useLocation();
  const [showFullBlog, setShowFullBlog] = useState([]);
  function displaymoreBlog(){
     if(location.state.blogTitle==="How to Build a Developer Portfolio"){
        setShowFullBlog(["Building a developer portfolio is essential for showcasing your skills and projects to potential employers or clients. Start by selecting a clean and professional design for your portfolio website. Include sections for your bio, skills, projects, and contact information. Highlight your best work with detailed descriptions, screenshots, and links to live demos or GitHub repositories. Make sure to optimize your portfolio for mobile devices and ensure fast loading times. Regularly update your portfolio with new projects and achievements to keep it current and relevant. Additionally, consider adding a blog section to share your insights and experiences in the tech industry. Finally, seek feedback from peers or mentors to improve your portfolio and make it stand out.  A developer portfolio is more than just a website—it's your personal brand and one of the most effective ways to showcase your skills, projects, and professional journey. Whether you're a student, a recent graduate, or an experienced developer, a well-crafted portfolio helps recruiters, clients, and employers understand your technical abilities and the value you can bring to their team. Unlike a resume, which lists your qualifications, a portfolio demonstrates your practical knowledge by allowing visitors to explore the projects you've built and the technologies you've mastered.",

"The first step in creating a strong developer portfolio is choosing a clean, modern, and responsive design. Your portfolio should be easy to navigate and provide a seamless experience on desktops, tablets, and mobile devices. A simple layout with clear sections makes it easier for visitors to find the information they're looking for. Your homepage should include a brief introduction about who you are, your area of expertise, and your career goals. Adding a professional photo and a short tagline can also help create a strong first impression.",

"The projects section is the heart of any developer portfolio. Instead of displaying every project you've ever created, focus on showcasing your best work. Include projects that demonstrate different skills, such as responsive web design, frontend development, backend APIs, database integration, or full-stack applications. For each project, provide a clear description of its purpose, the technologies used, the challenges you faced, and how you solved them. Whenever possible, include screenshots, a live demo link, and a GitHub repository so visitors can explore your work in detail.",

"A dedicated skills section helps employers quickly understand your technical expertise. Organize your skills into categories such as programming languages, frontend technologies, backend frameworks, databases, version control tools, and development software. Rather than listing every technology you've encountered, focus on the ones you're confident using and can discuss during interviews. You can also include progress indicators or proficiency levels, but ensure they accurately reflect your experience.",

"Including an 'About Me' section allows you to share your background, learning journey, interests, and career aspirations. This section helps visitors connect with you on a personal level and provides context for your work. Keep the content professional while highlighting your passion for technology, continuous learning, and problem-solving. Mention certifications, internships, hackathons, or achievements that demonstrate your commitment to improving your skills.",

"Your portfolio should also include an up-to-date resume that visitors can download easily. Providing links to your GitHub, LinkedIn, coding profiles, and other professional platforms allows recruiters to learn more about your experience and contributions. If you've contributed to open-source projects or participated in coding competitions, highlighting those accomplishments can further strengthen your profile.",

"Adding testimonials, certifications, awards, or client feedback can significantly increase your credibility. Even if you're a beginner, displaying certificates from online courses or mentioning successful academic and personal projects shows your dedication to learning and growth. These details help build trust and demonstrate your willingness to improve continuously.",

"Don't forget to include a contact section that makes it easy for employers, recruiters, or potential clients to reach you. A simple contact form, along with your professional email address and social media links, encourages visitors to get in touch. Make sure all links work correctly and keep your contact information updated.",

"Finally, remember that a developer portfolio is never truly complete. As you learn new technologies, complete new projects, or gain professional experience, update your portfolio regularly. Remove outdated projects, improve existing content, and keep your design modern and responsive. A portfolio that evolves alongside your skills demonstrates continuous growth, professionalism, and a genuine passion for software development. By investing time in building and maintaining a high-quality portfolio, you create a powerful tool that can open doors to internships, freelance opportunities, and full-time developer roles."]);
     }
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
       <div className="blog d-flex justify-content-center">
        <div className="blog-card">
          <img src={location.state.blogImage} alt="Blog" className="object-cover mb-4" />
          <h3 className="text-2xl font-bold mb-4">{location.state.blogTitle}</h3>
          <p className="text-gray-700">{location.state.blogDescription}</p>
           {showFullBlog && (
            <p className="text-gray-700 mt-4">{showFullBlog.map((blogdata)=>{
                 return (
                    <p className="mt-4">{blogdata}</p>
                 )
            })}</p>
          )}
           { !hidebutton && (
            <button className="btn btn-primary p-2 mt-2" onClick={()=>
                {
                    displaymoreBlog()
                    setHideButton(true)
                } 
            }>Read More</button> )
        }
        </div>
        </div>
       
      </div>
    </>
  )
}

export default ReadBlogs
