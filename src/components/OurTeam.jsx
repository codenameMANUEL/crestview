import { useRef } from 'react';
import sampleVideo from "../assets/ourTeam.mp4";
import ourTeamNail from "../assets/01thumbnail.webp";

export default function OurTeam() {
  const videoRef = useRef(null);

    const handleMouseEnter = () => {
      if (videoRef.current) {
          videoRef.current.play();
      }
  };

  const handleMouseLeave = () => {
      if (videoRef.current) {
          videoRef.current.pause();
      }
  };

  return (
    <div className="bg-navy px-4 md:px-20 py-12 md:py-0 font-space-grotesk">
      <div>
        <p className="uppercase font-bold text-sm text-white mb-2">
          Truth in engineering
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-3xl md:text-5xl font-semibold text-white mb-4 md:mb-0 md:w-7/12">
            <span className="text-green-600">Our Team</span> is Responsible for
            The Best Construction
          </p>
          <button className="bg-yellow-400 py-3 px-6 rounded-none text-sm font-semibold">
            OUR TEAM
          </button>
        </div>
      </div>
       <div className="video-container flex justify-center py-12 relative">
            <video
                ref={videoRef}
                className="w-full h-auto cursor-pointer"
                muted
                loop
                playsInline
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                src={sampleVideo}
                poster={ourTeamNail}
            >
                Your browser does not support the video tag.
            </video>
        </div>
     </div>
  );
}


// import { useRef } from 'react';
// import sampleVideo from "../assets/ourTeam.mp4";
// import ourTeamNail from "../assets/01thumbnail.webp";

// export default function HoverPlayVideo() {
//     const videoRef = useRef(null);

//     const handleMouseEnter = () => {
//         if (videoRef.current) {
//             videoRef.current.play();
//         }
//     };

//     const handleMouseLeave = () => {
//         if (videoRef.current) {
//             videoRef.current.pause();
//         }
//     };

//     return (
//         <div className="video-container flex justify-center py-12 relative">
//             <video
//                 ref={videoRef}
//                 className="w-full h-auto cursor-pointer"
//                 muted
//                 loop
//                 playsInline
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 src={sampleVideo}
//                 poster={ourTeamNail}
//             >
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// }
