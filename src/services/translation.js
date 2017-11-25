/**
 * Wait for Document to loaded
 */
window.addEventListener('load', () => {
  console.log('Translation Services: Started!');
  
  /** Inject Font families */
  require('./font');

  /**
   * Mi Wifi Topology
   */
  require('./segments/topo');
});
