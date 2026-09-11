import Navbar from '../Components/Navbar'

import {useLocation} from 'react-router-dom'
import {useState,useEffect} from 'react'

const DeveloperPortfolio=[
    {
      "id": "1",
      "content": "A developer portfolio is more than just a website—it's your personal brand and one of the most effective ways to showcase your skills, projects, and professional journey. Whether you're a student, a recent graduate, or an experienced developer, a well-crafted portfolio helps recruiters, clients, and employers understand your technical abilities and the value you can bring to their team. Unlike a resume, which lists your qualifications, a portfolio demonstrates your practical knowledge by allowing visitors to explore the projects you've built and the technologies you've mastered."
    },
    {
      "id": "2",
      "content": "The first step in creating a strong developer portfolio is choosing a clean, modern, and responsive design. Your portfolio should be easy to navigate and provide a seamless experience on desktops, tablets, and mobile devices. A simple layout with clear sections makes it easier for visitors to find the information they're looking for. Your homepage should include a brief introduction about who you are, your area of expertise, and your career goals. Adding a professional photo and a short tagline can also help create a strong first impression."
    },
    {
      "id": "3",
      "content": "The projects section is the heart of any developer portfolio. Instead of displaying every project you've ever created, focus on showcasing your best work. Include projects that demonstrate different skills, such as responsive web design, frontend development, backend APIs, database integration, or full-stack applications. For each project, provide a clear description of its purpose, the technologies used, the challenges you faced, and how you solved them. Whenever possible, include screenshots, a live demo link, and a GitHub repository so visitors can explore your work in detail."
    },
    {
      "id": "4",
      "content": "A dedicated skills section helps employers quickly understand your technical expertise. Organize your skills into categories such as programming languages, frontend technologies, backend frameworks, databases, version control tools, and development software. Rather than listing every technology you've encountered, focus on the ones you're confident using and can discuss during interviews. You can also include progress indicators or proficiency levels, but ensure they accurately reflect your experience.Including an 'About Me' section allows you to share your background, learning journey, interests, and career aspirations. This section helps visitors connect with you on a personal level and provides context for your work. Keep the content professional while highlighting your passion for technology, continuous learning, and problem-solving. Mention certifications, internships, hackathons, or achievements that demonstrate your commitment to improving your skills."
    }
  ];


const LearnHubFeatures = [
    {
      "id": "1",
      "content": "Learning a new skill can feel overwhelming when you don't know where to begin. LearnHub simplifies this process by offering well-structured courses that guide you from the basics to advanced concepts. Each course is organized into easy-to-follow modules, allowing learners to build a strong foundation before progressing to more challenging topics. This step-by-step approach makes learning more effective and helps students stay motivated throughout their journey."
    },
    {
      "id": "2",
      "content": "One of the biggest advantages of LearnHub is its focus on practical learning. Instead of relying only on theoretical lessons, the platform encourages learners to apply their knowledge by working on real-world projects and coding exercises. Building projects not only strengthens understanding but also helps learners develop problem-solving skills and gain the confidence to create applications independently. Practical experience also prepares students for technical interviews and professional development roles."
    },
    {
      "id": "3",
      "content": "LearnHub provides high-quality learning resources that are accessible anytime and from anywhere. Whether you're studying on a desktop, tablet, or smartphone, you can continue learning at your own pace. This flexibility allows students and working professionals to fit learning into their daily schedules without feeling pressured. Learners can revisit lessons whenever they need to reinforce concepts or prepare for exams and interviews."
    },
    {
      "id": "4",
      "content": "The platform also offers carefully designed learning paths that help students achieve their career goals. Instead of searching for random tutorials across different websites, learners can follow a structured roadmap covering the essential technologies and skills required for their chosen field. Whether your goal is to become a web developer, data scientist, or mobile app developer, LearnHub provides a clear direction and eliminates the confusion of deciding what to learn next."
    }
  ];

