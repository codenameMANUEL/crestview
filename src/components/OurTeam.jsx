import { useState } from 'react';
import ourTeamVideo from "../assets/ourTeam.mp4";
import ourTeamNail from "../assets/01thumbnail.webp";

export default function OurTeam() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <div className="bg-navy px-4 md:px-28 py-12 md:py-0">
            <div>
                <p className="uppercase font-bold text-sm text-white mb-2">Truth in engineering</p>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-0 md:w-5/12">
                        <span className="text-green-600">Our Team</span> is Responsible for The Best Construction
                    </p>
                    <button className="bg-yellow-400 py-3 px-6 rounded-none text-sm font-semibold">OUR TEAM</button>
                </div>
            </div>


            <div className="flex justify-center py-12 relative">
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={handlePlayClick}
                            className="bg-white rounded-full p-2 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-navy"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-2.633 1.736A1 1 0 0012 14V6a1 1 0 00-1.619-.784l-7 4a1 1 0 000 1.568l7 4A1 1 0 0012 14v-3.832a1 1 0 00.119-.064l2.633-1.736a1 1 0 00.47-1.093z" />
                            </svg>
                        </button>
                    </div>
                )}
                <video
                    className="w-full h-auto"
                    muted
                    poster={ourTeamNail}
                    src={ourTeamVideo}
                    alt="Description of the video"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
