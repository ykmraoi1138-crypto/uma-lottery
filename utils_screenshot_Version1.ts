// html2canvasなどのライブラリを利用してください
import html2canvas from "html2canvas";

export async function screenshotElement(element: HTMLElement): Promise<string> {
  const canvas = await html2canvas(element);
  return canvas.toDataURL("image/png");
}