import React, { useState, useEffect } from 'react';
import { ChevronRight, Mail, Linkedin, Phone, ExternalLink, MapPin, Camera, Users, FileText, Moon, Sun } from 'lucide-react';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('Tous');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Charge le thème sauvegardé au démarrage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle le mode sombre
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const profile = {
    name: "Néjib Khalfi",
    title: "Journaliste Étudiant Spécialisé E-sport",
    tagline: "Photographie événementielle • Community Management • Reportage sportif",
    email: "elkhalnejib@gmail.com",
    phone: "07 61 50 60 13",
    location: "Saint-Chamond, France",
    linkedin: "linkedin.com/in/nejib-khalfi",
    twitter: "https://x.com/Actu_Barcelona?s=20",
    disponibilite: "Recherche stage journalisme sportif 2026"
  };

  const highlights = [
    { icon: Camera, text: "+12 événements couverts", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
    { icon: Users, text: "6K+ abonnés gérés", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    { icon: FileText, text: "Collaborations RMC/L'ÉQUIPE", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" }
  ];

  const projects = [
    {
      id: 1,
      title: "Interviews Joueurs Pro VALORANT",
      category: "Reportage",
      description: "Interviews de plusieurs joueurs professionnels sur la scène e-sport VALORANT lors d'événements majeurs. Couverture média complète avec captation photo et vidéo.",
      link: "#",
      image: "/IMG_0505.jpg",
      date: "2024",
      tags: ["Interview", "E-sport", "Vidéo"]
    },
    {
      id: 2,
      title: "Community Manager - Actu_Barcelona",
      category: "Community Management",
      description: "Gestion du compte Twitter dédié à l'actualité du FC Barcelone avec +6 000 abonnés. Vérification d'informations, debunk de fake news et collaborations média (RMC Sport, L'ÉQUIPE21)",
      link: "https://x.com/Actu_Barcelona?s=20",
      image: "/IMG_0325.jpg",
      date: "2023-2025",
      tags: ["Twitter", "Football", "Fact-checking"],
      featured: true
    },
    {
      id: 3,
      title: "Casting E-sport - Desk Commentateurs",
      category: "Photographie",
      description: "Captation des moments clés du casting lors d'une compétition e-sport professionnelle avec les équipes de commentateurs",
      link: "#",
      image: "/IMG_0635.jpg",
      date: "2024",
      tags: ["Photographie", "E-sport", "Événementiel"]
    },
    {
      id: 4,
      title: "LAN Lyon E-sport - Vue d'ensemble",
      category: "Photographie",
      description: "Documentation photographique complète d'une LAN party majeure à Lyon avec plus de 200 joueurs en compétition",
      link: "#",
      image: "/IMG_0296.jpg",
      date: "2024",
      tags: ["Photographie", "LAN", "Reportage"]
    },
    {
      id: 5,
      title: "Compétition Intense - Joueurs Pro",
      category: "Photographie",
      description: "Captation de l'intensité et de la concentration des joueurs professionnels en pleine compétition sur des tournois VALORANT",
      link: "#",
      image: "/IMG_0570.jpg",
      date: "2024",
      tags: ["Portrait", "E-sport", "Action"]
    },
    {
      id: 6,
      title: "Interviews Terrain - Casting Duo",
      category: "Reportage",
      description: "Couverture des interviews terrain et des animations lors d'événements e-sport avec duo de casting professionnel",
      link: "#",
      image: "/IMG_0500.jpg",
      date: "2024",
      tags: ["Interview", "Casting", "Live"]
    }
  ];

  const categories = ['Tous', 'Photographie', 'Reportage', 'Community Management'];

  const filteredProjects = selectedFilter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  const skills = [
    { 
      category: "Journalisme", 
      items: ["Rédaction web", "Fact-checking", "Interview", "Veille médiatique", "Investigation"] 
    },
    { 
      category: "Photographie", 
      items: ["Événementiel", "Sport & E-sport", "Reportage", "Portrait", "Post-production"] 
    },
    { 
      category: "Digital & CM", 
      items: ["Community Management", "Gestion Twitter/X", "Debunk fake news", "Stratégie réseaux sociaux"] 
    },
    { 
      category: "Langues & Outils", 
      items: ["Français (natif)", "Anglais (courant)", "Arabe", "Suite Adobe", "Outils CMS"] 
    }
  ];

  const experiences = [
    {
      title: "Community Manager",
      company: "Actu_Barcelona | X (Twitter)",
      period: "Juin 2023 - Août 2025",
      description: "Gestion d'un compte d'actualité du FC Barcelone avec coordination d'une équipe de 6 personnes. Vérification et circulation d'informations en temps réel, debunk de fake news et collaborations avec médias spécialisés.",
      highlight: true
    },
    {
      title: "Photographe Événementiel",
      company: "Événements E-sport & Gaming",
      period: "2023 - 2025",
      description: "Couverture photographique d'événements e-sport et gaming : compétitions, LAN parties, animations. Documentation visuelle complète avec focus sur l'action et les coulisses.",
      highlight: true
    },
    {
      title: "Transporteur / Caissier",
      company: "La Cigale Orientale",
      period: "Juillet - Août 2023",
      description: "Livraison de marchandises et gestion logistique avec optimisation du rangement selon plan de tournée."
    }
  ];

  const education = [
    {
      title: "ISFJ - Institut Supérieur de Formation au Journalisme",
      period: "2025 - 2028",
      location: "Formation en cours",
      current: true
    },
    {
      title: "Licence 1, Université Jean Monnet",
      period: "2024 - 2025",
      location: "Saint-Étienne"
    },
    {
      title: "Bac Général (Spé. HLP, HGGSP)",
      period: "2024",
      location: "Lycée Claude Lebois"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-4px);
        }
        
        .dark .project-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }
        
        .project-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .project-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          transition: width 0.3s ease;
        }
        
        .dark .nav-link::after {
          background: #fff;
        }
        
        .nav-link::after {
          background: #000;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm z-50 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">{profile.name}</div>
          
          <div className="flex items-center gap-4">
            {/* Bouton Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Menu burger mobile */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100"></div>
                <div className="w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100"></div>
                <div className="w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100"></div>
              </div>
            </button>

            {/* Menu desktop */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#travaux" className="nav-link">Travaux</a>
              <a href="#competences" className="nav-link">Compétences</a>
              <a href="#parcours" className="nav-link">Parcours</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="flex flex-col px-6 py-4 space-y-3">
              <a href="#travaux" onClick={() => setMobileMenuOpen(false)} className="font-medium">Travaux</a>
              <a href="#competences" onClick={() => setMobileMenuOpen(false)} className="font-medium">Compétences</a>
              <a href="#parcours" onClick={() => setMobileMenuOpen(false)} className="font-medium">Parcours</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 mb-6 bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-full">
              <MapPin size={14} />
              {profile.location} • {profile.disponibilite}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              {profile.name}
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {profile.title}
            </p>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm ${highlight.color}`}
                >
                  <highlight.icon size={16} />
                  {highlight.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#travaux" 
                className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Voir mes travaux <ChevronRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 border-2 border-neutral-900 dark:border-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="travaux" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Travaux & Réalisations</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl">
              Photographie événementielle, community management et reportages sur la scène e-sport française
            </p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  selectedFilter === cat 
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900' 
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille de projets */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700"
                style={{ opacity: 0, animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` }}
              >
                <div className="relative overflow-hidden bg-neutral-100 dark:bg-neutral-700 aspect-[16/10]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ Featured
                    </div>
                  )}
                  {project.link !== "#" && (
                    <div className="project-overlay absolute inset-0 bg-neutral-900/90 flex items-center justify-center">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white text-sm font-semibold border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-neutral-900 transition-colors"
                      >
                        Voir le projet <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                      {project.category}
                    </span>
                    <span className="text-xs text-neutral-400">{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Compétences</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="text-sm text-neutral-700 dark:text-neutral-300 py-1"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="parcours" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Parcours</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Expériences */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-neutral-700 dark:text-neutral-300">Expériences</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl border-l-4 ${
                      exp.highlight 
                        ? 'bg-neutral-50 dark:bg-neutral-800 border-neutral-900 dark:border-white' 
                        : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700'
                    }`}
                  >
                    <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">{exp.period}</span>
                    <h4 className="text-lg font-bold mt-2 mb-1">{exp.title}</h4>
                    <div className="text-neutral-600 dark:text-neutral-400 font-medium mb-3">{exp.company}</div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formation */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-neutral-700 dark:text-neutral-300">Formation</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl border-l-4 ${
                      edu.current 
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-600 dark:border-blue-400' 
                        : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">{edu.period}</span>
                      {edu.current && (
                        <span className="text-xs bg-blue-600 dark:bg-blue-500 text-white px-2 py-0.5 rounded-full font-bold">
                          En cours
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold mb-1">{edu.title}</h4>
                    {edu.location && <div className="text-neutral-600 dark:text-neutral-400 text-sm">{edu.location}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-neutral-900 dark:bg-black text-white transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Travaillons ensemble</h2>
          <p className="text-xl text-neutral-300 dark:text-neutral-400 mb-12 leading-relaxed">
            Étudiant en journalisme sportif à l'ISFJ, je recherche activement un <strong className="text-white">stage en rédaction sportive, e-sport ou photographie événementielle</strong> pour 2026.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a 
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              {profile.email}
            </a>
            <a 
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-neutral-900 transition-colors w-full sm:w-auto justify-center"
            >
              <Phone size={20} />
              {profile.phone}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm">
            <a 
              href={`https://${profile.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-neutral-300 dark:text-neutral-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href={profile.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-neutral-300 dark:text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter/X
            </a>
          </div>
          

          <div className="mt-16 pt-8 border-t border-neutral-700 dark:border-neutral-800 text-neutral-400 text-sm">
            <p>© {new Date().getFullYear()} Néjib Khalfi. Tous droits réservés.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
