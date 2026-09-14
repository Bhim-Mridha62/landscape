import React, { useState } from 'react';
import { ConsultationFormState } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTypology?: string;
  onOpenMonograph: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedTypology,
  onOpenMonograph,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [form, setForm] = useState<ConsultationFormState>({
    estateType: preselectedTypology || 'Coastal Sanctuary',
    location: '',
    acreage: '1 to 5 Acres',
    elements: ['Knife-Edge Infinity Basin', 'Century-Old Specimen Trees'],
    timeline: 'Autumn 2026 / Spring 2027',
    investmentRange: '$1.5M – $3.5M',
    fullName: '',
    email: '',
    phone: '',
    architectOfRecord: '',
    notes: '',
  });

  if (!isOpen) return null;

  const toggleElement = (el: string) => {
    setForm((prev) => ({
      ...prev,
      elements: prev.elements.includes(el)
        ? prev.elements.filter((item) => item !== el)
        : [...prev.elements, el],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const estateTypes = [
    'Coastal Sanctuary',
    'Hillside & Canyon Ridge',
    'Zen & Mineral Courtyard',
    'Historic Country Estate',
    'Desert Oasis',
  ];

  const architecturalElements = [
    'Knife-Edge Infinity Basin',
    'Century-Old Specimen Trees',
    'Subterranean Fire Amphitheater',
    'Hand-Chiseled Basalt Masonry',
    'Japanese Koi Reflection Pond',
    'Cantilevered Dining Pavilion',
    '2700K Nightscape Luminary System',
    'Biodynamic Water Cisterns',
  ];

  const acreageOptions = ['Under 1 Acre', '1 to 5 Acres', '5 to 15 Acres', '15+ Acres'];
  const investmentOptions = [
    '$750K – $1.5M',
    '$1.5M – $3.5M',
    '$3.5M – $7M',
    '$7M+ Masterplan',
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#f9f9f8] border border-[#1a1a1a] max-w-2xl w-full my-auto overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="h-16 px-6 sm:px-8 border-b border-[#e3e1dc] flex items-center justify-between bg-[#f2f1ee]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8c857b]">
              Bespoke Commission Inquiry
            </span>
            <span className="text-[#8c857b]">•</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1a1c1c] font-semibold">
              Step {step} of 3
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border border-[#e3e1dc] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <div className="text-[11px] uppercase tracking-editorial font-bold text-[#8c857b] mb-1">
                    Phase I: Estate Classification
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] font-normal mb-6">
                    What typology describes your property?
                  </h3>

                  <div className="space-y-4 mb-6">
                    <label className="block text-xs uppercase tracking-editorial text-[#444748]">
                      Estate Typology
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {estateTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, estateType: type })}
                          className={`p-3 text-left text-xs uppercase tracking-editorial border transition-all cursor-pointer ${
                            form.estateType === type
                              ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white font-semibold'
                              : 'border-[#e3e1dc] bg-[#f2f1ee] text-[#1a1c1c] hover:border-[#8c857b]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <label className="block text-xs uppercase tracking-editorial text-[#444748]">
                      Estate Location &amp; Region
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Montecito, California or Saint-Tropez, France"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      required
                      className="w-full bg-white border border-[#e3e1dc] p-3 text-sm text-[#1a1c1c] focus:outline-none focus:border-[#1a1a1a]"
                    />
                  </div>

                  <div className="space-y-4 mb-8">
                    <label className="block text-xs uppercase tracking-editorial text-[#444748]">
                      Approximate Site Acreage
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {acreageOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, acreage: opt })}
                          className={`p-2.5 text-center text-[11px] font-mono border transition-all cursor-pointer ${
                            form.acreage === opt
                              ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                              : 'border-[#e3e1dc] bg-[#f2f1ee] text-[#1a1c1c]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-[#e3e1dc]">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-[#1a1a1a] text-white px-8 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                    >
                      Continue to Elements →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div className="text-[11px] uppercase tracking-editorial font-bold text-[#8c857b] mb-1">
                    Phase II: Architectural Synthesis
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] font-normal mb-6">
                    Select key elements for your sanctuary
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {architecturalElements.map((elem) => {
                      const isSelected = form.elements.includes(elem);
                      return (
                        <button
                          key={elem}
                          type="button"
                          onClick={() => toggleElement(elem)}
                          className={`p-3 text-left text-xs border flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                              : 'border-[#e3e1dc] bg-[#f2f1ee] text-[#1a1c1c] hover:border-[#8c857b]'
                          }`}
                        >
                          <span>{elem}</span>
                          <span className="material-symbols-outlined text-sm">
                            {isSelected ? 'check_box' : 'check_box_outline_blank'}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-4 mb-8">
                    <label className="block text-xs uppercase tracking-editorial text-[#444748]">
                      Anticipated Investment Framework
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {investmentOptions.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setForm({ ...form, investmentRange: range })}
                          className={`p-2.5 text-center text-[10px] font-mono border transition-all cursor-pointer ${
                            form.investmentRange === range
                              ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                              : 'border-[#e3e1dc] bg-[#f2f1ee] text-[#1a1c1c]'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#e3e1dc]">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="border border-[#1a1a1a] px-6 py-3 text-xs uppercase tracking-editorial text-[#1a1a1a] cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-[#1a1a1a] text-white px-8 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                    >
                      Finalize Inquiry →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="text-[11px] uppercase tracking-editorial font-bold text-[#8c857b] mb-1">
                    Phase III: Confidential Intake
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1c1c] font-normal mb-6">
                    Principal Contact Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs uppercase tracking-editorial text-[#444748] mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Lord / Lady / Mr. / Ms."
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full bg-white border border-[#e3e1dc] p-3 text-sm text-[#1a1c1c] focus:outline-none focus:border-[#1a1a1a]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-editorial text-[#444748] mb-1">
                        Private Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="estate@familyoffice.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white border border-[#e3e1dc] p-3 text-sm text-[#1a1c1c] focus:outline-none focus:border-[#1a1a1a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs uppercase tracking-editorial text-[#444748] mb-1">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-[#e3e1dc] p-3 text-sm text-[#1a1c1c] focus:outline-none focus:border-[#1a1a1a]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-editorial text-[#444748] mb-1">
                        Architect of Record (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Olson Kundig / Studio Mumbai"
                        value={form.architectOfRecord}
                        onChange={(e) => setForm({ ...form, architectOfRecord: e.target.value })}
                        className="w-full bg-white border border-[#e3e1dc] p-3 text-sm text-[#1a1c1c] focus:outline-none focus:border-[#1a1a1a]"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-editorial text-[#444748] mb-1">
                      Architectural Vision or Site Specifics
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe the topographical features, primary vistas, and lifestyle aspirations for the site..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full bg-white border border-[#e3e1dc] p-3 text-sm text-[#1a1c1c] focus:outline-none focus:border-[#1a1a1a]"
                    />
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#e3e1dc]">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border border-[#1a1a1a] px-6 py-3 text-xs uppercase tracking-editorial text-[#1a1a1a] cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#1a1a1a] text-white px-8 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                    >
                      Submit Commission Inquiry
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#f2f1ee] border border-[#1a1a1a] mx-auto flex items-center justify-center text-[#5a5d4d] mb-6">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>

              <div className="text-[10px] uppercase tracking-widest font-mono text-[#8c857b] mb-2">
                Inquiry Logged • Reference Ref: AURA-2026-ESTATE
              </div>

              <h3 className="font-serif text-3xl text-[#1a1c1c] font-normal mb-4">
                Thank You, {form.fullName || 'Esteemed Patron'}.
              </h3>

              <p className="text-[#444748] text-sm sm:text-base leading-relaxed font-light max-w-lg mx-auto mb-8">
                Your architectural inquiry regarding the{' '}
                <strong className="text-[#1a1c1c]">{form.estateType}</strong> has been transmitted
                directly to the desk of Julian Vance and Elena Rostova. A principal partner will
                reach out within 24 hours.
              </p>

              <div className="bg-[#f2f1ee] p-5 border border-[#e3e1dc] text-left max-w-md mx-auto mb-8 text-xs font-mono">
                <div className="text-[10px] uppercase font-bold text-[#8c857b] mb-2">
                  Commission Intake Summary
                </div>
                <div>Location: {form.location || 'Undisclosed'}</div>
                <div>Acreage: {form.acreage}</div>
                <div>Framework: {form.investmentRange}</div>
                <div>Elements: {form.elements.length} components specified</div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    onClose();
                    onOpenMonograph();
                  }}
                  className="bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-architectural font-semibold hover:bg-[#5a5d4d] transition-colors cursor-pointer"
                >
                  Download Monograph Excerpt
                </button>
                <button
                  onClick={onClose}
                  className="border border-[#1a1a1a] px-6 py-3 text-xs uppercase tracking-editorial text-[#1a1a1a] hover:bg-[#f2f1ee] transition-colors cursor-pointer"
                >
                  Return to Sanctuary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
