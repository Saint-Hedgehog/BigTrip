import { createTripMain } from './view/trip-main.js';
import { createTripInfo } from './view/trip-info.js';
import { createTripControls } from './view/trip-controls.js';
import { createTripControlsNavigation } from './view/trip-controls-navigation.js';
import { createTripTabs } from './view/trip-tabs.js';
import { createTripControlsFilters } from './view/trip-controls-filters.js';
import { createTripFilters } from './view/trip-filters.js';
import { createTripMainEventAddBtn } from './view/trip-main-event-add-btn.js';
import { createTripEvents } from './view/trip-events.js';
import { createTripSort } from './view/trip-sort.js';
import {createTripEventsList} from './view/trip-events-list.js';
import { createTripCreate } from './view/trip-create.js';
import { createTripEdit } from './view/trip-edit.js';
import {createTripPoint} from './view/trip-point.js';
import {renderTemplate, RenderPosition} from './render.js';
import {generateTrip} from './mock/trip.js';

const TRIP_EVENT_COUNT = 3;
const trips = new Array(TRIP_EVENT_COUNT).fill().map(generateTrip);

const pageHeaderContainer = document.querySelector('.page-header__container');
renderTemplate(pageHeaderContainer, createTripMain(), RenderPosition.BEFOREEND);

const tripMain = document.querySelector('.trip-main');
renderTemplate(tripMain, createTripInfo(trips), RenderPosition.AFTERBEGIN);
renderTemplate(tripMain, createTripControls(), RenderPosition.BEFOREEND);
renderTemplate(tripMain, createTripMainEventAddBtn(), RenderPosition.BEFOREEND);

const tripControls = document.querySelector('.trip-controls');
renderTemplate(tripControls, createTripControlsNavigation(), RenderPosition.BEFOREEND);
renderTemplate(tripControls, createTripControlsFilters(), RenderPosition.BEFOREEND);

const tripControlsNavigation = document.querySelector('.trip-controls__navigation');
renderTemplate(tripControlsNavigation, createTripTabs(), RenderPosition.BEFOREEND);

const tripControlsFilters = document.querySelector('.trip-controls__filters');
renderTemplate(tripControlsFilters, createTripFilters(), RenderPosition.BEFOREEND);

const pageMainContainer = document.querySelector('.page-main > .page-body__container');
renderTemplate(pageMainContainer, createTripEvents(), RenderPosition.AFTERBEGIN);

const tripEvents = document.querySelector('.trip-events');
renderTemplate(tripEvents, createTripSort(), RenderPosition.BEFOREEND);
renderTemplate(tripEvents, createTripEventsList(), RenderPosition.BEFOREEND);

const tripEventsList = document.querySelector('.trip-events__list');
renderTemplate(tripEventsList, createTripCreate(trips[0]), RenderPosition.BEFOREEND);
renderTemplate(tripEventsList, createTripEdit(trips[1]), RenderPosition.BEFOREEND);
for (let i = 2; i < trips.length; i++) {
  renderTemplate(tripEventsList, createTripPoint(trips[i]), RenderPosition.BEFOREEND);
}
