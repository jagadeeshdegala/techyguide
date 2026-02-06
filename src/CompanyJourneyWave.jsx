import React, { useEffect, useRef, useState } from 'react';
import './CompanyJourneyWave.css';

function CompanyJourneyWave() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [animationState, setAnimationState] = useState({
    rocketProgress: 0,
    revealedMilestones: [],
    activeMilestone: null
  });
  const animationFrameRef = useRef(null);
  const observerRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const progressRef = useRef(0);
  const lastTimeRef = useRef(0);
  const pauseUntilRef = useRef(0);
  const nextStopIndexRef = useRef(0);

  // Milestone data from image - SOURCE OF TRUTH
  const milestones = [
    {
      id: 1,
      year: '2021',
      title: 'Market Entry',
      description: 'Launched with 1 product, 3 clients, and operations in 2 states.',
      color: '#008273',
      revealPoint: 0.1,
      position: 'top'
    },
    {
      id: 2,
      year: '2021',
      title: 'Early Scale-Up',
      description: 'Expanded to 5 products, 50+ clients, & presence in 10 states.',
      color: '#00BCD4',
      revealPoint: 0.4,
      position: 'bottom'
    },
    {
      id: 3,
      year: '2023',
      title: 'Innovation Drive',
      description: 'Introduced 2 proprietary products 10+ product lines, 150+ clients, and reached 18 states.',
      color: '#E91E63',
      revealPoint: 0.7,
      position: 'top'
    },
    {
      id: 4,
      year: '2024',
      title: 'Nationwide Presence',
      description: 'Scaled to 250+ clients with active presence across 26 states.',
      color: '#9C27B0',
      revealPoint: 1,
      position: 'bottom'
    }
  ];

  // Get point on SVG path at a specific progress (0-1)
  const getPointOnPath = (progress) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    
    const path = svgRef.current.querySelector('.wave-path');
    if (!path) return { x: 0, y: 0 };

    const totalLength = path.getTotalLength();
    const distance = totalLength * Math.max(0, Math.min(1, progress));
    const point = path.getPointAtLength(distance);
    
    return { x: point.x, y: point.y };
  };

  // Animation loop with smooth rocket movement and pause at milestones
  const animate = (timestamp) => {
    if (!isAnimatingRef.current) return;

    if (!lastTimeRef.current) {
      lastTimeRef.current = timestamp;
    }

    if (pauseUntilRef.current && timestamp < pauseUntilRef.current) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }

    const delta = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    const speed = 0.00012;
    let newProgress = progressRef.current + delta * speed;

    const nextIndex = nextStopIndexRef.current;
    const nextMilestone = milestones[nextIndex];

    if (nextMilestone && newProgress >= nextMilestone.revealPoint) {
      newProgress = nextMilestone.revealPoint;
      pauseUntilRef.current = timestamp + 500;
      nextStopIndexRef.current = nextIndex + 1;
    }

    if (newProgress >= 1 || nextStopIndexRef.current > milestones.length) {
      newProgress = 1;
      isAnimatingRef.current = false;
    }

    progressRef.current = newProgress;

    const revealed = milestones
      .filter(m => newProgress >= m.revealPoint)
      .map(m => m.id);

    const currentActive = revealed.length ? revealed[revealed.length - 1] : null;

    setAnimationState({
      rocketProgress: newProgress,
      revealedMilestones: revealed,
      activeMilestone: currentActive
    });

    if (isAnimatingRef.current) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimatingRef.current) {
          isAnimatingRef.current = true;
          progressRef.current = 0;
          lastTimeRef.current = 0;
          pauseUntilRef.current = 0;
          nextStopIndexRef.current = 0;
          setAnimationState({ rocketProgress: 0, revealedMilestones: [], activeMilestone: null });
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: '0px'
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.unobserve(element);
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Animation frame cleanup
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Get rocket position
  const rocketPos = getPointOnPath(animationState.rocketProgress);
  const finalPoint = getPointOnPath(1);

  return (
    <section className="about-journey-wave" ref={containerRef}>
      <div className="journey-wave-container">
        <h2 className="journey-wave-title">Journey</h2>
        
        {/* SVG Wave Path with Rocket */}
        <svg 
          ref={svgRef}
          className="journey-wave-svg"
          viewBox="0 0 1200 300"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#008273', stopOpacity: 0.8 }} />
              <stop offset="25%" style={{ stopColor: '#00BCD4', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#E91E63', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#9C27B0', stopOpacity: 0.8 }} />
            </linearGradient>
            <filter id="glowFilter">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="rocketGlow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="finishGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Wave path - smooth sine-like curve with defined endpoint */}
          <path
            className="wave-path"
            d="M 50,150 Q 250,50 450,150 T 850,150 T 1150,150"
            stroke="url(#waveGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            filter="url(#glowFilter)"
          />

          {/* Destination marker at end point */}
          <g className="destination-marker">
            <circle
              cx={finalPoint.x}
              cy={finalPoint.y}
              r="35"
              fill="none"
              stroke="#9C27B0"
              strokeWidth="3"
              opacity={animationState.rocketProgress > 0.85 ? 0.8 : 0.2}
              className="destination-ring"
            />
            <circle
              cx={finalPoint.x}
              cy={finalPoint.y}
              r="25"
              fill="#9C27B0"
              opacity={animationState.rocketProgress > 0.85 ? 0.3 : 0}
              className="destination-fill"
            />
          </g>

          {/* Milestone point markers */}
          {milestones.map(milestone => {
            const point = getPointOnPath(milestone.revealPoint);
            const isActive = animationState.activeMilestone === milestone.id;
            
            return (
              <g key={`marker-${milestone.id}`}>
                {/* Outer glow circle - pulses when active */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="28"
                  fill="none"
                  stroke={milestone.color}
                  strokeWidth="2"
                  opacity={animationState.revealedMilestones.includes(milestone.id) ? 0.7 : 0.2}
                  className={`milestone-marker-outer ${isActive ? 'active-milestone' : ''}`}
                />
                {/* Inner point - glows brighter when revealed */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="16"
                  fill={milestone.color}
                  opacity={animationState.revealedMilestones.includes(milestone.id) ? 1 : 0.4}
                  className={`milestone-marker-inner ${isActive ? 'pulse-active' : ''}`}
                />
              </g>
            );
          })}

          {/* Rocket - travels along path and stops at end */}
          <g className="rocket-group" transform={`translate(${rocketPos.x}, ${rocketPos.y})`}>
            {/* Rocket body glow */}
            <circle
              cx="0"
              cy="0"
              r="20"
              fill="#FF6B35"
              opacity="0.35"
              filter="url(#rocketGlow)"
              className="rocket-glow"
            />
            {/* Rocket body */}
            <circle cx="0" cy="0" r="14" fill="#FF6B35" className="rocket-body" />
            {/* Rocket window */}
            <circle cx="0" cy="-2" r="5" fill="#FFD700" opacity="0.8" />
            {/* Rocket flame */}
            <polygon
              points="0,-14 -8,-28 0,-24 8,-28"
              fill="#FFD700"
              className="rocket-flame"
            />
            {/* Flame flicker effect */}
            <polygon
              points="0,-12 -5,-22 0,-18 5,-22"
              fill="#FFA500"
              opacity="0.7"
              className="rocket-flame-inner"
            />
          </g>
        </svg>

        {/* Milestones Content Grid - with alternating top/bottom positioning */}
        <div className="milestones-content-wrapper">
          {milestones.map((milestone, index) => {
            const point = getPointOnPath(milestone.revealPoint);
            const leftPercent = (point.x / 1200) * 100;

            return (
              <div
                key={`milestone-${milestone.id}`}
                className={`milestone-content-item milestone-${milestone.position} ${animationState.revealedMilestones.includes(milestone.id) ? 'revealed' : ''}`}
                style={{
                  '--milestone-color': milestone.color,
                  '--reveal-delay': `${index * 0.15}s`,
                  '--milestone-left': `${leftPercent}%`
                }}
              >
                <div className="milestone-content-box">
                  <div className="milestone-year">{milestone.year}</div>
                  <div className="milestone-title-box">{milestone.title}</div>
                  <p className="milestone-description">{milestone.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative dots at bottom */}
        <div className="journey-dots">
          {[0, 1, 2, 3].map(i => (
            <div
              key={`dot-${i}`}
              className={`dot ${animationState.revealedMilestones.length > i ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyJourneyWave;
