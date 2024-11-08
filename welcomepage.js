let currentIndex = 1;
const totalGoods = 3;

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        showGoods(currentIndex + 1);
    }, 3000); 


    document.querySelectorAll(".forward").forEach(forward => {
        forward.addEventListener("click", () => showGoods(currentIndex + 1));
    });

    document.querySelectorAll(".backward").forEach(backward => {
        backward.addEventListener("click", () => showGoods(currentIndex - 1));
    });
});

function showGoods(index) {

    if (index > totalGoods) {
        currentIndex = 1;
    } else if (index < 1) {
        currentIndex = totalGoods;
    } else {
        currentIndex = index;
    }

    for (let i = 1; i <= totalGoods; i++) {
        document.getElementById(`goods-${i}`).style.display = 'none';
    }

    document.getElementById(`goods-${currentIndex}`).style.display = 'flex';
}
function showDate() {
    document.getElementById('Demo').innerHTML = new Date();
  }