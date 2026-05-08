import { Monitor, Tablet, Smartphone } from 'lucide-react';
import { ReactNode } from 'react';

interface DeviceFrameProps {
  device: 'desktop' | 'tablet' | 'mobile';
  children: ReactNode;
}

export function DeviceFrame({ device, children }: DeviceFrameProps) {
  const getFrameStyles = () => {
    switch (device) {
      case 'desktop':
        return {
          width: '1440px',
          height: '900px',
          border: '12px solid #1f2937',
          borderRadius: '12px',
        };
      case 'tablet':
        return {
          width: '768px',
          height: '1024px',
          border: '14px solid #374151',
          borderRadius: '24px',
        };
      case 'mobile':
        return {
          width: '375px',
          height: '667px',
          border: '12px solid #4b5563',
          borderRadius: '32px',
        };
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-8">
      <div
        className="bg-white shadow-2xl overflow-hidden relative"
        style={getFrameStyles()}
      >
        {/* Device Notch for Mobile */}
        {device === 'mobile' && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50" />
        )}
        
        {/* Scrollable Content */}
        <div className="w-full h-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

interface DeviceSelectorProps {
  currentDevice: 'desktop' | 'tablet' | 'mobile';
  onDeviceChange: (device: 'desktop' | 'tablet' | 'mobile') => void;
}

export function DeviceSelector({ currentDevice, onDeviceChange }: DeviceSelectorProps) {
  return (
    <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-2 flex gap-2 z-50 border border-gray-200">
      <button
        onClick={() => onDeviceChange('desktop')}
        className={`p-3 rounded-lg transition-colors ${
          currentDevice === 'desktop'
            ? 'bg-[#06211A] text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        title="Desktop"
      >
        <Monitor className="w-5 h-5" />
      </button>
      <button
        onClick={() => onDeviceChange('tablet')}
        className={`p-3 rounded-lg transition-colors ${
          currentDevice === 'tablet'
            ? 'bg-[#06211A] text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        title="Tablet"
      >
        <Tablet className="w-5 h-5" />
      </button>
      <button
        onClick={() => onDeviceChange('mobile')}
        className={`p-3 rounded-lg transition-colors ${
          currentDevice === 'mobile'
            ? 'bg-[#06211A] text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        title="Mobile"
      >
        <Smartphone className="w-5 h-5" />
      </button>
    </div>
  );
}
