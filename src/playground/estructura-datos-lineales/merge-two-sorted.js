class ListNode {
  constructor(value) {
    this.value = value === undefined ? null : value;
    this.next;
  }
}

const mergeTwoList = (list1, list2) => {
  let x = list1.value;
  let y = list1.value;
  let z = new ListNode(0);
  let dummy = z;
  while (x && y) {
    if (x.value <= y.value) {
      dummy.next = x;
      x = x.next;
    } else {
      dummy.next = y;
      y = y.next;
    }
    dummy = dummy.next;
  }
  if (x) {
    dummy.next = x;
  }
  if (y) {
    dummy.next = y;
  }
  return z.next;
};
