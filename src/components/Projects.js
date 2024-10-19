import React from "react";

function Projects() {
  const projectsData = [
    {
      id: 1,
      name: "DEAL FINDER",
      tech_used: "React js, Node js, JWT Auth, Stripe, Postgresql.",
      image:
        "https://img.freepik.com/premium-photo/led-lamp-tools-pliers-screwdriver-tester-black-background-view-from_268192-2434.jpg?w=996",
      link: "https://www.wikipedia.org",
      github_link: "https://github.com/luffyxgoku/DEALFINDER-FE",
      des_1:
        "Developed a comprehensive hardware and plumbing services platform using React, Node.js, Stripe, JWT authentication, and PostgreSQL.",
      des_2:
        "Integrated Stripe for seamless and secure payment transactions, allowing users to easily book and pay for services online.Designed and implemented JWT-based authentication to provide secure user access, ensuring data privacy and integrity across the platform.",
      des_3:
        "Led the back-end development with Node.js, ensuring efficient service management, secure user authentication via JWT, and reliable data storage using PostgreSQL.",
    },
    {
      id: 2,
      name: "FILMY DUNIYA",
      tech_used: "React js, Node js, Stripe, Firebase, TMDB Api.",
      image:
        "https://miro.medium.com/v2/resize:fit:1000/1*jjOITb2JFxwAHIKrET2Cuw.jpeg",
      link: "https://www.wikipedia.org",
      github_link: "https://github.com/luffyxgoku/FILMY-DUNIYA",
      des_1:
        "Developed Filmy Duniya, a Netflix-like platform for movie recommendations and streaming, using the TMDB API to fetch movie content.",
      des_2:
        "Integrated TMDB API for movie data, designed secure user authentication and data storage with Firebase, and implemented Stripe for payment processing.",
      des_3:
        "Led front-end development with React for a dynamic user interface, and back-end development with Node.js for efficient API handling and user authentication.",
    },
    {
      id: 3,
      name: "BLOGSPHERE",
      tech_used: "Node.js, Express.js, MongoDB, EJS, JWT.",
      image:
        "https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png",
      link: "https://blogsphere-10.onrender.com/",
      github_link: "https://github.com/luffyxgoku/BLOGSPHERE",
      des_1:
        "Developed BlogSphere, a live content management platform where users can create, view, and comment on blogs. It includes user authentication with JWT for secure login and registration.",
      des_2:
        "Implemented MongoDB for scalable and secure data storage, allowing efficient management of user accounts and blog data. Used EJS for server-side rendering of blog posts, ensuring a dynamic and responsive user experience.",
      des_3:
        "Incorporated user roles and permissions, allowing logged-in users to create and comment on blogs while ensuring public access to blog viewing. The app is fully hosted live for easy access.",
    },
    {
      id: 4,
      name: "FACE FINDER",
      tech_used: "React js, Node js, Express js,  Postgresql, Clarifai Api.",
      image:
        "https://learn.g2.com/hubfs/G2CM_FI454_Learn_Article_Images_%5BFacial_recognition%5D_V1a-1.png",
      link: "https://www.wikipedia.org",
      github_link: "https://github.com/luffyxgoku/FACEFINDER-FE",
      des_1:
        "Developed Face Finder, an application that detects faces in uploaded images and creates a border around each detected face using the Clarifai API.",
      des_2:
        "Integrated Clarifai API for face detection and designed the application architecture to handle efficient image processing. Utilized PostgreSQL for secure and scalable data storage, ensuring quick and reliable access to user data and image information.",
      des_3:
        "Developed Face Finder, an application that detects faces in uploaded images and creates a border around each detected face using the Clarifai API.",
    },
    {
      id: 5,
      name: "PRODUCT-STORE",
      tech_used:
        "React.js, Node.js, Express.js, MongoDB, JWT, Chakra UI, Zustand.",
      image:
        "https://cdn.dribbble.com/users/918415/screenshots/9517366/media/655ff2a7581fce9573d418a0663bd81e.png",
      link: "https://product-store-9nvj.onrender.com/",
      github_link: "https://github.com/luffyxgoku/PRODUCTSTORE",
      des_1:
        "Developed PRODUCT-STORE, a live MERN stack eCommerce application with Chakra UI for styling and Zustand for state management. The app allows users to manage products by adding, editing, and deleting them.",
      des_2:
        "Unauthenticated users can add new products, while registered users with sign-in access can edit and delete existing products. The app also includes full user authentication with JWT for secure login and registration.",
      des_3:
        "PRODUCT-STORE offers a smooth user experience with dark mode and light mode features, user registration, sign-in, and sign-out functionality, all on a responsive, live-hosted platform.",
    },
    {
      id: 6,
      name: "AUTHIFY",
      tech_used: "React.js, Node.js, Express.js, MongoDB, JWT, Mailtrack.",
      image:
        "https://www.loginradius.com/blog/static/2777d4b53aa6128513f070b7f78f3651/03979/server-proc-150x150.png",
      link: "https://authify-h73h.onrender.com/",
      github_link: "https://github.com/luffyxgoku/AUTHIFY",
      des_1:
        "Developed AUTHIFY, a live MERN stack web application for user authentication, including registration, login, email verification, and password reset.",
      des_2:
        "Utilized JWT for secure authentication and Mailtrack integration to track verification and password reset emails. Users receive a 6-digit code via email for verification and can securely reset their passwords through email links.",
      des_3:
        "The app features a seamless user experience with a responsive design and email notifications, all hosted live for real-time authentication processes.",
    },

    // Add more projects
  ];

  return (
    <div className="pt-24 md:pt-10 pb-4">
      <section id="projects">
        <h1 className="animate-pulse text-center text-black font-bold py-4">
          Projects
        </h1>
        <div className="ml-6 sm:ml-0 mr-6 sm:mr-0 flex flex-wrap justify-center gap-4 ">
          {projectsData.map((project) => (
            <div
              className="w-[400px] transition-transform transform hover:scale-105"
              key={project.id}
            >
              <h3 className="text-black font-extrabold text-xl">
                {project.name}
              </h3>

              <img
                className="w-[400px] h-[250px] mb-3 border-1 border-white shadow-md shadow-sky-950"
                src={project.image}
                alt={project.name}
              />
              <div className="flex flex-row">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-sky-600  border-0 text-white font-medium px-4 py-2 rounded-lg mt-2 mr-2 hover:bg-black transition-transform transform hover:scale-110">
                    LiveLink
                  </button>
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-[40] w-[40px] mt-2 mr-2 -mb-2 hover:transform hover:scale-125 duration-300"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                  />
                </a>
              </div>
              <div className="mt-3 font-medium text-black">
                <strong className="text-lg">TECH USED: </strong>
                <p className="text-sky-600">{project.tech_used}</p>
                <ul className="list-disc">
                  <li>{project.des_1}</li>
                  <li>{project.des_2}</li>
                  <li>{project.des_3}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
