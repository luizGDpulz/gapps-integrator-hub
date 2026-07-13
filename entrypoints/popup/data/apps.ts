export interface GoogleApp {
  id: string;
  name: string;
  url: string;
  iconPath?: string;
  emojiFallback?: string;
}

export const initialApps: GoogleApp[] = [
  { id: 'account', name: 'Conta', url: 'https://myaccount.google.com', emojiFallback: '👤' },
  { id: 'gmail', name: 'Gmail', url: 'https://mail.google.com', iconPath: '/icons/gmail.svg' },
  { id: 'drive', name: 'Drive', url: 'https://drive.google.com', iconPath: '/icons/drive.svg' },
  { id: 'docs', name: 'Docs', url: 'https://docs.google.com', iconPath: '/icons/docs.svg' },
  { id: 'sheets', name: 'Sheets', url: 'https://docs.google.com/spreadsheets', iconPath: '/icons/sheets.svg' },
  { id: 'slides', name: 'Slides', url: 'https://docs.google.com/presentation', iconPath: '/icons/slides.svg' },
  { id: 'calendar', name: 'Agenda', url: 'https://calendar.google.com', iconPath: '/icons/calendar.svg' },
  { id: 'meet', name: 'Meet', url: 'https://meet.google.com', iconPath: '/icons/meet.svg' },
  { id: 'chat', name: 'Chat', url: 'https://chat.google.com', iconPath: '/icons/chat.svg' },
  { id: 'keep', name: 'Keep', url: 'https://keep.google.com', iconPath: '/icons/keep.svg' },
  { id: 'tasks', name: 'Tasks', url: 'https://tasks.google.com', iconPath: '/icons/tasks.svg' },
  { id: 'forms', name: 'Forms', url: 'https://docs.google.com/forms', iconPath: '/icons/forms.svg' },
  { id: 'sites', name: 'Sites', url: 'https://sites.google.com', iconPath: '/icons/sites.svg' },
  { id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com', iconPath: '/icons/gemini.png' },
  { id: 'notebooklm', name: 'NotebookLM', url: 'https://notebooklm.google.com', iconPath: '/icons/notebooklm.svg' },
  { id: 'appsheet', name: 'AppSheet', url: 'https://www.appsheet.com', iconPath: '/icons/appsheet.svg' },
  { id: 'vids', name: 'Vids', url: 'https://workspace.google.com/products/vids/', iconPath: '/icons/vids.svg' },
  { id: 'youtube', name: 'YouTube', url: 'https://www.youtube.com', emojiFallback: '▶️' },
  { id: 'maps', name: 'Maps', url: 'https://maps.google.com', emojiFallback: '📍' },
];
