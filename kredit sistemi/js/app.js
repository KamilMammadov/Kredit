function hesabla() {

    var mebleg = document.getElementById('mebleg').value;

    var ayliq = document.getElementById('ayliq').value;

    var faiz = document.getElementById('faiz').value;

    var summa = (parseFloat(mebleg * faiz / 100) + parseFloat(mebleg)) / ayliq;

    document.getElementById('total').innerHTML=`Sizin ayliq odenisiniz <span>${summa}</span>`;
    
}