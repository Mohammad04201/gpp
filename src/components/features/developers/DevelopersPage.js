import { useState } from 'react';
import MainNavbar from '../../layout/MainNavbar';
import DevelopersHeader from './DevelopersHeader';
import DevelopersFilters from './DevelopersFilters';
import DevelopersList from './DevelopersList';
import DevelopersStats from './DevelopersStats';
import { developersData } from './DevelopersData';

function DevelopersPage() {
  console.log('DevelopersPage component is rendering');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const filteredDevelopers = developersData.filter(developer => {
    const matchesSearch = developer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         developer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         developer.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkills = selectedSkills === 'all' || developer.skills.some(skill => skill === selectedSkills);
    
    // Extract numeric experience from string like "5 سنوات"
    const expNum = parseInt(developer.experience);
    const matchesExperience = selectedExperience === 'all' || 
      (selectedExperience === '0-1' && expNum <= 1) ||
      (selectedExperience === '2-3' && expNum >= 2 && expNum <= 3) ||
      (selectedExperience === '4-5' && expNum >= 4 && expNum <= 5) ||
      (selectedExperience === '6+' && expNum >= 6);
      
    const matchesAvailability = selectedAvailability === 'all' || 
      (selectedAvailability === 'available' && developer.availableForHire) ||
      (selectedAvailability === 'busy' && !developer.availableForHire);
    
    return matchesSearch && matchesSkills && matchesExperience && matchesAvailability;
  });

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <DevelopersHeader />
          <DevelopersFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedSkills={selectedSkills}
            onSkillsChange={setSelectedSkills}
            selectedExperience={selectedExperience}
            onExperienceChange={setSelectedExperience}
            selectedAvailability={selectedAvailability}
            onAvailabilityChange={setSelectedAvailability}
          />
          <DevelopersList developers={filteredDevelopers} />
          <DevelopersStats developers={developersData} />
        </div>
      </main>
    </div>
  );
}

export default DevelopersPage;
