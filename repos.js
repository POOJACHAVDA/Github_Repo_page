let currentPage = 1;
let totalPages = 100;

document.addEventListener('DOMContentLoaded', function () {
 const pagination = document.querySelector('.pagination');
 let i = 0;

 while (i < 12) {
    const a = document.createElement('a');
    a.textContent = i;
    a.href = '#';
    a.addEventListener('click', function (event) {
      event.preventDefault();
      currentPage = parseInt(event.target.textContent);
      render();
    });

    if (i === 0) {
      a.textContent = '«';
      a.addEventListener('click', function (event) {
        event.preventDefault();
        if (currentPage > 1) {
          currentPage--;
        }
        render();
      });
    } else if (i === 11) {
      a.textContent = '»';
      a.addEventListener('click', function (event) {
        event.preventDefault();
        if (currentPage < totalPages) {
          currentPage++;
        }
        render();
      });
    }

    pagination.appendChild(a);
    i++;
 }

 render();
});

function render() {
 const aElements = document.querySelectorAll('.pagination a');
 aElements.forEach(function (aElement) {
    aElement.classList.remove('active');
 });

 const activePageElement = document.querySelector(`.pagination a:nth-child(${currentPage + 1})`);
 if (activePageElement) {
    activePageElement.classList.add('active');
 }
}


