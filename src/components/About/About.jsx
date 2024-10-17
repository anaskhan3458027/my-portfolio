import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}><center>About</center></h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>MERN Developer </h3><img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
              <p>
              I am a passionate MERN stack developer with hands-on experience in building full-stack web applications. My expertise lies in developing scalable and dynamic web solutions using modern JavaScript frameworks and libraries. I have worked on several projects that demonstrate my skills in frontend, backend, and database management. On the frontend, I have used React.js along with HTML, CSS, and Bootstrap to build responsive interfaces. For backend development, I have utilized Node.js and Express.js to design RESTful APIs. I also have experience in using MongoDB and Mongoose for database operations, with an emphasis on authentication and authorization through JWT.
              Some of the key projects I have worked on include a Task Manager application, an E-commerce website, and a Blog platform. The Task Manager is a to-do list app with full CRUD functionality, user authentication using JWT, and a responsive UI built with Material-UI. The E-commerce website provides users with a complete shopping experience, including product catalog, shopping cart, checkout, and payment integration via Stripe, along with an admin panel for product management. In addition, I developed a Blog platform where users can create, edit, and delete posts, with a rich text editor for content creation, secure login, and article filtering capabilities.
              I also worked as a Software Development Engineer I at Buggcheff, where I developed key modules like HR and company registration. My development process follows Agile methodologies, and I am proficient with Git for version control. My technical stack includes tools such as Visual Studio Code, Postman, and GitHub. With experience in building RESTful APIs, managing user sessions, and creating cross-platform, responsive designs, I am confident in my ability to contribute effectively to web development projects.
              For further details, feel free to reach out via contact section in menu
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3><img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <p>
                As a Full Stack Developer, I possess a diverse skill set that spans both front-end and back-end technologies.
                 I am proficient in creating dynamic and responsive user interfaces using HTML, CSS, and JavaScript frameworks
                  like React, while also managing server-side logic and database interactions with languages such as Node.js and Python. 
                  My experience includes deploying applications on cloud platforms, implementing RESTful APIs, and utilizing version control
                   systems like Git. I am passionate about building seamless, user-centric applications and tackling complex problems with
                    innovative solutions. In my portfolio, you will find projects that showcase my ability to integrate various technologies
                     into cohesive, efficient applications.


              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
