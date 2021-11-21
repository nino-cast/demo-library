import { format } from 'date-fns';

exports.renderClock = function (id) {
  const element = document.getElementById(id);
  setInterval(() => {
    element.innerHTML = format(new Date(), 'yyyy年MM月dd日 HH:mm:ss');
  }, 1000);
};
