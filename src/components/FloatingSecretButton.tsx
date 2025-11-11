import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Sparkles, X, Phone } from 'lucide-react';

export function FloatingSecretButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFound, setHasFound] = useState(false);

  const messages = [
    "🎉 You found the secret!",
    "We love curious visitors like you",
    "Psst... mention this for a 5% discount",
    "Code: CURIOUS2025"
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => {
          setIsOpen(true);
          setHasFound(true);
        }}
        style={{ 
          background: 'linear-gradient(135deg, #0A4A4A 0%, #2C7873 100%)'
        }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-50 group"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          rotate: 0,
          y: [0, -10, 0],
        }}
        transition={{
          scale: { delay: 3, type: "spring", stiffness: 200 },
          rotate: { delay: 3, type: "spring", stiffness: 200 },
          y: { 
            delay: 3.5,
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Secret surprise"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 text-white" />
        </motion.div>
        
        {/* Pulse ring */}
        <motion.div
          style={{ borderColor: '#0A4A4A' }}
          className="absolute inset-0 rounded-full border-2"
          animate={{ 
            scale: [1, 1.5, 1.5],
            opacity: [0.7, 0, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md"
            >
              <div 
                style={{ 
                  backgroundColor: '#F5F3ED',
                  borderColor: '#6FB98F'
                }}
                className="p-8 rounded-3xl shadow-2xl border-2 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Confetti Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      style={{ backgroundColor: i % 3 === 0 ? '#0A4A4A' : i % 3 === 1 ? '#2C7873' : '#6FB98F' }}
                      className="absolute w-2 h-2 rounded-full"
                      initial={{ 
                        x: '50%', 
                        y: '50%',
                        scale: 0 
                      }}
                      animate={{ 
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        scale: [0, 1, 0],
                        rotate: Math.random() * 360
                      }}
                      transition={{ 
                        duration: 1.5,
                        delay: i * 0.05,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 10, 0],
                      scale: [1, 1.2, 1.2, 1.2, 1]
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-4"
                  >
                    🎁
                  </motion.div>

                  {messages.map((message, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.15 }}
                      className={`mb-3 ${idx === 0 ? 'text-xl' : idx === messages.length - 1 ? 'text-2xl bg-black text-white px-4 py-2 rounded-full inline-block' : 'text-base text-gray-700'}`}
                      style={{ fontWeight: idx === 0 || idx === messages.length - 1 ? 700 : 400 }}
                    >
                      {message}
                    </motion.p>
                  ))}

                  <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center items-stretch w-full">
                    <motion.a
                      href="tel:+250792662501"
                      className="group relative px-6 py-3 rounded-full text-white flex items-center gap-3 overflow-hidden shadow-lg flex-1 sm:flex-initial justify-center"
                      style={{ 
                        background: 'linear-gradient(135deg, #0A4A4A 0%, #2C7873 100%)',
                        fontWeight: 700
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
                        }}
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        <Phone className="w-5 h-5" />
                      </motion.div>
                      <span className="relative z-10">Call Now!</span>
                    </motion.a>

                    <motion.button
                      onClick={() => setIsOpen(false)}
                      style={{ 
                        background: 'linear-gradient(to right, #2C7873, #6FB98F)',
                        fontWeight: 600
                      }}
                      className="text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow flex-1 sm:flex-initial"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Thanks!
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
