import { Base64 } from 'js-base64';
import forEach from 'lodash/forEach';

/**
 * File Download Protocol for Mi Wifi
 * http://s.miwifi.com/d2r/
 * http://d.miwifi.com/d2r/?url=
 * @param {string} url Base64 encoded download address, support (http, ftp, torrent, eMule, Thunder)
 * @returns {string}
 */
export default function download(url) {
  const server = 'https://d.miwifi.com/d2r/?url=';
  
  /**
   * Validating URL
   */
  try {
    let downloadLink = new URL(url);
    let filename = `&name=${getFilename(downloadLink)}`;
    let source = `&src=${downloadLink.hostname}`;
    let hash = Base64.encodeURI(url);

    /**
     * Sending to Xiaomi Server
     */
    return `${server}${hash}${filename}${source}`;
  } catch (e) {
    /**
     * Report invalid url to the user
     */
    alert(e);
    return false;
  }

}

/**
 * Get filename based on url
 * @param {URL} url
 * @returns {string}
 */
function getFilename(url) {
  let file = url.pathname.split('/');
  return `remote-${file[file.length - 1]}.${getExtension(url)}`;
}

/**
 * Try to guest file extension based on url
 * @param {URL} url
 * @returns {string}
 */
function getExtension(url) {
  let pathname = url.pathname;
  let defaultExtension = 'ext';
  const pattern = /(?:\.(\w+\D))$/i;

  let extension = defaultExtension;
  if (pattern.test(pathname)) {
    extension = pathname.match(pattern)[1];
  }

  return extension;
}
