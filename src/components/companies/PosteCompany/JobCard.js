import React, { useState } from 'react';
import { useTheme } from '../../hooks/useThemeContext';
import JobCardHeader from './JobCardHeader';
import JobCardContent from './JobCardContent';
import JobCardActions from './JobCardActions';
import ContactFormModal from './ContactFormModal';
import CompanyInfoModal from './CompanyInfoModal';
import JobFilters from './JobFilters';
import EmptyState from './EmptyState';
import { postsData } from './postsData';

function JobCard({ post, initialLiked = false, onLikeChange }) {
  const { isDarkMode } = useTheme();
  const [showContactForm, setShowContactForm] = useState(false);
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(post.likes || Math.floor(Math.random() * 50) + 10);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cv: null
  });

  // Check if job is initially liked from localStorage
  React.useEffect(() => {
    const savedLikedJobs = localStorage.getItem('likedJobs');
    if (savedLikedJobs) {
      const likedJobIds = JSON.parse(savedLikedJobs);
      const currentlyLiked = likedJobIds.includes(post.id);
      setIsLiked(currentlyLiked);
    }
  }, [post.id]);

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikesCount(prev => newLikedState ? prev + 1 : prev - 1);
    
    // Always update localStorage
    const savedLikedJobs = localStorage.getItem('likedJobs');
    const likedJobIds = savedLikedJobs ? JSON.parse(savedLikedJobs) : [];
    
    if (newLikedState) {
      // Add to liked jobs
      if (!likedJobIds.includes(post.id)) {
        likedJobIds.push(post.id);
        localStorage.setItem('likedJobs', JSON.stringify(likedJobIds));
      }
    } else {
      // Remove from liked jobs
      const updatedLikedJobIds = likedJobIds.filter(id => id !== post.id);
      localStorage.setItem('likedJobs', JSON.stringify(updatedLikedJobIds));
    }
    
    // Call parent callback if provided
    if (onLikeChange) {
      onLikeChange(post.id, newLikedState);
    }
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
    <div className={`rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
      isDarkMode 
        ? 'bg-gray-800/50 border-gray-700 hover:border-teal-500/50 hover:shadow-teal-500/20' 
        : 'bg-white border-gray-200 hover:border-teal-400/50 hover:shadow-teal-400/20 shadow-md'
    }`}>
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

      {/* Contact Form Modal */}
      <ContactFormModal
        show={showContactForm}
        post={post}
        contactData={contactData}
        onClose={() => setShowContactForm(false)}
        onSubmit={handleContactSubmit}
        onInputChange={handleInputChange}
      />

      {/* Company Info Modal */}
      <CompanyInfoModal
        show={showCompanyInfo}
        post={post}
        onClose={() => setShowCompanyInfo(false)}
        onApply={() => setShowContactForm(true)}
      />
    </div>
  );
}

function JobPostsList() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode } = useTheme();

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
