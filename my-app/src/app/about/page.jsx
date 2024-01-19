"use client";
// import NavBB from "@/componentes/navBB/NavBB";
// import Link from "next/link";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import "./about.css";

// const About = () => {
//   return (
//     <div className="about">
//       <NavBB />
//       <div className="containCards">
//         <div className="card">
//           <div className="img-div">
//             <img src="/dami.jpeg" />
//           </div>

//           <h2>Damian Diaz</h2>
//           <p>
//             A Passionate full-stack developer constantly seeking new
//             opportunities to learn and grow. My dedication is focused on
//             creating products that are not only functional but also appealing to
//             users.
//           </p>

//           <div className="icons">
//             <Link
//               href={`https://github.com/diaz027`}
//               className="linkgit"
//               target="_blank"
//             >
//               <FaGithub className="icon" />
//             </Link>

//             <Link
//               href={`https://www.linkedin.com/in/damian-diaz-6a7537258/`}
//               className="linklinke"
//               target="_blank"
//             >
//               <FaLinkedin className="icon" />
//             </Link>
//           </div>
//         </div>
//         {/* Card 2 */}

//         <div className="card">
//           <div className="img-div">
//             <img src="/jona.png" />
//           </div>

//           <h2>Jonathan Juarez</h2>
//           <p>
//             Hello! Im Jonathan G, and Im currently enrolled in the Henry coding
//             bootcamp. Im passionate about programming and committed to expanding
//             my skills in this exciting new field. Joining the bootcamp is a
//             significant step for me.
//           </p>

//           <div className="icons">
//             <Link
//               href={`https://github.com/zuoki`}
//               className="linkgit"
//               target="_blank"
//             >
//               <FaGithub className="icon" />
//             </Link>

//             <Link
//               href={`https://www.linkedin.com/in/gabriel-juarez-720998240/`}
//               className="linklinke"
//               target="_blank"
//             >
//               <FaLinkedin className="icon" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default About;
"use client";
import NavBB from "@/componentes/navBB/NavBB";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <NavBB />
      <div className="containCards">
        <div className="card slide-in-left">
          <div className="img-div">
            <img src="/dami.jpeg" />
          </div>

          <h2>Damian Diaz</h2>
          <div className="text3">
            <p>
              A Passionate full-stack developer constantly seeking new
              opportunities to learn and grow. My dedication is focused on
              creating products that are not only functional but also appealing
              to users.
            </p>
          </div>

          <div className="icons">
            <Link
              href={`https://github.com/diaz027`}
              className="linkgit"
              target="_blank"
            >
              <FaGithub className="icon" />
            </Link>

            <Link
              href={`https://www.linkedin.com/in/damian-diaz-6a7537258/`}
              className="linklinke"
              target="_blank"
            >
              <FaLinkedin className="icon" />
            </Link>
          </div>
        </div>
        {/* Card 2 */}

        <div className="card slide-in-right">
          <div className="img-div">
            <img src="/jona.png" />
          </div>

          <h2>Jonathan Juarez</h2>
          <div>
            <p>
              Hello! Im Jonathan G, and Im currently enrolled in the Henry
              coding bootcamp. Im passionate about programming and committed to
              expanding my skills in this exciting new field. Joining the
              bootcamp is a significant step for me.
            </p>
          </div>

          <div className="icons">
            <Link
              href={`https://github.com/zuoki`}
              className="linkgit"
              target="_blank"
            >
              <FaGithub className="icon" />
            </Link>

            <Link
              href={`https://www.linkedin.com/in/gabriel-juarez-720998240/`}
              className="linklinke"
              target="_blank"
            >
              <FaLinkedin className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
