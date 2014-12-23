// 編集機能付きLightbox
$(function(){
    $('.edit').on('click', function() {
        // 編集中のクラスをつけ、それ以外にeditingクラスが合った場合には削除する
        $(this).parents('tbody').find('tr').removeClass('editing');
        $(this).parents('tr').addClass('editing');
        // 編集する値を取得し、配列に格納
        var editElements = new Array(
            $(this).parents('tr').find('td:first-child').html(),
            $(this).parents('tr').find('td:nth-child(2)').html(),
            $(this).parents('tr').find('td:nth-child(3)').html(),
            $(this).parents('tr').find('td:nth-child(4)').html()
        )
        // 取得した値を各inputのvalue値に設定
        $('.editBox').find('td:first-child input').attr('value', editElements[0]);
        $('.editBox').find('td:nth-child(2) input').attr('value', editElements[1]);
        $('.editBox').find('td:nth-child(3) input').attr('value', editElements[2]);
        $('.editBox').find('td:nth-child(4) input').attr('value', editElements[3]);
        // 編集ダイアログボックスを展開
        $('.editBoxBody').animate({opacity: 1}, 200).show();
        // 編集画面外をクリックしたときに編集画面を隠すためにダミーHTMLを挿入
        $('body').append('<div class="dummy"></div>');
    });
    // 閉じるボタンをクリックしたときの動作
    $('.close').on('click', function() {
       $('.editBoxBody').animate({opacity: 0}, 200, function(){
            $(this).hide();
       });
    });
    // 編集画面外をクリックしたときの動作
    $('body').on('click', '.dummy', function() {
       $('div.dummy').remove();
       $('.editBoxBody').animate({opacity: 0}, 200, function(){
            $(this).hide();
       });
    });
});