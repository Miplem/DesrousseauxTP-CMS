/*
jQuery(document).ready(function() {
    jQuery('#insset_param_update .button-primary').click( function(e){
alert('coucou');
    });
});
*/
jQuery(document).ready(function() {
    jQuery('#insset_param_update .button-primary').click(function(e) {
        e.stopPropagation();
        e.preventDefault();

        var formData = new FormData();
        formData.append('action', 'insset_admin_function');
        formData.append('security', inssetjs.security);

        jQuery('#insset_param_update').find('input, select, textarea').each(function() {
            var id = jQuery(this).attr('id');
            if (typeof id !== 'undefined') {
                formData.append(id, jQuery(this).val());
            }
        });
        jQuery.ajax({
            url: inssetjs.ajax_url,
            type: 'post',
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            success: function(rs, textStatus, jqXHR) {
                //alert('success');
                jQuery('.update-message').removeClass('hide');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus);
            }
        });
        return false;
    });
});




