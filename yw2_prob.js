function fct(num) {
    if (num < 2) return 1; return num * fct(num - 1);
}
let calculate = function () {
    var hm = document.getElementById('h_min').value,
        hM = document.getElementById('h_max').value,
        am = document.getElementById('a_min').value,
        aM = document.getElementById('a_max').value,
        mm = document.getElementById('m_min').value,
        mM = document.getElementById('m_max').value,
        dm = document.getElementById('d_min').value,
        dM = document.getElementById('d_max').value,
        sm = document.getElementById('s_min').value,
        sM = document.getElementById('s_max').value,
        prb = document.getElementById('prb'),
        expc = document.getElementById('expc'),
        p1 = 0
    if ((hm % 2) == 0) { } else { hm++; }
    if ((hM % 2) == 0) { } else { hM--; } for (var h = (hm / 2); h <= (hM / 2); h++) {
        for (var a = am; a <= aM; a++) {
            for (var m = mm; m <= mM; m++) {
                for (var d = dm; d <= dM; d++) {
                    if (sm <= (40 - h - a - m - d) && (40 - h - a - m - d) <= sM) {
                        p1 += 1 / (fct(h) * fct(a) * fct(m) * fct(d) * fct(40 - h - a - m - d));
                    } else { p1 += 0; }
                }
            }
        }
    } p = p1 * 100 * fct(40) / 5 ** 40
    if (p > 0.01) {
        p *= 10 ** 10
        p = Math.round(p)
        p /= 10 ** 10
        prb.textContent = p.toFixed(10)
        expc.textContent = (100 / p).toFixed(10);
    } else {
        prb.textContent = p
        expc.textContent = 100 / p;
    }
}