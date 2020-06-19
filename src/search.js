let Search = function() {
    let input = document.querySelector('.search');
    let result = document.querySelectorAll('.td');

    input.oninput = handleChange;

    function handleChange(e) {
        if (e.target.value.toLowerCase() == 'мозгобитва'
            || e.target.value.toLowerCase() == 'м'
            || e.target.value.toLowerCase() == 'мо'
            || e.target.value.toLowerCase() == 'моз'
            || e.target.value.toLowerCase() == 'мозг'
            || e.target.value.toLowerCase() == 'мозго'
            || e.target.value.toLowerCase() == 'мозгоб'
            || e.target.value.toLowerCase() == 'мозгоби'
            || e.target.value.toLowerCase() == 'мозгобит'
            || e.target.value.toLowerCase() == 'мозгобитв') {
            result[0].classList.add('hide');
        }
        else result[0].classList.remove('hide');

        if (e.target.value.toLowerCase() == 'встреча'
            || e.target.value.toLowerCase() == 'в'
            || e.target.value.toLowerCase() == 'вс'
            || e.target.value.toLowerCase() == 'вст'
            || e.target.value.toLowerCase() == 'встр'
            || e.target.value.toLowerCase() == 'встре'
            || e.target.value.toLowerCase() == 'встреч'
            || e.target.value.toLowerCase() == 'встреча я'
            || e.target.value.toLowerCase() == 'встреча яз'
            || e.target.value.toLowerCase() == 'встреча языкового') {
            result[1].classList.add('hide');
        }
        else result[1].classList.remove('hide');

        if (e.target.value.toLowerCase() == 'запуск'
            || e.target.value.toLowerCase() == 'з'
            || e.target.value.toLowerCase() == 'за'
            || e.target.value.toLowerCase() == 'зап'
            || e.target.value.toLowerCase() == 'запу'
            || e.target.value.toLowerCase() == 'запус') {
            result[2].classList.add('hide');
        }
        else result[2].classList.remove('hide');
    }
}

export default Search;