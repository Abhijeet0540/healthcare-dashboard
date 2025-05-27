import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  Users, 
  BarChart3, 
  MessageCircle, 
  HelpCircle, 
  Settings 
} from 'lucide-react';

export const navigationItems = [
  {
    section: 'General',
    items: [
      {
        id: 'dashboard',
        name: 'Dashboard',
        icon: LayoutDashboard,
        active: true
      },
      {
        id: 'history',
        name: 'History',
        icon: History,
        active: false
      },
      {
        id: 'calendar',
        name: 'Calendar',
        icon: Calendar,
        active: false
      },
      {
        id: 'appointments',
        name: 'Appointments',
        icon: Users,
        active: false
      },
      {
        id: 'statistics',
        name: 'Statistics',
        icon: BarChart3,
        active: false
      }
    ]
  },
  {
    section: 'Tools',
    items: [
      {
        id: 'chat',
        name: 'Chat',
        icon: MessageCircle,
        active: false
      },
      {
        id: 'support',
        name: 'Support',
        icon: HelpCircle,
        active: false
      }
    ]
  },
  {
    section: '',
    items: [
      {
        id: 'setting',
        name: 'Setting',
        icon: Settings,
        active: false
      }
    ]
  }
];
