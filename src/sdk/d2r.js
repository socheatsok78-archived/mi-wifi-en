import Base64 from './base64';

/**
 * File Download Protocol for Mi Wifi
 * http://s.miwifi.com/d2r/
 * http://d.miwifi.com/d2r/?url=
 * @param {string} url Base64 encoded download address, support (http, ftp, torrent, eMule, Thunder)
 * @param {string} name
 * @param {string} src
 */
export default function download(url, name, src) {
  const server = 'http://d.miwifi.com/d2r/?url=';
  const downloadLink = Base64.encodeURI(url);
  const source = `&src=${src}`;
  return `${server}${downloadLink}${source}`;
}
