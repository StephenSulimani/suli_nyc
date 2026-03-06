interface HeroBackgroundProps {
  mousePos: { x: number; y: number }
}

export function HeroBackground({ mousePos }: HeroBackgroundProps) {
  return (
    <div className="hero-bg">
      <div className="hero-bg-gradient hero-bg-1" />
      <div className="hero-bg-gradient hero-bg-2" />
      <div className="hero-bg-gradient hero-bg-3" />
      <div
        className="hero-bg-grid"
        aria-hidden
        style={{
          transform: `perspective(800px) rotateX(${mousePos.y * -6}deg) rotateY(${mousePos.x * 6}deg)`,
          transition: 'transform 0.12s ease-out',
        }}
      />
    </div>
  )
}
