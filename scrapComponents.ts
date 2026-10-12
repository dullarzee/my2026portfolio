// initial map interface for project card
            {/* Right Side: Graphic UI Simulation of Ride Dispatch */}
            <div className="lg:col-span-6 rounded-lg bg-[#0d0e10] border border-[#444932]/40 p-4 relative overflow-hidden flex flex-col gap-3">
              <div className="flex items-center justify-between pb-1 border-b border-[#292a2c]/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#caf300]"></span>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-white font-semibold">
                    LAGOS CORRIDOR SIMULATION
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsSimulatingRoute(!isSimulatingRoute);
                    if (!isSimulatingRoute && simProgress >= 100) setSimProgress(0);
                  }}
                  className="font-['JetBrains_Mono'] text-[10px] px-2 py-1 rounded bg-[#1f2022] text-[#caf300] hover:bg-[#292a2c] border border-[#444932]/40 flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[12px]">
                    {isSimulatingRoute ? 'pause' : 'play_arrow'}
                  </span>
                  <span>{isSimulatingRoute ? 'PAUSE DRIVE' : 'SIMULATE DRIVE'}</span>
                </button>
              </div>

              {/* Mock Map Overlay */}
              <div className="h-64 w-full rounded bg-[#292a2c] relative overflow-hidden flex items-center justify-center">
                {/* Grid Lines Vector Background */}
                <svg className="absolute inset-0 w-full h-full text-[#343537]/40" fill="none" stroke="currentColor">
                  <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M0 32V.5H32" strokeWidth="0.75" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>

                {/* Route Vector Polyline */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 240">
                  <path
                    d="M 60 190 Q 140 140 210 160 T 340 70"
                    fill="none"
                    stroke="#caf300"
                    strokeWidth="4"
                    strokeDasharray="6,4"
                    className="animate-pulse"
                  />
                  {/* Pickup Pin */}
                  <circle cx="60" cy="190" r="7" fill="#caf300" stroke="#121315" strokeWidth="2" />
                  <text x="50" y="215" fill="#c5c9ac" fontSize="9" fontFamily="JetBrains Mono">VICTORIA ISL</text>
                  
                  {/* Dropoff Pin */}
                  <circle cx="340" cy="70" r="7" fill="#ffffff" stroke="#121315" strokeWidth="2" />
                  <text x="310" y="95" fill="#c5c9ac" fontSize="9" fontFamily="JetBrains Mono">IKEJA HUB</text>

                  {/* Animated Simulated Vehicle Location along path */}
                  {(() => {
                    const t = simProgress / 100;
                    // Approximate quadratic/cubic bezier calculation
                    const curX = 60 + t * 280;
                    const curY = 190 - Math.sin(t * Math.PI) * 70 - t * 50;
                    return (
                      <g transform={`translate(${curX}, ${curY})`}>
                        <circle r="9" fill="#121315" stroke="#caf300" strokeWidth="2" />
                        <circle r="4" fill="#caf300" />
                      </g>
                    );
                  })()}
                </svg>

                {/* Floating Route HUD Card */}
                <div className="absolute top-3 left-3 bg-[#121315]/90 backdrop-blur-md border border-[#444932]/50 p-2.5 rounded shadow-lg flex flex-col gap-1 z-10">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#caf300] uppercase font-bold tracking-wider">
                    ROUTE TELEMETRY · {isSimulatingRoute ? 'LIVE IN-TRANSIT' : 'OPTIMAL'}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-['JetBrains_Mono'] text-[13px] text-white font-bold">
                      {routeDistKm} km · {routeEtaMin} mins
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#343537] text-white font-['JetBrains_Mono'] text-[10px]">
                      {simProgress > 0 ? `${simProgress}% Progress` : 'Optimal Path'}
                    </span>
                  </div>
                </div>

                {/* Floating Driver Card */}
                <div className="absolute bottom-3 right-3 bg-[#121315]/90 backdrop-blur-md border border-[#444932]/50 p-2.5 rounded shadow-lg flex items-center gap-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-[#1f2022] flex items-center justify-center text-[#caf300] font-bold text-xs border border-[#444932]/40">
                    DZ
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-white font-semibold">
                      Toyota Camry · 4.9★
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
                      {isSimulatingRoute ? `In motion (${Math.round(48 + Math.random() * 8)} km/h)` : 'Arriving in 3 mins'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Info Strip */}
              <div className="flex items-center justify-between px-2 pt-1 font-['JetBrains_Mono'] text-[11px] text-[#c5c9ac]">
                <span>GEO: 6.5244° N, 3.3792° E</span>
                <span className="text-[#caf300] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#caf300]"></span>
                  ORS_API RESP 42ms
                </span>
              </div>
            </div> 