function queueTime(customers, n) {
  let queueArr = new Array(n).fill(0);
  customers.forEach(el => {
    index = queueArr.indexOf(Math.min(...queueArr));
    queueArr[index] += el;
  });

  return Math.max(...queueArr);
}
