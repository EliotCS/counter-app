let Count = 0;

document.getElementById("Increase").onclick = function() {
    Count ++;
    document.getElementById("Count").textContent = Count;
}

document.getElementById("Decrease").onclick = function() {
    Count --;
    document.getElementById("Count").textContent = Count;
}

document.getElementById("Reset").onclick = function() {
    Count = 0;
    document.getElementById("Count").textContent = Count;
}