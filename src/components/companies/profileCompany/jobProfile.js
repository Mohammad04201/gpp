import React from 'react';

const JobProfile = () => {

  const dummyJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      description: "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building responsive web applications using React, TypeScript, and modern CSS frameworks.",
      type: "Full-time",
      experience: "Senior",
      location: "Remote",
      salary: "15,000 - 25,000 SAR",
      views: 245,
      likes: 18,
      applicants: 12,
      skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Git"]
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      description: "Join our engineering team to build scalable web applications. Experience with both frontend and backend technologies required.",
      type: "Full-time",
      experience: "Mid-level",
      location: "On-site",
      salary: "12,000 - 20,000 SAR",
      views: 189,
      likes: 15,
      applicants: 8,
      skills: ["JavaScript", "Python", "PostgreSQL", "Docker", "AWS"]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      description: "Creative UI/UX Designer needed to design beautiful and intuitive user interfaces.",
      type: "Part-time",
      experience: "Junior",
      location: "Remote",
      salary: "8,000 - 15,000 SAR",
      views: 156,
      likes: 22,
      applicants: 15,
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"]
    }
  ];

  return (
    <div className="lg:col-span-2">

      <div className="rounded-xl p-8">
 
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                     <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-teal-400 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5m-3 0V3.75m0-2.25h-3M18 7.5v3m-3-3h3m-3 0a2.25 2.25 0 00-2.25 2.25c0 1.243.611 2.348 1.5 3.067V20.25M15.75 1.5H18a2.25 2.25 0 012.25 2.25v16.5A2.25 2.25 0 0118 22.5h-2.25"
            />
          </svg>
          Jobs Posted
                </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {dummyJobs.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                  {post.experience}
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  {post.type}
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
                  {post.location}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-teal-400 font-bold text-sm">
                  {post.salary}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
                {post.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default JobProfile;