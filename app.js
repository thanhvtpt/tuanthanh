
  $(document).ready(function () {
    var countDownDate = new Date("August 25, 2024 00:00:00").getTime();

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        if (distance < 0) {
            clearInterval(x);
            $("#countdown").html("EXPIRED");
        }
    }, 100);

    $('.selected-language').on('click', function () {
        $('.language-options').toggle();
        $(this).toggleClass('active');
    });

    $('.language-options li').on('click', function () {
      $('.language-options li').removeClass('active');
        var title = $(this).data('title');
        var comingSoonText = $(this).data('text');
        var description = $(this).data('desc');
        var selectedImageSrc = $(this).find('img').attr('src');
        var days = $(this).data('days');
        var hours = $(this).data('hours');
        var minutes = $(this).data('minutes');
        var seconds = $(this).data('seconds');
        var language_en = $(this).data('language-en');
        var language_vn = $(this).data('language-vn');
        var language_cn = $(this).data('language-cn');
        var language_jp = $(this).data('language-jp');
        
        $('h1').text(title);
        $('.coming-soon-text').text(comingSoonText);
        $('p').text(description);
        $('.language-options').hide();
        $(".selected-language").removeClass("active");
        $('.days label').text(days);
        $('.hours label').text(hours);
        $('.minutes label').text(minutes);
        $('.seconds label').text(seconds);
        $('.language-options #language_en').text(language_en);
        $('.language-options #language_vn').text(language_vn);
        $('.language-options #language_cn').text(language_cn);
        $('.language-options #language_jp').text(language_jp);

        var selectedText = $(this).text();
        $(this).toggleClass('active');
        $('.selected-language').html(`<img src="${selectedImageSrc}" alt="${selectedText}"> ${selectedText}`);
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.language-selector').length) {
            $('.language-options').hide();
        }
    });
});
