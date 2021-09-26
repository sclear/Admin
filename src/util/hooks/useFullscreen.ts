/* eslint-disable @typescript-eslint/no-explicit-any */

function openFullscreen(element?: any) {
  const el: any =
    element instanceof HTMLElement ? element : document.documentElement;
  const rfs =
    el.requestFullscreen ||
    el.webkitRequestFullscreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullscreen;
  if (rfs) {
    rfs.call(el);
  } else if (window.ActiveXObject) {
    const ws = new ActiveXObject("WScript.Shell");
    ws && ws.SendKeys("{F11}");
  }
}

type Idocument = {
  webkitExitFullscreen?: string;
  mozCancelFullScreen?: string;
  msExitFullscreen?: string;
  call: (document: Document) => unknown;
} & Document;
function exitFullscreen() {
  const efs: any =
    (document as Idocument).exitFullscreen ||
    (document as Idocument).webkitExitFullscreen ||
    (document as Idocument).mozCancelFullScreen ||
    (document as Idocument).msExitFullscreen;
  if (efs) {
    efs.call(document);
  } else if (window.ActiveXObject) {
    const ws = new ActiveXObject("WScript.Shell");
    ws && ws.SendKeys("{F11}");
  }
}

export default function useFullscreen(): {
  openFullscreen: (element?: any) => void;
  exitFullscreen: () => void;
} {
  return {
    openFullscreen,
    exitFullscreen,
  };
}
