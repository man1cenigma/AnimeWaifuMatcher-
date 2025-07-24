# Anime Waifu Matcher 🌸

A fun interactive website that matches users with their perfect anime waifu based on personality preferences and traits!

## Features

- **Interactive Questionnaire**: 7 carefully crafted questions about personality preferences, appearance, hobbies, and relationship goals
- **Beautiful Sakura Theme**: Modern, responsive design with sakura background, falling animations, and smooth gradients
- **Extensive Character Database**: 40+ popular anime characters from various series including:
  - Asuka (Evangelion)
  - Rem & Ram (Re:Zero)
  - Mikasa (Attack on Titan)
  - Zero Two (Darling in the FranXX)
  - Hinata (Naruto)
  - Miku Nakano (Quintessential Quintuplets)
  - Nezuko (Demon Slayer)
  - And many more from popular anime series!

- **Smart Matching Algorithm**: Calculates compatibility based on trait matching
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Sakura Background**: Beautiful anime-themed sakura landscape background

## How It Works

1. **Answer Questions**: Users go through 7 questions about their preferences
2. **Trait Collection**: Each answer corresponds to personality and preference traits
3. **Matching Algorithm**: The system compares user traits with character traits
4. **Result Display**: Shows the best matching character with compatibility percentage

## File Structure

```
├── index.html          # Main HTML file with questionnaire structure
├── styles.css          # Beautiful CSS styling with sakura theme
├── script.js           # JavaScript logic for quiz and matching algorithm
├── beautiful-anime-sakura-landscape-cartoon-scene (1).jpg # Background image
└── README.md          # This documentation file
```

## Getting Started

1. Open `index.html` in any modern web browser
2. Answer the 7 questions about your preferences
3. Get matched with your perfect anime waifu!
4. Try again with different answers to explore other matches

## Customization

### Adding New Characters

To add new anime characters, edit the `animeCharacters` array in `script.js`:

```javascript
{
    name: "Character Name",
    anime: "Anime Series",
    description: "Character description...",
    image: "image_url_or_placeholder",
    traits: ["trait1", "trait2", "trait3"]
}
```

### Adding New Questions

To add new questions, edit the `questions` array in `script.js`:

```javascript
{
    question: "Your question here?",
    options: [
        { text: "Option 1", traits: ["trait1", "trait2"] },
        { text: "Option 2", traits: ["trait3", "trait4"] }
    ]
}
```

### Connecting to Real API

To connect to a real anime API (like Jikan API or AniList), replace the placeholder images and character data:

1. Modify the character objects to include API IDs
2. Add API calls to fetch real character images and data
3. Update the matching algorithm if needed

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Modern styling with flexbox, grid, and animations
- **Vanilla JavaScript**: Quiz logic and matching algorithm
- **Google Fonts**: Nunito font family for beautiful typography

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Future Enhancements

- Connect to real anime APIs for character data and images
- Add more characters and anime series
- Implement user accounts and saved results
- Add social sharing features
- Include more detailed character information
- Add character voice samples or quotes

## Contributing

Feel free to contribute by:
- Adding more anime characters
- Improving the matching algorithm
- Enhancing the UI/UX
- Adding new features

Enjoy finding your perfect anime waifu! ✨
