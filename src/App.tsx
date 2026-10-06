/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { WeddingEvent } from './types';
import { Countdown } from './components/Countdown';
import { EventCard } from './components/EventCard';
import { VenueSection } from './components/VenueSection';
import { FlowerPetalsShower } from './components/FlowerPetalsShower';
import { PhotoLightbox } from './components/PhotoLightbox';
import { generateGoogleCalendarUrl } from './utils/calendar';
import { weddingAudio } from './utils/audio';

export default function App() {
  const [lightboxPhoto, setLightboxPhoto] = useState<{ url: string; title: string } | null>(null);
  const [isMobileView, setIsMobileView] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showFlowerShower, setShowFlowerShower] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const inviteUrl = 'https://karishmabs.github.io/praveen-weds-karishma/';

  useEffect(() => {
    const unsub = weddingAudio.subscribe((playing) => setIsPlayingAudio(playing));
    setIsPlayingAudio(weddingAudio.getIsPlaying());
    return () => unsub();
  }, []);

  const toggleSound = () => {
    weddingAudio.toggle();
  };

  const heroBannerUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBcdfRxn1mRWRooFOBePRyIV4qv6Bj9sIPtkgVSoylGiCD8Mh6B7hb9ZDbikctES9MeghhVqAqXDgn4QxgSQgDh48nTCdRTHUDINRT6l0sLhMNs6VvIMcR4PRF_vwCoEnleQ5OLmF7nDI49W4E0aZ7g_ZbougfO7nUlEUwXuCYMMo9wNj9vRFA_y-01OrAWRoIIP9HrnpU-47FVNGOjYQjg6-LEcO9spgqZUSjYJp0EJyHT7YPgHE0hkgaBMgj9irXmHz6n71_6a51Iyg';

  const events: WeddingEvent[] = [
    {
      id: 'reception',
      title: 'Reception – Praveen weds Karishma',
      subtitle: 'Join us for an evening of warmth, celebration, and joyous festivities.',
      dateStr: 'Thursday, 19th November 2026',
      dayStr: 'Thursday',
      timeStr: '6:00 PM – 9:00 PM IST',
      venue: 'Karpaga Mahal, Karur',
      locationDetails: 'Kadaparai, Karur – 639006, Tamil Nadu',
      startDateIso: '20261119T123000Z',
      endDateIso: '20261119T153000Z',
      description: 'Wedding reception celebration of Praveen and Karishma at Karpaga Mahal, Kadaparai, Karur.',
      googleCalendarUrl: generateGoogleCalendarUrl(
        'Reception - Praveen weds Karishma',
        '20261119T123000Z',
        '20261119T153000Z',
        'Wedding reception celebration of Praveen and Karishma at Karpaga Mahal, Kadaparai, Karur.',
        'Karpaga Mahal, Kadaparai, Karur, Tamil Nadu 639006'
      ),
      bannerImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBHm3xhmwDIqiEXbHiOXVnTHRxBFlU29F9qQDmRGAI1QEq9Z36rAVYzv2e_6bSgwvuQ4px380fL_w0ICQIKQbY30t1nFsxE7A1KbRMH9ByrSJSV3E6cpBKM6NXWKii7IbzGB_lir2NysWi2Q7epqvNrxiIQMjbbViVDmAmCjGjn_jJHFme1Qd0VZdm4xbtbRoiY4YFfFhsZGXye8xpjagEgrUeoR_X-CV5KOUeph0shg8jCdKcFZRlUxW-MuqC3LBDlHPPAGh5OD60D2A',
      altText: 'The Celebration – Reception Ceremony of Praveen & Karishma',
      badgeText: 'The Celebration',
    },
    {
      id: 'muhurtham',
      title: 'Muhurtham – Praveen weds Karishma',
      subtitle: 'Auspicious Kalyana Virundhu (traditional wedding feast) to follow immediately at Karpaga Mahal.',
      dateStr: 'Friday, 20th November 2026',
      dayStr: 'Friday',
      timeStr: '6:00 AM – 7:00 AM IST (Auspicious Time)',
      venue: 'Sri Balasubramaniam Temple, Pavithiram',
      locationDetails: 'Pavithiram, Karur District, Tamil Nadu',
      startDateIso: '20261120T003000Z',
      endDateIso: '20261120T013000Z',
      description: 'Auspicious Muhurtham ceremony of Praveen and Karishma at Sri Balasubramaniam Temple, Pavithiram. Followed by grand Kalyana Virundhu feast at Karpaga Mahal.',
      googleCalendarUrl: generateGoogleCalendarUrl(
        'Muhurtham - Praveen weds Karishma',
        '20261120T003000Z',
        '20261120T013000Z',
        'Auspicious Muhurtham ceremony of Praveen and Karishma at Sri Balasubramaniam Temple, Pavithiram. Kalyana Virundhu to follow at Karpaga Mahal.',
        'Sri Balasubramaniam Temple, Pavithiram, Karur District, Tamil Nadu'
      ),
      bannerImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCQRbG9IoOCEOCX4jDtcWGJcfAvrJ13LbCR7sxr3TpT1S4d7ZQUIkPvFZ5ADlbkoBU02PPyloDrpr7iMEqHCRMxqNyw9os7y6FIUiTYOYEdZyu3CCFcO8ZZc1sby6b7O8DXR0HFdnwqEImbKp1Z-XKe0llCC4JOyZt65UIw4TA2y3gtOnDxF-PVVB7OWNeJ0qqHb9IRbBbm1HMZZzk5s1uNvK1Ch4Yngw6oxt_AVPNP5L1rcVldQTj5gtkgEXN3ajaoF4_5w2B_hds09g',
      altText: 'The Kalyanam – Sacred Muhurtham of Praveen & Karishma',
      badgeText: 'The Kalyanam',
    },
  ];

  const handleTapToOpen = () => {
    setShowFlowerShower(true);
    mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const shareViaWhatsApp = () => {
    const text = `🌸 Praveen & Karishma Wedding Invitation 🌸\nWe joyfully invite you to celebrate our wedding on November 19 & 20, 2026 in Karur, Tamil Nadu.\n\nView invitation, map navigation & timings:\n${inviteUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const photos = [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBARxEkMor8g3-3DRAlI7CdeWPJVqLxs4Zpg-ZNGD8h3RKQsFNhWyQ2eeMGaFrYH0Ou_oDEyfjUW_M1WoTEssXVTpv9ln4j2YR5f-j003GulD2N2XpOjz0bkXaViuj3H3VTEWF5AQCYlBwNxe4cbOlMF4oXsdMlUFqZDfmM_8eHjvQjafzDgPg0kDKIR3YtO5uGWASoMBs87m17fTTRjGU2vIjujU3zQeilIki5Ecx4ldGe-ME4PgLcML-Py2y3ZuWMgA',
      title: 'Praveen & Karishma – Smiling Radiance',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxSpp-9n-ElUNvguTTDyOtE27YbB-_fdD5ULCqaUpqnJZmWpchT1HFr449lgsOM3-TeIF1gxcTWciiEms51sSgcNTOa_CH60jB4f-Q2QSdBNHG5Kub8vGamnOz5f25vjZcXFFxo3_X97D5q-wxUiLOffPb1uTD2y3vZA1GOaHIOaqa-JK9Rz5GgNZ6yo3igbDu-gvYU7jU-_rJI2FxVdY5qrz_4L2gYBBr_572pb0q5mgtzKm9M4JCVHTGWpwyz8X2XQ',
      title: 'Praveen & Karishma – Strolling Together',
    },
    {
      url: 'https://raw.githubusercontent.com/KarishmaBS/Praveen_Karishma_Kalyanam/main/Sitting.jpg',
      title: 'Praveen & Karishma – Traditional Sitting Portrait',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWvGNrNK33B0H8vihMWqm4S14lth10z6y7cBaQZxZmLs43lWsUfDUVNH1a8dKB8TXSLFhxn5VM21fM28Ld7kFyzYRsowVOOZ1aM4CNrX8SnjNJBpwJFTOp_5RYAUM5JtlNa4jtIyYRLBl_Pvz36x3auoehxFuG-6tmWD5NkAZvJ6Vk6GoQ-Itw7rYl5_foeseOHgL90wdqiSGhKYD3C7l3Bc0iAD3goiDNv5kben0v2d48v_bUAOwh8LZtkUDCfqNOYA',
      title: 'Holding Hands – Auspicious Wedding Bangles',
    },
  ];

  return (
    <main className="flex flex-col relative w-full bg-[#32080e]/10 min-h-screen text-[#1c1c18] font-serif">
      {/* 1. TOP URL & VIEW SWITCHER BAR */}
      <header className="w-full px-3 sm:px-6 py-2 bg-[#f1ede7]/95 backdrop-blur-md sticky top-0 z-40 shadow-xs flex items-center justify-between gap-2 border-b border-[#d7c1c2]/40 select-none">
        <div className="flex items-center gap-1.5 min-w-0 bg-white px-3 py-1.5 rounded-full shadow-inner flex-1 max-w-xs border border-[#775a00]/20">
          <span className="material-symbols-outlined text-[#775a00] text-sm shrink-0">lock</span>
          <span className="text-[11px] truncate text-[#524344] font-mono tracking-tight select-all">
            karishmabs.github.io/praveen-weds-karishma
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* View Toggle: Mobile View vs Full Screen View */}
          <div className="hidden sm:flex items-center bg-[#fdf9f3] p-0.5 rounded-full border border-[#eec14b]/50 shadow-2xs font-sans text-xs">
            <button
              onClick={() => setIsMobileView(true)}
              className={`px-2.5 py-1 rounded-full flex items-center gap-1 transition-all cursor-pointer font-medium ${
                isMobileView
                  ? 'bg-[#410f18] text-white shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
              title="Mobile invitation view"
            >
              <span className="material-symbols-outlined text-xs">smartphone</span>
              <span>Mobile View</span>
            </button>
            <button
              onClick={() => setIsMobileView(false)}
              className={`px-2.5 py-1 rounded-full flex items-center gap-1 transition-all cursor-pointer font-medium ${
                !isMobileView
                  ? 'bg-[#410f18] text-white shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
              title="Full width desktop view"
            >
              <span className="material-symbols-outlined text-xs">desktop_windows</span>
              <span>Full Screen</span>
            </button>
          </div>

          {/* WhatsApp share */}
          <button
            onClick={shareViaWhatsApp}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer font-sans"
            title="Share via WhatsApp"
          >
            <span className="material-symbols-outlined text-xs">share</span>
            <span className="text-[11px] font-medium">WhatsApp</span>
          </button>
        </div>
      </header>

      {/* CONTAINER WRAPPER: Responsive Mobile Phone Frame when in Mobile View */}
      <div
        className={`w-full transition-all duration-300 ${
          isMobileView
            ? 'max-w-[480px] mx-auto sm:my-5 sm:rounded-[36px] sm:shadow-2xl sm:border-[5px] sm:border-[#410f18]/30 bg-[#fdf9f3] overflow-hidden'
            : 'max-w-5xl mx-auto bg-[#fdf9f3]'
        }`}
      >
        {/* Mobile View Top Indicator on Desktop */}
        {isMobileView && (
          <div className="hidden sm:flex items-center justify-between px-6 py-2 bg-[#3e0811] text-[#ffdadc] text-[10px] font-sans border-b border-[#eec14b]/30">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs">signal_cellular_4_bar</span>
              <span className="material-symbols-outlined text-xs">wifi</span>
              <span className="material-symbols-outlined text-xs">battery_full</span>
            </div>
          </div>
        )}

        {/* 3. HERO COVER */}
        <section
          id="first-page-cover"
          onClick={handleTapToOpen}
          className="w-full bg-[#3e0811] text-[#f7f0ea] min-h-[90vh] sm:min-h-[85vh] flex flex-col items-center justify-between py-8 px-4 relative select-none cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />

          {/* Title Header with Cursive & Classy Typography */}
          <div className="flex flex-col items-center text-center z-10 pt-3 pb-1">
            <div className="flex items-center gap-2 mb-3 opacity-95">
              <span className="w-8 h-[1px] bg-[#eec14b]/50"></span>
              <p className="text-[10px] sm:text-[11px] tracking-[0.38em] uppercase text-[#ffdadc] font-medium font-sans">
                With Joyful Hearts, Celebrating The Wedding Of
              </p>
              <span className="w-8 h-[1px] bg-[#eec14b]/50"></span>
            </div>

            {/* REFINED & LESS CURSIVE: Praveen & Karishma */}
            <div className="flex flex-col items-center justify-center text-center py-2 select-none">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl text-[#fffaf5] font-normal tracking-wide drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 leading-tight"
                style={{
                  fontFamily: '"Alex Brush", "Allura", cursive',
                }}
              >
                <span className="hover:text-[#ffe082] transition-colors">
                  Praveen
                </span>
                <span
                  className="text-3xl sm:text-4xl md:text-5xl text-[#fece57] font-serif italic mx-2 sm:mx-3 select-none opacity-95 drop-shadow-[0_0_8px_rgba(254,206,87,0.4)]"
                  style={{ fontFamily: '"Cormorant Garamond", "EB Garamond", Georgia, serif' }}
                >
                  &amp;
                </span>
                <span className="hover:text-[#ffe082] transition-colors">
                  Karishma
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2.5 mt-2">
              <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#eec14b]/70 to-transparent"></span>
              <span className="text-[#fece57] text-xs select-none">✧ ❖ ✧</span>
              <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#eec14b]/70 to-transparent"></span>
            </div>
          </div>

          {/* Chrome Frame Photo Montage */}
          <div className="relative z-10 my-auto group transition-transform duration-300 active:scale-[0.98]">
            <div className="p-2 rounded-[16px] chrome-frame">
              <div className="p-1 rounded-[12px] chrome-inner-bevel">
                <div className="w-[150px] sm:w-[170px] bg-white p-2 rounded-lg flex flex-col gap-2.5 shadow-2xl relative border border-[#775a00]/30">
                  {photos.map((p, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxPhoto({ url: p.url, title: p.title });
                      }}
                      className="w-full aspect-square overflow-hidden bg-neutral-900 rounded-md shadow-sm border border-black/15 group/item cursor-pointer relative"
                      title="Click to view full photo"
                    >
                      <img
                        alt={p.title}
                        className="w-full h-full object-cover object-center brightness-95 contrast-105 group-hover/item:scale-105 transition-transform duration-300"
                        src={p.url}
                      />
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-base">zoom_in</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tap to Open Prompt */}
          <div className="flex flex-col items-center gap-2 z-10 pb-3 pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleTapToOpen();
              }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#5c242c]/90 hover:bg-[#5c242c] border border-[#eec14b]/50 text-[#ffdadc] hover:text-white transition-all active:scale-95 shadow-xl cursor-pointer"
            >
              <span className="text-xs tracking-[0.38em] uppercase font-bold font-sans">
                TAP TO OPEN
              </span>
              <span className="material-symbols-outlined text-sm text-[#eec14b] animate-bounce">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </section>

        {/* 4. MAIN INVITATION BODY */}
        <div
          ref={mainContentRef}
          id="invitation-main-content"
          className="w-full px-4 py-6 flex flex-col gap-7 sm:gap-8 transition-all duration-500"
        >
          {/* HERO CARD (Uncropped Full Artwork Display) */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#eec14b]/40 flex flex-col items-center">
            <div
              className="w-full relative cursor-pointer group bg-[#fdf9f3]"
              onClick={() =>
                setLightboxPhoto({
                  url: heroBannerUrl,
                  title: 'Praveen & Karishma – Wedding Invitation',
                })
              }
              title="Tap to zoom wedding portrait"
            >
              <img
                alt="Praveen & Karishma Wedding"
                className="w-full h-auto object-contain block select-none"
                src={heroBannerUrl}
              />
            </div>

            <div className="w-full p-4 sm:p-6 flex flex-col items-center text-center bg-white border-t border-[#eec14b]/30">
              <p className="text-base sm:text-lg text-[#410f18] leading-relaxed font-serif font-medium">
                Join us in celebrating love, traditions, and new beginnings as we tie the knot.
              </p>

              <div className="mt-3 px-4 py-1.5 rounded-full bg-[#f1ede7] border border-[#eec14b]/40 flex items-center gap-2 shadow-xs">
                <span className="material-symbols-outlined text-[#775a00] text-sm">temple_hindu</span>
                <span className="text-xs uppercase tracking-widest text-[#410f18] font-bold font-sans">
                  Nov 19 &amp; 20, 2026 • Karur, Tamil Nadu
                </span>
              </div>

              {/* Synchronized Countdown */}
              <div className="w-full mt-3">
                <Countdown />
              </div>
            </div>
          </div>

          {/* CEREMONIES CARDS: Vertical stack in Mobile View, 2-col in Desktop */}
          <div className={`grid gap-6 items-stretch ${isMobileView ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
            {/* RECEPTION CARD ("THE CELEBRATION") */}
            <EventCard
              event={events[0]}
              onOpenPhoto={(url, title) => setLightboxPhoto({ url, title })}
            />

            {/* MUHURTHAM CARD ("THE KALYANAM") */}
            <EventCard
              event={events[1]}
              onOpenPhoto={(url, title) => setLightboxPhoto({ url, title })}
            />
          </div>

          {/* VENUES & GOOGLE MAPS NAVIGATION (Properly aligned with isMobileView) */}
          <VenueSection
            onOpenPhoto={(url, title) => setLightboxPhoto({ url, title })}
            isMobileView={isMobileView}
          />

          {/* FOOTER */}
          <footer className="mt-2 pt-6 border-t border-[#eec14b]/30 flex flex-col items-center text-center gap-2.5 pb-8">
            <p className="text-sm text-[#410f18] italic max-w-md leading-relaxed">
              &ldquo;Laughter shared, memories made, and love celebrated—thank you for being the sweetest part of our big day!&rdquo;
            </p>
            <p className="text-xs text-[#524344]">
              — With love and best compliments from family & friends.
            </p>

            <div className="text-[11px] text-gray-400 mt-2 font-sans">
              To love and to cherish <span className="font-semibold text-[#410f18]">#PraveenKarishmaKalyanam</span> • 2026
            </div>
          </footer>
        </div>
      </div>

      {/* ONLY ONE ROUND BUTTON WITH SOUND ON/OFF SYMBOL */}
      <button
        onClick={toggleSound}
        className={`fixed bottom-6 right-5 sm:right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border-2 transition-all active:scale-90 cursor-pointer ${
          isPlayingAudio
            ? 'bg-[#410f18] text-[#eec14b] border-[#eec14b] shadow-[#eec14b]/30'
            : 'bg-[#200508]/90 text-white/70 border-white/30 hover:border-[#eec14b]/70 hover:text-white'
        }`}
        aria-label={isPlayingAudio ? 'Sound On - Tap to turn sound off' : 'Sound Off - Tap to play sound'}
        title={isPlayingAudio ? 'Sound On (Click to turn off)' : 'Sound Off (Click to turn on)'}
      >
        <span className="material-symbols-outlined text-2xl select-none">
          {isPlayingAudio ? 'volume_up' : 'volume_off'}
        </span>
      </button>

      {/* Photo Lightbox Modal */}
      <PhotoLightbox
        url={lightboxPhoto?.url || null}
        title={lightboxPhoto?.title || null}
        onClose={() => setLightboxPhoto(null)}
      />

      {/* Flower Petals Shower (Triggers ONLY when clicking "TAP TO OPEN" going to second page) */}
      {showFlowerShower && (
        <FlowerPetalsShower onComplete={() => setShowFlowerShower(false)} />
      )}
    </main>
  );
}
