import React from 'react'
import data from '../assets/data.json'; // Import the data

const ContestCard = ({ title, date, location, description, logo }) => {
  return (
    <div className="md:container flex md:gap-3 md:max-w-[40rem] flex-col mx-auto md:px-4 py-5 bg-white rounded-lg shadow-xl p-6 m-4 ">
      <div className="flex items-center mb-4">
        <div className="w-16 mr-4 shadow-xl">
          <img src={logo} alt={title} className="w-full h-full" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{date}</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Contests = () => {
  const { contests } = data[0]; // Destructure to get contests from the first object in the data array

  return (
    <div className="md:container flex md:gap-3 md:max-w-[43rem] flex-col mx-auto md:px-4 py-5 mb-10 md:mb-16">
      <div className="md:container flex md:gap-3 md:max-w-[43rem] flex-col mx-auto md:px-4 py-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">I love to take challenge</h2>
        <p className="text-gray-600 mb-4">
          During my time in university, I attended 21+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.
        </p>
      </div>
      <div className="flex flex-wrap">
        {contests.map((contest, index) => (
          <ContestCard
            key={index}
            title={contest.title}
            date={contest.date}
            location={contest.location}
            description={contest.description}
            logo={contest.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default Contests
