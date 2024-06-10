function rcs(n){
    const com = Math.floor(Math.random()*3);
    let rcsArray = ['가위', '바위', '보'];
    let pst = ["-135px -108px", "-70px -6px", "-3px -108px"];



    document.getElementById("rcs-me-txt").innerHTML = rcsArray[n];
    document.getElementById("rcs-com-txt").innerHTML = rcsArray[com];
    document.getElementById("rcs-me").style.backgroundPosition = pst[n];
    document.getElementById("rcs-com").style.backgroundPosition = pst[com];
}



