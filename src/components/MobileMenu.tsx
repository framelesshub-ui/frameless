import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeLink: string;
  onSelectLink: (link: string) => void;
}

const NAV_ITEMS = ['Home', 'Services', 'Work', 'About', 'Contact'];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeLink,
  onSelectLink,
}) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[15] px-7 py-12 flex flex-col justify-between transition-all duration-[350ms] ease-out ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'rgba(3, 4, 5, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Top spacer for header alignment */}
      <div className="h-16" />

      {/* Vertically centered navigation links */}
      <nav className="flex flex-col gap-[28px] my-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeLink === item;
          return (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectLink(item);
                onClose();
              }}
              className={`text-[38px] font-heading font-medium tracking-[-0.03em] leading-none transition-colors duration-200 flex items-center gap-3 ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              <span>{item}</span>
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-[#00d8f5]" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Bottom direct actions */}
      <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onSelectLink('Contact');
            onClose();
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-white text-[#050505] font-medium text-[16px] tracking-tight hover:bg-[#00d8f5] hover:text-[#020304] transition-colors duration-250 w-full"
        >
          <span>Start a Project</span>
          <span className="text-lg">→</span>
        </a>

        <div className="flex items-center justify-between text-xs text-white/50 pt-2 font-mono">
          <span>Direct Inquiries</span>
          <a
            href="mailto:hello@framelesshub.com"
            className="text-white/80 hover:text-[#00d8f5] underline underline-offset-2 transition-colors"
          >
            hello@framelesshub.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
