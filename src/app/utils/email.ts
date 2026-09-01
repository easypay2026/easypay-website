import { toast } from "sonner";

export const fallbackCopy = (text: string) => {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    toast.success("Email copied to clipboard!");
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
};

export const handleEmailClick = (e: React.MouseEvent<HTMLElement>) => {
  // Check if the clicked element (or its wrapper) is an anchor tag
  const isAnchor = e.currentTarget.tagName.toLowerCase() === 'a';

  fallbackCopy("info@easypayx.com");

  // If it's a button (not an <a> tag), we need to manually simulate a top-level link click
  // to break out of iframe security restrictions that block window.location.href
  if (!isAnchor) {
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'mailto:info@easypayx.com';
      link.target = '_top';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 50);
  }
};
