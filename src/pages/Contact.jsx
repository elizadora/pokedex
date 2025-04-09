import backgroundContact from '../assets/backgroundContact.jpg';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import SkillContact from '../components/SkillContact';

// Icons
import BulbasaurIcon from '../assets/icons/bulbasaur_icon.svg';
import CharmanderIcon from '../assets/icons/charmander_icon.svg';
import SquirtleIcon from '../assets/icons/squirtle_icon.svg';


const Contact = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center relative z-[-9]"
      style={{ backgroundImage: `url(${backgroundContact})` }}>

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Text contact */}
      <div className="z-20 text-white text-center mb-10 mt-24">
        <h3 className="text-4xl font-bold">Contact me</h3>
        <h4 className="text-2xl">Feel free to contact me for any project or collaboration</h4>
      </div>

      {/* Card contact */}
      <div className="flex md:flex-row flex-col md:gap-0 gap-8 md:items-center bg-white p-10 rounded-lg shadow-2xl m-4 w-[90%] md:w-200 z-20 justify-between">

        <div className="flex flex-col md:gap-4 gap-8">
          <h3 className="text-2xl font-bold text-gray-800/70">Elizadora Mendonça</h3>
          <div className="flex md:flex-col gap-2 flex-wrap">
            <p className="flex text-[15px] break-all"><EnvelopeIcon className="h-6 w-6 mr-2 text-red-500" /> elizdora.mendonca@ufc.alu.br </p>
            <p className="flex text-[15px]"><PhoneIcon className="h-6 w-6 mr-2  text-red-500" /> +55 85 9 9999-9999 </p>
          </div>
        
          <SkillContact />

        </div>

        {/* Icons Pokemon and tecnologies */}
        <div className="flex flex-col items-center gap-2 flex-wrap md:w-1/2">
          <div className="flex flex-row gap-2">
            <img src={BulbasaurIcon} alt="Bulbasaur Icon" className="md:w-24 md:h-24 w-20 h-20" />
            <img src={CharmanderIcon} alt="Charmander Icon" className="md:w-24 md:h-24 w-20 h-20" />
            <img src={SquirtleIcon} alt="Squirtle Icon" className="md:w-24 md:h-24 w-20 h-20" />
          </div>

          {/* Tecnologies */}
          <div className="flex flex-row items-center flex-wrap justify-center gap-2 mt-4">
            {tecnologies.map((tecnology, index) => (          
              <span key={index} className="px-4 py-1 rounded-full text-white" 
              style={{ backgroundColor: (tecnology.color) }}
              >
                {tecnology.name}
              </span>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

// tecnologies
const tecnologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Vite", color: "#646CFF" },
  { name: "TailwindCSS", color: "#06B6D4" },
  { name: "Heroicons", color: "#0F172A" },
]

export default Contact;