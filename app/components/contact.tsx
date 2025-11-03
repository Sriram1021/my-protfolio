'use client';

import React, { memo, useState, useCallback } from 'react';
import { 
  Send, 
  Sparkles,
  MessageCircle,
  AtSign,
  User,
  FileText,
  ChevronRight,
  Rocket,
  Heart,
  Coffee,
  Code,
  Palette,
  Globe2,
  Phone,
  Mail,
  MapPin,
  Zap,
  ArrowLeft
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
      setCurrentStep(0);
    }, 2000);
  }, []);

  const projectTypes = [
    { value: 'web-dev', label: 'Web Development', icon: <Globe2 className="w-4 h-4" /> },
    { value: 'mobile-app', label: 'Mobile App', icon: <Code className="w-4 h-4" /> },
    { value: 'ui-design', label: 'UI/UX Design', icon: <Palette className="w-4 h-4" /> },
    { value: 'consulting', label: 'Consulting', icon: <Coffee className="w-4 h-4" /> },
  ];

  const formSteps = [
    {
      id: 0,
      title: "Hi! What's your name?",
      subtitle: "Let's get to know each other",
      fields: ['name', 'email'],
      icon: <User className="w-4 h-4" />
    },
    {
      id: 1,
      title: "What brings you here?",
      subtitle: "I'd love to help with your project",
      fields: ['projectType', 'budget'],
      icon: <Rocket className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Tell me your vision",
      subtitle: "The more details, the better",
      fields: ['message'],
      icon: <MessageCircle className="w-4 h-4" />
    }
  ];

  const nextStep = useCallback(() => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, formSteps.length]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  // Always return true - no validation required
  const isStepValid = useCallback(() => {
    return true;
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Phone",
      value: "+91 8056817300",
      href: "tel:+91 8056817300",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email",
      value: "bs0013873@gmail.com",
      href: "bs0013873@gmail.com",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Location",
      value: "Coimbatore",
      href: "#",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section id="contact" className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/20">
      {/* Static gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full mb-4 shadow-md border border-white/50">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs font-semibold text-purple-700">Get in Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">
            Let's Build{' '}
            <span className="text-purple-600">
              Something Amazing
            </span>
          </h2>
          
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Container */}
          <div className="lg:col-span-2">
            <div className="relative bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50">
              {/* Progress Bar */}
              <div className="relative z-10 mb-6">
                <div className="h-2 bg-white/70 backdrop-blur-sm rounded-full overflow-hidden border border-slate-200/50">
                  <div
                    className="h-full bg-purple-600 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep + 1) / formSteps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step Indicators */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                {formSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex items-center"
                  >
                    <div
                      className={`relative flex items-center justify-center w-20 h-10 rounded-xl transition-colors duration-300 ${
                        index <= currentStep 
                          ? 'bg-purple-600 text-white shadow-lg' 
                          : 'bg-white/70 text-slate-400 border border-slate-200/50'
                      }`}
                    >
                      {step.icon}
                    </div>
                    {index < formSteps.length - 1 && (
                      <div className={`w-full h-0.5 mx-2 transition-colors duration-300 ${
                        index < currentStep 
                          ? 'bg-purple-600' 
                          : 'bg-slate-200/50'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="relative z-10">
                <div key={currentStep}>
                  <div className="mb-5">
                    <h3 className="text-xl font-semibold mb-1 text-slate-900">{formSteps[currentStep].title}</h3>
                    <p className="text-sm text-slate-600">{formSteps[currentStep].subtitle}</p>
                  </div>
                  
                  {/* Step 1: Name & Email */}
                  {currentStep === 0 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-2">
                          Your Name <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500 z-10" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-3 bg-white/70 backdrop-blur-sm border-2 border-white/50 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:border-purple-400 focus:bg-white/80 focus:outline-none transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-2">
                          Your Email <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500 z-10" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-3 bg-white/70 backdrop-blur-sm border-2 border-white/50 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:border-purple-400 focus:bg-white/80 focus:outline-none transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Type & Budget */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-3">
                          Project Type <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {projectTypes.map((type) => (
                            <label
                              key={type.value}
                              className="relative cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="projectType"
                                value={type.value}
                                checked={formData.projectType === type.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <div
                                className={`p-3 rounded-xl border-2 backdrop-blur-sm transition-colors text-center ${
                                  formData.projectType === type.value
                                    ? 'border-purple-400 bg-purple-50/50'
                                    : 'border-white/50 bg-white/50 hover:bg-white/70'
                                }`}
                              >
                                <span className={`${
                                  formData.projectType === type.value ? 'text-purple-600' : 'text-slate-500'
                                }`}>
                                  {type.icon}
                                </span>
                                <span className={`block font-medium text-xs mt-1 ${
                                  formData.projectType === type.value ? 'text-purple-900' : 'text-slate-700'
                                }`}>{type.label}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-2">
                          Budget Range <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-3 bg-white/70 backdrop-blur-sm border-2 border-white/50 rounded-xl text-sm text-slate-800 focus:border-purple-400 focus:bg-white/80 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select budget (optional)</option>
                          <option value="<5k">Less than $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value=">25k">More than $25,000</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Message */}
                  {currentStep === 2 && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Project Details <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-500 z-10" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-10 pr-3 py-3 bg-white/70 backdrop-blur-sm border-2 border-white/50 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:border-purple-400 focus:bg-white/80 focus:outline-none transition-colors resize-none"
                          placeholder="Tell me about your project goals... (optional)"
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className={`px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm transition-colors flex items-center gap-1.5 ${
                        currentStep === 0 
                          ? 'invisible' 
                          : 'bg-white/70 hover:bg-white/90 text-slate-700 border border-slate-200/50'
                      }`}
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Previous
                    </button>
                    
                    {currentStep === formSteps.length - 1 ? (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shadow-lg hover:bg-purple-700"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-2 cursor-pointer bg-purple-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg hover:bg-purple-700"
                      >
                        Next Step
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="block relative bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/50 hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 flex items-center justify-center ${info.bgColor} backdrop-blur-sm rounded-lg ${info.color} border border-white/50`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{info.title}</p>
                      <p className="text-sm font-semibold text-slate-800">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Card */}
            <div className="relative bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/50 shadow-md">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-10 h-10 flex items-center justify-center bg-green-50 rounded-lg">
                  <Zap className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Available Now</span>
              </div>
              <p className="text-xs text-slate-600">
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Features Card */}
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/50">
              <h4 className="text-sm font-semibold text-slate-800 mb-3">What you get</h4>
              <div className="space-y-2">
                {[
                  { icon: <Heart className="w-3.5 h-3.5" />, text: "Dedicated support", color: "text-pink-600", bg: "bg-pink-50" },
                  { icon: <Coffee className="w-3.5 h-3.5" />, text: "Regular updates", color: "text-orange-600", bg: "bg-orange-50" },
                  { icon: <Rocket className="w-3.5 h-3.5" />, text: "Fast delivery", color: "text-blue-600", bg: "bg-blue-50" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className={`w-10 h-10 flex items-center justify-center ${item.bg} rounded`}>
                      <span className={item.color}>{item.icon}</span>
                    </div>
                    <span className="text-xs text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactSection);
