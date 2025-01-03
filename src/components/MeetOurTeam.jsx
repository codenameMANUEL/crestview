import profileImage from "../assets/profileImage.png";
import hr from "../assets/hr.png"
import projectManger from "../assets/projectManger.png"

export default function MeetOurTeam() {
  return (
    <> 
      <h2 className="font-semibold text-3xl tracking-tight text-slate-900 sm:text-4xl text-center mb-10 pt-14 font-space-grotesk">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4 px-20 mb-20 font-space-grotesk">
        {/* Card 1 */}
        <div className="overflow-hidden text-center">
          <img
            src={projectManger}
            className="grayscale brightness-90 contrast-100 w-full h-52 object-cover object-center"
            alt="Profile"
          />
          <div className="p-4">
            <p className="text-xl font-semibold text-gray-800">James Marcotte</p>
            <p className="text-sm text-gray-600">Project Manager</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="overflow-hidden text-center">
          <img
            src={profileImage}
            className="grayscale brightness-90 contrast-100 w-full h-52 object-cover object-center"
            alt="Profile"
          />
          <div className="p-4">
            <p className="text-xl font-semibold text-gray-800">Bryian Thomason</p>
            <p className="text-sm text-gray-600">Operations Manager</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden text-center">
          <img
            src={hr}
            className="grayscale brightness-90 contrast-100 w-full h-52 object-cover object-top "
            alt="Profile"
          />
          <div className="p-4">
            <p className="text-xl font-semibold text-gray-800">Rose Wilkins</p>
            <p className="text-sm text-gray-600">HR Manager</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="overflow-hidden text-center">
          <img
            src={profileImage}
            className="grayscale brightness-90 contrast-100 w-full h-52 object-cover object-center"
            alt="Profile"
          />
          <div className="p-4">
            <p className="text-xl font-semibold text-gray-800">Bryian Thomason</p>
            <p className="text-sm text-gray-600">Site Supervisor</p>
          </div>
        </div>
      </div>
    </>
  );
}
