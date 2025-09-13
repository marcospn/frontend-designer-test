/**
 * Frontend JavaScript per Designer Test Plugin
 * Contiene errori intenzionali da correggere - TEST 15 MINUTI
 */

(function($) {
    'use strict';
    
    $(document).ready(function() {
        // ERRORE 1 RISOLTO: Event listeners spostati dentro document.ready
        $('#designerTestForm').on('submit', handleFormSubmission);
        $('#toggleFeatures').on('click', toggleFeatures);
        
        initializePlugin();
    });
    
    function initializePlugin() {
        console.log('Designer Test Plugin initialized');
        
        $('.dt-feature-card').hover(
            function() {
                $(this).addClass('dt-card-hover');
            },
            function() {
                $(this).removeClass('dt-card-hover');
            }
        );
        
        // ERRORE 2 RISOLTO: Dichiarata variabile con var
        var animationDuration = 300;
        
        // ERRORE 3 RISOLTO: Corretto "addClas" in "addClass" e fix del contesto this
        $('.dt-btn').click(function(e) {
            var $button = $(this);
            $button.addClass('dt-btn-clicked');
            setTimeout(function() {
                $button.removeClass('dt-btn-clicked');
            }, animationDuration);
        });
    }
    
    function handleFormSubmission(e) {
        e.preventDefault();
        
        var formData = {
            action: 'submit_designer_form',
            nonce: designerTest.nonce,
            name: $('#dt-name').val(),
            email: $('#dt-email').val(),
            message: $('#dt-message').val()
        };
        
        if (!validateForm(formData)) {
            return false;
        }
        
        showLoading();
        
        $.ajax({
            url: designerTest.ajaxUrl,
            type: 'POST',
            data: formData,
            success: function(response) {
                hideLoading();
                if (response.success) {
                    showMessage('success', response.data.message);
                    // ERRORE 4 RISOLTO: Corretto metodo per reset form
                    $('#designerTestForm')[0].reset();
                } else {
                    showMessage('error', 'Errore nell\'invio del form');
                }
            },
            error: function() {
                hideLoading();
                showMessage('error', 'Errore di connessione');
            }
        });
    }
    
    function validateForm(data) {
        var isValid = true;
        
        // Rimuovi messaggi di errore precedenti
        $('.dt-error-message').remove();
        $('.dt-field-error').removeClass('dt-field-error');
        
        if (data.name.length < 2) {
            showFieldError('dt-name', 'Il nome deve essere di almeno 2 caratteri');
            isValid = false;
        }
        
        // ERRORE 5 RISOLTO: Email regex con escape corretto per il punto
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(data.email)) {
            showFieldError('dt-email', 'Email non valida');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showFieldError(fieldId, message) {
        $('#' + fieldId).addClass('dt-field-error');
        $('#' + fieldId).after('<span class="dt-error-message">' + message + '</span>');
    }
    
    function toggleFeatures() {
        $('.dt-features').slideToggle(500, function() {
            if ($(this).is(':visible')) {
                $('#toggleFeatures').text('Nascondi Features');
            } else {
                $('#toggleFeatures').text('Mostra Features');
            }
        });
    }
    
    function showLoading() {
        $('#dt-submit-btn').prop('disabled', true).text('Invio in corso...');
    }
    
    function hideLoading() {
        $('#dt-submit-btn').prop('disabled', false).text('Invia');
    }
    
    function showMessage(type, message) {
        var messageHtml = '<div class="dt-message dt-message-' + type + '">' + message + '</div>';
        $('#formMessage').html(messageHtml);
        
        setTimeout(function() {
            $('#formMessage').fadeOut();
        }, 5000);
    }

})(jQuery);
