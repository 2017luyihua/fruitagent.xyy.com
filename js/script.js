// var table1 = document.getElementById('VipTable');
// var table2 = document.getElementById('SjdlTable');
// var table3 = document.getElementById('sjdlsTable');
// var width1 = table1.width;
// var width2 = table2.width;
// var width3 = table3.width;

// 下拉框代码
// $(function () {
//     $('.select > p').on('click', function (e) {
//        $('.select').toggleClass('open');
//        e.stopPropagation();
//     });
//     $('.select ul li').on('click', function (e) {
//        var _this = $(this);
//        $('.select > p').text(_this.attr('data-value'));
//        _this.addClass('selected').siblings().removeClass('selected');
//        $('.select').removeClass('open');
//        e.stopPropagation();
//     });
//     $(document).on('click', function () {
//         $('.select').removeClass('open');
//     });
// });









//
// function init() {
//     table1.style.display = 'none';
//     table2.style.display = 'none';
//     table3.style.display = 'none';
// }
//
// function Vip () {
//     table1.style.display = 'block';
//     table2.style.display = 'none';
//     table3.style.display = 'none';
//     table1.width = width1;
// }
//
// function Sjdl () {
//     table1.style.display = 'none';
//     table2.style.display = 'block';
//     table3.style.display = 'none';
//     table2.width = width2;
// }
//
// function sjdls () {
//     table1.style.display = 'none';
//     table2.style.display = 'none';
//     table3.style.display = 'block';
//     table3.width = width3;
// }

function none() {$('table').attr('data-card-view', 'false')}
function block() {$('table').attr('data-card-view', 'true')}