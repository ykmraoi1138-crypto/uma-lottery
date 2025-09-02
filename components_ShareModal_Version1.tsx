import { useRef } from "react";
import Icon from "./Icon";
import { screenshotElement } from "../utils/screenshot";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  text: string;
  result: any;
};

export default function ShareModal({ open, setOpen, text, result }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleScreenshot = async () => {
    if (ref.current) {
      const img = await screenshotElement(ref.current);
      // 画像をダウンロード or SNS投稿処理
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 min-w-[320px] max-w-[90vw]" ref={ref}>
        <div className="mb-2">{text}</div>
        <div className="flex gap-2 mt-4 justify-end">
          <button className="bg-blue-500 text-white rounded px-4 py-1" onClick={handleScreenshot}>
            <Icon name="photo_camera" /> スクショ作成
          </button>
          <button className="bg-gray-300 rounded px-4 py-1" onClick={() => setOpen(false)}>
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}