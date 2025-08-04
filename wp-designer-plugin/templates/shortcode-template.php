<div class="designer-test-container" data-color-scheme="<?php echo esc_attr($attributes['color_scheme']); ?>">
    <div class="dt-header">
        <h2 class="dt-title"><?php echo esc_html($attributes['title']); ?></h2>
        <p class="dt-subtitle">Componente di test per frontend designer</p>
    </div>
    
    <div class="dt-content">
        <div class="dt-features">
            <div class="dt-feature-card">
                <div class="dt-icon">🎨</div>
                <h3>Design</h3>
                <p>Creatività e attenzione ai dettagli nel design</p>
            </div>
            <div class="dt-feature-card">
                <div class="dt-icon">⚡</div>
                <h3>Performance</h3>
                <p>Codice ottimizzato e performance elevate</p>
            </div>
            <div class="dt-feature-card">
                <div class="dt-icon">📱</div>
                <h3>Responsive</h3>
                <p>Design che si adatta a tutti i dispositivi</p>
            </div>
        </div>
        
        <?php if ($attributes['show_form'] === 'true'): ?>
        <div class="dt-form-section">
            <h3>Contattaci</h3>
            <form class="dt-contact-form" id="designerTestForm">
                <div class="dt-form-group">
                    <label for="dt-name">Nome:</label>
                    <input type="text" id="dt-name" name="name" required>
                </div>
                <div class="dt-form-group">
                    <label for="dt-email">Email:</label>
                    <input type="email" id="dt-email" name="email" required>
                </div>
                <div class="dt-form-group">
                    <label for="dt-message">Messaggio:</label>
                    <textarea id="dt-message" name="message" rows="4" required></textarea>
                </div>
                <div class="dt-form-actions">
                    <button type="submit" class="dt-btn dt-btn-primary">Invia Messaggio</button>
                    <button type="button" class="dt-btn dt-btn-secondary" id="toggleFeatures">Toggle Features</button>
                </div>
            </form>
            <div class="dt-form-message" id="formMessage"></div>
        </div>
        <?php endif; ?>
    </div>
</div>
