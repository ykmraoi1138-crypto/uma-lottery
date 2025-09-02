type Props = {
  selectedIds: string[];
  setSelectedIds: (ids: string[]) => void;
  banIds: string[];
  setBanIds: (ids: string[]) => void;
  drawCountPU: number;
  drawCountRandom: number;
};

export default function DrawSettingPanel({
  selectedIds,
  setSelectedIds,
  banIds,
  setBanIds,
  drawCountPU,
  drawCountRandom,
}: Props) {
  return (
    <div className="flex gap-8 mb-4 items-center justify-center w-full max-w-4xl">
      {/* PU抽選 */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">PU抽選</span>
        <input
          type="number"
          min={1}
          max={selectedIds.length}
          value={drawCountPU}
          className="w-12 p-1 border rounded"
          onChange={e => {/* set PU count logic */}}
        />
      </div>
      {/* BAN設定 */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">BAN</span>
        <button className="bg-gray-200 rounded px-2 py-1 text-xs">過去履歴よりBAN</button>
      </div>
      {/* ランダム抽選 */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">ランダム</span>
        <input
          type="number"
          min={1}
          max={99}
          value={drawCountRandom}
          className="w-12 p-1 border rounded"
          onChange={e => {/* set random count logic */}}
        />
      </div>
    </div>
  );
}