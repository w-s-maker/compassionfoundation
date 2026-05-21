import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Heart, Users, Zap, ChevronDown, ChevronRight } from 'lucide-react';

export function Founder() {
  const [activeTab, setActiveTab] = useState<'overview' | 'mission' | 'impact'>('overview');
  const [partnerOpen, setPartnerOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'About' },
    { id: 'mission', label: 'Mission' },
    { id: 'impact', label: 'Impact' }
  ];

  const highlights = [
    { icon: Award, label: 'Humanitarian Diplomat', value: 'Peace & Purpose' },
    { icon: Heart, label: 'Psychology Counsellor', value: 'Healing & Hope' },
    { icon: Users, label: 'Youth Advocate', value: 'Future Leaders' },
    { icon: Zap, label: 'Transformational Lead', value: 'Impact-Driven' }
  ];

  return (
    <section id="founder" className="py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 left-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-16 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gold-400 mb-4">Founder Section</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Rev. Dr. Esther Kennedy <span className="text-gold-400">& Her Ministry Partner</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A modern, elegant founder story with a subtle interactive reveal for Bishop Kennedy Ongeri Nyarieko.
          </p>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-cosmic-950 shadow-[0_35px_110px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-purple-500/10" />
              <div className="relative overflow-hidden rounded-[36px] bg-cosmic-900 p-4 sm:p-6">
                <img
                  src="/esther.jpeg"
                  alt="Rev. Dr. Esther Kennedy"
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-[28px]"
                />
              </div>
              <div className="absolute left-6 bottom-6 rounded-[28px] border border-white/10 bg-cosmic-950/90 p-4 shadow-xl backdrop-blur-xl">
                <p className="text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold">Founder</p>
                <h3 className="text-white text-xl sm:text-2xl font-bold mt-2">Rev. Dr. Esther Kennedy</h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-cosmic-950 shadow-[0_35px_110px_rgba(0,0,0,0.3)] group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-gold-500/10" />
              <div className="relative overflow-hidden rounded-[36px] bg-cosmic-900 p-4 sm:p-6 transition duration-500 group-hover:scale-[1.01]">
                <img
                  src="/husband and wife.jpeg"
                  alt="Rev. Dr. Esther Kennedy with Bishop Kennedy Ongeri Nyarieko"
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-[28px]"
                />
              </div>
              <div className="absolute left-6 right-6 bottom-6 sm:right-auto rounded-[28px] border border-white/10 bg-cosmic-950/90 p-5 shadow-xl backdrop-blur-xl sm:max-w-[80%]">
                <p className="text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold">Partner Spotlight</p>
                <h3 className="text-white text-2xl font-bold mt-2">Bishop Kennedy Ongeri Nyarieko</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid gap-8"
          >
            <div className="rounded-[40px] border border-white/10 bg-cosmic-950/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.24)] backdrop-blur-xl">
              <div className="space-y-6">
                <div>
                  <p className="text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold">Story</p>
                  <h3 className="text-white text-4xl font-bold mt-3">A founder rooted in faith, future, and impact.</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Rev. Dr. Esther Kennedy guides the ministry with wisdom, compassion, and an empowering vision for families, youth, and communities across Kenya.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-cosmic-900 p-5">
                    <p className="text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold">Role</p>
                    <p className="text-white font-semibold mt-3">Pastor, mentor, and humanitarian leader</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-cosmic-900 p-5">
                    <p className="text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold">Focus</p>
                    <p className="text-white font-semibold mt-3">Empowering women, youth and families</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-cosmic-950/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-gold-400 uppercase tracking-[0.35em] text-xs font-semibold">Partner Spotlight</p>
                  <h4 className="text-white text-2xl font-semibold mt-2">Bishop Kennedy Ongeri Nyarieko</h4>
                </div>
                <button
                  onClick={() => setPartnerOpen(!partnerOpen)}
                  className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300 transition hover:bg-gold-500/20"
                >
                  {partnerOpen ? 'Hide details' : 'See more'}
                  {partnerOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
              </div>
              <AnimatePresence>
                {partnerOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 space-y-5 text-gray-300"
                  >
                    <p className="text-sm leading-relaxed">
                      Bishop Kennedy Ongeri Nyarieko is a respected spiritual leader and pastoral companion whose partnership broadens the ministry’s impact through prayer, family care, and church growth.
                    </p>
                    <p className="text-sm leading-relaxed">
                      As a faithful servant and mentor, he plays a key role in supporting family ministries, pastoral counseling, and community outreach across Nairobi and Kisii.
                    </p>
                    <p className="text-sm leading-relaxed">
                      His leadership is grounded in compassionate discipleship, strategic church development, and deep care for couples and young leaders navigating life with faith.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Together they model a strong ministry partnership, blending pastoral vision, spiritual guidance, and practical service for families seeking hope, healing, and renewal.
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-cosmic-950/80 p-8 shadow-xl">
              <div className="flex flex-wrap gap-3 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      activeTab === tab.id
                        ? 'border-gold-400 bg-gold-500/10 text-gold-300'
                        : 'border-white/10 text-gray-300 hover:border-gold-500 hover:text-gold-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="space-y-5 text-gray-300 leading-relaxed"
              >
                {activeTab === 'overview' && (
                  <>
                    <p>
                      Rev. Dr. Esther Kennedy is a dynamic and visionary servant of God, passionately committed to transforming lives through ministry, mentorship, counselling, and humanitarian service.
                    </p>
                    <p>
                      She serves as the <span className="text-gold-400 font-semibold">Resident Pastor of Deliverance Church Greatwall Gardens, Athi River, Nairobi</span> and the <span className="text-gold-400 font-semibold">Senior Pastor of Deliverance Church International Kisii</span>.
                    </p>
                  </>
                )}
                {activeTab === 'mission' && (
                  <>
                    <p>
                      As a <span className="text-gold-400 font-semibold">Humanitarian Diplomat</span>, she champions compassion, peace, and social transformation through outreach initiatives.
                    </p>
                    <p>
                      Her counselling ministry brings healing and hope, helping individuals navigate life with wisdom, emotional support, and faith.
                    </p>
                  </>
                )}
                {activeTab === 'impact' && (
                  <>
                    <p>
                      Recognized as a <span className="text-gold-400 font-semibold">Global Peace Ambassador</span>, she advocates for women and youth empowerment, nurturing confident purpose-driven leaders.
                    </p>
                    <p>
                      Through conferences, mentorship, and humanitarian engagements, she nurtures lives spiritually, mentally, emotionally, and socially.
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
