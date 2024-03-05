$('#theme-mode').on('click', function() {
    if($('html').attr('data-bs-theme') == 'light'){        
        $('html').attr('data-bs-theme', 'dark');
        $('#theme-mode').text('☀️');

    } else if($('html').attr('data-bs-theme') == 'dark'){
        $('html').attr('data-bs-theme', 'light');
        $('#theme-mode').text('🌙');
    }
});