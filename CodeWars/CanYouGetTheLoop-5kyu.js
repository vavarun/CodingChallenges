function loop_size(node) {
  var loopArr = [];

  while (node && loopArr.indexOf(node) < 0) {
    loopArr.push(node);

    node = node.next;
  }
  var firstIndex = Math.max(0, loopArr.indexOf(node));
  return loopArr.length - firstIndex;
}
