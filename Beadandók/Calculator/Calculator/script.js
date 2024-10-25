const display = document.getElementById("display");

// tarolt ertek betoltese
window.onload = function() {
    const mentettErtek = localStorage.getItem('calculatorValue');
    if (mentettErtek) {
        display.value = mentettErtek;
    } else {
        display.value = '';
    }
}

//szam torlese
function torles() {
    display.value = '';
    localStorage.removeItem('calculatorValue');
}

//kijelzohoz hozzaadas
function pluszSzam(szam) {
    display.value += szam;
    mentes();
}
//muvelet
function operator(muvelet) {
    if (display.value && !isNaN(display.value[display.value.length - 1])) {
        display.value += muvelet;
        mentes();
    }
}

// tizedespont
function pont() {
    const aktualisErtek = display.value;
    
    const utolsoMuveletIndex = Math.max(
        aktualisErtek.lastIndexOf('+'),
        aktualisErtek.lastIndexOf('-'),
        aktualisErtek.lastIndexOf('*'),
        aktualisErtek.lastIndexOf('÷')
    );

    const utolsoSzam = aktualisErtek.slice(utolsoMuveletIndex + 1);
    if (!utolsoSzam.includes('.')) {
        display.value += '.';
        mentes();
    }
}

// szamolas
function szamol() {
    const aktualisKifejezes = display.value.replace('÷', '/').replace('×', '*');

    if (aktualisKifejezes === '') {
        display.value = 'Hiba: Nincs érték';
        return;
    }

    try {
        // ellenorizzuk h van e osztas nullaval
        const reszek = aktualisKifejezes.split('/');
        for (let i = 1; i < reszek.length; i++) {
            if (parseFloat(reszek[i]) === 0) {
                display.value = 'Hiba: Osztás nullával!';
                return;
            }
        }

        display.value = eval(aktualisKifejezes);
    } catch (e) {
        display.value = 'Hiba';
    }
    mentes();
}

// mentes
function mentes() {
    localStorage.setItem('calculatorValue', display.value);
}