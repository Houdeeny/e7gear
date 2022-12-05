window.onload = function() {
	var reforge = getReforge(5);

	if (isReforged()) {
		var select_enc_lv = document.getElementById("gear-enc-lv");
		select_enc_lv.selectedIndex = 5;
	}

	var substate_max = getSubstatMax();
	var coff = getSubstatMaxCoff();

	if (isReforged()) {
		document.getElementById("atkper").placeholder = "0% - " + (substate_max[0] * coff + reforge[0]) + "%";
		document.getElementById("defper").placeholder = "0% - " + (substate_max[1] * coff + reforge[1]) + "%";
		document.getElementById("hpper").placeholder = "0% - " + (substate_max[2] * coff + reforge[2]) + "%";
		document.getElementById("eff").placeholder = "0% - " + (substate_max[3] * coff + reforge[3]) + "%";
		document.getElementById("res").placeholder = "0% - " + (substate_max[4] * coff + reforge[4]) + "%";
		document.getElementById("critdmg").placeholder = "0% - " + (substate_max[5] * coff + reforge[5]) + "%";
		document.getElementById("critch").placeholder = "0% - " + (substate_max[6] * coff + reforge[6]) + "%";
		document.getElementById("spd").placeholder = "0 - " + (substate_max[7] * coff + reforge[7]);
		document.getElementById("atkflat").placeholder = "0 - " + (substate_max[8] * coff + reforge[8]);
		document.getElementById("defflat").placeholder = "0 - " + (substate_max[9] * coff + reforge[9]);
		document.getElementById("hpflat").placeholder = "0 - " + (substate_max[10] * coff + reforge[10]);
	} else {
		document.getElementById("atkper").placeholder = "0% - " + substate_max[0] * coff + "%";
		document.getElementById("defper").placeholder = "0% - " + substate_max[1] * coff + "%";
		document.getElementById("hpper").placeholder = "0% - " + substate_max[2] * coff + "%";
		document.getElementById("eff").placeholder = "0% - " + substate_max[3] * coff + "%";
		document.getElementById("res").placeholder = "0% - " + substate_max[4] * coff + "%";
		document.getElementById("critdmg").placeholder = "0% - " + substate_max[5] * coff + "%";
		document.getElementById("critch").placeholder = "0% - " + substate_max[6] * coff + "%";
		document.getElementById("spd").placeholder = "0 - " + substate_max[7] * coff;
		document.getElementById("atkflat").placeholder = "0 - " + substate_max[8] * coff;
		document.getElementById("defflat").placeholder = "0 - " + substate_max[9] * coff;
		document.getElementById("hpflat").placeholder = "0 - " + substate_max[10] * coff;
	}

	switch (getGearType()) {
		case 1:
			document.getElementById("gear-type").style = "color:BLACK; font-weight: bold;";
			break;
		case 2:
			document.getElementById("gear-type").style = "color:BLUE; font-weight: bold;";
			break;
		case 3:
			document.getElementById("gear-type").style = "color:HOTPINK; font-weight: bold;";
			break;
		case 4:
			document.getElementById("gear-type").style = "color:RED; font-weight: bold;";
			break;
	}
};

function getSubstatName(id) {
	switch (id) {
		case 0:
			return "Attack %";
		case 1:
			return "Defense %";
		case 2:
			return "Health %";
		case 3:
			return "Effectiveness";
		case 4:
			return "Effect Resistance";
		case 5:
			return "Critical Damage";
		case 6:
			return "Critical Chance";
		case 7:
			return "Speed";
		case 8:
			return "Flat Attack";
		case 9:
			return "Flat Defense";
		case 10:
			return "Flat Health";
		default:
			return "Substat(" + id + ")";
	}
}

