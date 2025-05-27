# Healthcare Dashboard

A modern, responsive healthcare dashboard built with React and Tailwind CSS. This project replicates a pixel-perfect design featuring patient health monitoring, appointment scheduling, and medical data visualization.

![Healthcare Dashboard Preview](https://example.com/dashboard-preview.png)

## 🚀 Features

- **Modern UI Design**: Clean, professional healthcare interface with rounded corners and soft shadows
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**:
  - Human anatomy visualization with health indicators
  - Health status cards for different body systems
  - Monthly calendar with appointment scheduling
  - Activity tracking with visual charts
  - Upcoming appointments management
- **Real-time Updates**: Dynamic data visualization and status indicators
- **Accessibility**: WCAG 2.1 AA compliant design

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **Icons**: Lucide React 0.511.0
- **Development**: ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Top navigation with search and user profile
│   ├── Sidebar.jsx             # Left navigation menu
│   ├── AnatomySection.jsx      # Human body visualization
│   ├── HealthStatusCards.jsx   # Health metrics cards
│   ├── CalendarView.jsx        # Monthly calendar with appointments
│   ├── UpcomingSchedule.jsx    # Upcoming appointments list
│   └── ActivityFeed.jsx        # Weekly activity chart
├── data/
│   ├── navigationItems.js      # Navigation menu configuration
│   ├── healthData.js           # Health status and activity data
│   └── appointments.js         # Calendar and appointment data
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/healthcare-dashboard.git
cd healthcare-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #4F46E5 (Indigo)
- **Accent Cyan**: #06B6D4 (Cyan)
- **Health Red**: #EF4444 (Red)
- **Warning Orange**: #F97316 (Orange)
- **Background**: #E6EFFA (Light Blue)
- **Content Background**: #F8FAFC (Light Gray)

### Key Components

1. **Anatomy Visualization**: Interactive human body with health indicators
2. **Health Status Cards**: Progress tracking for Lungs, Teeth, and Bone health
3. **Calendar Integration**: Monthly view with appointment scheduling
4. **Activity Charts**: Weekly activity visualization
5. **Responsive Navigation**: Collapsible sidebar for mobile devices
6. **Rounded UI**: Soft rounded corners for a modern, friendly appearance

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 768px - 1024px (md to lg)
- **Desktop**: > 1280px (xl)

## 🔧 Customization

### Adding New Health Metrics

1. Update `src/data/healthData.js` with new health data
2. Modify `HealthStatusCards.jsx` to include new card types
3. Add corresponding icons and colors

### Modifying Calendar

1. Update `src/data/appointments.js` with new appointment data
2. Customize `CalendarView.jsx` for different calendar layouts

### Styling Changes

1. Modify `tailwind.config.js` for custom colors and themes
2. Update component classes for design changes

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the repository.

