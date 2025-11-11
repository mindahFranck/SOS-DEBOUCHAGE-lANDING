import React, { useState, useEffect } from 'react';
import { Phone, Clock, Shield, Star, CheckCircle, MapPin, Wrench, Zap, Users, ArrowRight, Award, Menu, X, Home, Settings, MessageCircle, Calculator, Droplets, AlertTriangle } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    problem: '',
    urgency: 'normal'
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Appel téléphonique direct
    window.location.href = 'tel:8194321138';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'services', 'pourquoi', 'temoignages', 'tarifs', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'accueil', label: 'Accueil', icon: Home },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'pourquoi', label: 'Pourquoi Nous', icon: Award },
    { id: 'temoignages', label: 'Témoignages', icon: MessageCircle },
    { id: 'tarifs', label: 'Tarifs', icon: Calculator },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 animate-fade-in">
              <img src="./Logo-SOSDebouchage.svg" width={80} height={20} alt="Logo-SOSDebouchage" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 ${
                      activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Phone className="h-4 w-4 animate-pulse" />
                  <span className="font-semibold">(819) 432-1138</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>24h/7j</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-slide-down">
              <div className="py-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-all duration-300 hover:bg-blue-50 ${
                        activeSection === item.id ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
                <div className="px-6 py-4 border-t mt-4">
                  <div className="flex items-center space-x-2 text-blue-600 mb-2">
                    <Phone className="h-4 w-4" />
                    <span className="font-semibold">(819) 432-1138</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Service 24h/7j</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-yellow-400 rounded-full animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Problème de <span className="text-yellow-400">Plomberie ou de Drain</span>?<br />
              <span className="text-3xl md:text-4xl animate-pulse">Intervention en moins de 60 minutes!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up animation-delay-200">
              Service d'urgence 24h/7j • Plombiers certifiés • Devis gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
              <a href="tel:8194321138" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg animate-pulse-slow group">
                <Phone className="inline-block mr-2 h-6 w-6" />
                Appeler Maintenant
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 group"
              >
                Devis Gratuit
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-8 text-sm animate-fade-in animation-delay-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400 animate-bounce animation-delay-100" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400 animate-bounce animation-delay-200" />
                <span>Garantie satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400 animate-bounce animation-delay-300" />
                <span>Prix transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Zap className="h-6 w-6 animate-pulse text-yellow-300" />
            <span className="font-bold text-lg animate-pulse">URGENCE 24H/7J - Intervention garantie en moins de 60 minutes</span>
            <Zap className="h-6 w-6 animate-pulse text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              Nos Services de <span className="text-blue-600">Débouchage</span>
            </h2>
            <p className="text-xl text-gray-600 animate-slide-up animation-delay-200">
              Solutions rapides et efficaces pour tous vos problèmes de plomberie
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mt-4 rounded-full animate-slide-up animation-delay-400"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Débouchage (canalisation 3\" et plus caméra inclus)",
                description: "Intervention rapide pour déboucher tous types de canalisations",
                icon: "🚿",
                price: "425.00 $",
                features: ["Diagnostic inclus", "Intervention rapide", "Garantie 6 mois"],
                popular: false
              },
              {
                title: "Débouchage mineurs",
                description: "Débouchage d'éviers, lavabos et petites canalisations",
                icon: "🔧",
                price: "265.00 $",
                features: ["Équipement spécialisé", "Service rapide", "Prix transparent"],
                popular: true
              },
              {
                title: "Inspection par caméra",
                description: "Diagnostic précis avec caméra haute définition",
                icon: "📹",
                price: "295.00 $",
                features: ["Rapport détaillé", "Images HD", "Devis précis"],
                popular: false
              },
              {
                title: "Nettoyage de drain français",
                description: "Nettoyage et entretien complet de vos drains français",
                icon: "💨",
                price: "335.00 $",
                features: ["Efficacité maximale", "Longue durée", "Prévention"],
                popular: false
              },
              {
                title: "Transport",
                description: "Frais de déplacement pour intervention",
                icon: "🚗",
                price: "85.00 $",
                features: ["Rapide", "Zone étendue", "Service flexible"],
                popular: false
              },
              {
                title: "Appel de service",
                description: "Frais d'intervention standard",
                icon: "📞",
                price: "125.00 $",
                features: ["Disponible 24/7", "Professionnel", "Sans engagement"],
                popular: false
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border group animate-slide-up relative overflow-hidden ${
                  service.popular ? 'border-yellow-400 ring-2 ring-yellow-400' : 'border-gray-100'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                    POPULAIRE
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </div>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
                    >
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services supplémentaires */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Services Supplémentaires</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Appel de service d'urgence</span>
                  <span className="font-bold text-blue-600 text-lg">475.00 $</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Localisation (Inclus dans inspection caméra)</span>
                  <span className="font-bold text-blue-600 text-lg">50.00 $</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Temps supplémentaire (inclus 1h de main d'œuvre)</span>
                  <span className="font-bold text-blue-600 text-lg">90$ /H</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="pourquoi" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-transparent to-yellow-100"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              Pourquoi Choisir <span className="text-blue-600">SOS Débouchage</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 animate-slide-up animation-delay-200">
              Spécialiste reconnu en débouchage et inspection de drains, nous servons l'Estrie avec plus de 22 ans d'expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mt-4 rounded-full animate-slide-up animation-delay-400"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: <Clock className="h-16 w-16 text-blue-600" />,
                title: "Intervention Rapide",
                description: "Service d'urgence 24h/7j avec intervention garantie en moins de 60 minutes",
                color: "blue"
              },
              {
                icon: <Shield className="h-16 w-16 text-green-600" />,
                title: "Plus de 22 ans d'expertise",
                description: "Savoir-faire inégalé et expérience éprouvée dans toute l'Estrie",
                color: "green"
              },
              {
                icon: <Users className="h-16 w-16 text-purple-600" />,
                title: "Techniciens Certifiés",
                description: "Équipe professionnelle disponible jour, soir et nuit, 7j/7",
                color: "purple"
              },
              {
                icon: <Award className="h-16 w-16 text-yellow-600" />,
                title: "Transparence Totale",
                description: "Prix clairs, service fiable et professionnalisme reconnu",
                color: "yellow"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group animate-slide-up border border-gray-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`flex justify-center mb-6 p-4 rounded-full bg-${feature.color}-50 w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Company Description */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  L'expertise qui fait la différence
                </h3>
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold text-blue-600">SOS Débouchage</span> est une entreprise spécialisée dans l'inspection de drains,
                    le débouchage et la réparation par gainage. Nous desservons les régions de Sherbrooke, Magog, Drummondville, Coaticook et les villes voisines
                    avec un engagement constant vers l'excellence.
                  </p>
                  <p>
                    Que ce soit pour un égout sanitaire, un égout pluvial, des drains de fondation, un évier, une fosse septique ou tout autre
                    système de drainage, nous répondons à tous vos besoins en matière de débouchage, nettoyage et réparation.
                  </p>
                  <p>
                    Nous nous déplaçons rapidement à votre résidence, ferme, commerce ou institution avec une flotte d'équipements
                    complètement renouvelée utilisant des technologies de pointe.
                  </p>
                </div>
              </div>

              <div className="animate-slide-up animation-delay-300">
                <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 border border-blue-100">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nos Avantages Uniques</h4>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Wrench className="h-6 w-6 text-blue-600" />,
                        text: "Une des seules entreprises en Estrie à offrir la réparation de drain sans excavation"
                      },
                      {
                        icon: <Zap className="h-6 w-6 text-yellow-600" />,
                        text: "Équipements à la fine pointe de la technologie"
                      },
                      {
                        icon: <Shield className="h-6 w-6 text-green-600" />,
                        text: "Flotte d'équipements complètement renouvelée"
                      },
                      {
                        icon: <Users className="h-6 w-6 text-purple-600" />,
                        text: "Service professionnel résidentiel, commercial et institutionnel"
                      },
                      {
                        icon: <Award className="h-6 w-6 text-blue-600" />,
                        text: "Plus de 22 ans d'expérience et d'expertise"
                      },
                      {
                        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                        text: "Intervention rapide dans toute l'Estrie"
                      }
                    ].map((advantage, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 mt-1">
                          {advantage.icon}
                        </div>
                        <p className="text-gray-700 font-medium">{advantage.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="zones" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              Zones d'<span className="text-blue-600">Intervention</span>
            </h2>
            <p className="text-xl text-gray-600 animate-slide-up animation-delay-200">
              Service de débouchage disponible dans toute l'Estrie
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mt-4 rounded-full animate-slide-up animation-delay-400"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { city: "Sherbrooke", time: "15-30 min", popular: true },
              { city: "Magog", time: "20-35 min", popular: true },
              { city: "Drummondville", time: "25-40 min", popular: true },
              { city: "Coaticook", time: "30-45 min", popular: false },
              { city: "Asbestos", time: "25-40 min", popular: false },
              { city: "Windsor", time: "20-35 min", popular: false },
              { city: "Richmond", time: "20-30 min", popular: false },
              { city: "Cookshire-Eaton", time: "35-50 min", popular: false },
              { city: "Danville", time: "25-35 min", popular: false }
            ].map((zone, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border group animate-slide-up ${
                  zone.popular ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-white' : 'border-gray-100'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className={`h-6 w-6 ${zone.popular ? 'text-blue-600' : 'text-gray-500'}`} />
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{zone.city}</h3>
                      <p className="text-sm text-gray-600">Temps d'intervention: {zone.time}</p>
                    </div>
                  </div>
                  {zone.popular && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                      POPULAIRE
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Votre ville n'est pas listée?</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Vérifier la Disponibilité
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section id="urgence" className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="h-20 w-20 text-yellow-400 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Situation d'<span className="text-yellow-400">Urgence</span>?
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-slide-up animation-delay-200">
              Drain bouché, évier bouché, toilette bouchée, remontée d'eau, tuyau gelé ou percé, robinet qui fuit... Nous intervenons immédiatement!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <Droplets className="h-12 w-12" />, title: "Drain Bouché", desc: "Intervention immédiate" },
                { icon: <AlertTriangle className="h-12 w-12" />, title: "Tuyau Gelé/Percé", desc: "Réparation urgente" },
                { icon: <Zap className="h-12 w-12" />, title: "Remontée d'Eau", desc: "Sécurisation rapide" }
              ].map((emergency, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-yellow-400 flex justify-center mb-4">
                    {emergency.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{emergency.title}</h3>
                  <p className="text-sm opacity-90">{emergency.desc}</p>
                </div>
              ))}
            </div>

            <div className="animate-slide-up animation-delay-600">
              <a
                href="tel:8194321138"
                className="bg-yellow-400 hover:bg-yellow-300 text-red-700 font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl inline-flex items-center space-x-3 animate-pulse-slow"
              >
                <Phone className="h-8 w-8" />
                <span>(819) 432-1138</span>
                <ArrowRight className="h-6 w-6" />
              </a>
              <p className="mt-4 text-sm opacity-75">Ligne d'urgence disponible 24h/24, 7j/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="temoignages" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              Ce Que Disent Nos <span className="text-blue-600">Clients</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mt-4 rounded-full animate-slide-up animation-delay-200"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Marie Dubois",
                location: "Sherbrooke",
                rating: 5,
                comment: "Service exceptionnel! Intervention en 30 minutes, problème résolu rapidement. Je recommande vivement!",
                avatar: "M",
                service: "Débouchage Drain"
              },
              {
                name: "Jean Tremblay",
                location: "Magog",
                rating: 5,
                comment: "Plombier très professionnel, prix honnête. Mon drain était complètement bouché, maintenant tout fonctionne parfaitement.",
                avatar: "J",
                service: "Inspection Caméra"
              },
              {
                name: "Sophie Martin",
                location: "Drummondville",
                rating: 5,
                comment: "Excellente expérience! Devis gratuit respecté, travail soigné. Merci à toute l'équipe SOS Débouchage!",
                avatar: "S",
                service: "Nettoyage Drain Français"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-slide-up border border-gray-100 relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-4 right-4 text-6xl text-blue-100 font-serif">"</div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>

                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-4 inline-block">
                  {testimonial.service}
                </span>

                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed relative z-10">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg group-hover:scale-110 transition-transform">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                    <p className="text-gray-600 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              Tarifs <span className="text-blue-600">Transparents</span>
            </h2>
            <p className="text-xl text-gray-600 animate-slide-up animation-delay-200">
              Pas de surprise, des prix clairs et compétitifs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mt-4 rounded-full animate-slide-up animation-delay-400"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8 mb-8 animate-slide-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Offre Spéciale</h3>
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-bold text-blue-600">Diagnostic GRATUIT</span> +
                  <span className="font-bold text-green-600"> 10% de réduction</span> sur votre première intervention
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Offre limitée
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Valable ce mois-ci
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-slide-up">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                <h3 className="font-bold text-lg">Grille Tarifaire Complète</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { service: "Débouchage (canalisation 3\" et plus caméra inclus)", price: "425.00 $" },
                    { service: "Débouchage mineurs", price: "265.00 $" },
                    { service: "Inspection par caméra", price: "295.00 $" },
                    { service: "Nettoyage de drain français", price: "335.00 $" },
                    { service: "Transport", price: "85.00 $" },
                    { service: "Appel de service", price: "125.00 $" },
                    { service: "Appel de service d'urgence", price: "475.00 $" },
                    { service: "Localisation (Inclus dans le prix du service d'inspection par caméra)", price: "50.00 $" },
                    { service: "Temps supplémentaire (appel de service inclus 1h de main d'œuvre)", price: "90$ /H" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-medium text-gray-800">{item.service}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600 text-lg whitespace-nowrap">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8 animate-slide-up animation-delay-600">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-bold text-lg text-gray-800 mb-2">💡 Bon à savoir</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Devis gratuit et sans engagement</li>
                  <li>• Frais de déplacement selon la zone de service</li>
                  <li>• Garantie satisfaction sur toutes nos interventions</li>
                  <li>• Paiement possible par carte, chèque ou espèces</li>
                  <li>• Prix sans taxes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Demandez Votre Devis Gratuit</h2>
              <p className="text-xl opacity-90">Remplissez le formulaire, nous vous rappelons dans les 5 minutes</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 text-gray-800">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nom complet*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Téléphone*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Adresse d'intervention*</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Type d'urgence</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="normal">Intervention normale</option>
                    <option value="urgent">Urgence (dans l'heure)</option>
                    <option value="emergency">Urgence critique (immédiat)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Description du problème</label>
                  <textarea
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Décrivez votre problème de plomberie..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Demander Mon Devis Gratuit
                </button>

                <p className="text-sm text-gray-600 mt-4 text-center">
                  * Champs obligatoires. Nous nous engageons à respecter votre vie privée.
                </p>
              </form>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contactez-nous Directement</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-6 w-6 text-yellow-400" />
                      <div>
                        <p className="font-semibold text-lg">(819) 432-1138</p>
                        <p className="opacity-75">Ligne d'urgence 24h/7j</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-yellow-400" />
                      <div>
                        <p className="font-semibold">Service dans toute l'Estrie</p>
                        <p className="opacity-75">Sherbrooke, Magog, Drummondville, Coaticook...</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-yellow-400" />
                      <div>
                        <p className="font-semibold">Disponible 24h/7j</p>
                        <p className="opacity-75">Même les weekends et jours fériés</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-400 text-blue-900 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">🚨 Urgence Critique?</h4>
                  <p className="mb-3">Drain bouché, tuyau percé, remontée d'eau...</p>
                  <a href="tel:8194321138" className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg inline-block hover:bg-red-700 transition-colors">
                    Appelez Immédiatement
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                             <img src="./Logo-SOSDebouchage.svg" width={250} height={20} alt="Logo-SOSDebouchage" />

              </div>
              <p className="opacity-75 mb-4">Votre spécialiste en débouchage de drains et plomberie en Estrie. Service d'urgence 24h/7j.</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Nos Services</h4>
              <ul className="space-y-2 opacity-75">
                <li>• Débouchage de drains</li>
                <li>• Inspection caméra</li>
                <li>• Nettoyage drain français</li>
                <li>• Réparation sans excavation</li>
                <li>• Service d'urgence 24h/7j</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Zones d'Intervention</h4>
              <ul className="space-y-2 opacity-75">
                <li>• Sherbrooke et région</li>
                <li>• Magog et environs</li>
                <li>• Drummondville</li>
                <li>• Coaticook</li>
                <li>• Toute l'Estrie</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Urgent</h4>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>(819) 432-1138</span>
                </p>
                <p className="opacity-75">Intervention garantie 60min</p>
                <p className="opacity-75">Devis gratuit • Prix transparents</p>
                <p className="opacity-75">Plus de 22 ans d'expertise</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center opacity-75">
            <p>&copy; 2025 SOS Débouchage. Tous droits réservés. | Service de plomberie d'urgence en Estrie</p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <a
          href="tel:8194321138"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
        >
          <Phone className="h-8 w-8 group-hover:animate-pulse" />
        </a>
      </div>
    </div>
  );
}

export default App;
