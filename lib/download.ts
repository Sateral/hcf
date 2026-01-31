export const downloadFile = (path: string, filename?: string) => {
  if (typeof document === "undefined") {
    return;
  }

  const link = document.createElement("a");
  link.href = path;

  if (filename) {
    link.setAttribute("download", filename);
  }

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
