import {
  // IconPoint,
  // IconNotes,

  IconMail,
  // IconTicket,
  IconPackage,
  IconMessage2,
 

} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [

  {
    navlabel: true,
    subheader: 'Apps',
  },
  {
    id: uniqueId(),
    title: 'Contacts',
    icon: IconPackage,
    chip: '2',
    chipColor: 'secondary',
    href: '/apps/contacts',
  },
  {
    id: uniqueId(),
    title: 'Chats',
    icon: IconMessage2,
    href: '/apps/chats',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Notes',
  //   icon: IconNotes,
  //   href: '/apps/notes',
  // },
  {
    id: uniqueId(),
    title: 'Email',
    icon: IconMail,
    href: '/apps/email',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Tickets',
  //   icon: IconTicket,
  //   href: '/apps/tickets',
  // },

];

export default Menuitems;
