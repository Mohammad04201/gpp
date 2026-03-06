# 🧩 Components Structure

## 📁 **New Organized Structure**

```
src/components/
├── index.js                    # Main export file
├── common/                     # Reusable common components
│   ├── LoadingSpinner.js      # Loading state component
│   ├── ErrorMessage.js         # Error handling component
│   └── StatsCard.js           # Statistics display component
├── cards/                     # Card components
│   ├── CompanyCard.js          # Company display card
│   └── DeveloperCard.js        # Developer display card
├── forms/                      # Form components
│   ├── SearchFilter.js         # Generic search filter
│   ├── JobFilters.js           # Job filtering form
│   └── DeveloperFilters.js     # Developer filtering form
└── layout/                     # Layout components
    └── MainNavbar.js           # Main navigation
```

## 🎯 **Component Responsibilities**

### 📋 **Common Components**
- **LoadingSpinner**: Displays loading state with spinner
- **ErrorMessage**: Shows error messages with retry option
- **StatsCard**: Reusable statistics display card

### 🎴 **Card Components**
- **CompanyCard**: Displays company information and job listings
- **DeveloperCard**: Shows developer profile with skills and contact info

### 📝 **Form Components**
- **SearchFilter**: Generic search input with dropdown
- **JobFilters**: Company and job type filters
- **DeveloperFilters**: Developer-specific filters (skills, experience, availability)

### 🎨 **Layout Components**
- **MainNavbar**: Main navigation bar

## 🔄 **Usage Examples**

### Using CompanyCard
```javascript
import { CompanyCard } from '../components';

<CompanyCard company={companyData} />
```

### Using DeveloperCard
```javascript
import { DeveloperCard } from '../components';

<DeveloperCard developer={developerData} />
```

### Using Filters
```javascript
import { JobFilters, DeveloperFilters } from '../components';

<JobFilters 
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  selectedIndustry={selectedIndustry}
  onIndustryChange={setSelectedIndustry}
  selectedType={selectedType}
  onTypeChange={setSelectedType}
/>

<DeveloperFilters 
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  selectedSkills={selectedSkills}
  onSkillsChange={setSelectedSkills}
  selectedExperience={selectedExperience}
  onExperienceChange={setSelectedExperience}
  selectedAvailability={selectedAvailability}
  onAvailabilityChange={setSelectedAvailability}
/>
```

### Using Common Components
```javascript
import { LoadingSpinner, ErrorMessage, StatsCard } from '../components';

<LoadingSpinner message="جاري تحميل الشركات..." />

<ErrorMessage 
  error="فشل جلب البيانات"
  onRetry={() => refetch()}
/>

<StatsCard 
  title="📊 إحصائيات المنصة"
  stats={[
    { value: companies.length, label: 'شركة مسجلة' },
    { value: totalJobs, label: 'وظيفة مفتوحة' }
  ]}
/>
```

## 🎨 **Styling Classes**

All components use Bootstrap classes with custom CSS variables:
- `.glass-card` - Glass morphism effect
- `.company-card` - Company card specific styles
- `.developer-card` - Developer card specific styles
- `.loading-spinner` - Loading state styles
- `.error-message` - Error display styles

## 📦 **Benefits of This Structure**

1. **Reusability**: Components can be used across different pages
2. **Maintainability**: Each component has single responsibility
3. **Scalability**: Easy to add new components
4. **Consistency**: Uniform styling and behavior
5. **Testing**: Each component can be tested independently

## 🔄 **Migration Path**

1. Update existing pages to use new components
2. Remove duplicate code from old components
3. Test component integration
4. Add component documentation

**Result**: Clean, maintainable, and reusable component library! 🚀
