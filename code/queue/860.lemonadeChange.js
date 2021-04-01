/**
 * 860. 柠檬水找零
 */

// 解题思路：
// 如果顾客给我们的是10块钱，那我们只能找5块钱，如果给我们的是20，那我们可以找 3 * 5 or 10 + 5
// 为了后面更方便的找零，我们手上要尽可能留5块钱零钱，所以找20块的时候，我们优先找 10 + 5
// 我们只需要记录5块钱、10块钱、20块钱的数量即可

export default bills => {
	let cnt5 = 0,
		cnt10 = 0;
	for (let i = 0; i < bills.length; i++) {
		switch (bills[i]) {
			case 5:
				cnt5 += 1;
				break;
			case 10:
				if (cnt5 === 0) return false;
				cnt5 -= 1;
				cnt10 += 1;
				break;
			case 20:
				if (cnt10 && cnt5) {
					cnt10 -= 1;
					cnt5 -= 1;
				} else if (cnt5 >= 3) {
					cnt5 -= 3;
				} else {
					return false;
				}
				break;
		}
	}
	return true;
};
