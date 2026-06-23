function filterMenu(category) {
    // 1. Önce aktif olan bütün butonların "active" klasını kaldırıyoruz
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 2. Tıklanan butona "active" klasını ekliyoruz
    const clickedBtn = document.querySelector(`[onclick="filterMenu('${category}')"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }

    // 3. Bütün ürün bölümlerini (section) gizliyoruz
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(sec => {
        sec.classList.remove('active-section');
        sec.style.display = 'none'; // Tamamen gizle
    });

    // 4. Sadece tıklanan kategoriye ait bölümü gösteriyoruz
    const activeSection = document.getElementById(category);
    if (activeSection) {
        activeSection.classList.add('active-section');
        activeSection.style.display = 'block'; // Sadece bunu aç
    }
}

// Sayfa ilk açıldığında Waffle butonunu ve bölümünü aktif et
document.addEventListener("DOMContentLoaded", function() {
    filterMenu('wafflelar');
});
