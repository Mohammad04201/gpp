import { useState } from 'react';

function SocialMedia() {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    instagram: '',
    linkedin: '',
    x_twitter: ''
  });

  const handleInputChange = (platform, value) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'facebook':
        return '📘';
      case 'instagram':
        return '📷';
      case 'linkedin':
        return '💼';
      case 'x_twitter':
        return '🐦';
      default:
        return '🔗';
    }
  };

  const getPlatformPlaceholder = (platform) => {
    switch (platform) {
      case 'facebook':
        return 'https://facebook.com/company';
      case 'instagram':
        return 'https://instagram.com/company';
      case 'linkedin':
        return 'https://linkedin.com/company';
      case 'x_twitter':
        return 'https://x.com/company';
      default:
        return 'أدخل الرابط';
    }
  };

  const getPlatformLabel = (platform) => {
    switch (platform) {
      case 'facebook':
        return 'Facebook';
      case 'instagram':
        return 'Instagram';
      case 'linkedin':
        return 'LinkedIn';
      case 'x_twitter':
        return 'X (Twitter)';
      default:
        return platform;
    }
  };

  return (
    <div className="glass-card">
      <div className="p-4">
        <h3 className="h5 mb-4">🔗 وسائل التواصل الاجتماعي</h3>
        
        <div className="row g-3">
          {Object.entries(socialLinks).map(([platform, url]) => (
            <div className="col-md-6" key={platform}>
              <label className="form-label small d-flex align-items-center gap-2">
                <span>{getPlatformIcon(platform)}</span>
                {getPlatformLabel(platform)}
              </label>
              <input
                type="url"
                className="form-control"
                value={url}
                onChange={(e) => handleInputChange(platform, e.target.value)}
                placeholder={getPlatformPlaceholder(platform)}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-3">
          <small className="text-white-50">
            أضف روابط وسائل التواصل الاجتماعي لزيادة التفاعل مع العملاء
          </small>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
