export interface Blessing {
  id: string;
  name: string;
  msg: string;
  relation: string;
  token: string;
  timestamp: string;
}

export interface VenueInfo {
  name: string;
  role: string;
  address: string;
  city: string;
  googleMapsUrl: string;
  appleMapsUrl?: string;
  embedQuery: string;
  directionsUrl: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  dateStr: string;
  dayStr: string;
  timeStr: string;
  venue: string;
  locationDetails: string;
  googleCalendarUrl: string;
  bannerImage: string;
  altText: string;
  badgeText: string;
  startDateIso: string;
  endDateIso: string;
  description: string;
}
