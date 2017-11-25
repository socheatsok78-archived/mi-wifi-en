import $x from 'SDK/xpath';
import $ from 'jquery';
import _ from 'lodash';

$x('//*[@id="hd"]/div/div/h2').text('MiWifi Networks');
$x('//*[@id="root"]/div[1]/p').text('Internet');

setTimeout(() => {
  $x('//*[@id="root"]/div[3]/div/span[2]/em').text('Main Router');

/**
 * Firmware Versions
 */
  $('.rom-ver').show();

  const FirmwareVersionReplace = [
    {
      src: '系统版本',
      replace: 'Firmware Version'
    },
    {
      src: '稳定版',
      replace: 'Stable'
    },
    {
      src: '地址',
      replace: ' Address'
    },
  ];

  _.forEach(FirmwareVersionReplace, (value, index) => {
    let replaced = _.replace($('.rom-ver').text(), value.src, value.replace);
    $('.rom-ver').text(replaced);
  });

}, 3000);
