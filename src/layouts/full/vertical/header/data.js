import icon1 from 'src/assets/images/svgs/icon-account.svg';
import icon2 from 'src/assets/images/svgs/icon-inbox.svg';
import icon3 from 'src/assets/images/svgs/icon-tasks.svg';
import ddIcon1 from 'src/assets/images/svgs/icon-dd-chat.svg';
import ddIcon5 from 'src/assets/images/svgs/icon-dd-mobile.svg';
import ddIcon7 from 'src/assets/images/svgs/icon-dd-message-box.svg';


//
// Notifications dropdown
//
const notifications = [
  // {
  //   avatar: img1,
  //   title: 'Roman Joined the Team!',
  //   subtitle: 'Congratulate him',
  // },
  // {
  //   avatar: img2,
  //   title: 'New message received',
  //   subtitle: 'Salma sent you new message',
  // },
  // {
  //   avatar: img3,
  //   title: 'New Payment received',
  //   subtitle: 'Check your earnings',
  // },
  // {
  //   avatar: img4,
  //   title: 'Jolly completed tasks',
  //   subtitle: 'Assign her new tasks',
  // },
  // {
  //   avatar: img1,
  //   title: 'Roman Joined the Team!',
  //   subtitle: 'Congratulate him',
  // },
  // {
  //   avatar: img2,
  //   title: 'New message received',
  //   subtitle: 'Salma sent you new message',
  // },
  // {
  //   avatar: img3,
  //   title: 'New Payment received',
  //   subtitle: 'Check your earnings',
  // },
  // {
  //   avatar: img4,
  //   title: 'Jolly completed tasks',
  //   subtitle: 'Assign her new tasks',
  // },
];

//
// Profile dropdown
//
const profile = [
  {
    href: '/user-profile',
    title: 'My Profile',
    subtitle: 'Account Settings',
    icon: icon1,
  },
  {
    href: '/apps/email',
    title: 'My Inbox',
    subtitle: 'Messages & Emails',
    icon: icon2,
  },
  {
    href: '/apps/notes',
    title: 'My Tasks',
    subtitle: 'To-do and Daily Tasks',
    icon: icon3,
  },
];

// apps dropdown

const appsLink = [
  {
    href: '/apps/chats',
    title: 'Chat Application',
    subtext: 'Messages & Emails',
    avatar: ddIcon1,
  },

  {
    href: '/apps/contacts',
    title: 'Contact Application',
    subtext: 'Account settings',
    avatar: ddIcon5,
  },

  {
    href: '/apps/email',
    title: 'Email App',
    subtext: 'To-do and Daily tasks',
    avatar: ddIcon7,
  },

];

const pageLinks = [
  // {
  //   href: '/pricing',
  //   title: 'Pricing Page',
  // },
  // {
  //   href: '/auth/login',
  //   title: 'Authentication Design',
  // },
  // {
  //   href: '/auth/register',
  //   title: 'Register Now',
  // },
  // {
  //   href: '/404',
  //   title: '404 Error Page',
  // },
  // {
  //   href: '/apps/notes',
  //   title: 'Notes App',
  // },
  // {
  //   href: '/user-profile',
  //   title: 'User Application',
  // },
  // {
  //   href: '/apps/blog/posts',
  //   title: 'Blog Design',
  // },
  // {
  //   href: '/apps/ecommerce/eco-checkout',
  //   title: 'Shopping Cart',
  // },
];

export { notifications, profile, pageLinks, appsLink };
