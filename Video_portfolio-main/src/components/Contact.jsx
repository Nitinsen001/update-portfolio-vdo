import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

/**
 * CONTACT — "Transmission" concept
 * The page's job: send a signal to me. Every device leans into that idea —
 * fields are framed as channels, focus draws a scanning pulse along the
 * baseline (like a signal locking on), and the submit button doesn't just
 * click, it transmits: a ripple of rings fires outward, then resolves into
 * a confirmed "Signal received" state.
 */

const FIELDS = [
  { id: 'name', label: 'Sender', placeholder: 'Your name', type: 'text', span: 'full' },
  { id: 'email', label: 'Frequency', placeholder: 'you@email.com', type: 'email', span: 'full' },
  { id: 'message', label: 'Transmission', placeholder: 'What do you want to build together?', type: 'textarea', span: 'full' },
];

const Contact = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', permission: false });
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [glitch, setGlitch] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-18%', '22%']);

  // Occasional signal-glitch on the big background word — rare, so it reads
  // as a transmission hiccup rather than a decorative loop.
  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [id]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.permission) return;

    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Message could not be sent.');
      }

      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '', permission: false });
      }, 2400);
    } catch (error) {
      setStatus('idle');
      alert(error.message || 'Unable to send message right now.');
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] border-t border-white/10 flex items-end pt-32 pb-0"
    >
      {/* Faint signal-grid backdrop */}
      <div
        className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,42,42,0.16) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      {/* A few ambient blips */}
      {[
        { top: '18%', left: '8%', delay: 0 },
        { top: '62%', left: '14%', delay: 1.4 },
        { top: '30%', left: '92%', delay: 2.6 },
      ].map((b, i) => (
        <motion.span
          key={i}
          className="absolute z-0 w-1.5 h-1.5 rounded-full bg-[#ff2a2a]"
          style={{ top: b.top, left: b.left }}
          animate={{ opacity: [0, 0.9, 0], scale: [0.6, 1.6, 0.6] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Huge background word */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top transition-transform"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            transform: glitch ? 'translate(-6px, 0) scale(1)' : 'translate(0,0)',
            textShadow: glitch
              ? '6px 0 0 rgba(255,42,42,0.55), -6px 0 0 rgba(0,229,255,0.35)'
              : 'none',
          }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Panel */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between relative"
        >
          <div className="flex items-center justify-between mb-12 md:mb-20">
            <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">
              Open Channel
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase opacity-80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Listening
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-14 md:gap-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {/* Sender */}
              <div className="flex flex-col gap-10">
                {FIELDS.filter((f) => f.type !== 'textarea').map((f) => (
                  <Field
                    key={f.id}
                    field={f}
                    value={formData[f.id]}
                    onChange={handleChange}
                    focused={focused === f.id}
                    onFocus={() => setFocused(f.id)}
                    onBlur={() => setFocused(null)}
                  />
                ))}
              </div>

              {/* Transmission */}
              <div className="flex flex-col h-full">
                {FIELDS.filter((f) => f.type === 'textarea').map((f) => (
                  <Field
                    key={f.id}
                    field={f}
                    value={formData[f.id]}
                    onChange={handleChange}
                    focused={focused === f.id}
                    onFocus={() => setFocused(f.id)}
                    onBlur={() => setFocused(null)}
                    grow
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input
                  type="checkbox"
                  id="permission"
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent cursor-pointer"
                  style={{ accentColor: 'white' }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this frequency.
                </label>
              </div>

              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  This channel is protected by reCAPTCHA and the Google{' '}
                  <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and{' '}
                  <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    To stop receiving transmissions, see our{' '}
                    <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                  </p>
                  <TransmitButton status={status} disabled={!formData.permission} />
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- Field: label rises, baseline scans on focus ---------- */
const Field = ({ field, value, onChange, focused, onFocus, onBlur, grow }) => {
  const isTextarea = field.type === 'textarea';
  const hasValue = value && value.length > 0;

  return (
    <div className={`relative ${grow ? 'flex-1 flex flex-col' : ''}`}>
      <motion.span
        initial={false}
        animate={{
          y: focused || hasValue ? 0 : 18,
          opacity: focused || hasValue ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-1"
      >
        {field.label}
      </motion.span>

      {isTextarea ? (
        <textarea
          id={field.id}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={field.placeholder}
          required
          aria-label={field.label}
          className="w-full flex-1 min-h-[140px] bg-transparent border-0 border-b border-white/40 pb-3 text-lg focus:outline-none placeholder-white/60 font-medium resize-none rounded-none"
        />
      ) : (
        <input
          type={field.type}
          id={field.id}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={field.placeholder}
          required
          aria-label={field.label}
          className="w-full bg-transparent border-0 border-b border-white/40 pb-3 text-lg focus:outline-none placeholder-white/60 font-medium rounded-none"
        />
      )}

      {/* Static baseline */}
      <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-white/40" />
      {/* Scanning pulse that sweeps in on focus, like a signal locking */}
      <AnimatePresence>
        {focused && (
          <motion.div
            key="scan"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="absolute left-0 right-0 bottom-0 h-[2px] bg-white"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------- Transmit button: idle -> sending (pulse rings) -> sent (check) ---------- */
const TransmitButton = ({ status, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled || status !== 'idle'}
      className="relative px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 overflow-visible whitespace-nowrap self-start sm:self-auto disabled:cursor-not-allowed group transition-colors duration-300 hover:enabled:bg-white hover:enabled:text-[#ff2a2a]"
    >
      {/* Ripple rings while sending */}
      <AnimatePresence>
        {status === 'sending' &&
          [0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full border border-white"
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 1.6 + i * 0.25 }}
              transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.25, ease: 'easeOut' }}
            />
          ))}
      </AnimatePresence>

      <span className="relative z-10 flex items-center gap-3">
        <AnimatePresence mode="wait" initial={false}>
          {status === 'idle' && (
            <motion.span key="idle" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Transmit
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.span>
          )}
          {status === 'sending' && (
            <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Sending…
            </motion.span>
          )}
          {status === 'sent' && (
            <motion.span key="sent" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Signal received
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <motion.path
                  d="M4 12l5 5L20 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
};

export default Contact;