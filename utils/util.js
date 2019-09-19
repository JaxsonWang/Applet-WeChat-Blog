/**
 * 时间格式化
 * @param date 时间
 * @param type 转换类型 all
 * @returns {string}
 */
const formatTime = (date, type) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let hostHour = '';
  if (type === 'all') {
    hostHour = ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
  return [year, month, day].map(formatNumber).join('-') + hostHour
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n
};

module.exports = {
  formatTime: formatTime
};
