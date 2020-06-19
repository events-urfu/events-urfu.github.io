
let Tab = function () {
    let tabNav = document.querySelectorAll('.nav'),
        tabContent = document.querySelectorAll('.block'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-target');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }
};

// function loadData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 500);
//     })
// }
//
// loadData()
//     .then(() => {
//         let preloaderEl = document.getElementById('preloader');
//         preloaderEl.classList.add('hidden');
//         preloaderEl.classList.remove('visible');
//     });


export default Tab;


