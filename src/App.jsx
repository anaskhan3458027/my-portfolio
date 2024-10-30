import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects"; 
import  Blogs  from "./components/Blogs/Blogs";
import BlogPage from "./components/Blogs/BlogPage";
import ScrollToTop from "./components/ScrollToTop";  // Import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* Ensure smooth navigation */}
      <div className={styles.App}>
        <Navbar />  {/* Navbar stays across all pages */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} /> {/* Dynamic route for blog pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
