const ComingSoon = () => {

  return (
    <div className="min-h-screen bg-gradient-desert flex items-center justify-center px-4 py-6 relative overflow-hidden">
      {/* Subtle Pattern Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-shimmer"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </div>

      {/* Light Desert Dune Shapes */}
      <div className="absolute -bottom-32 -left-32 w-[700px] h-[400px] bg-accent/8 rounded-[50%] blur-[120px]" />
      <div className="absolute -bottom-20 -right-40 w-[700px] h-[400px] bg-accent/8 rounded-[55%] blur-[120px]" />

      {/* Subtle Crescent Moon */}
      <div className="absolute top-20 right-20 w-14 h-14 opacity-15">
        <div className="absolute inset-0 bg-accent/60 rounded-full blur-sm"></div>
        <div className="absolute inset-2 bg-background rounded-full translate-x-2"></div>
      </div>

      {/* Corner Accents - Light */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-accent/20 rounded-tl-xl"></div>

      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-accent/20 rounded-br-xl"></div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 p-4 md:p-6 lg:p-8">
          {/* Logo/Brand - Light Theme */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-18 h-18 rounded-xl bg-accent/15 border border-accent/30 mb-6 relative shadow-md">
              <span className="text-3xl font-bold text-accent">G</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight">
              <span className="text-accent" style={{
                fontWeight: 700
              }}>GRAY</span>
              <span className="text-foreground">OLD</span>
              <span className="text-muted-foreground font-light ml-3 text-3xl md:text-4xl lg:text-5xl">LABS</span>
            </h1>
          </div>

          {/* Simple Divider */}
          <div className="flex items-center justify-center gap-3 mb-5 animate-fade-in-delay">
            <div className="h-px w-24 bg-accent/25" />
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="h-px w-24 bg-accent/25" />
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-delay font-light">
            Where innovation meets excellence
          </p>

          {/* Launch Status Badge */}
          <div className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent/10 border border-accent/30 mb-8 animate-fade-in-delay shadow-sm">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold text-accent">Launching Soon</span>
          </div>

          {/* Description - Enhanced */}
          <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-in-delay-2 leading-relaxed">
            Blending ancient wisdom with modern innovation. Our cutting-edge solutions
            will transform the way you work and create.
          </p>

          {/* Feature Pills - Light Theme */}
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
            <div className="px-6 py-2.5 rounded-full bg-accent/8 border border-accent/25 hover:bg-accent/15 hover:border-accent/40 transition-all duration-200 shadow-sm">
              <span className="text-sm font-medium text-muted-foreground">Heritage & Innovation</span>
            </div>
            <div className="px-6 py-2.5 rounded-full bg-accent/8 border border-accent/25 hover:bg-accent/15 hover:border-accent/40 transition-all duration-200 shadow-sm">
              <span className="text-sm font-medium text-muted-foreground">Desert to Digital</span>
            </div>
            <div className="px-6 py-2.5 rounded-full bg-accent/8 border border-accent/25 hover:bg-accent/15 hover:border-accent/40 transition-all duration-200 shadow-sm">
              <span className="text-sm font-medium text-muted-foreground">Timeless Excellence</span>
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
