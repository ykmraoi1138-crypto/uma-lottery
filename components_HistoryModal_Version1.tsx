import Icon from "./Icon";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  history: string[][];
};

export default function HistoryModal({ open, setOpen, history }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 min-w-[320px] max-w-[90vw]">
        <h2 className="text-xl font-bold mb-2">抽選履歴</h2>
        <ul className="mt-2">
          {history.slice(-5).map((ids, idx) => (
            <li key={idx} className="mb-1 text-sm">
              {ids.join("、")}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-4 justify-end">
          <button className="bg-gray-300 rounded px-4 py-1" onClick={() => setOpen(false)}>
            <Icon name="close" /> 閉じる
          </button>
        </div>
      </div>
    </div>
  );
}