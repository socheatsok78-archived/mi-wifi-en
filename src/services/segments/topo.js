import $x from 'SDK/xpath';
import $ from 'jquery';
import forEach from 'lodash/forEach';
import replace from 'lodash/replace';

$('title').text('MiWifi Networks');
$x('//*[@id="hd"]/div/div/h2').text('MiWifi Networks');
$x('//*[@id="root"]/div[1]/p').text('Internet');

/**
 * Hide Contact information (temporary)
 */
$('#ft > p').hide();

setTimeout(() => {
  $x('//*[@id="root"]/div[3]/div/span[2]/em').text('Main Router');

/**
 * Firmware Versions
 */
  $('.rom-ver').show();

  const translationNodes = [
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

  forEach(translationNodes, (value, index) => {
    let replaced = replace($('.rom-ver').text(), value.src, value.replace);
    $('.rom-ver').text(replaced);
  });

}, 3000);
