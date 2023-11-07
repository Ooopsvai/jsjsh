$('.upload').on('click touch', function(e) {
    e.preventDefault();

    var self = $(this);
    self.addClass('loading');

    setTimeout(function() {
        self.removeClass('loading');

        // First trigger the popup message
        window.location.href = document.getElementById("7md").value;

        // After some time, navigate to the second URL
        setTimeout(function() {
            window.location.href = 'https://t.me/foox_cinema';
        }, 1000); // Adjust this time as needed
    }, 4200);
});