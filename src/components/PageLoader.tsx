import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/fb4d51127fc4d20ad11b6c21593f6cc57c2a97a5.png';

interface PageLoaderProps {
  isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ backgroundColor: '#F3F1F7' }}
              className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              style={{ backgroundColor: '#F5F1F4' }}
              className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              style={{ backgroundColor: '#FAF5F5' }}
              className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              style={{ backgroundColor: '#F3F1F7' }}
              className="absolute bottom-1/4 left-1/3 w-28 h-28 rounded-full blur-3xl"
            />
          </div>

          {/* Logo and Loading Animation */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ background: 'linear-gradient(to bottom right, #C8B6CD, #E8C5C5, #F0D5D5)' }}
                className="absolute inset-0 rounded-3xl blur-xl opacity-60"
              />
              <div 
                style={{ backgroundColor: '#F3F1F7' }}
                className="relative w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl border border-black/5 p-4"
              >
                <img 
                  src={logo} 
                  alt="INTWARI Knode" 
                  className="w-full h-full object-contain grayscale"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl tracking-tight mb-1" style={{ fontWeight: 700 }}>
                INTWARI
              </div>
              <div className="text-xs text-gray-500 tracking-wider">
                KNODE
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-black rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
