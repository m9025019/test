$('.gallery-item').magnificPopup({
    type: 'image',
    delegate: 'a', 
    gallery:{
        enabled:true,
        tPrev:'前',
        tNext: '後',
        tCounter: '<span class="mfp-counter">第 %curr% 張 / 共 %total% 張</span>'
    }
});