function getGearEncLevel() {
	var select = document.getElementById("gear-enc-lv");
	var options = select.options;
	var selected = options[options.selectedIndex].id;

	if (selected === "g0") {
		return 1;
	} else if (selected === "g3") {
		return 2;
	} else if (selected === "g6") {
		return 3;
	} else if (selected === "g9") {
		return 4;
	} else if (selected === "g12") {
		return 5;
	} else if (selected === "g15") {
		return 6;
	}
	return 0;
}

function getScoreThreshold() {
	switch (getGearEncLevel()) {
		case 1:
			return 70;
		case 2:
			return 70;
		case 3:
			return 65;
		case 4:
			return 60;
		case 5:
			return 55;
		case 6:
			return 50;
	}
	return 70;
}

// 1 - normal, 2 - rare, 3 - hero, 4 - legend
function getGearType() {

	var select = document.getElementById("gear-type");
	var options = select.options;
	var selected = options[options.selectedIndex].id;

	switch (selected) {
		case "gwhite":
			return 1;
		case "gblue":
			return 2;
		case "gpink":
			return 3;
		case "gred":
			return 4;
	}

	alert("fatal error in getGearType()");
	return 0;
}

function getGearLevel() {

	var select = document.getElementById("gear-lv");
	var options = select.options;
	var selected = options[options.selectedIndex].id;

	switch (selected) {
		case "lv70":
			return "70";
		case "lv85":
			return "85";
		case "lv90r":
			return "90r";
		case "lv90":
			return "90";
	}

	return "0";
}

