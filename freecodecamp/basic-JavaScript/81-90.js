let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    default:
      break;
  }

  return count > 0 ? count + " Bet" : count + " Hold";
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
