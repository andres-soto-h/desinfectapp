var d = new Date();

// Set the value of the "date" field
document.getElementById("date").value = d.toDateString();

(function($) {
    $(document).ready(function() {

        var form = $('.contact-form'),
            url = 'https://script.google.com/macros/s/AKfycbzf1bbjBE7dHEqwdgyHswI5y7QCteVfrb2ryjMVCnrrObGHDWAa/exec'


        $('#submit-form').on('click', function(e) {
            e.preventDefault();
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                data: form.serializeObject()
            }).success(
                Swal.fire(
                    '¡Muy bien!',
                    'Pronto nos pondremos en contacto contigo.',
                    'success'
                )
            );
        })

    });
})(jQuery);

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};