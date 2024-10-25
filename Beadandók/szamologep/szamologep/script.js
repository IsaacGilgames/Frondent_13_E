function kijelez(value) {
    document.getElementById('kijelzo').value += value;
}

function kijelzoTorles() {
    document.getElementById('kijelzo').value = '';
}

function kiszamol() {
    try {
        const eredmeny = eval(document.getElementById('kijelzo').value);
        document.getElementById('kijelzo').value = eredmeny;
        localStorage.setItem('utolso', eredmeny)
    } catch {
        document.getElementById('kijelzo').value = 'ERROR';
    }
}

window.onload = function() {
    const utolso = localStorage.getItem('utolso')
    if(utolso) {
        document.getElementById('kijelzo').value = utolso;
    }
}

function faktorialis(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * faktorialis(n - 1);
}