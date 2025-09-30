const ComingSoon = () => {

  return (
    <div className="min-h-screen bg-gradient-desert flex items-center justify-center px-4 py-6 relative overflow-hidden">
      {/* Desert Stars/Night Sky */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-accent rounded-full animate-shimmer"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Desert Dune Shapes - Very Subtle */}
      <div className="absolute -bottom-32 -left-32 w-[800px] h-[500px] bg-accent/8 rounded-[50%] blur-[120px] animate-dune" />
      <div className="absolute top-1/4 left-10 w-[600px] h-[400px] bg-gradient-gold opacity-5 rounded-[60%] animate-drift" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-20 -right-40 w-[900px] h-[600px] bg-accent/10 rounded-[55%] blur-[140px] animate-dune" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 -right-20 w-[700px] h-[450px] bg-gradient-gold opacity-6 rounded-[65%] animate-drift" style={{ animationDelay: "1s" }} />

      {/* Crescent Moon */}
      <div className="absolute top-16 right-16 w-16 h-16 opacity-25">
        <div className="absolute inset-0 bg-accent rounded-full blur-md"></div>
        <div className="absolute inset-2 bg-background rounded-full translate-x-2"></div>
      </div>

      {/* Subtle Palm Trees Silhouettes - Bottom corners */}
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

      {/* Falcon Silhouette - Top left corner */}
      <div className="absolute top-12 left-12 w-16 h-16 opacity-8">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20 50 Q40 30 50 35 Q60 30 80 50 L75 55 Q60 45 50 48 Q40 45 25 55 Z M50 48 L50 70 M45 60 L50 70 L55 60" fill="currentColor" className="text-accent" />
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

            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-gold shadow-glow mb-5 animate-pulse-slow relative border border-accent/30">
              <span className="text-3xl font-bold text-background">G</span>
              {/* Corner decorations - Arabian style */}
              <div className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-accent"></div>
              <div className="absolute top-0.5 right-0.5 w-2 h-2 border-t border-r border-accent"></div>
              <div className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b border-l border-accent"></div>
              <div className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-accent"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
              <span className="text-accent drop-shadow-[0_0_30px_rgba(234,179,8,0.7)] [text-shadow:_0_2px_15px_rgb(234_179_8_/_40%)]" style={{ fontWeight: 900 }}>GRAY</span>
              <span className="text-foreground drop-shadow-[0_0_20px_rgba(234,179,8,0.3)] [text-shadow:_0_2px_10px_rgb(234_179_8_/_25%)]">OLD</span>
              <span className="text-accent/80 font-light ml-3 text-2xl md:text-3xl lg:text-4xl">LABS</span>
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

          {/* Feature Pills - Compact with Arabian styling */}
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
            <div className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-accent/8 via-accent/12 to-accent/8 border border-accent/40 shadow-soft hover:shadow-glow hover:border-accent/70 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm">
              {/* Small corner decorations */}
              <div className="absolute top-0 left-1.5 w-1.5 h-1.5 border-t border-l border-accent/60 rounded-tl"></div>
              <div className="absolute top-0 right-1.5 w-1.5 h-1.5 border-t border-r border-accent/60 rounded-tr"></div>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Heritage & Innovation</span>
            </div>
            <div className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-accent/8 via-accent/12 to-accent/8 border border-accent/40 shadow-soft hover:shadow-glow hover:border-accent/70 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm">
              <div className="absolute top-0 left-1.5 w-1.5 h-1.5 border-t border-l border-accent/60 rounded-tl"></div>
              <div className="absolute top-0 right-1.5 w-1.5 h-1.5 border-t border-r border-accent/60 rounded-tr"></div>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Desert to Digital</span>
            </div>
            <div className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-accent/8 via-accent/12 to-accent/8 border border-accent/40 shadow-soft hover:shadow-glow hover:border-accent/70 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm">
              <div className="absolute top-0 left-1.5 w-1.5 h-1.5 border-t border-l border-accent/60 rounded-tl"></div>
              <div className="absolute top-0 right-1.5 w-1.5 h-1.5 border-t border-r border-accent/60 rounded-tr"></div>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Timeless Excellence</span>
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
