"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { ZoomIn, ZoomOut, Image as ImageIcon } from "lucide-react";

interface ImageZoomProps {
  src: string;
  alt: string;
  title?: string;
  zoomLevel?: number;
  lensSize?: number;
  className?: string;
}

export function ImageZoom({
  src,
  alt,
  title = "Verified Campaign Reporting & Creative Proof",
  zoomLevel = 1.5,
  lensSize = 280,
  className = "",
}: ImageZoomProps) {
  // Zoom mode is disabled (false) by default
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Clamp position within container bounds
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const clampedY = Math.max(0, Math.min(y, rect.height));

    setPos({
      x: clampedX,
      y: clampedY,
      width: rect.width,
      height: rect.height,
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isZoomActive) return;
    updatePosition(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isZoomActive) return;
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Header Bar with Title on left and Toggle Switch on right (justify-between) */}
      {title && (
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <ImageIcon size={16} style={{ color: "var(--accent)" }} />
            <h2
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              {title}
            </h2>
          </div>

          {/* Toggle Switch Button */}
          <button
            type="button"
            onClick={() => setIsZoomActive((prev) => !prev)}
            className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md transition-all duration-200 border cursor-pointer hover:scale-105 active:scale-95"
            style={
              isZoomActive
                ? {
                    background: "var(--accent)",
                    color: "var(--bg)",
                    borderColor: "var(--accent)",
                    boxShadow: "0 0 12px var(--accent-glow)",
                  }
                : {
                    background: "var(--surface-2)",
                    color: "var(--text-muted)",
                    borderColor: "var(--border)",
                  }
            }
            aria-pressed={isZoomActive}
          >
            {isZoomActive ? (
              <>
                <ZoomIn size={14} className="animate-pulse" />
                <span>Zoom Lens: ON ({zoomLevel}x)</span>
              </>
            ) : (
              <>
                <ZoomOut size={14} />
                <span>Enable Zoom Lens</span>
              </>
            )}

            {/* Switch Knob Indicator */}
            <span
              className="inline-block w-7 h-4 rounded-full relative transition-colors duration-200 ml-1"
              style={{
                background: isZoomActive ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.15)",
              }}
            >
              <span
                className="absolute top-0.5 w-3 h-3 rounded-full transition-all duration-200 shadow-sm"
                style={{
                  left: isZoomActive ? "14px" : "2px",
                  background: isZoomActive ? "#000" : "#fff",
                }}
              />
            </span>
          </button>
        </div>
      )}

      {/* Main Screenshot Container */}
      <div
        ref={containerRef}
        className={`relative overflow-hidden select-none rounded-2xl border bg-[var(--surface)] p-2 shadow-2xl ${
          isZoomActive ? "cursor-crosshair" : "cursor-default"
        }`}
        style={{ borderColor: "var(--border)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          setIsHovered(true);
          if (isZoomActive && e.touches.length > 0) {
            updatePosition(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        onTouchEnd={() => setIsHovered(false)}
        onTouchMove={handleTouchMove}
      >
        <div className="relative w-full overflow-hidden rounded-xl bg-black/40">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[600px] object-contain block rounded-xl mx-auto"
            loading="eager"
          />
        </div>

        {/* Circular Magnifying Glass Lens - Rendered only when active and hovered */}
        {isZoomActive && isHovered && pos.width > 0 && pos.height > 0 && (
          <div
            className="pointer-events-none absolute rounded-full border-2 shadow-2xl z-30 transition-opacity duration-150"
            style={{
              width: `${lensSize}px`,
              height: `${lensSize}px`,
              left: `${pos.x - lensSize / 2}px`,
              top: `${pos.y - lensSize / 2}px`,
              borderColor: "var(--accent)",
              boxShadow:
                "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 15px rgba(0, 0, 0, 0.3)",
              backgroundImage: `url("${src}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${pos.width * zoomLevel}px ${pos.height * zoomLevel}px`,
              backgroundPosition: `${-pos.x * zoomLevel + lensSize / 2}px ${-pos.y * zoomLevel + lensSize / 2}px`,
              backgroundColor: "#0d0e12",
            }}
          >
            {/* Circular Glass Lens Reflection Highlight */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)",
              }}
            />
            {/* Subtle Crosshair Target in Lens Center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-2.5 h-2.5 rounded-full border border-[var(--accent)]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
