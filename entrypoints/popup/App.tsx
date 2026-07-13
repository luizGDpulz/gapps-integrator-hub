import { useState } from 'react';
import { initialApps, GoogleApp } from './data/apps';
import { browser } from 'wxt/browser';

export default function App() {
  const [apps] = useState<GoogleApp[]>(initialApps);

  const handleAppClick = async (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    
    // e.button === 0 is left click
    // e.button === 1 is middle click
    if (e.button === 1 || e.ctrlKey || e.metaKey) {
      // Open in new tab
      await browser.tabs.create({ url });
    } else if (e.button === 0) {
      // Open in current active tab
      const [activeTab] = await browser.tabs.query({ active: true, currentWindow: true });
      if (activeTab && activeTab.id) {
        await browser.tabs.update(activeTab.id, { url });
      } else {
        await browser.tabs.create({ url });
      }
    }
  };

  return (
    <div className="flex flex-col w-[350px] min-h-[450px] bg-google-bg text-white p-4">
      <div className="flex justify-between items-center mb-6 px-2">
        <h1 className="text-lg font-medium text-gray-200">Seus favoritos</h1>
        <button 
          className="p-2 rounded-full bg-google-surface hover:bg-google-hover transition-colors"
          title="Editar (Em breve)"
        >
          {/* Edit icon placeholder */}
          <span className="text-sm">✏️</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-y-6 gap-x-2">
        {apps.map((app) => (
          <a
            key={app.id}
            href={app.url}
            onMouseDown={(e) => handleAppClick(e, app.url)}
            className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-google-hover transition-all duration-200 group cursor-pointer no-underline"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-google-surface mb-2 shadow-sm group-hover:scale-105 transition-transform">
              {app.iconPath ? (
                <img src={app.iconPath} alt={app.name} className="w-8 h-8" />
              ) : (
                <span className="text-2xl">{app.emojiFallback}</span>
              )}
            </div>
            <span className="text-xs text-gray-300 font-medium truncate w-full text-center">
              {app.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
