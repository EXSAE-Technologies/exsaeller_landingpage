import androidLogo from './assets/android.png';
export default function AndroidDownloadComponent() {
  return (                
    <a
      href="https://github.com/EXSAE-Technologies/exsaeller_landingpage/releases/download/v1.0.0/exsaeller-v1.0.0-app-release.apk"
      className="rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 flex items-center gap-2"
    >
      <img src={androidLogo} className='h-8 w-auto' alt='microsoft' />
      <span>Download for Android</span>
    </a>
  );
}