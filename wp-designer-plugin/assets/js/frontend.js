/**
 * Frontend JavaScript per Designer Test Plugin
 * Contiene errori intenzionali da correggere - TEST 15 MINUTI
 */

(function($) {
    'use strict';
    
    // ERRORE 1: Event listener fuori da document.ready
    $('#designerTestForm').on('submit', handleFormSubmission);
    $('#toggleFeatures').on('click', toggleFeatures);
    
    $(document).ready(function() {
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
        
        // ERRORE 2: Variabile non dichiarata
        animationDuration = 300;
        
        // ERRORE 3: Metodo jQuery errato
        $('.dt-btn').click(function(e) {
            $(this).addClas('dt-btn-clicked'); // addClass scritto male
            setTimeout(function() {
                $(this).removeClass('dt-btn-clicked');
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
                    // ERRORE 4: Metodo errato per reset form
                    $('#designerTestForm').clear();
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
        
        if (data.name.length < 2) {
            showFieldError('dt-name', 'Il nome deve essere di almeno 2 caratteri');
            isValid = false;
        }
        
        // ERRORE 5: Email regex manca escape per il punto
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
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
        $('.dt-btn-primary').prop('disabled', true).text('Invio in corso...');
    }
    
    function hideLoading() {
        $('.dt-btn-primary').prop('disabled', false).text('Invia Messaggio');
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
