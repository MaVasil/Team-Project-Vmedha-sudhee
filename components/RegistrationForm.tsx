
import React, { useState } from 'react';

interface FormProps {
  onSuccess: (details: { event: string; timestamp: string }) => void;
}

export const RegistrationForm: React.FC<FormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    collegeName: 'CBIT',
    branch: '',
    section: '',
    email: '',
    phone: '',
    password: '',
    selectedEvent: 'CIPHERVILLE'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess({
        event: formData.selectedEvent,
        timestamp: new Date().toLocaleString()
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = "w-full bg-black/40 border border-cyan-950 px-4 py-3 rounded text-cyan-50 font-outfit focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-gray-700";
  const labelStyle = "block font-orbitron text-[10px] tracking-widest text-cyan-600 mb-2 uppercase font-bold";

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
        {/* Terminal effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-900 via-cyan-400 to-cyan-900" />
        <div className="flex items-center gap-2 mb-10">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <span className="font-orbitron text-[10px] text-cyan-700 ml-4 tracking-tighter">SYS_INIT_SEQUENCE // REG_PORTAL_V3.0</span>
        </div>

        <div className="mb-12">
          <h2 className="font-orbitron text-2xl md:text-4xl font-bold text-white mb-2">INITIALIZE <span className="text-cyan-400">ENTRY</span></h2>
          <p className="font-outfit text-gray-500">Submit your credentials to authorize participation.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className={labelStyle}>Full Name</label>
              <input name="fullName" type="text" required placeholder="User Identifier" className={inputStyle} value={formData.fullName} onChange={handleChange} />
            </div>
            <div>
              <label className={labelStyle}>Roll Number</label>
              <input name="rollNumber" type="text" required placeholder="CBIT2XXXXXXXX" className={inputStyle} value={formData.rollNumber} onChange={handleChange} />
            </div>
            <div>
              <label className={labelStyle}>College Name</label>
              <input name="collegeName" type="text" required className={inputStyle} value={formData.collegeName} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Branch</label>
                <input name="branch" type="text" required placeholder="CSE" className={inputStyle} value={formData.branch} onChange={handleChange} />
              </div>
              <div>
                <label className={labelStyle}>Section</label>
                <input name="section" type="text" placeholder="A" className={inputStyle} value={formData.section} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className={labelStyle}>Email (Gmail Preferred)</label>
              <input name="email" type="email" required placeholder="access@gmail.com" className={inputStyle} value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label className={labelStyle}>Phone Number</label>
              <input name="phone" type="tel" pattern="[0-9]{10}" required placeholder="10 Digit Secure Link" className={inputStyle} value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <label className={labelStyle}>Security Password</label>
              <div className="relative">
                <input name="password" type={showPassword ? "text" : "password"} required placeholder="********" className={inputStyle} value={formData.password} onChange={handleChange} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-800 hover:text-cyan-400">
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>
            <div>
              <label className={labelStyle}>Select Expedition</label>
              <select name="selectedEvent" className={inputStyle} value={formData.selectedEvent} onChange={handleChange}>
                <option value="CIPHERVILLE">CIPHERVILLE</option>
                <option value="ETHI TECH MANIA">ETHI TECH MANIA</option>
                <option value="CBIT DSA MASTER">CBIT DSA MASTER</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-2 pt-6">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-5 font-orbitron font-bold tracking-[0.3em] rounded transition-all flex items-center justify-center gap-4 ${
                isSubmitting ? 'bg-cyan-900/50 text-cyan-800 cursor-not-allowed' : 'bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(8,145,178,0.4)]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent animate-spin rounded-full" />
                  UPLOADING DATA...
                </>
              ) : (
                <>AUTHORIZE REGISTRATION</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
