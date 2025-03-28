// ตัวอย่าง: เพิ่มอนิเมชันเมื่อเลื่อนหน้า
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    let scrollPos = window.pageYOffset;
    // ลดความโปร่งแสงของ Hero Section เมื่อเลื่อนหน้า
    hero.style.opacity = 1 - scrollPos / 500;
  });  