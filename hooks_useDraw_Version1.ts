import { useState } from "react";
import { Character } from "../types";

export function useDraw(characters: Character[]) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [banIds, setBanIds] = useState<string[]>([]);
  const [drawCountPU, setDrawCountPU] = useState<number>(1);
  const [drawCountRandom, setDrawCountRandom] = useState<number>(1);
  const [drawResult, setDrawResult] = useState<{ pu: Character[]; random: Character[]; all: Character[] }>({ pu: [], random: [], all: [] });
  const [openResult, setOpenResult] = useState(false);

  // PU抽選
  const puTargets = characters.filter(c => selectedIds.includes(c.id) && !banIds.includes(c.id));
  // ランダム抽選
  const randomTargets = characters.filter(c => !banIds.includes(c.id));

  const draw = () => {
    // ランダム抽選
    const randomDraw = shuffle(randomTargets).slice(0, drawCountRandom);
    // PU抽選
    const puDraw = shuffle(puTargets).slice(0, drawCountPU);
    setDrawResult({
      pu: puDraw,
      random: randomDraw,
      all: [...puDraw, ...randomDraw],
    });
  };

  return {
    selectedIds,
    setSelectedIds,
    banIds,
    setBanIds,
    drawCountPU,
    setDrawCountPU,
    drawCountRandom,
    setDrawCountRandom,
    drawResult,
    draw,
    openResult,
    setOpenResult,
  };
}

// シャッフル関数
function shuffle<T>(arr: T[]): T[] {
  return arr
    .map((v) => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}