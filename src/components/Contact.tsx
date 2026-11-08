import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { company, contact, address } from '@/data/companyConstants';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface ContactProps {
  initialSelectedMachine?: string;
}

const machineryList = [
  'Pick and Carry Crane (15T, 17T, 23T)',
  'Tyre Mounted Telescopic Crane (50T – 100T)',
  'Hydraulic Heavy Crawler Crane (50T – 250T)',
  'Heavy Hydraulic Excavator (Tata 200 / Komatsu PC300)',
  'Backhoe Loader (JCB 3DX / 4DX Extra)',
  'Articulated & Telescopic Boom Man Lift (80Ft – 150Ft)',
  'Other / Multiple Equipment Package',
];

const Contact: React.FC<ContactProps> = ({ initialSelectedMachine }) => {
  const { toast } = useToast();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Equipment
    machine: initialSelectedMachine || machineryList[0],
    quantity: '1',
    customCapacity: '',
    // Step 2: Project
    location: '',
    duration: 'Monthly Lease',
    operatorRequired: 'Yes (Certified Operator Included)',
    startDate: '',
    // Step 3: Contact
    companyName: '',
    contactPerson: '',
    mobile: '',
    email: '',
    gstin: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialSelectedMachine) {
      setFormData((prev) => ({ ...prev, machine: initialSelectedMachine }));
    }
  }, [initialSelectedMachine]);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.machine) newErrors.machine = 'Please select a machine';
    } else if (currentStep === 2) {
      if (!formData.location.trim()) newErrors.location = 'Project site location is required';
      if (!formData.duration) newErrors.duration = 'Rental duration is required';
    } else if (currentStep === 3) {
      if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person name is required';
      if (!formData.mobile.trim()) {
        newErrors.mobile = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
        newErrors.mobile = 'Please enter a valid 10-digit mobile number';
      }
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : prev));
    }
  };

  const handleBack = () => {
    setStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : prev));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    // Save lead to local history
    try {
      const existingLeads = JSON.parse(localStorage.getItem('trimurti_leads_history') || '[]');
      existingLeads.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('trimurti_leads_history', JSON.stringify(existingLeads));
    } catch {
      // ignore
    }

    setSubmitted(true);
    toast({
      title: 'Quote Request Received!',
      description: 'Our fleet manager will contact you within 30 minutes with the commercial offer.',
    });
  };

  const getWhatsAppMessage = () => {
    const text =
      `*Trimurti Enterprises - Equipment Rental Inquiry*\n\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Contact Person:* ${formData.contactPerson}\n` +
      `*Mobile:* ${formData.mobile}\n` +
      `*Equipment:* ${formData.machine} (Qty: ${formData.quantity})\n` +
      `*Site Location:* ${formData.location}\n` +
      `*Duration:* ${formData.duration}\n` +
      `*Operator Needed:* ${formData.operatorRequired}\n` +
      (formData.message ? `*Notes:* ${formData.message}` : '');
    return encodeURIComponent(text);
  };

  const handleWhatsAppFastTrack = () => {
    const waUrl = `https://wa.me/${contact.whatsappRaw}?text=${getWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      machine: machineryList[0],
      quantity: '1',
      customCapacity: '',
      location: '',
      duration: 'Monthly Lease',
      operatorRequired: 'Yes (Certified Operator Included)',
      startDate: '',
      companyName: '',
      contactPerson: '',
      mobile: '',
      email: '',
      gstin: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-orange font-bold text-xs uppercase tracking-wider bg-orange/10 px-3 py-1 rounded-full">
            Inquiry & Dispatch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Request an <span className="text-orange">Equipment Quote</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get competitive rental rates tailored to your project requirements. Fast quote turnaround with verified load charts.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Multi-Step Quote Wizard */}
          <div id="quote-wizard" className="lg:col-span-7">
          
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-10 shadow-lg relative">
              {!submitted ? (
                <>
                  {/* Step Progress Bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-2">
                      <span className={step >= 1 ? 'text-orange font-bold' : ''}>1. Equipment</span>
                      <span className={step >= 2 ? 'text-orange font-bold' : ''}>2. Project Site</span>
                      <span className={step >= 3 ? 'text-orange font-bold' : ''}>3. Contractor Details</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-orange h-full transition-all duration-300 rounded-full"
                        style={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* STEP 1 */}
                    {step === 1 && (
                      <div className="space-y-5 animate-fade-in">
                        <div>
                          <Label className="text-sm font-bold text-gray-800">
                            Select Required Heavy Equipment *
                          </Label>
                          <select
                            className="mt-1.5 w-full p-3 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-orange"
                            value={formData.machine}
                            onChange={(e) =>
                              setFormData({ ...formData, machine: e.target.value })
                            }
                          >
                            {machineryList.map((m) => (
                              <option key={m} value={m}>
                                {m}
                              </option>
                            ))}
                          </select>
                          {errors.machine && (
                            <p className="text-red-500 text-xs mt-1">{errors.machine}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-bold text-gray-800">
                              Quantity Required
                            </Label>
                            <select
                              className="mt-1.5 w-full p-3 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-orange"
                              value={formData.quantity}
                              onChange={(e) =>
                                setFormData({ ...formData, quantity: e.target.value })
                              }
                            >
                              <option value="1">1 Unit</option>
                              <option value="2">2 Units</option>
                              <option value="3">3 Units</option>
                              <option value="4+">4+ Units (Fleet Package)</option>
                            </select>
                          </div>
                          <div>
                            <Label className="text-sm font-bold text-gray-800">
                              Target Capacity / Tonnage
                            </Label>
                            <Input
                              placeholder="e.g. 50 Tonnes / 40m reach"
                              className="mt-1.5 h-11"
                              value={formData.customCapacity}
                              onChange={(e) =>
                                setFormData({ ...formData, customCapacity: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        <div className="p-4 bg-orange/5 border border-orange/20 rounded-xl text-xs text-gray-700 space-y-1">
                          <p className="font-bold text-orange">Pro Tip for Contractors:</p>
                          <p>
                            Need crane boom charts or soil stability consultation? Proceed to the next step and our senior lift engineer will evaluate site specifics.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                      <div className="space-y-5 animate-fade-in">
                        <div>
                          <Label className="text-sm font-bold text-gray-800">
                            Project Job Site Location / City *
                          </Label>
                          <Input
                            placeholder="e.g. Mumbai, Navi Mumbai, Pune, Thane, Raigad"
                            className="mt-1.5 h-11"
                            value={formData.location}
                            onChange={(e) =>
                              setFormData({ ...formData, location: e.target.value })
                            }
                          />
                          {errors.location && (
                            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-bold text-gray-800">
                              Rental Duration *
                            </Label>
                            <select
                              className="mt-1.5 w-full p-3 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-orange"
                              value={formData.duration}
                              onChange={(e) =>
                                setFormData({ ...formData, duration: e.target.value })
                              }
                            >
                              <option value="Daily / Shift Basis">Daily / Shift Basis</option>
                              <option value="Weekly (1 to 3 Weeks)">Weekly (1 to 3 Weeks)</option>
                              <option value="Monthly Lease (1 to 6 Months)">
                                Monthly Lease (1 to 6 Months)
                              </option>
                              <option value="Annual / Long-term Contract">
                                Annual / Long-term Contract
                              </option>
                            </select>
                          </div>
                          <div>
                            <Label className="text-sm font-bold text-gray-800">
                              Estimated Start Date
                            </Label>
                            <Input
                              type="date"
                              className="mt-1.5 h-11"
                              value={formData.startDate}
                              onChange={(e) =>
                                setFormData({ ...formData, startDate: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-bold text-gray-800">
                            Certified Operator & Rigging Crew Required?
                          </Label>
                          <select
                            className="mt-1.5 w-full p-3 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-orange"
                            value={formData.operatorRequired}
                            onChange={(e) =>
                              setFormData({ ...formData, operatorRequired: e.target.value })
                            }
                          >
                            <option value="Yes (Certified Operator Included)">
                              Yes (Include Licensed Operator & Rigging Safety Pass)
                            </option>
                            <option value="No (Bare Machine Rental Only)">
                              No (Bare Machine Rental - Contractor Operator)
                            </option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-bold text-gray-800">
                              Company / Contractor Name
                            </Label>
                            <Input
                              placeholder="e.g. Patil Construction / L&T Project"
                              className="mt-1.5 h-11"
                              value={formData.companyName}
                              onChange={(e) =>
                                setFormData({ ...formData, companyName: e.target.value })
                              }
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-bold text-gray-800">
                              Contact Person Name *
                            </Label>
                            <Input
                              placeholder="e.g. Ramesh Patil"
                              className="mt-1.5 h-11"
                              value={formData.contactPerson}
                              onChange={(e) =>
                                setFormData({ ...formData, contactPerson: e.target.value })
                              }
                            />
                            {errors.contactPerson && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.contactPerson}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-bold text-gray-800">
                              Mobile Number (for SMS & Call) *
                            </Label>
                            <Input
                              type="tel"
                              placeholder="e.g. 9876543210"
                              className="mt-1.5 h-11"
                              value={formData.mobile}
                              onChange={(e) =>
                                setFormData({ ...formData, mobile: e.target.value })
                              }
                            />
                            {errors.mobile && (
                              <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                            )}
                          </div>
                          <div>
                            <Label className="text-sm font-bold text-gray-800">
                              Official Email (for Formal Quote PDF)
                            </Label>
                            <Input
                              type="email"
                              placeholder="e.g. contracts@company.com"
                              className="mt-1.5 h-11"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-bold text-gray-800">
                            Specific Lifting Details / Scope Notes
                          </Label>
                          <Textarea
                            rows={3}
                            placeholder="Specify lift height, radius, ground conditions, or shift timing requirements..."
                            className="mt-1.5"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      {step > 1 ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleBack}
                          className="gap-2"
                        >
                          <ArrowLeft className="w-4 h-4" /> Previous
                        </Button>
                      ) : (
                        <div />
                      )}

                      {step < 3 ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          className="bg-orange hover:bg-orange-hover text-white font-bold gap-2"
                        >
                          Continue <ArrowRight className="w-4 h-4" />
                        </Button>
                      ) : (
                        <div className="flex gap-2">
                          <Button
                            type="submit"
                            className="bg-orange hover:bg-orange-hover text-white font-bold gap-2 px-6"
                          >
                            Submit Official Quote Request <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </form>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-10 space-y-6 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Quote Request Successfully Dispatched!
                    </h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                      Thank you, <strong className="text-gray-900">{formData.contactPerson}</strong>. Your rental inquiry for <strong className="text-gray-900">{formData.machine}</strong> in <strong className="text-gray-900">{formData.location}</strong> has been assigned to our fleet dispatch team.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600 max-w-md mx-auto text-left space-y-1">
                    <p><strong>Expected Turnaround:</strong> Within 30 minutes during working hours</p>
                    <p><strong>Confirmation sent to:</strong> {formData.mobile} {formData.email ? `& ${formData.email}` : ''}</p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {contact.showPhone ? (
                      <Button
                        onClick={handleWhatsAppFastTrack}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold gap-2 w-full sm:w-auto"
                      >
                        <MessageSquare className="w-4 h-4" /> Open Direct WhatsApp Chat
                      </Button>
                    ) : (
                      <a
                        href={`mailto:${contact.email}?subject=Equipment%20Quote%20Follow-up`}
                        className="bg-orange hover:bg-orange-hover text-white font-bold px-4 py-2 rounded-md inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center"
                      >
                        <Mail className="w-4 h-4" /> Email Commercial Desk
                      </a>
                    )}
                    <Button
                      variant="outline"
                      onClick={resetForm}
                      className="w-full sm:w-auto text-xs"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact & Trust Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dispatch & Fleet Yard</h3>

              <div className="space-y-6">
                {contact.showPhone && (
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange/10 rounded-xl text-orange flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Direct Dispatch Numbers</h4>
                    <a
                      href={`tel:${contact.primaryPhoneRaw}`}
                      className="text-lg font-bold text-gray-800 hover:text-orange block"
                    >
                      {contact.primaryPhone}
                    </a>
                    <span className="text-xs text-gray-500">24/7 Breakdown Assistance Hotline</span>
                  </div>
                </div>
              )}

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue/10 rounded-xl text-blue flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Official Commercial Email</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-base font-semibold text-gray-800 hover:text-blue block"
                    >
                      {contact.email}
                    </a>
                    <span className="text-xs text-gray-500">Quotes & Invoicing correspondence</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-xl text-green-700 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Main Equipment Yard</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {address.office}
                    </p>
                    <span className="text-xs text-gray-500 font-medium">GSTIN: {address.gstin}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-700 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Working Hours</h4>
                    <p className="text-sm text-gray-600">{contact.hours}</p>
                    <p className="text-xs text-green-600 font-semibold">
                      On-site emergency crew deployed 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>
                    All machines deployed with certified test certificates, Form 11, and third-party inspection (TPI).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
