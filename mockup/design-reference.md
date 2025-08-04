# Design Reference - Risultato Finale Atteso

## Layout Generale
Il componente finale dovrebbe avere questo aspetto:

```
┌─────────────────────────────────────────────────────────┐
│                    DESIGNER TEST                        │
│             Componente di test per frontend designer    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐             │
│  │   🎨    │    │   ⚡    │    │   📱    │             │
│  │ Design  │    │Perform. │    │Response │             │
│  │ Creative│    │Optimized│    │ Design  │             │
│  │ details │    │   code  │    │ adaptive│             │
│  └─────────┘    └─────────┘    └─────────┘             │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                   Contattaci                           │
│                                                         │
│  Nome:     [___________________________]               │
│  Email:    [___________________________]               │
│  Messaggio: [_________________________]                │
│            [_________________________]                │
│            [_________________________]                │
│                                                         │
│  [Invia Messaggio] [Toggle Features]                  │
│                                                         │
│  ✅ Messaggio inviato con successo!                   │
└─────────────────────────────────────────────────────────┘
```

## Specifiche di Design

### Colori
- **Primary Blue**: #3498db
- **Secondary Dark**: #2c3e50  
- **Accent Red**: #e74c3c
- **Success Green**: #27ae60
- **Background**: #f8f9fa

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Title**: 2.5rem, bold
- **Subtitle**: 1.2rem, normal
- **Body**: 1rem, normal

### Spacing
- **Container max-width**: 1200px
- **Padding**: 20px
- **Card gaps**: 20px
- **Form spacing**: 20px between fields

### Cards Features
- **Background**: White
- **Padding**: 30px 20px
- **Border radius**: 10px
- **Box shadow**: 0 2px 10px rgba(0,0,0,0.1)
- **Hover effect**: translateY(-5px) + enhanced shadow

### Form
- **Background**: #f8f9fa
- **Padding**: 30px
- **Border radius**: 8px
- **Input padding**: 12px 15px
- **Border**: 2px solid #ddd
- **Focus border**: #3498db

### Buttons
- **Primary**: Blue background, white text
- **Secondary**: Transparent background, blue border
- **Padding**: 12px 24px
- **Border radius**: 5px
- **Hover effects**: Darker color + scale effect

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: < 768px

### Interactions
1. **Card Hover**: Lift effect con shadow enhancement
2. **Button Click**: Scale down effect (0.95)
3. **Form Validation**: Red border + error message
4. **Toggle Features**: Slide up/down animation
5. **Form Submit**: Loading state + success message

### Grid Layout
- **Desktop**: 3 cards per row
- **Tablet**: 2 cards per row
- **Mobile**: 1 card per row

Il design deve essere pulito, moderno e completamente responsive!
