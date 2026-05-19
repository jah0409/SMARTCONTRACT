'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CinematicHero() {
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
        setIsLoaded(true);
  }, []);

  const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
  };

  const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideInVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { 
          x: 0, 
                opacity: 1, 
                transition: { duration: 1, ease: 'easeOut' } 
        },
  };

  return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                                    background: [
                                                  'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                                                  'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                                                  'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                                                ],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                      />
        
              <motion.div
                        className="absolute inset-0 opacity-10"
                        style={{
                                    backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent)',
                                    backgroundSize: '50px 50px',
                        }}
                        animate={{ y: [0, 50] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      />
        
              <motion.div
                        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"
                        animate={{
                                    x: [0, 100, -50, 0],
                                    y: [0, 50, -100, 0],
                        }}
                        transition={{ duration: 15, repeat: Infinity }}
                      />
              <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-15"
                        animate={{
                                    x: [0, -100, 50, 0],
                                    y: [0, -50, 100, 0],
                        }}
                        transition={{ duration: 18, repeat: Infinity }}
                      />
        
              <motion.div
                        className="relative z-10 flex items-center justify-center h-full px-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isLoaded ? 'visible' : 'hidden'}
                      >
                      <div className="max-w-4xl text-center space-y-8">
                                <motion.h1
                                              variants={slideInVariants}
                                              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                            >
                                            Smart Finance
                                </motion.h1>motion.h1>
                      
                                <motion.div variants={itemVariants} className="space-y-4">
                                            <div className="flex items-center justify-center gap-4">
                                                          <motion.div
                                                                            className="h-1 bg-gradient-to-r from-transparent to-blue-400"
                                                                            initial={{ width: 0 }}
                                                                            animate={{ width: 100 }}
                                                                            transition={{ duration: 1, delay: 1 }}
                                                                          />
                                                          <p className="text-xl text-gray-300">Portfolio Dashboard</p>p>
                                                          <motion.div
                                                                            className="h-1 bg-gradient-to-l from-transparent to-blue-400"
                                                                            initial={{ width: 0 }}
                                                                            animate={{ width: 100 }}
                                                                            transition={{ duration: 1, delay: 1 }}
                                                                          />
                                            </div>div>
                                </motion.div>motion.div>
                      
                                <motion.button
                                              variants={itemVariants}
                                              className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden group"
                                              whileHover={{ scale: 1.05 }}
                                              whileTap={{ scale: 0.95 }}
                                            >
                                            <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100"
                                                            transition={{ duration: 0.3 }}
                                                          />
                                            <span className="relative z-10">Enter Dashboard</span>span>
                                </motion.button>motion.button>
                      
                                <motion.div
                                              variants={itemVariants}
                                              className="grid grid-cols-3 gap-4 pt-8"
                                            >
                                  {[
                                              { label: 'Portfolio Value', value: '$1.2M' },
                                              { label: 'Assets', value: '15+' },
                                              { label: 'ROI', value: '+24%' },
                                                          ].map((stat, i) => (
                                                                          <motion.div
                                                                                            key={i}
                                                                                            className="p-4 bg-white bg-opacity-5 backdrop-blur-md rounded-lg border border-white border-opacity-10 hover:border-opacity-30"
                                                                                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                                                                                          >
                                                                                          <p className="text-sm text-gray-400">{stat.label}</p>p>
                                                                                          <p className="text-2xl font-bold text-white">{stat.value}</p>p>
                                                                          </motion.div>motion.div>
                                                                        ))}
                                </motion.div>motion.div>
                      </div>div>
              </motion.div>motion.div>
        
              <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                      <div className="flex flex-col items-center gap-2">
                                <span className="text-sm text-gray-400">Scroll to explore</span>span>
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>svg>
                      </div>div>
              </motion.div>motion.div>
        </div>div>
      );
}</div>
