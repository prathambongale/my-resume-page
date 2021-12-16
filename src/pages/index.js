import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import devops from  '../assets/img/devops.png';
import blockchain from  '../assets/img/blockchain.png';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}&nbsp;
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · 
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Hands-on experience in programming languages like Java. 
            Worked on Restful service and NoSQL database like MongoDB. 
            Exposure of working closely with customer. 
            Proven ability to learn quickly and apply new technologies. 
            Strong program solving and technical skills. 
            Supportive and enthusiastic team player dedicated to streaming process and efficient resolving project issue. 
            Willing to take ownership of core components.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Technical Lead</h3>
              <div className="subheading mb-3">Wipro Limited</div>
              <p>
                Successfully launched another digital insurance product called <i>Activate by Absa </i>
                which provided comprehensive insurance to customer under 5 minutes. 
                Backend technologies used in project were Java, Spring WebFlux and database used was MongoDB.
                The application was hosted on Rancher and DevOps concepts like continues integration and continues development 
                were implemented using tools like Jenkins, Docker, Kubernetes and ELk stack for monitoring.
                Provided prompt solutions and proactive troubleshooting support to swiftly resolve subtle and complex issues. 
                Documented all supported systems and applications to effectively train the new and existing team members. 
                Automated multiple business reports. Was presenter for Blockchain seminar for 100+ audience. 
                Guide junior members in team.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Project Engineer</h3>
              <div className="subheading mb-3">Wipro Limited</div>
              <p>
                Successful launched digital insurance product called <i>Absa Online Quote (AOQ) </i> 
                which provided comprehensive insurance to customer. 
                Backend technologies used in project were Java, Spring WebFlux and database used was MongoDB.
                The application was first hosted on OpenShift then moved to Rancher and DevOps concepts like 
                continues integration and continues development were implemented using tools like 
                Jenkins, Docker, Kubernetes and ELk stack for monitoring.
                Provided prompt solutions and proactive troubleshooting support to swiftly resolve subtle and complex issues.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2018 - June 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Project Engineer</h3>
              <div className="subheading mb-3">Wipro Limited</div>
              <p>
                Working as lead for multiple support applications for Absa Bank based on Java 7, JSP, Servlet, 
                IBM WebSphere and DB2. Used tools like WinScp, Putty.
                Responsibility includes guiding team, managing team, helping them in technical issues, monitor incidents 
                and provide 24/7 support.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2017 – August 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between  mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Project Engineer</h3>
              <div className="subheading mb-3">Wipro Limited</div>
              <p>
                Developed lending application for Barclays using Java 8, Restful web services, Spring 
                and database as MongoDB. Implemented DevOps continues deployment and deployed application on OpenShift cloud. 
                Performed manual testing on the services that I created.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2016 – September 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between  mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Project Engineer</h3>
              <div className="subheading mb-3">Wipro Limited</div>
              <p>
                Helped Barclays team to build <i>Data Migration Framework </i>that will transfer RDBMS data to MongoDB 
                after providing JSON mapping file as input. This framework was developed using multi-threading
                feature in Java.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2016 – June 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between  mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Project Engineer</h3>
              <div className="subheading mb-3">Wipro Limited</div>
              <p>
                Suppoted i90 application for Zurich Insurance which was based on IBM’s AS400 technologies.
                Resolve tickets received in service now. Perform month end activities. 
                Perform daily activities/checks. 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2014 – January 2016</span>
            </div>
          </div>
          
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between  mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Project Engineer</h3>
              <div className="subheading mb-3">Wipro Limited</div>
              <p>
                Joined Wipro as fresher and was trained on IBM's AS400 Technologies. 
                Worked as shadow resource under guidance of senior team member.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2013 – July 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">V.I.T University, Vellore, Tamil Nadu, India</h3>
              <div className="subheading mb-3">Master’s in Information Technology</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2013 - August 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Mumbai University, Maharashtra, India</h3>
              <div className="subheading mb-3">Bachelor of Science, Information Technology</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2011 - May 2013</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" />
            </li>
            <li className="list-inline-item">
              <img src="https://img.icons8.com/color/48/000000/spring-logo.png" alt="Spring Boot" />
            </li>
            <li className="list-inline-item">
              <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="MongoDB"/>
            </li>
            <li className="list-inline-item">
              <img src="https://img.icons8.com/fluency/48/000000/docker.png" alt="Docker"/>
            </li>
            <li className="list-inline-item"> 
              <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub"/>
            </li>
            <li className="list-inline-item"> 
              <img src="https://img.icons8.com/color/48/000000/kubernetes.png" alt="Kubernetes"/>
            </li>
            <li className="list-inline-item"> 
              <img src="https://img.icons8.com/color/48/000000/jenkins.png" alt="Jenkins"/>
            </li>
            <li className="list-inline-item">
              <img src="https://img.icons8.com/color/48/000000/jira.png" alt="Jira"/>
            </li>
            <li className="list-inline-item">
              <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="AWS"/>
            </li>
            <li className="list-inline-item">
              <img src="https://img.icons8.com/color/48/000000/cloud-function.png" alt="Swagger" />
            </li>
            <li className="list-inline-item">
              <img src={devops} alt="DevOps" />
            </li>
            <li className="list-inline-item">
              <img src={blockchain} alt="Blockchain" />
            </li>
          </ul>
          <br />
          <div className="subheading mb-3">Funcational &amp; Domain Knowledge</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Test Driven Development
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Data Modeling
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Insurance
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Service-Now: Change Request, Incident Management
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from coding, I enjoy most of my time being
            outdoors. I like to go for Hiking and Camping every chance I get.
            I also like try different varieties of food.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi, superhero and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the Backend, Cloud and Blockchain development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="http://university.mongodb.com/course_completion/f0184eb737014c3586beb96f548a7253">
                M101J: MongoDB for Java Developers
              </a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://www.credential.net/7996916a-895b-48cc-a963-b34c804f9121#gs.fbp72l">
                Certified Blockchain Expert
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
