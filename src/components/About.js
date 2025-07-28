import React from "react";
import profileimage3 from "./picabout3";
import profileimage4 from "./picabout5.jpeg";

function About() {
  const handleDownload = () => {
    // Path to your PDF file
    const pdfPath = "/Sami.pdf";

    // Create a new anchor element
    const link = document.createElement("a");

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = "Sami.pdf";

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
  };
  return (
    <div>
      <section id="about">
        <div className="lg:flex pt-16 pb-4">
          <div className="lg:flex-1">
            <div className="flex justify-center items-center sm: flex flex-wrap ml-36 mt-6">
              <img
                className="px-8 py-8"
                src={profileimage3}
                width={500}
                alt="img"
              />
              <img
                className="px-8 py-8 relative bottom-24 right-40"
                src={profileimage4}
                width={500}
                alt="img"
              />
            </div>
          </div>

          <div className="lg:flex-1 lg:flex-col px-4">
            <h1 className="text-black animate-pulse font-bold mb-4 ml-24 sm:ml-0">
              ABOUT
            </h1>
            {/*<h4 className="font-sm mt-4 mb-2">I Develope Websites</h4>*/}
            <p>
              <strong>About Me </strong>
              <p>
                Hi, I'm Md Sami Adnan, a passionate and results-driven{" "}
                <span className="font-semibold text-sky-600">
                  Full Stack Web Developer
                </span>{" "}
                with years of experience in building scalable, responsive, and
                user-centric web applications. I specialize in both frontend and
                backend technologies, delivering seamless integration and high
                performance across the entire stack.
              </p>

              <strong>Professional Background </strong>
              <p>
                My web development journey began in{" "}
                <span className="font-semibold text-sky-600">2020</span>, and
                since then, I’ve developed a wide range of full stack
                applications using technologies such as HTML, CSS, JavaScript,
                React, Redux, Node.js, Express, MongoDB, and PostgreSQL.
              </p>

              <p>
                From{" "}
                <span className="font-semibold text-sky-600">June 2024</span> to
                <span className="font-semibold text-sky-600"> May 2025</span>, I
                worked remotely as a
                <span className="font-semibold text-sky-600">
                  {" "}
                  Software Engineer{" "}
                </span>
                at
                <span className="font-semibold text-sky-600">
                  {" "}
                  Talent Industry
                </span>
                , where I engineered scalable, production-ready web applications
                using the{" "}
                <span className="font-semibold text-sky-600">MERN stack</span>.
                I developed RESTful APIs with Node.js and Express, secured
                endpoints using JWT and HTTP-only cookies, and enforced strong
                data protection with bcrypt and a well-structured MVC backend
                architecture. On the frontend, I built modern, mobile-first user
                interfaces with React.js and Context API, focusing on reusable
                components, clean modular code, and optimal performance.
                <br />
                <br />I also optimized deployment workflows and ensured
                application reliability by managing hosting and continuous
                delivery pipelines via platforms like{" "}
                <span className="font-semibold text-sky-600">
                  Render
                </span> and{" "}
                <span className="font-semibold text-sky-600">Netlify</span>.
                This experience significantly sharpened my ability to work
                independently in a remote environment, maintain delivery
                consistency, and collaborate effectively across teams.
              </p>

              <strong>Interests and Hobbies </strong>
              <p>
                Outside of coding, I’m committed to continuous learning and
                staying up to date with the latest developments in web
                technologies and software engineering. I’m passionate about
                solving real-world problems through technology and collaborating
                with other professionals to build impactful products.
              </p>

              <strong>My Approach </strong>
              <p>
                I believe in clean, maintainable code and designing with the
                end-user in mind. My development process is focused on
                reliability, scalability, and performance. Whether building from
                scratch or scaling existing platforms, I bring clarity,
                precision, and strategic thinking to every project.
              </p>

              <strong>Let's Connect </strong>
              <p>
                I’m open to new opportunities and meaningful collaborations. If
                you're looking for a dedicated developer to help bring your
                ideas to life, feel free to reach out—let’s create something
                exceptional together.
              </p>
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-0">
                <p className="font-semibold mb-0">NAME</p>
                <p>MD SAMI ADNAN</p>
              </div>
              <div className="ml-10 sm:ml-0 p-0">
                <p className="font-semibold mb-0">EDUCATION</p>
                <p>R.V.S.C.E.T</p>
              </div>
              <div className="p-0">
                <p className="font-semibold mb-0">EMAIL</p>
                <p>samiadnan2806@gmail.com</p>
              </div>
              <div className="ml-10 sm:ml-0 p-0">
                <p className="font-semibold mb-0">EMPLOYMENT</p>
                <p>Available</p>
              </div>
            </div>

            <button
              className="ml-16 sm:ml-0 font-semibold bg-sky-600 px-8 py-2 rounded-md text-white text-sm  hover:bg-black transition-transform duration-300 transform hover:scale-110"
              onClick={handleDownload}
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
