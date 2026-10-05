import React from 'react';
import { WeddingEvent } from '../types';

interface EventCardProps {
  event: WeddingEvent;
  onOpenPhoto: (url: string, title: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onOpenPhoto }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#eec14b]/50 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
      {/* Full Digital Invitation Artwork - NEVER cropped or cut off */}
      <div
        className="w-full relative group cursor-pointer bg-white"
        onClick={() => onOpenPhoto(event.bannerImage, event.title)}
        title="Tap to zoom invitation card"
      >
        <img
          alt={event.altText}
          className="w-full h-auto object-contain block select-none group-hover:scale-[1.01] transition-transform duration-300"
          src={event.bannerImage}
          loading="lazy"
        />
        
        {/* Subtle hover overlay with zoom badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3.5 text-white">
          <span className="text-xs font-medium flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
            <span className="material-symbols-outlined text-sm">zoom_in</span> Tap to view full card
          </span>
          <span className="text-[11px] bg-[#410f18]/80 text-[#ffdadc] px-2.5 py-0.5 rounded-full font-sans tracking-wide">
            {event.badgeText}
          </span>
        </div>
      </div>

      {/* Ceremony Details & Action Controls */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white border-t border-[#eec14b]/30">
        <div className="flex flex-col gap-3.5 bg-[#f7f3ed] p-4 sm:p-5 rounded-xl border border-[#eec14b]/25 mb-5">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#775a00] shrink-0 mt-0.5 text-xl">
              event
            </span>
            <div>
              <span className="text-[11px] text-[#857374] uppercase tracking-wider block font-semibold font-sans">
                Date &amp; Day
              </span>
              <span className="text-base sm:text-lg font-bold text-[#410f18] font-serif">
                {event.dateStr}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#775a00] shrink-0 mt-0.5 text-xl">
              schedule
            </span>
            <div>
              <span className="text-[11px] text-[#857374] uppercase tracking-wider block font-semibold font-sans">
                Time
              </span>
              <span className="text-base sm:text-lg font-bold text-[#410f18] font-serif">
                {event.timeStr}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#775a00] shrink-0 mt-0.5 text-xl">
              location_on
            </span>
            <div>
              <span className="text-[11px] text-[#857374] uppercase tracking-wider block font-semibold font-sans">
                Venue
              </span>
              <span className="text-base sm:text-lg font-bold text-[#410f18] font-serif">
                {event.venue}
              </span>
              <p className="text-xs text-[#524344] mt-0.5">
                {event.locationDetails}
              </p>
            </div>
          </div>

          {event.subtitle && (
            <div className="mt-1 pt-2.5 border-t border-[#eec14b]/20 text-xs text-[#775a00] italic font-medium leading-relaxed">
              {event.subtitle}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div>
          <a
            className="w-full bg-[#410f18] hover:bg-[#5c242c] text-white font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-[0.98] text-center"
            href={event.googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm">calendar_add_on</span>
            <span>Add to Google Calendar</span>
          </a>
        </div>
      </div>
    </div>
  );
};
