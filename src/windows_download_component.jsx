import microsoftLogo from './assets/microsoft.png';

export default function WindowsDownloadComponent({ asset }) {
  function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  return (
    <a
      href={asset.browser_download_url}
      className="rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 flex items-center gap-2"
    >
      <img src={microsoftLogo} className="h-8 w-auto" alt="microsoft" />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">Download for Windows</span>
        <span className="text-sm">
          {formatBytes(asset.size)}
        </span>
      </div>
    </a>
  );
}
