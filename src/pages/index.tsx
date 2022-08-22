import React from 'react';
import { TRole } from '../model/user';

import Home from './Home';
import AddEventType from './AddEventType';
import CheckIn from './CheckIn';
import Events from './Events';
import EventTypes from './EventTypes';
import Users from './Users';

interface IPagesItem {
    to: string,
    title: string,
    role: TRole[],
    icon: string,
    component: React.ReactNode,
  }
  
type TPages = IPagesItem[];
  
const pages: TPages = [
    { to: '/users', title: 'Пользователи', role: ['admin'], icon: 'groups', component: <Users /> },
    { to: '/addeventtype', title: '+ Услуга', role: ['manager'], icon: 'library_add', component: <AddEventType /> },
    { to: '/eventtypes', title: 'Услуги', role: ['manager'], icon: 'list_alt', component: <EventTypes /> },  
    { to: '/checkinevent', title: 'Записаться', role: ['user'], icon: 'add_alarm', component: <CheckIn /> },
    { to: '/events', title: 'События', role: ['manager', 'user'], icon: 'calendar_month', component: <Events /> },
  ];

export default pages;
