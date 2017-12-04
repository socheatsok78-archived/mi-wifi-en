import Downloader from 'SDK/d2r'

/**
 * Sending link to router
 * @param {object} info
 * @param {object} tab
 * @returns {void}
 */
function requestRouterDownload (info, tab) {
  const url = info.srcUrl || info.linkUrl || info.selectionText
  chrome.tabs.create({
    url: Downloader(url)
  })

  console.log('requestRouterDownload: tab', tab)
}

/**
 * Creating Context Menu
 */
chrome.contextMenus.create({
  title: 'Send to MiWifi',
  contexts: ['selection', 'link', 'image', 'video', 'audio'],
  onclick: requestRouterDownload
})