const TopCoursesBlog = [
    {
      "id": "1",
      "content": "Starting your learning journey with the right courses builds a strong foundation for a successful career in technology. Focus on fundamental skills first, then gradually move toward advanced concepts and real-world projects. Here are some top courses every beginner should consider:"
    },
    {
      "id": "2",
      "content": "1. Web Development Fundamentals: Learn HTML, CSS, and JavaScript to build responsive websites and interactive web applications."
    },
    {
      "id": "3",
      "content": "2. Python Programming: Master Python, a versatile language used in web development, data analysis, and automation."
    },
    {
      "id": "4",
      "content": "3. Data Science and Machine Learning: Explore data analysis, visualization, and machine learning techniques using Python and popular libraries."
    },
    {
      "id": "5",
      "content": "4. Mobile App Development: Create mobile applications for Android and iOS platforms using frameworks like Flutter or React Native."
    },
    {
      "id": "6",
      "content": "5. Version Control with Git: Learn how to use Git and GitHub for collaborative development and version control."
    },{
      "id": "7",
      "content": "6. Database Management: Understand relational databases, SQL, and NoSQL databases to store and manage data effectively."
    },{
      "id": "8",
      "content": "7. Cloud Computing Basics: Gain knowledge of cloud platforms like AWS, Azure, or Google Cloud to deploy and manage applications."
    },{
      "id": "9",
      "content": "8. Cybersecurity Fundamentals: Learn about security best practices, encryption, and protecting applications from vulnerabilities."
    }
  ];

const TopTrendsBlog = [
    {
      "id": "1",
      "content": "Web development continues to evolve with new technologies that make websites faster, smarter, and more interactive. In 2026, developers are focusing on AI-powered tools, high-performance web applications, and enhanced user experiences. Here are some of the top web development trends to watch out for:"
    },
    {
      "id": "2",
      "content": "1. AI and Machine Learning Integration: Websites are leveraging AI to provide personalized experiences, chatbots, and predictive analytics."
    },
    {
      "id": "3",
      "content": "2. Progressive Web Apps (PWAs): PWAs offer app-like experiences on the web, providing offline access, push notifications, and improved performance."
    },
    {
      "id": "4",
      "content": "3. Serverless Architecture: Developers are adopting serverless computing to reduce infrastructure management and scale applications efficiently."
    },
    {
      "id": "5",
      "content": "4. WebAssembly (Wasm): WebAssembly allows developers to run high-performance code in the browser, enabling complex applications and games."
    },
    {
      "id": "6",
      "content": "5. Voice User Interfaces (VUIs): With the rise of voice assistants, websites are incorporating voice commands and interactions for improved accessibility."
    },
    {
      "id": "7",
      "content": "6. Enhanced Security Measures: Web developers are prioritizing security with features like HTTPS, Content Security Policy (CSP), and secure authentication methods."
    }
  ];

function ReadBlogs() {
  const location = useLocation();
  const [showFullBlog, setShowFullBlog] = useState([]);
  



  useEffect(()=>{
    const specificBlogdata=async()=>{
        if(location.state.blogTitle=="How to Build a Developer Portfolio"){
           setShowFullBlog(DeveloperPortfolio);
        }else if(location.state.blogTitle=="How LearnHub Helps You Learn Faster"){
           setShowFullBlog(LearnHubFeatures);
        }else if(location.state.blogTitle=="Top Courses Every Beginner Should Start With"){
           setShowFullBlog(TopCoursesBlog);
        }else if(location.state.blogTitle=="Top Web Development Trends in 2026"){
           setShowFullBlog(TopTrendsBlog);
        }
    }
    specificBlogdata();
  },[])
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
       <div className="blog d-flex justify-content-center">
        <div className="blog-card pb-5">
          <img src={location.state.blogImage} alt="Blog" className="object-cover mb-4" />
          <h3 className="text-2xl font-bold mb-4">{location.state.blogTitle}</h3>
          <p className="text-gray-700">{location.state.blogDescription}</p>
            <p className="text-gray-700 mt-4">{showFullBlog.map((blogdata)=>{
                 return (
                    <p className="mt-4">{blogdata.content}</p>
                 )
            })}</p>

        </div>
        </div>
       
      </div>
    </>
  )
}

export default ReadBlogs
