import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Downloader from 'SDK/d2r';

// loads the Icon plugin
UIkit.use(Icons);

/**
 * Detect filename from given url
 * @param {string} url
 */
function detectFilename(url) {
  const array = url.split('/');
  return array[array.length - 1];
}

/**
 * Handling Clipboard event
 * @param {ClipboardEvent} event
 */
function downloadToRouter(event) {
  /**
     * Stop Data being paste onto the element
     */
  event.stopPropagation();
  event.preventDefault();

  const clipboard = event.clipboardData || window.clipboardData;
  const data = clipboard.getData('Text');

  try {
    const url = new URL(data);

    /**
     * Prepare data to send to remote router
     */
    const filename = detectFilename(url.pathname);
    const downloadURL = data;

    /**
     * Opening page
     */
    chrome.tabs.create({
      url: Downloader(downloadURL, filename, url.hostname),
    });
  } catch (e) { console.info('Your url is not valid', e); }
}

window.addEventListener('paste', downloadToRouter);
