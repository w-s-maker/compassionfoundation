import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHeart, Send } from 'lucide-react';
export function GetInvolved() {
  const [activeTab, setActiveTab] = useState('one-time');
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const tabs = [
  {
    id: 'one-time',
    label: 'One-time'
  },
  {
    id: 'monthly',
    label: 'Monthly'
  },
  {
    id: 'sponsor',
    label: 'Sponsor a Child'
  },
  {
    id: 'pads',
    label: 'Donate Pads'
  }];

  const amounts = ['500', '1000', '2500', '5000'];
  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Donating ${customAmount || amount} via ${activeTab}`);
    // Visual only
  };
  return (
    <section id="get-involved" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Get <span className="text-gold-400 text-glow">Involved</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your support directly impacts lives. Choose how you want to extend
            your hand of compassion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="glass-card p-8 md:p-10 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Heart className="text-gold-400" /> Make a Donation
            </h3>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Current Goal</span>
                <span className="text-gold-400 font-bold">
                  Ksh. 1,245,000 / Ksh. 5,000,000
                </span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{
                    width: 0
                  }}
                  whileInView={{
                    width: '25%'
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeOut',
                    delay: 0.5
                  }}
                  className="h-full bg-gradient-to-r from-gold-600 to-gold-400 relative">
                  
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shimmer_1s_linear_infinite]" />
                </motion.div>
              </div>
            </div>

            <form onSubmit={handleDonate} className="relative z-10">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) =>
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-gold-500 text-cosmic-900 shadow-[0_0_15px_rgba(255,215,0,0.3)]' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}>
                  
                    {tab.label}
                  </button>
                )}
              </div>

              {/* Amounts */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
                {amounts.map((amt) =>
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`py-3 rounded-xl font-bold transition-all border ${amount === amt && !customAmount ? 'border-gold-400 bg-gold-400/10 text-gold-400 shadow-[inset_0_0_10px_rgba(255,215,0,0.2)]' : 'border-white/10 bg-white/5 text-white hover:border-white/30'}`}>
                  
                    Ksh. {amt}
                  </button>
                )}
                <div className="col-span-3 sm:col-span-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-semibold">
                    Ksh.
                  </span>
                  <input
                    type="number"
                    placeholder="Custom"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('');
                    }}
                    className="w-full h-full bg-white/5 border border-white/10 rounded-xl pl-14 pr-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-gray-500" />
                  
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-cosmic-900 font-bold text-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                
                Give With Love
              </button>
            </form>
          </motion.div>

          {/* Volunteer Signup */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="glass-card p-8 md:p-10 relative overflow-hidden group">
            
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta-500/10 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="font-heading text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <HandHeart className="text-magenta-400" /> Volunteer With Us
            </h3>
            <p className="text-gray-400 mb-8 text-sm">
              Join our community of changemakers on the ground.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 relative z-10">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-magenta-400 transition-colors" />
                  
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-magenta-400 transition-colors" />
                  
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-magenta-400 transition-colors" />
                
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  Area of Interest
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-magenta-400 transition-colors appearance-none">
                  <option value="mentorship" className="bg-cosmic-900">
                    Mentorship
                  </option>
                  <option value="feeding" className="bg-cosmic-900">
                    Feeding Program
                  </option>
                  <option value="sanitary" className="bg-cosmic-900">
                    Sanitary Care Distribution
                  </option>
                  <option value="admin" className="bg-cosmic-900">
                    Administrative Support
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 rounded-xl border border-magenta-400/50 bg-magenta-500/10 text-white font-bold hover:bg-magenta-500 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                
                Join The Mission <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}