// 0. atk%, 1. def%, 2. hp%, 3. eff%, 4. res%
// 5. critdmg
// 6. critch
// 7. spd
// 8. atk flat, 9. def flat, 10. hp flat
function getSubstatMax() {

	switch (getGearLevel()) {
		case "70":
			return [7, 7, 7, 7, 7,
				6, 4, 4,
				42, 30, 180
			];
		case "85":
		case "90r":
			return [8, 8, 8, 8, 8,
				7, 5, 5,
				47, 34, 202
			];
		case "90":
			return [9, 9, 9, 9, 9,
				8, 6, 5,
				50, 36, 220
			];
	}

	alert("fatal error in getSubstatMax()");
	return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function getSubstatMin() {

	var select = document.getElementById("gear-lv");
	var options = select.options;
	var selected = options[options.selectedIndex].id;

	switch (selected) {
		case "lv70":
			return [3, 3, 3, 3, 3,
				3, 2, 1,
				28, 23, 124
			];
		case "lv85":
		case "lv90r":
			return [4, 4, 4, 4, 4,
				3, 3, 1,
				30, 25, 147
			];
		case "lv90":
			return [5, 5, 5, 5, 5,
				4, 3, 2,
				32, 27, 170
			];
	}

	alert("fatal error in getSubstatMin()");
	return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

// 0. atk%, 1. def%, 2. hp%, 3. eff%, 4. res%
// 5. critdmg
// 6. critch
// 7. spd
// 8. atk flat, 9. def flat, 10. hp flat
function getReforge(roll) {
	switch (roll) {
		case 0:
			return [1, 1, 1, 1, 1, 1, 1, 0, 11, 9, 56];
		case 1:
			return [3, 3, 3, 3, 3, 2, 2, 1, 18, 14, 81];
		case 2:
			return [4, 4, 4, 4, 4, 3, 3, 2, 24, 20, 112];
		case 3:
			return [5, 5, 5, 5, 5, 4, 4, 3, 30, 25, 147];
		case 4:
			return [7, 7, 7, 7, 7, 5, 5, 4, 38, 29, 173];
		case 5:
			return [8, 8, 8, 8, 8, 6, 6, 5, 47, 34, 202];
		default:
			return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
}

function getSubstat() {

	var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	data[0] = parseInt(document.getElementById("atkper").value);
	data[1] = parseInt(document.getElementById("defper").value);
	data[2] = parseInt(document.getElementById("hpper").value);
	data[3] = parseInt(document.getElementById("eff").value);
	data[4] = parseInt(document.getElementById("res").value);
	data[5] = parseInt(document.getElementById("critdmg").value);
	data[6] = parseInt(document.getElementById("critch").value);
	data[7] = parseInt(document.getElementById("spd").value);
	data[8] = parseInt(document.getElementById("atkflat").value);
	data[9] = parseInt(document.getElementById("defflat").value);
	data[10] = parseInt(document.getElementById("hpflat").value);

	return data;

}

function getSubstatCount() {

	var data = getSubstat();
	var total_substat_count = 0;

	for (var idx = 0; idx < 11; idx++) {
		if (!isNaN(data[idx]) && data[idx] > 0) {
			total_substat_count++;
		}
	}

	return total_substat_count;
}

function getMultiplier() {
	return getGearEncLevel() + getGearType() - 1;
}

function getRequiredDataCount() {

	var gear_type = getGearType();
	var gear_enc_lv = getGearEncLevel();

	if (gear_type === 1) {
		return gear_enc_lv >= 4 ? 4 : gear_enc_lv;
	} else if (gear_type === 2) {
		if (gear_enc_lv < 4) {
			return 2;
		} else if (gear_enc_lv === 4) {
			return 3;
		} else {
			return 4;
		}
	} else if (gear_type === 3) {
		return (gear_enc_lv <= 4 ? 3 : 4);
	} else {
		return 4;
	}
}

function getSubstatMaxCoff() {

	var coff = 1;
	var gear_type = getGearType();
	var gear_enc_lv = getGearEncLevel();

	if (gear_type === 1) {
		switch (gear_enc_lv) {
			case 1:
			case 2:
			case 3:
			case 4:
				coff = 1;
				break;
			case 5:
				coff = 2;
				break;
			case 6:
				coff = 3;
				break;
			default:
				coff = 3;
		}
	}
	if (gear_type === 2) {
		switch (gear_enc_lv) {
			case 1:
				coff = 1;
				break;
			case 2:
				coff = 2;
				break;
			case 3:
			case 4:
			case 5:
				coff = 3;
				break;
			case 6:
				coff = 4;
				break;
			default:
				coff = 4;
		}
	}
	if (gear_type === 3) {
		switch (gear_enc_lv) {
			case 1:
				coff = 1;
				break;
			case 2:
				coff = 2;
				break;
			case 3:
				coff = 3;
				break;
			case 4:
			case 5:
				coff = 4;
				break;
			case 6:
				coff = 5;
				break;
			default:
				coff = 5;
		}
	}
	if (gear_type === 4) {
		switch (gear_enc_lv) {
			case 1:
				coff = 1;
				break;
			case 2:
				coff = 2;
				break;
			case 3:
				coff = 3;
				break;
			case 4:
				coff = 4;
				break;
			case 5:
				coff = 5;
				break;
			case 6:
				coff = 6;
				break;
			default:
				coff = 6;
		}
	}

	return coff;
}

function isReforged() {
	var select_lv = document.getElementById("gear-lv");
	var options_lv = select_lv.options;
	var selected_lv = options_lv[options_lv.selectedIndex].id;
	var reforge = getReforge(5);

	// reforge gear must be +15
	if (selected_lv === "lv90r") {
		return true;
	}

	return false;
}

function validate() {

	// 0. atk%, 1. def%, 2. hp%, 3. eff%, 4. res%
	// 5. critdmg
	// 6. critch
	// 7. spd
	// 8. atk flat, 9. def flat, 10. hp flat
	var data = getSubstat();
	var substat_min = getSubstatMin();
	var totaldata = 0;
	var substat_name = "";
	var reforgeMin = getReforge(0);

	// check min
	for (var idx = 0; idx < 11; idx++) {

		if (isNaN(data[idx])) {
			data[idx] = 0;
		}

		if (data[idx] < 0) {
			switch (idx) {
				case 0:
					err("ERROR! Attack (" + data[idx] + "%) cannot be negative.");
					break;
				case 1:
					err("ERROR! Defense (" + data[idx] + "%) cannot be negative.");
					break;
				case 2:
					err("ERROR! Health (" + data[idx] + "%) cannot be negative.");
					break;
				case 3:
					err("ERROR! Effectiveness (" + data[idx] + "%) cannot be negative.");
					break;
				case 4:
					err("ERROR! Effect Resistance (" + data[idx] + "%) cannot be negative.");
					break;
				case 5:
					err("ERROR! Critical Damage (" + data[idx] + "%) cannot be negative.");
					break;
				case 6:
					err("ERROR! Critical Chance (" + data[idx] + "%) cannot be negative.");
					break;
				case 7:
					err("ERROR! Speed (" + data[idx] + ") cannot be negative.");
					break;
				case 8:
					err("ERROR! Flat Attack (" + data[idx] + ") cannot be negative.");
					break;
				case 9:
					err("ERROR! Flat Defense (" + data[idx] + ") cannot be negative.");
					break;
				case 10:
					err("ERROR! Flat Health (" + data[idx] + ") cannot be negative.");
					break;
			}
			return -1;
		}
	}

	// check total number of data
	for (var idx = 0; idx < 11; idx++) {

		var min = 0;

		if (isNaN(data[idx]) || data[idx] <= 0) {
			continue;
		}

		totaldata++;

		if (isReforged()) {
			min = substat_min[idx] + reforgeMin[idx];
		} else {
			min = substat_min[idx];
		}

		if (data[idx] > 0 && data[idx] < min) {
			err("ERROR! " + getSubstatName(idx) + " (" + data[idx] + ") must be larger than " + min);
			return -1;
		}
	}

	// check if data count meet the requirement 
	if (totaldata != getRequiredDataCount()) {
		err("ERROR! The specified gear setting requires " + getRequiredDataCount() + " substat(s).");
		return -1;
	}

	return 0;
}

function calc() {

	err("");

	if (validate() !== 0) {
		return;
	}

	// 0. atk%, 1. def%, 2. hp%, 3. eff%, 4. res%
	// 5. critdmg
	// 6. critch
	// 7. spd
	// 8. atk flat, 9. def flat, 10. hp flat
	var data = getSubstat();
	var valid_data_size = 0;

	for (var idx = 0; idx < 11; idx++) {

		if (isNaN(data[idx]) || data[idx] <= 0) {
			continue;
		}

		valid_data_size++;
	}

	switch (valid_data_size) {
		case 1:
			cal1();
			break;
		case 2:
			cal2();
			break;
		case 3:
			cal3();
			break;
		case 4:
			cal4();
			break;
		default:
			console.log("Debug error, valid_data_size " + valid_data_size + " does not support.");
			return;
	}
}

function cal1() {

	var total_enc_times = getMultiplier();
	var enc_time = [0, 0];
	var score = 0;

	enc_time[0] = total_enc_times;

	// check if such combination larger than minimum substate
	if (checkSubstatmin(enc_time) === false) {
		return;
	}

	score = calcScore(enc_time);

	if (score === false) {
		err(getPossibleErrorDesc(enc_time));
	} else {
		report(enc_time, score);
	}
}

function cal2() {

	var total_enc_times = getMultiplier();
	var enc_time = [0, 0];
	var best_score_enc_time = [0, 0];
	var score, best_score = -1;

	// find all the combination
	for (var i = 1; i <= total_enc_times; i++) {
		enc_time[0] = i;
		enc_time[1] = total_enc_times - enc_time[0];

		// illegal combination
		if (enc_time[1] <= 0) {
			continue;
		}

		// check if such combination larger than minimum substate
		if (checkSubstatmin(enc_time) === false) {
			// console.log( "[cal2] checkSubstatmin( " + enc_time[0] + "," + enc_time[1] + ") return false"  );
			continue;
		}

		score = calcScore(enc_time);

		// console.log( "[cal2] score=" + score );

		if (score !== false && (best_score === 0 || best_score < score)) {
			best_score = score;
			best_score_enc_time = enc_time.slice();
		}
	}

	if (best_score < 0) {
		err(getPossibleErrorDesc(enc_time));
	} else {
		report(best_score_enc_time, best_score);
	}
}

function cal3() {

	var total_enc_times = getMultiplier();
	var enc_time = [0, 0, 0];
	var score;
	var best_score_enc_time = [0, 0, 0];
	var score, best_score = -1;

	// find all the combination
	for (var i = 1; i <= total_enc_times; i++) {
		enc_time[0] = i;

		for (var j = 1; j <= total_enc_times - enc_time[0]; j++) {
			enc_time[1] = j;

			if (total_enc_times - enc_time[0] - enc_time[1] > 0) {
				enc_time[2] = total_enc_times - enc_time[0] - enc_time[1];

				// check if such combination larger than minimum substate
				if (checkSubstatmin(enc_time) === false) {
					continue;
				}

				// calculate the score
				score = calcScore(enc_time);

				if (score !== false && (best_score === 0 || best_score < score)) {
					best_score = score;
					best_score_enc_time = enc_time.slice();
				}
			}
		}
	}

	if (best_score < 0) {
		err(getPossibleErrorDesc(enc_time));
	} else {
		report(best_score_enc_time, best_score);
	}
}

function cal4() {

	var total_enc_times = getMultiplier();
	var enc_time = [0, 0, 0, 0];
	var score;
	var best_score_enc_time = [0, 0, 0, 0];
	var score, best_score = -1;

	// find all the combination
	for (var i = 1; i <= total_enc_times; i++) {
		enc_time[0] = i;

		for (var j = 1; j <= total_enc_times - enc_time[0]; j++) {
			enc_time[1] = j;

			for (var k = 1; k <= total_enc_times - enc_time[0] - enc_time[1]; k++) {
				enc_time[2] = k;

				if (total_enc_times - enc_time[0] - enc_time[1] - enc_time[2] > 0) {
					enc_time[3] = total_enc_times - enc_time[0] - enc_time[1] - enc_time[2];

					// check if such combination larger than minimum substate
					if (checkSubstatmin(enc_time) === false) {
						continue;
					}

					// calculate the score
					score = calcScore(enc_time);

					// console.log( "cal4, score:" + score );

					if (score !== false && (best_score === 0 || best_score < score)) {
						best_score = score;
						best_score_enc_time = enc_time.slice();
					}
				}
			}
		}
	}

	if (best_score < 0) {
		err(getPossibleErrorDesc(enc_time));
	} else {
		report(best_score_enc_time, best_score);
	}
}

function getPossibleErrorDesc(enc_time) {

	var str = "";
	var data = getSubstat();
	var hasFlatSubstat = false;

	var select = document.getElementById("gear-lv");
	var options = select.options;
	var gear_lv = options[options.selectedIndex].id;

	for (var idx = 0; idx < 11; idx++) {
		if (isNaN(data[idx]) || data[idx] <= 0) {
			continue;
		}

		if (idx === 8 || idx === 9 || idx === 10) {
			hasFlatSubstat = true;
		}
	}
	str = "ERROR! Substat(s) value does not match the gear type or the enhance level.";

	if (getMinTotalEncTime(enc_time) > getMultiplier()) {
		str = str + " The substats requires at least " +
			(getMinTotalEncTime(enc_time) - getSubstatCount()) + " upgrade, but it only did " +
			(getMultiplier() - getSubstatCount()) + " times.";
	}

	if (gear_lv === 'lv90') {
		str = str + " If the gear was Lv88 gear bought from arena, set to Lv85 gear and try again.";
	}

	if (hasFlatSubstat) {
		str = str + " We don't know the exact range for the flat substat, so the error might also caused by the wrong flat substat setting in this tool.";
	}

	return str;
}

function getMinTotalEncTime(enc_time) {

	var data = getSubstat();
	var total_enc_time = 0;
	var substat_max = getSubstatMax();

	// adjust for the reforge gear
	for (var idx = 0; idx < 11; idx++) {
		if (isReforged() && !isNaN(data[idx]) && data[idx] > 0) {
			data[idx] = data[idx] - getReforge(enc_time[idx])[idx];
		}
	}

	// check how many enc times is necessary for each substate
	for (var idx = 0; idx < 11; idx++) {
		if (!isNaN(data[idx]) && data[idx] > 0) {
			console.log("data[" + idx + "]=" + data[idx] + " substat_max=" + substat_max[idx] + " enc_time=" + (Math.ceil(data[idx] / substat_max[idx]) - 1));
			total_enc_time = total_enc_time + (Math.ceil(data[idx] / substat_max[idx]) - 1);
		}
	}

	console.log("total_enc_time:" + total_enc_time);

	return total_enc_time + getSubstatCount();
}

function checkSubstatmin(enc_time) {

	var data = getSubstat();
	var data_count = getSubstatCount();
	var substat_min = getSubstatMin();
	var substat_max = getSubstatMax();
	var enc_idx = 0;
	var coff = getSubstatMaxCoff();

	// console.log( "checkSubstatmin enter, data_count=" + 
	//    data_count + " enc_time (" + 
	//    enc_time[0] + "," + enc_time[1] + "," + 
	//	  enc_time[2] + "," + enc_time[3] + ")" );

	for (var idx = 0; idx < 11; idx++) {
		var max, min;

		if (isNaN(data[idx]) || data[idx] <= 0) {
			continue;
		}

		if (isReforged()) {

			if (data[idx] > substat_max[idx] * coff + getReforge(5)[idx]) {
				data[idx] = substat_max[idx] * coff + getReforge(5)[idx];
			}

			max = substat_max[idx] * enc_time[enc_idx] + getReforge(enc_time[enc_idx] - 1)[idx];
			min = substat_min[idx] * enc_time[enc_idx] + getReforge(enc_time[enc_idx] - 1)[idx];
		} else {

			if (data[idx] > substat_max[idx] * coff) {
				data[idx] = substat_max[idx] * coff;
			}

			max = substat_max[idx] * enc_time[enc_idx];
			min = substat_min[idx] * enc_time[enc_idx];
		}

		if (enc_idx >= data_count) {
			//	console.log( "checkSubstatmin enc_idx =" + enc_idx + 
			//	             " total substate count:" + data_count + ", break");
			break;
		} else {
			if (data[idx] < min) {
				//	console.log( "checkSubstatmin return false, data[" + getSubstatName(idx) + "]=" + data[idx] + 
				//	 	" substat_min[" + getSubstatName(idx) + "]=" + substat_min[idx] +
				//		" enc_time[" + enc_idx + "]=" + enc_time[enc_idx] );
				return false;
			} else if (data[idx] > max) {
				//	console.log( "checkSubstatmin return false, data[" + getSubstatName(idx) + "]=" + data[idx] + 
				//	 	" substat_max[" + getSubstatName(idx) + "]=" + substat_max[idx] +
				//		" enc_time[" + enc_idx + "]=" + enc_time[enc_idx] );
				return false;
			}

			//console.log( "checkSubstatmin check next, data[" + getSubstatName(idx) + "]=" + data[idx] + 
			//	" substat_min[" + getSubstatName(idx) + "]=" + substat_min[idx] +
			//	" enc_time[" + enc_idx + "]=" + enc_time[enc_idx] );

			enc_idx++;
		}
	}

	// console.log( "checkSubstatmin return true" );
	return true;
}

function calcScore(enc_time) {

	var data = getSubstat();
	var substat_min = getSubstatMin();
	var substat_max = getSubstatMax();
	var enc_idx = 0;
	var score = 0;
	var has_score = false;
	var tmp;

	// calculate the score
	for (var idx = 0; idx < 11; idx++) {

		var substat_max_tmp = 0; // to handle the special case for speed

		if (isNaN(data[idx]) || data[idx] <= 0) {
			continue;
		}

		// the maximum substate for lv85 speed could be 5, but it extremely rare.
		// so we use 4 as maximum to calculate the score 
		if ((getGearLevel() === "85" || getGearLevel === "90r") && idx === 7) {
			substat_max_tmp = 4;
		} else {
			substat_max_tmp = substat_max[idx];
		}

		if (isReforged()) {
			tmp = (data[idx] - substat_min[idx] * enc_time[enc_idx] - getReforge(enc_time[enc_idx] - 1)[idx]) * 100 /
				(substat_max_tmp - substat_min[idx]);
		} else {
			tmp = (data[idx] - substat_min[idx] * enc_time[enc_idx]) * 100 /
				(substat_max_tmp - substat_min[idx]);
		}

		// cut the score to half if it is flat atk, def or flat hp
		if (idx === 8 || idx === 9 || idx === 10) {
			// console.log( "calcScore, cut the score type " + getSubstatName(idx) + " from " + tmp + " to " + ( tmp / 2 ));
			tmp = tmp / 2;
		}

		// console.log( "score data[" + getSubstatName(idx) + "]" + data[idx] +
		//  " substat_min:" + substat_min[idx] +
		// " substat_max:" + substat_max[idx] +
		// " enc_time[" + enc_idx + "]" + enc_time[enc_idx] +
		// " score:" + tmp );

		has_score = true;
		score = score + tmp;
		enc_idx++;
	}

	if (has_score)
		return score;
	else
		return false;
}

function err(msg) {
	document.getElementById("errmsg").innerHTML = msg;
}

function report(enc_time, score) {

	var str = "";
	var data = getSubstat();
	var data_count = getSubstatCount();
	var substat_max = getSubstatMax();
	var substat_min = getSubstatMin();
	var enc_idx = 0;

	var int_score = Math.floor(score);
	var max_score = getMultiplier() * 100;
	var percent_score = Math.floor(score * 100 / max_score);

	var valid_data = [0, 0, 0, 0];
	var valid_data_type = [0, 0, 0, 0];
	var valid_data_size = 0;

	var valid_data_high_score_count = 0;
	var valid_data_high_score_idx = [0, 0, 0, 0];

	var op_cost_numerator = 0;
	var op_cost_denominator = 0;
	var op_cost = 0;

	for (var idx = 0; idx < 11; idx++) {

		if (isNaN(data[idx]) || data[idx] <= 0) {
			continue;
		}

		valid_data[valid_data_size] = data[idx];
		valid_data_type[valid_data_size] = idx;

		if (data[idx] >= ((substat_max[idx] - 1) * getGearEncLevel())) {

			if (idx < 8) { // not flat substat
				valid_data_high_score_idx[valid_data_high_score_count] = idx;
				valid_data_high_score_count++;
			}
		} else if (data[idx] >= substat_max[idx] * 3) {

			if (idx < 8) { // not flat substat
				valid_data_high_score_idx[valid_data_high_score_count] = idx;
				valid_data_high_score_count++;
			}
		}

		valid_data_size++;
	}

	document.getElementById("score").innerHTML = "" + int_score;
	document.getElementById("score-percentage").innerHTML = "" + percent_score + "%";

	str = str + '<span style="font-size:125%">';

	op_cost_numerator = 1;
	op_cost_denominator = 1;
	for (var idx = 0; idx < valid_data_size; idx++) {

		var numerator = Math.pow((substat_max[valid_data_type[idx]] - (valid_data[idx] / enc_time[idx]) + 1), enc_time[idx]);
		var denominator = Math.pow((substat_max[valid_data_type[idx]] - substat_min[valid_data_type[idx]] + 1), enc_time[idx]);

		// out-of-range substat 
		if (numerator < 1) {
			numerator = 1;
		}

		// out-of-range substat 
		if (denominator < 1) {
			denominator = 1;
		}

		// flat substat is not that important and might cause too much bias, 
		// for example, 1/54, so we set a boundary as 1/4, which is 1/2 of atk%/def%/hp%
		if (valid_data_type[idx] === 8 || valid_data_type[idx] === 9 || valid_data_type[idx] === 10) {
			if (numerator / denominator < 1 / 4) {
				numerator = 1;
				denominator = 4;
			}
		}

		op_cost_numerator = op_cost_numerator * numerator;
		op_cost_denominator = op_cost_denominator * denominator;
		// console.log( "(" + numerator + "/" + denominator + ")" );
	}

	switch (getGearType()) {
		case 1:
			break;
		case 2:
			op_cost_denominator = op_cost_denominator * 2;
			break;
		case 3:
			op_cost_denominator = op_cost_denominator * 3;
			break;
		case 4:
			op_cost_denominator = op_cost_denominator * 4;
			break;
	}

	if (op_cost_numerator / op_cost_denominator === 1) {
		op_cost = 1;
	} else {
		op_cost = Math.ceil(1 / (op_cost_numerator / op_cost_denominator));
	}

	// console.log( "op: " + ( op_cost_numerator / op_cost_denominator ) + " op_cost: " + op_cost );

	if (percent_score >= 70 && getGearEncLevel() > 4) {
		str = str + "[Summary] Amazing gear score!<br>Craft " + op_cost + " gears for a similar one.<br><br>";
	} else if (percent_score >= 70 || percent_score >= getScoreThreshold()) {

		var threshold = percent_score > 70 ? 70 : getScoreThreshold();

		str = str + "[Summary] Decent gear score.<br>Craft " + op_cost + " gears for a similar one.<br><br>";
	} else if (valid_data_high_score_count > 0) {
		str = str + "[Summary] Decent roll into " +
			getSubstatName(valid_data_high_score_idx[0]).toLowerCase();

		for (var idx = 1; idx < valid_data_high_score_count - 1; idx++) {
			str = str + ", " + getSubstatName(valid_data_high_score_idx[idx]).toLowerCase();
		}

		if (valid_data_high_score_count > 1) {
			str = str + " and " + getSubstatName(valid_data_high_score_idx[idx]).toLowerCase();
		}

		str = str + ", keep it if you want.<br>Craft " + op_cost + " gears for a similar one.<br><br>";
	} else {
		str = str + "[Summary] Sell it if you are endgame.<br>Craft " + op_cost + " gears for a similar one.<br><br>";
	}

	str = str + '</span>';

	str = str + "[Score] Gear score is " + int_score + " out of " + max_score + ".<br>It is " + percent_score + " % of its potential.<br><br>";
	str = str + "[Detail]<br>";

	for (var idx = 0; idx < valid_data_size; idx++) {

		// the maximum substat for lv85 speed could be 5, but it extremely rare.
		// so we use 4 as maximum for the report
		var substat_max_tmp = substat_max[valid_data_type[idx]];
		if ((getGearLevel() === "85" || getGearLevel === "90r") && valid_data_type[idx] === 7) {
			substat_max_tmp = 4;
		}

		str = str + getSubstatName(valid_data_type[idx]) + " rolled " + enc_time[idx] + " times, and got " +
			valid_data[idx] + " out of " +
			substat_max_tmp * enc_time[idx] + " points.";

		if (isReforged()) {

			str = str + "Got " + getReforge(enc_time[idx] - 1)[valid_data_type[idx]] + " points from reforge.";

			if (valid_data[idx] > substat_max[valid_data_type[idx]] * enc_time[idx] + getReforge(enc_time[idx] - 1)[valid_data_type[idx]]) {
				str = str + '<span style="font-color: red">Warning: The value is larger than the possible limitation.</span>';
			}
		} else {
			if (valid_data[idx] > substat_max[valid_data_type[idx]] * enc_time[idx]) {
				str = str + '<span style="font-color: red">Warning: The value is larger than the possible limitation.</span>';
			}
		}

		str = str + '<br>';
	}
	err(str);
}