import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_URL = 'https://wa.me/919820000000?text=Hello%20RRUP%20Advisory,%20I%20would%20like%20to%20inquire%20about%20advisory%20services.';
const PHONE_NUMBER = '+912226500000';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.017 2.003c-5.514 0-9.986 4.472-9.986 9.986 0 1.76.462 3.483 1.34 4.997L2 22l5.146-1.34a9.955 9.955 0 0 0 4.87 1.24h.004c5.514 0 9.986-4.472 9.986-9.986 0-2.667-1.038-5.174-2.924-7.06a9.928 9.928 0 0 0-7.065-2.851zm0 18.163h-.003a8.27 8.27 0 0 1-4.213-1.155l-.302-.18-3.053.795.815-2.977-.197-.305a8.264 8.264 0 0 1-1.267-4.415c0-4.567 3.716-8.283 8.284-8.283a8.23 8.23 0 0 1 5.858 2.428 8.23 8.23 0 0 1 2.425 5.859c-.001 4.567-3.717 8.233-8.347 8.233z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.01l-2.2 2.21z" />
  </svg>
);

export function FloatingContactWidget() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-12 right-12 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col items-center justify-center gap-4 w-full"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              title="WhatsApp"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              variants={{
                closed: { opacity: 0, y: 12, scale: 0.7 },
                open: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.18, delay: 0.05 }}
            >
              <WhatsAppIcon />
            </motion.a>

            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="Call our advisory desk"
              title="Call us"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-[#6B8F6B] focus:ring-offset-2"
              variants={{
                closed: { opacity: 0, y: 12, scale: 0.7 },
                open: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.18 }}
            >
              <PhoneIcon />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-sage text-white shadow-xl hover:bg-sage focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
        whileTap={{ scale: 0.92 }}
      >
        <motion.span
          key={open ? 'close' : 'message'}
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.15 }}
        >
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.span>
      </motion.button>
    </div>
  );
}
