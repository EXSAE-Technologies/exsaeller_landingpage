import microsoftLogo from './assets/microsoft.png';
export default function WindowsDownloadComponent() {
  return (                
    <a
      href="#"
      className="rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 flex items-center gap-2"
    >
      <img src={microsoftLogo} className='h-8 w-auto' alt='microsoft' />
      <span>Download for Windows</span>
    </a>
  );
}