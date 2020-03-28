(function (item) {
  Array.prototype.item = item;
  String.prototype.item = item;
  Object.getPrototypeOf(Uint8Array).prototype.item = item;
}(function item(n) {
  return n < 0 ? this[this.length + n] : this[n];
}));
