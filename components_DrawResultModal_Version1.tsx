import Icon from "./Icon";
import { Character } from "../types";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  result: {
    pu: Character[];
    random: Character[];
    all: Character[];
  };
  onShare: () => void;
};

export default function DrawResultModal({ open, setOpen, result, onShare }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 min-w-[320px] max-w-[90vw]">
        <h2 className="text-xl font-bold mb-2">抽選結果</h2>
        <div className="flex gap-6">
          <div>
            <div className="font-semibold text-blue-600">PU抽選</div>
            <ul className="mt-2">
              {result.pu.map(c => (
                <li key={c.id} className="flex items-center gap-2">
                  <img src={c.list_thumb} alt={c.name} className="w-8 h-8 rounded-full" />
                  <span className="font-bold text-blue-500">{c.name} (PU)</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-700">ランダム抽選</div>
            <ul className="mt-2">
              {result.random.map(c => (
                <li key={c.id} className="flex items-center gap-2">
                  <img src={c.list_thumb} alt={c.name} className="w-8 h-8 rounded-full" />
                  <span>{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-2 mt-4 justify-end">
          <button className="bg-green-500 text-white rounded px-4 py-1" onClick={onShare}>
            <Icon name="share" /> 結果を共有
          </button>
          <button className="bg-gray-300 rounded px-4 py-1" onClick={() => setOpen(false)}>
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}