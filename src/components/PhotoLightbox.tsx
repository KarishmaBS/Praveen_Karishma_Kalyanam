import React from 'react';

interface PhotoLightboxProps {
  url: string | null;
  title: string | null;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ url, title, onClose }) => {
  if (!url) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-0 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center cursor-pointer transition-colors"
          title="Close"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="rounded-2xl overflow-hidden border-2 border-[#eec14b]/60 shadow-2xl bg-black">
          <img
            src={url}
            alt={title || 'Wedding Photo'}
            className="w-full max-h-[80vh] object-contain block select-none"
          />
        </div>

        {title && (
          <div className="mt-3 text-center text-white/90 text-sm font-serif tracking-wide bg-black/50 px-4 py-1.5 rounded-full border border-white/10">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};
