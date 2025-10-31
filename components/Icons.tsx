import React from 'react';

export const BatonIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5" />
  </svg>
);

export const TrebleClefIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);


export const MenuIcon = ({ className = '' }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const ConductorIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.543L16.5 21.75l-.398-1.207a3.375 3.375 0 00-2.455-2.456L12.75 18l1.207-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.207a3.375 3.375 0 002.456 2.456L20.25 18l-1.207.398a3.375 3.375 0 00-2.455 2.456z" />
  </svg>
);

export const ScoreIcon = ({ className = '' }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
);

// New "Tron meets Confetti" Thematic Icons
export const BrassIcon = ({ className = '' }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const StringsIcon = ({ className = '' }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12a8.25 8.25 0 0116.5 0M3.75 17.25h16.5" />
    </svg>
);

export const PercussionIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2.25"></circle>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.95 7.05a7 7 0 00-9.9 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.071 4.929a10 10 0 00-14.142 0" />
  </svg>
);

export const WindsIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12c0 3.314-2.686 6-6 6S6 15.314 6 12H4" />
  </svg>
);