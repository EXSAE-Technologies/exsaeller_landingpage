import AndroidDownloadComponent from "./android_download_component";
import WindowsDownloadComponent from "./windows_download_component";
import ReactMarkdown from "react-markdown";

export default function ReleaseComponent({ release }) {
  const renderAsset = (asset) => {
    if (asset.name.endsWith(".apk")) {
      return <AndroidDownloadComponent key={asset.id} asset={asset} />;
    } else if (asset.name.endsWith(".exe")) {
      return <WindowsDownloadComponent key={asset.id} asset={asset} />;
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">{release.name}</h1>
      <p className="text-lg text-gray-600">{release.tag_name}</p>
      <div className="flex flex-row gap-4">
        {release.assets.map(renderAsset)}
      </div>
      <ReactMarkdown>{release.body}</ReactMarkdown>
    </div>
  );
}
