import React, { useState } from 'react';
import { VenueInfo } from '../types';

interface VenueSectionProps {
  onOpenPhoto: (url: string, title: string) => void;
  isMobileView?: boolean;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ onOpenPhoto, isMobileView = true }) => {
  const [copiedVenue, setCopiedVenue] = useState<string | null>(null);

  const venues: VenueInfo[] = [
    {
      name: 'Karpaga Mahal',
      role: 'Reception & Kalyana Virundhu (Wedding Feast)',
      address: 'Kadaparai, Karur – 639006, Tamil Nadu',
      city: 'Karur, Tamil Nadu',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Karpaga+Mahal+Kadaparai+Karur',
      embedQuery: 'Karpaga+Mahal+Kadaparai+Karur',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Karpaga+Mahal+Kadaparai+Karur',
    },
    {
      name: 'Sri Balasubramaniam Temple',
      role: 'Sacred Muhurtham Ceremony',
      address: 'Pavithiram, Karur District – 639118, Tamil Nadu',
      city: 'Pavithiram, Karur',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sri+Balasubramaniam+Temple+Pavithiram',
      embedQuery: 'Sri+Balasubramaniam+Temple+Pavithiram',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sri+Balasubramaniam+Temple+Pavithiram',
    },
  ];

  const mapIllustration = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4eu6dI3xhL9rUMPd24F-DnL1QkpbePqOT5dkbId-V8fRfvFx73lHZYCs0qiQEbLF4zn68p_xx7BlhYHchmoju74sSIjI960hNwklXBZdHc8AscVrK3oTAC4kjM4FCYOC_Tdu2n458CLiErOBIvSGBZLBsuTOND_gDSVigZlV58PsbNim9ECeIHhXD0xB_c407va49xlyNsAqNsJoFtfI_Xfkzf85qvY8d9ou2efHCMS7eMQOoBpnR3idmwLnK2gKdasNM_N6Q5dA8wQ';

  const copyAddress = (venue: VenueInfo) => {
    navigator.clipboard.writeText(`${venue.name}, ${venue.address}`);
    setCopiedVenue(venue.name);
    setTimeout(() => setCopiedVenue(null), 2500);
  };

  return (
    <div className="bg-[#f7f3ed] rounded-2xl p-5 sm:p-6 shadow-md border border-[#eec14b]/30">
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#eec14b]/30 text-[#775a00] text-xs font-semibold mb-2">
          <span className="material-symbols-outlined text-sm">explore</span>
          <span>Google Maps Navigation</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#410f18] font-semibold">
          Venues &amp; Directions
        </h3>
        <p className="text-xs text-[#524344] mt-1 max-w-sm mx-auto">
          Tap below for direct turn-by-turn navigation in Google Maps.
        </p>
      </div>

      <div className={`grid gap-4 ${isMobileView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        {venues.map((venue) => (
          <div
            key={venue.name}
            className="bg-white p-4 sm:p-5 rounded-xl border border-[#eec14b]/30 shadow-sm flex flex-col justify-between hover:border-[#775a00]/40 transition-colors"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold text-[#775a00] uppercase tracking-wider block">
                    {venue.role}
                  </span>
                  <h4 className="text-lg font-serif font-bold text-[#410f18] mt-0.5">
                    {venue.name}
                  </h4>
                </div>
                <span className="material-symbols-outlined text-[#775a00] p-1.5 bg-[#f7f3ed] rounded-full text-base">
                  near_me
                </span>
              </div>

              <p className="text-xs text-[#524344] mt-2 flex items-start gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#775a00] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{venue.address}</span>
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f1ede7] flex flex-col gap-2">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#410f18] hover:bg-[#5c242c] text-white rounded-lg text-xs font-semibold shadow-xs transition-transform active:scale-95 text-center"
              >
                <span className="material-symbols-outlined text-sm">map</span>
                <span>Open in Google Maps</span>
              </a>

              <div className="flex items-center justify-between gap-2 text-xs">
                <a
                  href={venue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#775a00] hover:underline text-[11px] font-semibold flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-xs">directions_car</span>
                  <span>Get Driving Directions</span>
                </a>

                <button
                  onClick={() => copyAddress(venue)}
                  className="text-[#524344] hover:text-[#410f18] text-[11px] font-medium flex items-center gap-1 cursor-pointer bg-neutral-100 hover:bg-neutral-200 px-2 py-0.5 rounded"
                >
                  <span className="material-symbols-outlined text-xs">content_copy</span>
                  <span>{copiedVenue === venue.name ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Illustrated Map from Wedding Card */}
      <div className="w-full mt-5 rounded-2xl overflow-hidden border-2 border-[#eec14b]/40 bg-white p-3 sm:p-4 flex flex-col items-center shadow-md">
        <div className="flex items-center justify-between w-full mb-2.5 px-1">
          <span className="text-xs font-bold text-[#410f18] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-[#775a00]">signpost</span>
            Venue Route Card
          </span>
          <button
            onClick={() => onOpenPhoto(mapIllustration, 'Venue Route Map')}
            className="text-[11px] text-[#775a00] hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-xs">zoom_in</span>
            <span>Zoom In</span>
          </button>
        </div>

        <div 
          className="relative w-full rounded-xl overflow-hidden cursor-pointer group"
          onClick={() => onOpenPhoto(mapIllustration, 'Venue Route Map')}
        >
          <img
            alt="Venue Route Map"
            className="w-full h-auto object-contain rounded-lg group-hover:scale-[1.01] transition-transform duration-300"
            src={mapIllustration}
          />
        </div>

        <div className={`grid gap-2.5 w-full mt-4 ${isMobileView ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          <a
            className="bg-[#410f18] hover:bg-[#5c242c] text-white py-3 px-4 rounded-xl font-bold text-xs text-center shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
            href="https://www.google.com/maps/search/?api=1&query=Karpaga+Mahal+Kadaparai+Karur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm">directions</span>
            <span>Navigate to Karpaga Mahal</span>
          </a>

          <a
            className="bg-[#775a00] hover:bg-[#8d6a00] text-white py-3 px-4 rounded-xl font-bold text-xs text-center shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
            href="https://www.google.com/maps/search/?api=1&query=Sri+Balasubramaniam+Temple+Pavithiram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm">temple_hindu</span>
            <span>Navigate to Balasubramaniam Temple</span>
          </a>
        </div>
      </div>
    </div>
  );
};
