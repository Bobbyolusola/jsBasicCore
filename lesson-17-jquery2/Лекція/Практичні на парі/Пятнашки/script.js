$(function () {
    let check = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let count = 0;
    $('#start, #end').sortable({
        connectWith: '.sort'
    })
    $('#check').click(function () {
        for (let i = 0; i < $('.number').length; i++) {
        console.log($('.number').eq(i));
            if ($('.number').eq(i).text() == check[i]) {
                count++;
            }
        }
        console.log(count)
        if (count == 9) {
            alert('you win');
            count = 0
        }
        else {
            alert('you lose')
            count = 0
        }
    })
})