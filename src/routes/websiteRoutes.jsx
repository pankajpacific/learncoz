import Home from '../modules/website/pages/Home.jsx'
import About from '../modules/website/pages/About.jsx'
import Contact from '../modules/website/pages/Contact.jsx'
import Blog from '../modules/website/pages/Blog.jsx'
import InterviewQuestions from '../modules/website/pages/InterviewQuestions.jsx'
import Careers from '../modules/website/pages/Careers.jsx'
import BecomeInstructor from '../modules/website/pages/BecomeInstructor.jsx'
import TermsOfService from '../modules/website/pages/TermsOfService.jsx'
import PrivacyPolicy from '../modules/website/pages/PrivacyPolicy.jsx'
import Login from '../modules/website/pages/Login.jsx'
import Register from '../modules/website/pages/Register.jsx'
import BrowseCourses from '../modules/website/pages/BrowseCourses.jsx'
import CourseDetails from '../modules/website/pages/CourseDetails.jsx'

export const websiteRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/interview-questions", element: <InterviewQuestions /> },
  { path: "/careers", element: <Careers /> },
  { path: "/become-instructor", element: <BecomeInstructor /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/browse-courses", element: <BrowseCourses /> },
  { path: "/course-details", element: <CourseDetails /> },
]