import microsoftLogo from './assets/microsoft.png';
export default function WindowsDownloadComponent() {
  return (                
    <a
      href="https://github.com/EXSAE-Technologies/exsaeller_landingpage/releases/download/v1.0.0/exsaeller-v1.0.0-x64-setup.exe"
      className="rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 flex items-center gap-2"
    >
      <img src={microsoftLogo} className='h-8 w-auto' alt='microsoft' />
      <span>Download for Windows</span>
    </a>
  );
}