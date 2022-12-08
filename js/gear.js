function getSubstatName(e) {
    switch (e) {
       case 0:
          return "Attack (%)";
       case 1:
          return "Defense (%)";
       case 2:
          return "Health (%)";
       case 3:
          return "Effectiveness";
       case 4:
          return "Resistance";
       case 5:
          return "Critical Damage";
       case 6:
          return "Critical Chance";
       case 7:
          return "Speed";
       case 8:
          return "Attack";
       case 9:
          return "Defense";
       case 10:
          return "Health";
       default:
          return "Substat(" + e + ")"
    }
 }
 
 function getGearEncLevel() {
    var e = document.getElementById("gear-ench").options,
       t = e[e.selectedIndex].id;
    return "g0" === t ? 1 : "g3" === t ? 2 : "g6" === t ? 3 : "g9" === t ? 4 : "g12" === t ? 5 : "g15" === t ? 6 : 0
 }
 
 function getScoreThreshold() {
    switch (getGearEncLevel()) {
       case 1:
       case 2:
          return 70;
       case 3:
          return 65;
       case 4:
          return 60;
       case 5:
          return 55;
       case 6:
          return 50
    }
    return 70
 }
 
 function getGearType() {
    var e = document.getElementById("gear-type").options;
    switch (e[e.selectedIndex].id) {
       case "gwhite":
          return 1;
       case "gblue":
          return 2;
       case "gpink":
          return 3;
       case "gred":
          return 4
    }
    return alert("fatal error in getGearType()"), 0
 }
 
 function getGearLevel() {
    var e = document.getElementById("gear-lv").options;
    switch (e[e.selectedIndex].id) {
       case "lv70":
          return "70";
       case "lv85":
          return "85";
       case "lv90r":
          return "90r";
       case "lv90":
          return "90"
    }
    return "0"
 }
 
 function getSubstatMax() {
    switch (getGearLevel()) {
       case "70":
          return [7, 7, 7, 7, 7, 6, 4, 4, 42, 30, 180];
       case "85":
       case "90r":
          return [8, 8, 8, 8, 8, 7, 5, 5, 47, 34, 202];
       case "90":
          return [9, 9, 9, 9, 9, 8, 6, 5, 50, 36, 220]
    }
    return alert("fatal error in getSubstatMax()"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 }
 
 function getSubstatMin() {
    var e = document.getElementById("gear-lv").options;
    switch (e[e.selectedIndex].id) {
       case "lv70":
          return [3, 3, 3, 3, 3, 3, 2, 1, 28, 23, 124];
       case "lv85":
       case "lv90r":
          return [4, 4, 4, 4, 4, 3, 3, 1, 30, 25, 147];
       case "lv90":
          return [5, 5, 5, 5, 5, 4, 3, 2, 32, 27, 170]
    }
    return alert("fatal error in getSubstatMin()"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 }
 
 function getReforge(e) {
    switch (e) {
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
          return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
 }
 
 function getSubstat() {
    var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return e[0] = parseInt(document.getElementById("atkper").value), e[1] = parseInt(document.getElementById("defper").value), e[2] = parseInt(document.getElementById("hpper").value), e[3] = parseInt(document.getElementById("eff").value), e[4] = parseInt(document.getElementById("res").value), e[5] = parseInt(document.getElementById("critdmg").value), e[6] = parseInt(document.getElementById("critch").value), e[7] = parseInt(document.getElementById("spd").value), e[8] = parseInt(document.getElementById("atkflat").value), e[9] = parseInt(document.getElementById("defflat").value), e[10] = parseInt(document.getElementById("hpflat").value), e
 }
 
 function getSubstatCount() {
    for (var e = getSubstat(), t = 0, r = 0; r < 11; r++) !isNaN(e[r]) && e[r] > 0 && t++;
    return t
 }
 
 function getMultiplier() {
    return getGearEncLevel() + getGearType() - 1
 }
 
 function getRequiredDataCount() {
    var e = getGearType(),
       t = getGearEncLevel();
    return 1 === e ? t >= 4 ? 4 : t : 2 === e ? t < 4 ? 2 : 4 === t ? 3 : 4 : 3 === e && t <= 4 ? 3 : 4
 }
 
 function getSubstatMaxCoff() {
    var e = 1,
       t = getGearType(),
       r = getGearEncLevel();
    if (1 === t) switch (r) {
       case 1:
       case 2:
       case 3:
       case 4:
          e = 1;
          break;
       case 5:
          e = 2;
          break;
       case 6:
          e = 3;
          break;
       default:
          e = 3
    }
    if (2 === t) switch (r) {
       case 1:
          e = 1;
          break;
       case 2:
          e = 2;
          break;
       case 3:
       case 4:
       case 5:
          e = 3;
          break;
       case 6:
          e = 4;
          break;
       default:
          e = 4
    }
    if (3 === t) switch (r) {
       case 1:
          e = 1;
          break;
       case 2:
          e = 2;
          break;
       case 3:
          e = 3;
          break;
       case 4:
       case 5:
          e = 4;
          break;
       case 6:
          e = 5;
          break;
       default:
          e = 5
    }
    if (4 === t) switch (r) {
       case 1:
          e = 1;
          break;
       case 2:
          e = 2;
          break;
       case 3:
          e = 3;
          break;
       case 4:
          e = 4;
          break;
       case 5:
          e = 5;
          break;
       case 6:
          e = 6;
          break;
       default:
          e = 6
    }
    return e
 }
 
 function isReforged() {
    var e = document.getElementById("gear-lv").options,
       t = e[e.selectedIndex].id;
    getReforge(5);
    return "lv90r" === t
 }
 
 function resetplaceholder() {
    var e = getReforge(5);
    isReforged() && (document.getElementById("gear-ench").selectedIndex = 5);
    var t = getSubstatMax(),
       r = getSubstatMaxCoff();
    switch (isReforged() ? (document.getElementById("atkper").placeholder = "0% - " + (t[0] * r + e[0]) + "%", document.getElementById("defper").placeholder = "0% - " + (t[1] * r + e[1]) + "%", document.getElementById("hpper").placeholder = "0% - " + (t[2] * r + e[2]) + "%", document.getElementById("eff").placeholder = "0% - " + (t[3] * r + e[3]) + "%", document.getElementById("res").placeholder = "0% - " + (t[4] * r + e[4]) + "%", document.getElementById("critdmg").placeholder = "0% - " + (t[5] * r + e[5]) + "%", document.getElementById("critch").placeholder = "0% - " + (t[6] * r + e[6]) + "%", document.getElementById("spd").placeholder = "0 - " + (t[7] * r + e[7]), document.getElementById("atkflat").placeholder = "0 - " + (t[8] * r + e[8]), document.getElementById("defflat").placeholder = "0 - " + (t[9] * r + e[9]), document.getElementById("hpflat").placeholder = "0 - " + (t[10] * r + e[10])) : (document.getElementById("atkper").placeholder = "0% - " + t[0] * r + "%", document.getElementById("defper").placeholder = "0% - " + t[1] * r + "%", document.getElementById("hpper").placeholder = "0% - " + t[2] * r + "%", document.getElementById("eff").placeholder = "0% - " + t[3] * r + "%", document.getElementById("res").placeholder = "0% - " + t[4] * r + "%", document.getElementById("critdmg").placeholder = "0% - " + t[5] * r + "%", document.getElementById("critch").placeholder = "0% - " + t[6] * r + "%", document.getElementById("spd").placeholder = "0 - " + t[7] * r, document.getElementById("atkflat").placeholder = "0 - " + t[8] * r, document.getElementById("defflat").placeholder = "0 - " + t[9] * r, document.getElementById("hpflat").placeholder = "0 - " + t[10] * r), getGearType()) {
       case 1:
          document.getElementById("gear-type").style = "color:#111111; font-weight: bold;";
          break;
       case 2:
          document.getElementById("gear-type").style = "color:#0074D9; font-weight: bold;";
          break;
       case 3:
          document.getElementById("gear-type").style = "color:#F012BE; font-weight: bold;";
          break;
       case 4:
          document.getElementById("gear-type").style = "color:#FF4136; font-weight: bold;"
    }
 }
 
 function reset() {
    document.getElementById("atkper").value = "", document.getElementById("critch").value = "", document.getElementById("critdmg").value = "", document.getElementById("hpper").value = "", document.getElementById("defper").value = "", document.getElementById("spd").value = "", document.getElementById("eff").value = "", document.getElementById("res").value = "", document.getElementById("atkflat").value = "", document.getElementById("defflat").value = "", document.getElementById("hpflat").value = "", document.getElementById("gear-lv").value = "lv85", document.getElementById("gear-type").value = "gpink", document.getElementById("gear-ench").value = "gear-lv0", resetplaceholder(), document.getElementById("score").innerHTML = "0", document.getElementById("score-percentage").innerHTML = "0%", document.getElementById("score-percentage").style = "background-color:#eee", document.getElementById("errmsg").style = "border-color:#fff", err("<b>Start by entering the substat values and hit Calculate!</b>")
 }
 
 function validate() {
    for (var e = getSubstat(), t = getSubstatMin(), r = 0, a = getReforge(0), n = 0; n < 11; n++)
       if (isNaN(e[n]) && (e[n] = 0), e[n] < 0) {
          switch (n) {
             case 0:
                err("ERROR! Attack (" + e[n] + "%) cannot be negative.");
                break;
             case 1:
                err("ERROR! Defense (" + e[n] + "%) cannot be negative.");
                break;
             case 2:
                err("ERROR! Health (" + e[n] + "%) cannot be negative.");
                break;
             case 3:
                err("ERROR! Effectiveness (" + e[n] + "%) cannot be negative.");
                break;
             case 4:
                err("ERROR! Effect Resistance (" + e[n] + "%) cannot be negative.");
                break;
             case 5:
                err("ERROR! Critical Damage (" + e[n] + "%) cannot be negative.");
                break;
             case 6:
                err("ERROR! Critical Chance (" + e[n] + "%) cannot be negative.");
                break;
             case 7:
                err("ERROR! Speed (" + e[n] + ") cannot be negative.");
                break;
             case 8:
                err("ERROR! Flat Attack (" + e[n] + ") cannot be negative.");
                break;
             case 9:
                err("ERROR! Flat Defense (" + e[n] + ") cannot be negative.");
                break;
             case 10:
                err("ERROR! Flat Health (" + e[n] + ") cannot be negative.")
          }
          return -1
       } for (n = 0; n < 11; n++) {
       var c = 0;
       if (!(isNaN(e[n]) || e[n] <= 0) && (r++, c = isReforged() ? t[n] + a[n] : t[n], e[n] > 0 && e[n] < c)) return err("ERROR! " + getSubstatName(n) + " (" + e[n] + ") must be larger than " + c), -1
    }
    return r != getRequiredDataCount() ? (err("ERROR! This gear should have " + getRequiredDataCount() + " substat(s) according to its grade."), -1) : 0
 }
 
 function calc() {
    if (err(""), 0 === validate()) {
       for (var e = getSubstat(), t = 0, r = 0; r < 11; r++) isNaN(e[r]) || e[r] <= 0 || t++;
       switch (t) {
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
             return void console.log("Debug error, valid_data_size " + t + " does not support.")
       }
    }
 }
 
 function cal1() {
    var e, t = getMultiplier(),
       r = [0, 0];
    r[0] = t, !1 !== checkSubstatmin(r) && (!1 === (e = calcScore(r)) ? err(getPossibleErrorDesc(r)) : report(r, e))
 }
 
 function cal2() {
    for (var e, t = getMultiplier(), r = [0, 0], a = [0, 0], n = -1, c = 1; c <= t; c++) r[0] = c, r[1] = t - r[0], r[1] <= 0 || !1 !== checkSubstatmin(r) && !1 !== (e = calcScore(r)) && (0 === n || n < e) && (n = e, a = r.slice());
    n < 0 ? err(getPossibleErrorDesc(r)) : report(a, n)
 }
 
 function cal3() {
    for (var e, t = getMultiplier(), r = [0, 0, 0], a = [0, 0, 0], n = -1, c = 1; c <= t; c++) {
       r[0] = c;
       for (var o = 1; o <= t - r[0]; o++)
          if (r[1] = o, t - r[0] - r[1] > 0) {
             if (r[2] = t - r[0] - r[1], !1 === checkSubstatmin(r)) continue;
             !1 !== (e = calcScore(r)) && (0 === n || n < e) && (n = e, a = r.slice())
          }
    }
    n < 0 ? err(getPossibleErrorDesc(r)) : report(a, n)
 }
 
 function cal4() {
    for (var e, t = getMultiplier(), r = [0, 0, 0, 0], a = [0, 0, 0, 0], n = -1, c = 1; c <= t; c++) {
       r[0] = c;
       for (var o = 1; o <= t - r[0]; o++) {
          r[1] = o;
          for (var l = 1; l <= t - r[0] - r[1]; l++)
             if (r[2] = l, t - r[0] - r[1] - r[2] > 0) {
                if (r[3] = t - r[0] - r[1] - r[2], !1 === checkSubstatmin(r)) continue;
                !1 !== (e = calcScore(r)) && (0 === n || n < e) && (n = e, a = r.slice())
             }
       }
    }
    n < 0 ? err(getPossibleErrorDesc(r)) : report(a, n)
 }
 
 function getPossibleErrorDesc(e) {
    for (var t = "", r = getSubstat(), a = !1, n = document.getElementById("gear-lv").options, c = n[n.selectedIndex].id, o = 0; o < 11; o++) isNaN(r[o]) || r[o] <= 0 || 8 !== o && 9 !== o && 10 !== o || (a = !0);
    return t = "ERROR! Substat(s) value does not match the gear type or the enhancement level.", getMinTotalEncTime(e) > getMultiplier() && (t = t + " The substats requires at least " + (getMinTotalEncTime(e) - getSubstatCount()) + " upgrade, but it only did " + (getMultiplier() - getSubstatCount()) + " times."), "lv90" === c && (t += " If the gear was Lv88 gear bought from arena, set to Lv85 gear and try again."), a && (t += " We don't know the exact range for the flat substat, so the error might also caused by the wrong flat substat setting in this tool."), t
 }
 
 function getMinTotalEncTime(e) {
    for (var t = getSubstat(), r = 0, a = getSubstatMax(), n = 0; n < 11; n++) isReforged() && !isNaN(t[n]) && t[n] > 0 && (t[n] = t[n] - getReforge(e[n])[n]);
    for (n = 0; n < 11; n++) !isNaN(t[n]) && t[n] > 0 && (console.log("data[" + n + "]=" + t[n] + " substat_max=" + a[n] + " enc_time=" + (Math.ceil(t[n] / a[n]) - 1)), r += Math.ceil(t[n] / a[n]) - 1);
    return console.log("total_enc_time:" + r), r + getSubstatCount()
 }
 
 function checkSubstatmin(e) {
    for (var t = getSubstat(), r = getSubstatCount(), a = getSubstatMin(), n = getSubstatMax(), c = 0, o = getSubstatMaxCoff(), l = 0; l < 11; l++) {
       var s, u;
       if (!(isNaN(t[l]) || t[l] <= 0)) {
          if (isReforged() ? (t[l] > n[l] * o + getReforge(5)[l] && (t[l] = n[l] * o + getReforge(5)[l]), s = n[l] * e[c] + getReforge(e[c] - 1)[l], u = a[l] * e[c] + getReforge(e[c] - 1)[l]) : (t[l] > n[l] * o && (t[l] = n[l] * o), s = n[l] * e[c], u = a[l] * e[c]), c >= r) break;
          if (t[l] < u) return !1;
          if (t[l] > s) return !1;
          c++
       }
    }
    return !0
 }
 
 function calcScore(e) {
    for (var t, r = getSubstat(), a = getSubstatMin(), n = getSubstatMax(), c = 0, o = 0, l = !1, s = 0; s < 11; s++) {
       var u = 0;
       isNaN(r[s]) || r[s] <= 0 || (u = "85" !== getGearLevel() && "90r" !== getGearLevel || 7 !== s ? n[s] : 4, t = isReforged() ? 100 * (r[s] - a[s] * e[c] - getReforge(e[c] - 1)[s]) / (u - a[s]) : 100 * (r[s] - a[s] * e[c]) / (u - a[s]), 8 !== s && 9 !== s && 10 !== s || (t /= 2), l = !0, o += t, c++)
    }
    return !!l && o
 }
 
 function err(e) {
    document.getElementById("errmsg").innerHTML = e
 }
 
 function report(e, t) {
    for (var r = "", a = getSubstat(), n = (getSubstatCount(), getSubstatMax()), c = getSubstatMin(), o = Math.floor(t), l = 100 * getMultiplier(), s = Math.floor(100 * t / l), u = [0, 0, 0, 0], g = [0, 0, 0, 0], d = 0, i = 0, m = [0, 0, 0, 0], f = 0, b = 0, p = 0, h = 0; h < 11; h++) isNaN(a[h]) || a[h] <= 0 || (u[d] = a[h], g[d] = h, a[h] >= (n[h] - 1) * getGearEncLevel() ? h < 8 && (m[i] = h, i++) : a[h] >= 3 * n[h] && h < 8 && (m[i] = h, i++), d++);
    document.getElementById("score").innerHTML = o, document.getElementById("score-percentage").innerHTML = s + "%", s >= 0 && s <= 49 && (document.getElementById("score-percentage").style = "background-color:#FF4136", document.getElementById("errmsg").style = "border-color:#FF4136"), s >= 50 && s <= 64 && (document.getElementById("score-percentage").style = "background-color:#FFDC00", document.getElementById("errmsg").style = "border-color:#FFDC00"), s >= 65 && s <= 100 && (document.getElementById("score-percentage").style = "background-color:#2ECC40", document.getElementById("errmsg").style = "border-color:#2ECC40"), r += "<h1>■ Summary</h1>", f = 1, b = 1;
    for (h = 0; h < d; h++) {
       var v = Math.pow(n[g[h]] - u[h] / e[h] + 1, e[h]),
          y = Math.pow(n[g[h]] - c[g[h]] + 1, e[h]);
       v < 1 && (v = 1), y < 1 && (y = 1), 8 !== g[h] && 9 !== g[h] && 10 !== g[h] || v / y < .25 && (v = 1, y = 4), f *= v, b *= y
    }
    switch (getGearType()) {
       case 1:
          break;
       case 2:
          b *= 2;
          break;
       case 3:
          b *= 3;
          break;
       case 4:
          b *= 4
    }
    if (p = f / b == 1 ? 1 : Math.ceil(1 / (f / b)), s >= 70 && getGearEncLevel() > 4) r += "◦ Amazing gear score!";
    else if (s >= 70 || s >= getScoreThreshold()) {
       s > 70 || getScoreThreshold();
       r += "◦ Decent gear score."
    } else if (i > 0) {
       r = r + "◦ Decent roll into " + getSubstatName(m[0]);
       for (h = 1; h < i - 1; h++) r = r + ", " + getSubstatName(m[h]);
       i > 1 && (r = r + " and " + getSubstatName(m[h])), r += ", it is worth keeping."
    } else r += "◦ Sell or extract it if you are endgame.";
    r = r + "<br>◦ It will take an estimate of " + p + " gears to get a similar one.<br><br>", r = (r += "<h1>■ Gear Score</h1>") + "◦ Gear score is " + o + " out of " + l + " (" + s + "%)<br><br>", r += "<h1>■ Details</h1>";
    for (h = 0; h < d; h++) {
       var E = n[g[h]];
       "85" !== getGearLevel() && "90r" !== getGearLevel || 7 !== g[h] || (E = 4), r = r + "◦ " + getSubstatName(g[h]) + " rolled " + e[h] + " time(s)", r = (r += '<br><span style="font-style:italic;font-size:85%;padding-left:10px">') + " " + u[h] + " out of " + E * e[h] + " points", isReforged() ? (r = (r += " | ") + "Got " + getReforge(e[h] - 1)[g[h]] + " points from reforge.<br>", u[h] > n[g[h]] * e[h] + getReforge(e[h] - 1)[g[h]] && (r += '<span style="font-color: red">Warning: The value is larger than the possible limitation.</span>')) : (r += "<br>", u[h] > n[g[h]] * e[h] && (r += '<span style="font-color: red">Warning: The value is larger than the possible limitation.</span>')), r += "</span><br>"
    }
    err(r)
 }
 window.onload = function () {
    reset()
 };