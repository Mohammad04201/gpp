import React, { useState } from 'react';
import JobCardHeader from './JobCardHeader';
import JobCardContent from './JobCardContent';
import JobCardActions from './JobCardActions';
import ContactFormModal from './ContactFormModal';
import CompanyInfoModal from './CompanyInfoModal';
import JobFilters from './JobFilters';
import EmptyState from './EmptyState';
import { postsData } from './postsData';

function JobCard({ post }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes || Math.floor(Math.random() * 50) + 10);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cv: null
  });

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Your request has been sent successfully! We will contact you soon.');
    setShowContactForm(false);
    setContactData({
      name: '',
      email: '',
      phone: '',
      message: '',
      cv: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setContactData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
      <JobCardHeader post={post} />
      
      <JobCardContent 
        post={post} 
        isLiked={isLiked}
        likesCount={likesCount}
        handleLike={handleLike}
      />
      
      <JobCardActions 
        post={post}
        setShowContactForm={setShowContactForm}
        setShowCompanyInfo={setShowCompanyInfo}
      />

      <ContactFormModal
        show={showContactForm}
        post={post}
        contactData={contactData}
        onClose={() => setShowContactForm(false)}
        onSubmit={handleContactSubmit}
        onInputChange={handleInputChange}
      />

      <CompanyInfoModal
        show={showCompanyInfo}
        post={post}
        onClose={() => setShowCompanyInfo(false)}
        onApply={() => {
          setShowCompanyInfo(false);
          setShowContactForm(true);
        }}
      />
    </div>
  );
}

function JobPostsList() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = postsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filter === 'all') return matchesSearch;
    return matchesSearch && post.urgency === filter;
  });

  return (
    <div className="space-y-6">
      <JobFilters 
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <JobCard key={post.id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && <EmptyState />}
    </div>
  );
}

export { JobCard, JobPostsList };
export default JobPostsList;
