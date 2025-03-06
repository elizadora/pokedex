const skills = [
    { name: "Organized", proeficiency: 90 },
    { name: "Teamwork", proeficiency: 80 },
    { name: "Problem Solving", proeficiency: 70 },
    { name: "Communication", proeficiency: 90 },
    { name: "Adaptability", proeficiency: 60 },
];

const SkillContact = () => {
    return (
        <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800/70">Skills</h3>
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center">
                    <span className="flex-1 font-medium whitespace-break-spaces">
                        {skill.name}:
                    </span>

                    <div className="flex-1 flex items-center gap-2 sm:gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-1">
                            <div
                                className="bg-red-500 h-1 rounded-full"
                                style={{ width: `${skill.proeficiency}%` }}
                            ></div>
                        </div>
                        <span className="text-right">{skill.proeficiency}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillContact;