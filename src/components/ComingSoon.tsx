const ComingSoon = () => {

  return (
    <div className="min-h-screen bg-gradient-desert flex items-center justify-center px-4 py-6 relative overflow-hidden">
      {/* Desert Stars/Night Sky with Constellation Lines */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(40)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-accent rounded-full animate-shimmer"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
        {/* Constellation connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line x1="10%" y1="20%" x2="25%" y2="15%" stroke="hsl(45 100% 60%)" strokeWidth="0.5"/>
          <line x1="25%" y1="15%" x2="35%" y2="25%" stroke="hsl(45 100% 60%)" strokeWidth="0.5"/>
          <line x1="70%" y1="30%" x2="85%" y2="25%" stroke="hsl(180 85% 55%)" strokeWidth="0.5"/>
          <line x1="85%" y1="25%" x2="90%" y2="40%" stroke="hsl(180 85% 55%)" strokeWidth="0.5"/>
          <line x1="15%" y1="60%" x2="30%" y2="70%" stroke="hsl(45 100% 60%)" strokeWidth="0.5"/>
          <line x1="60%" y1="80%" x2="75%" y2="75%" stroke="hsl(180 85% 55%)" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Floating Sand Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`sand-${i}`}
            className="absolute rounded-full bg-accent animate-drift"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      {/* Gemstone Sparkles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-sparkle"
            style={{
              background: i % 3 === 0 ? 'hsl(180 85% 55%)' : i % 3 === 1 ? 'hsl(45 100% 60%)' : 'hsl(350 85% 65%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Desert Dune Shapes - Visible */}
      <div className="absolute -bottom-32 -left-32 w-[800px] h-[500px] bg-accent/20 rounded-[50%] blur-[120px] animate-dune" />
      <div className="absolute top-1/4 left-10 w-[600px] h-[400px] bg-gradient-primary opacity-15 rounded-[60%] animate-drift" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-20 -right-40 w-[900px] h-[600px] bg-accent/25 rounded-[55%] blur-[140px] animate-dune" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 -right-20 w-[700px] h-[450px] bg-gradient-primary opacity-20 rounded-[65%] animate-drift" style={{ animationDelay: "1s" }} />

      {/* Crescent Moon */}
      <div className="absolute top-16 right-16 w-16 h-16 opacity-25">
        <div className="absolute inset-0 bg-accent rounded-full blur-md"></div>
        <div className="absolute inset-2 bg-background rounded-full translate-x-2"></div>
      </div>

      {/* Arabesque Border Frame */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="absolute top-0 left-0 w-32 h-32" viewBox="0 0 100 100">
          <path d="M0 0 Q15 0 15 15 L0 15 Z M0 0 L15 0 Q15 10 5 10 Q15 15 15 25 M0 25 Q10 25 10 35 L0 35" stroke="hsl(45 100% 60%)" strokeWidth="1" fill="none"/>
          <circle cx="8" cy="8" r="2" fill="hsl(180 85% 55%)"/>
        </svg>
        <svg className="absolute top-0 right-0 w-32 h-32" viewBox="0 0 100 100">
          <path d="M100 0 Q85 0 85 15 L100 15 Z M100 0 L85 0 Q85 10 95 10 Q85 15 85 25 M100 25 Q90 25 90 35 L100 35" stroke="hsl(45 100% 60%)" strokeWidth="1" fill="none"/>
          <circle cx="92" cy="8" r="2" fill="hsl(180 85% 55%)"/>
        </svg>
        <svg className="absolute bottom-0 left-0 w-32 h-32" viewBox="0 0 100 100">
          <path d="M0 100 Q15 100 15 85 L0 85 Z M0 100 L15 100 Q15 90 5 90 Q15 85 15 75 M0 75 Q10 75 10 65 L0 65" stroke="hsl(45 100% 60%)" strokeWidth="1" fill="none"/>
          <circle cx="8" cy="92" r="2" fill="hsl(180 85% 55%)"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-32 h-32" viewBox="0 0 100 100">
          <path d="M100 100 Q85 100 85 85 L100 85 Z M100 100 L85 100 Q85 90 95 90 Q85 85 85 75 M100 75 Q90 75 90 65 L100 65" stroke="hsl(45 100% 60%)" strokeWidth="1" fill="none"/>
          <circle cx="92" cy="92" r="2" fill="hsl(180 85% 55%)"/>
        </svg>
      </div>

      {/* Dhow Boat Silhouette - Bottom center */}
      <div className="absolute bottom-8 left-1/4 w-32 h-20 opacity-12">
        <svg viewBox="0 0 150 100" className="w-full h-full">
          <path d="M10 80 Q30 70 75 70 Q120 70 140 80 L130 85 Q75 75 20 85 Z M75 70 L75 20 M75 20 L140 50" stroke="hsl(45 100% 60%)" strokeWidth="2" fill="none"/>
          <path d="M75 20 L80 50 L70 50 Z" fill="hsl(180 85% 55%)" opacity="0.6"/>
        </svg>
      </div>

      {/* Arabian Horse Silhouette - Bottom right */}
      <div className="absolute bottom-12 right-1/4 w-28 h-24 opacity-10">
        <svg viewBox="0 0 120 100" className="w-full h-full">
          <path d="M20 70 L30 50 Q35 40 40 35 L45 25 Q50 20 55 25 L60 35 Q65 40 70 45 L80 55 L90 70 M30 50 L25 80 M80 55 L85 80 M40 35 L35 80 M70 45 L75 75" stroke="hsl(45 100% 60%)" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="27" r="4" fill="hsl(180 85% 55%)"/>
        </svg>
      </div>

      {/* Coffee Pot (Dallah) Silhouette - Top center */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-20 opacity-12">
        <svg viewBox="0 0 80 100" className="w-full h-full">
          <path d="M25 40 Q20 35 20 30 L25 25 L55 25 L60 30 Q60 35 55 40 L55 70 Q55 80 40 80 Q25 80 25 70 Z M40 25 L40 15 Q40 10 45 10 M60 45 Q70 45 70 55 Q70 65 60 65" stroke="hsl(45 100% 60%)" strokeWidth="2" fill="none"/>
          <circle cx="40" cy="50" r="3" fill="hsl(180 85% 55%)"/>
        </svg>
      </div>

      {/* Desert Rose Flowers */}
      <div className="absolute top-1/3 right-12 w-12 h-12 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="8" fill="hsl(350 85% 65%)" opacity="0.7"/>
          <ellipse cx="50" cy="35" rx="8" ry="12" fill="hsl(350 85% 65%)" opacity="0.5" transform="rotate(0 50 50)"/>
          <ellipse cx="65" cy="50" rx="12" ry="8" fill="hsl(350 85% 65%)" opacity="0.5" transform="rotate(0 50 50)"/>
          <ellipse cx="50" cy="65" rx="8" ry="12" fill="hsl(350 85% 65%)" opacity="0.5" transform="rotate(0 50 50)"/>
          <ellipse cx="35" cy="50" rx="12" ry="8" fill="hsl(350 85% 65%)" opacity="0.5" transform="rotate(0 50 50)"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-16 w-10 h-10 opacity-12">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="6" fill="hsl(350 85% 65%)" opacity="0.7"/>
          <ellipse cx="50" cy="38" rx="6" ry="10" fill="hsl(350 85% 65%)" opacity="0.5"/>
          <ellipse cx="62" cy="50" rx="10" ry="6" fill="hsl(350 85% 65%)" opacity="0.5"/>
          <ellipse cx="50" cy="62" rx="6" ry="10" fill="hsl(350 85% 65%)" opacity="0.5"/>
          <ellipse cx="38" cy="50" rx="10" ry="6" fill="hsl(350 85% 65%)" opacity="0.5"/>
        </svg>
      </div>

      {/* Palm Trees Silhouettes - Bottom corners */}
      <div className="absolute bottom-0 left-8 w-24 h-32 opacity-10">
        <svg viewBox="0 0 100 150" className="w-full h-full fill-accent">
          <path d="M50 150 L50 80 M50 80 Q30 70 20 60 M50 80 Q70 70 80 60 M50 80 Q25 85 15 90 M50 80 Q75 85 85 90 M50 80 Q30 95 20 105 M50 80 Q70 95 80 105" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="50" cy="75" rx="8" ry="12" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-8 w-20 h-28 opacity-8">
        <svg viewBox="0 0 100 150" className="w-full h-full fill-accent">
          <path d="M50 150 L50 90 M50 90 Q35 80 25 70 M50 90 Q65 80 75 70 M50 90 Q30 92 20 98 M50 90 Q70 92 80 98" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 p-4 md:p-6 lg:p-8">
          {/* Logo/Brand with Islamic Pattern */}
          <div className="mb-6 animate-fade-in relative">
            {/* Geometric Islamic Pattern Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 opacity-8">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <pattern id="islamic-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M25 0 L50 25 L25 50 L0 25 Z" fill="currentColor" className="text-accent"/>
                  <circle cx="25" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent"/>
                </pattern>
                <rect width="100" height="100" fill="url(#islamic-pattern)"/>
              </svg>
            </div>

            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-luxury shadow-glow mb-5 animate-pulse-slow relative border-2 border-accent/40 hover:scale-105 transition-transform duration-300">
              <span className="text-3xl font-bold bg-gradient-to-br from-background via-background to-card bg-clip-text text-transparent" style={{
                textShadow: '0 0 20px rgba(180, 85, 55, 0.5)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}>G</span>
              {/* Corner decorations - Arabian style with turquoise accent */}
              <div className="absolute top-0.5 left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent-turquoise rounded-tl"></div>
              <div className="absolute top-0.5 right-0.5 w-2 h-2 border-t-2 border-r-2 border-accent rounded-tr"></div>
              <div className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b-2 border-l-2 border-accent rounded-bl"></div>
              <div className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent-turquoise rounded-br"></div>
              {/* Sparkle effects on logo */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-turquoise rounded-full animate-sparkle"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
              <span className="text-accent hover:scale-105 inline-block transition-transform" style={{
                fontWeight: 900,
                textShadow: '0 0 40px rgba(234, 179, 8, 0.8), 0 0 20px rgba(234, 179, 8, 0.6), 0 2px 10px rgba(0, 0, 0, 0.5)',
                filter: 'drop-shadow(0 4px 8px rgba(234, 179, 8, 0.4)) brightness(1.2)'
              }}>GRAY</span>
              <span className="text-foreground drop-shadow-[0_0_20px_rgba(234,179,8,0.3)] [text-shadow:_0_2px_10px_rgb(234_179_8_/_25%)] hover:text-accent-turquoise transition-colors">OLD</span>
              <span className="text-accent-turquoise font-light ml-3 text-2xl md:text-3xl lg:text-4xl" style={{
                textShadow: '0 0 30px rgba(56, 189, 248, 0.8), 0 0 15px rgba(56, 189, 248, 0.5)',
                filter: 'brightness(1.3)'
              }}>LABS</span>
            </h1>
          </div>

          {/* Decorative divider - Desert Rose Compass */}
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-delay">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="relative w-3 h-3">
              {/* 8-pointed star (Islamic star) */}
              <div className="absolute inset-0 rotate-0 bg-accent rounded-sm"></div>
              <div className="absolute inset-0 rotate-45 bg-accent rounded-sm"></div>
              <div className="absolute inset-0.5 bg-background rounded-full"></div>
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-5 animate-fade-in-delay font-light leading-relaxed">
            Where innovation meets excellence
          </p>

          {/* Coming Soon Badge - Enhanced with Arabian styling */}
          <div className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-background/60 via-card/60 to-background/60 border border-accent shadow-glow mb-8 animate-fade-in-delay backdrop-blur-md">
            {/* Corner ornaments */}
            <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t border-l border-accent rounded-tl-md"></div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t border-r border-accent rounded-tr-md"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b border-l border-accent rounded-bl-md"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b border-r border-accent rounded-br-md"></div>

            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(234,179,8,0.7)]" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent animate-ping" />
            </div>
            <span className="text-sm font-bold text-accent tracking-wide drop-shadow-[0_2px_8px_rgba(234,179,8,0.4)]">Coming Soon</span>
          </div>

          {/* Description - Enhanced */}
          <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-in-delay-2 leading-relaxed">
            Blending ancient wisdom with modern innovation. Our cutting-edge solutions
            will transform the way you work and create.
          </p>

          {/* Feature Pills - Luxury Glass Morphism */}
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
            <div className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-accent/10 via-card/40 to-accent/10 border border-accent/50 shadow-soft hover:shadow-glow-turquoise hover:border-accent-turquoise transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-md overflow-hidden">
              {/* Animated shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-turquoise/10 to-transparent animate-wave"></div>
              {/* Small corner decorations with turquoise */}
              <div className="absolute top-0 left-1.5 w-1.5 h-1.5 border-t border-l border-accent-turquoise rounded-tl"></div>
              <div className="absolute top-0 right-1.5 w-1.5 h-1.5 border-t border-r border-accent rounded-tr"></div>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-all relative z-10" style={{
                textShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
              }}>Heritage & Innovation</span>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent-turquoise rounded-full animate-sparkle opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-card/40 via-accent/10 to-card/40 border border-accent/50 shadow-soft hover:shadow-glow hover:border-accent transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-wave" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-0 left-1.5 w-1.5 h-1.5 border-t border-l border-accent rounded-tl"></div>
              <div className="absolute top-0 right-1.5 w-1.5 h-1.5 border-t border-r border-accent-turquoise rounded-tr"></div>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent-turquoise transition-all relative z-10" style={{
                textShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
              }}>Desert to Digital</span>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full animate-sparkle opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-accent/10 via-card/40 to-accent/10 border border-accent/50 shadow-soft hover:shadow-glow-turquoise hover:border-accent-turquoise transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-turquoise/10 to-transparent animate-wave" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-0 left-1.5 w-1.5 h-1.5 border-t border-l border-accent-turquoise rounded-tl"></div>
              <div className="absolute top-0 right-1.5 w-1.5 h-1.5 border-t border-r border-accent rounded-tr"></div>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-all relative z-10" style={{
                textShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
              }}>Timeless Excellence</span>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent-turquoise rounded-full animate-sparkle opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-border/20 animate-fade-in-delay-2">
            <p className="text-xs text-muted-foreground/60">
              © 2025 Grayold Labs. All rights reserved.
            </p>
          </div>
      </div>
    </div>
  );
};

export default ComingSoon;
