import { useState } from 'react';
import { Phone } from 'lucide-react';

export function BusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center gap-8 flex-wrap">
      {/* Interactive Flip Card */}
      <div className="perspective-1000">
        <div
          className="relative w-[450px] h-[270px] cursor-pointer transition-transform duration-700 transform-style-3d"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Blue decorative shapes */}
            <div className="absolute top-0 right-0">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <path
                  d="M 200 0 Q 150 50 120 80 Q 100 100 80 130 Q 60 160 0 200 L 200 200 Z"
                  fill="#3b82f6"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0">
              <svg width="150" height="150" viewBox="0 0 150 150">
                <path
                  d="M 0 150 Q 50 100 80 70 Q 100 50 130 20 Q 150 0 150 0 L 0 0 Z"
                  fill="#3b82f6"
                />
              </svg>
            </div>

            <div className="relative h-full p-10 flex flex-col justify-between">
              {/* Logo and Company Name */}
              <div className="flex flex-col items-start gap-4 ml-8">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <span className="text-white" style={{ fontSize: '32px', fontWeight: '700' }}>m</span>
                </div>
                <div>
                  <h2 className="text-slate-800" style={{ fontSize: '32px', fontWeight: '400', letterSpacing: '-0.5px' }}>
                    makea<span className="text-blue-600">web.in</span>
                  </h2>
                  <p className="text-slate-600" style={{ fontSize: '11px', marginTop: '4px' }}>
                    Simple. Fast. Affordable Websites
                  </p>
                </div>
              </div>

              {/* Bottom section */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-slate-700" style={{ fontSize: '14px', fontWeight: '500' }}>
                    Website Development
                  </p>
                  <p className="text-slate-600" style={{ fontSize: '11px', marginTop: '2px' }}>
                    MakeAWeb.in
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-600" style={{ fontSize: '12px' }}>
                  <Phone className="w-4 h-4" />
                  <span>6380143700</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="relative h-full p-10 flex flex-col justify-between">
              {/* Main content */}
              <div>
                <h3 className="text-slate-800" style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.4', marginBottom: '20px' }}>
                  We build websites that help businesses<br />grow digitally.
                </h3>
                
                <div>
                  <p className="text-slate-700" style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px' }}>
                    And Web Development
                  </p>
                  <div className="space-y-2" style={{ fontSize: '12px' }}>
                    <div className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-600" style={{ fontSize: '16px', lineHeight: '1' }}>○</span>
                      <span>Website Development/Landing Pages</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-600" style={{ fontSize: '16px', lineHeight: '1' }}>○</span>
                      <span>Small Business Websites</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-600" style={{ fontSize: '16px', lineHeight: '1' }}>○</span>
                      <span>Portfolio Sites</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-600" style={{ fontSize: '16px', lineHeight: '1' }}>○</span>
                      <span>Digital Growth Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex justify-between items-end">
                <div className="space-y-1" style={{ fontSize: '11px' }}>
                  <div className="flex items-start gap-2">
                    <div className="bg-slate-100 rounded px-2 py-1 text-slate-700" style={{ fontSize: '12px', fontWeight: '600' }}>
                      Rj
                    </div>
                    <div className="text-slate-600">
                      <div>Phone: makeasite.in@gmail.com</div>
                      <div>6380143700, 8304824323</div>
                      <div>Email: MakeAWeb.in</div>
                    </div>
                  </div>
                </div>
                <div className="text-right text-slate-600" style={{ fontSize: '11px' }}>
                  <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '2px' }}>1730-144795018</div>
                  <div>Website: MakeAWeb.in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side by Side View for Print Reference */}
      <div className="flex flex-col gap-6">
        {/* Front Card */}
        <div className="w-[450px] h-[270px] bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Blue decorative shapes */}
          <div className="absolute top-0 right-0 ml-[250px]">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <path
                d="M 200 0 Q 150 50 120 80 Q 100 100 80 130 Q 60 160 0 200 L 200 200 Z"
                fill="#3b82f6"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0">
            <svg width="150" height="150" viewBox="0 0 150 150">
              <path
                d="M 0 150 Q 50 100 80 70 Q 100 50 130 20 Q 150 0 150 0 L 0 0 Z"
                fill="#3b82f6"
              />
            </svg>
          </div>

          <div className="relative h-full p-10 flex flex-col justify-between">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-start gap-4 ml-8">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <span className="text-white" style={{ fontSize: '32px', fontWeight: '700' }}>m</span>
              </div>
              <div>
                <h2 className="text-slate-800" style={{ fontSize: '32px', fontWeight: '400', letterSpacing: '-0.5px' }}>
                  makea<span className="text-blue-600">web.in</span>
                </h2>
                <p className="text-slate-600" style={{ fontSize: '11px', marginTop: '4px' }}>
                  Simple. Fast. Affordable Websites
                </p>
              </div>
            </div>

            {/* Bottom section */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-slate-700" style={{ fontSize: '14px', fontWeight: '500' }}>
                  Website Development
                </p>
                <p className="text-slate-600" style={{ fontSize: '11px', marginTop: '2px' }}>
                  MakeAWeb.in
                </p>
              </div>
              <div className="flex items-center gap-2 text-slate-600" style={{ fontSize: '12px' }}>
                <Phone className="w-4 h-4" />
                <span>6380143700</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div className="w-[450px] h-[270px] bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-full p-10 flex flex-col justify-between">
            {/* Main content */}
            <div>
              <h3 className="text-slate-800" style={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.4', marginBottom: '20px' }}>
                We build websites that help businesses<br />grow digitally.
              </h3>
              
              <div>
                <p className="text-slate-700" style={{ fontSize: '13px', fontWeight: '500', marginBottom: '12px' }}>
                  And Web Development
                </p>
                <div className="space-y-2" style={{ fontSize: '12px' }}>
                  <div className="flex items-start gap-2 text-slate-600">
                    <span className="text-blue-600" style={{ fontSize: '16px', lineHeight: '1' }}>○</span>
                    <span>Website Development/Landing Pages</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600">
                    <span className="text-blue-600" style={{ fontSize: '16px', lineHeight: '1' }}>○</span>
                    <span>Small Business Websites</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600">
                    <span className="text-blue-600" style={{ fontSize: '16px', lineHeight: '1' }}>○</span>
                    <span>Portfolio Sites</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600">
                    <span className="text-blue-600" style={{ fontSize: '16px', lineHeight: '1' }}>○</span>
                    <span>Digital Growth Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex justify-between items-end">
              <div className="space-y-1" style={{ fontSize: '11px' }}>
                <div className="flex items-start gap-2">
                  <div className="bg-slate-100 rounded px-2 py-1 text-slate-700" style={{ fontSize: '12px', fontWeight: '600' }}>
                    Rj
                  </div>
                  <div className="text-slate-600">
                    <div>Phone: makeasite.in@gmail.com</div>
                    <div>6380143700, 8304824323</div>
                    <div>Email: MakeAWeb.in</div>
                  </div>
                </div>
              </div>
              <div className="text-right text-slate-600" style={{ fontSize: '11px' }}>
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '2px' }}>1730-144795018</div>
                <div>Website: MakeAWeb.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}