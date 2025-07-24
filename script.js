// Questions for the anime waifu matcher
const questions = [
    {
        question: "What's your ideal personality type?",
        options: [
            { text: "Cheerful and energetic", traits: ["cheerful", "energetic"] },
            { text: "Calm and mysterious", traits: ["calm", "mysterious"] },
            { text: "Strong and independent", traits: ["strong", "independent"] },
            { text: "Sweet and caring", traits: ["sweet", "caring"] }
        ]
    },
    {
        question: "What hair color do you prefer?",
        options: [
            { text: "Blonde", traits: ["blonde"] },
            { text: "Dark/Black", traits: ["dark_hair"] },
            { text: "Red/Pink", traits: ["red_hair"] },
            { text: "Blue/Purple", traits: ["blue_hair"] }
        ]
    },
    {
        question: "What's your preferred anime genre?",
        options: [
            { text: "Action/Adventure", traits: ["action"] },
            { text: "Romance/Slice of Life", traits: ["romance"] },
            { text: "Fantasy/Magic", traits: ["fantasy"] },
            { text: "Sci-Fi/Mecha", traits: ["scifi"] }
        ]
    },
    {
        question: "What kind of hobbies would you want to share?",
        options: [
            { text: "Sports and fitness", traits: ["athletic", "active"] },
            { text: "Reading and studying", traits: ["intellectual", "studious"] },
            { text: "Cooking and domestic activities", traits: ["domestic", "caring"] },
            { text: "Gaming and technology", traits: ["gamer", "tech"] }
        ]
    },
    {
        question: "What's your ideal date scenario?",
        options: [
            { text: "Exciting adventure outdoors", traits: ["adventurous", "energetic"] },
            { text: "Quiet evening at home", traits: ["calm", "domestic"] },
            { text: "Cultural events (museums, concerts)", traits: ["intellectual", "cultured"] },
            { text: "Fun activities (arcade, festival)", traits: ["playful", "cheerful"] }
        ]
    },
    {
        question: "What role would you want your partner to play?",
        options: [
            { text: "Protective and strong", traits: ["protective", "strong"] },
            { text: "Supportive and encouraging", traits: ["supportive", "caring"] },
            { text: "Equal partner and friend", traits: ["independent", "equal"] },
            { text: "Cute and needs protection", traits: ["cute", "innocent"] }
        ]
    },
    {
        question: "What's most important in a relationship?",
        options: [
            { text: "Trust and loyalty", traits: ["loyal", "trustworthy"] },
            { text: "Fun and excitement", traits: ["fun", "exciting"] },
            { text: "Deep emotional connection", traits: ["emotional", "deep"] },
            { text: "Mutual growth and support", traits: ["supportive", "growth"] }
        ]
    }
];

// Popular anime characters with their traits (using Waifu API)
const waifuCharacters = [
    { name: "Asuka Langley", anime: "Neon Genesis Evangelion", traits: ["red_hair", "strong", "independent", "energetic", "action", "scifi", "competitive", "fiery"] },
    { name: "Rem", anime: "Re:Zero", traits: ["blue_hair", "caring", "loyal", "protective", "sweet", "domestic", "fantasy", "devoted"] },
    { name: "Mikasa Ackerman", anime: "Attack on Titan", traits: ["dark_hair", "strong", "protective", "loyal", "independent", "action", "athletic", "determined"] },
    { name: "Zero Two", anime: "Darling in the FranXX", traits: ["red_hair", "mysterious", "energetic", "exciting", "scifi", "passionate", "playful", "unique"] },
    { name: "Hinata Hyuga", anime: "Naruto", traits: ["dark_hair", "sweet", "caring", "shy", "supportive", "growth", "action", "gentle"] },
    { name: "Miku Nakano", anime: "The Quintessential Quintuplets", traits: ["blue_hair", "quiet", "studious", "music_lover", "introverted", "gentle", "caring", "intellectual"] },
    { name: "Nezuko Kamado", anime: "Demon Slayer", traits: ["dark_hair", "sweet", "caring", "protective", "loyal", "action", "family", "gentle"] },
    { name: "Ram", anime: "Re:Zero", traits: ["red_hair", "tsundere", "sarcastic", "confident", "sharp_tongue", "loyal", "caring", "fantasy"] },
    { name: "Violet Evergarden", anime: "Violet Evergarden", traits: ["blonde", "calm", "mysterious", "emotional", "deep", "growth", "elegant", "learning"] },
    { name: "Raphtalia", anime: "The Rising of the Shield Hero", traits: ["dark_hair", "loyal", "caring", "protective", "supportive", "growth", "fantasy", "devoted"] },
    { name: "Aqua", anime: "KonoSuba", traits: ["blue_hair", "cheerful", "goddess", "confident", "party_girl", "optimistic", "energetic", "fun"] },
    { name: "Megumin", anime: "KonoSuba", traits: ["dark_hair", "explosive", "confident", "magic", "energetic", "passionate", "fantasy", "cheerful"] },
    { name: "Saber", anime: "Fate/Stay Night", traits: ["blonde", "noble", "strong", "knight", "loyal", "serious", "honorable", "protective"] },
    { name: "Emilia", anime: "Re:Zero", traits: ["blonde", "kind", "gentle", "caring", "magical", "pure", "beautiful", "fantasy"] },
    { name: "Mai Sakurajima", anime: "Rascal Does Not Dream of Bunny Girl Senpai", traits: ["dark_hair", "mature", "intelligent", "sarcastic", "caring", "beautiful", "actress", "deep"] },
    { name: "Chika Fujiwara", anime: "Kaguya-sama: Love is War", traits: ["red_hair", "cheerful", "energetic", "games", "optimistic", "friendly", "innocent", "playful"] },
    { name: "Kaguya Shinomiya", anime: "Kaguya-sama: Love is War", traits: ["dark_hair", "intelligent", "prideful", "elegant", "competitive", "tsundere", "noble", "sophisticated"] },
    { name: "Power", anime: "Chainsaw Man", traits: ["blonde", "wild", "confident", "chaotic", "energetic", "demon", "unique", "exciting"] },
    { name: "Makima", anime: "Chainsaw Man", traits: ["red_hair", "mysterious", "controlling", "intelligent", "dangerous", "elegant", "powerful", "sophisticated"] },
    { name: "Ochaco Uraraka", anime: "My Hero Academia", traits: ["dark_hair", "cheerful", "optimistic", "hardworking", "caring", "determined", "kind", "supportive"] }
];

// Enhanced character data with images from API
let animeCharacters = [];

// Current question and user traits
let currentQuestion = 0;
let userTraits = [];

// DOM elements - will be initialized when DOM is loaded
let questionnaire, result, progressBar, questionElement, optionsElement, nextBtn, prevBtn, questionNumberElement;

// Initialize DOM elements
function initializeElements() {
    questionnaire = document.getElementById('questionnaire');
    result = document.getElementById('result');
    progressBar = document.querySelector('.progress');
    questionElement = document.getElementById('question');
    optionsElement = document.getElementById('options');
    nextBtn = document.getElementById('next-btn');
    prevBtn = document.getElementById('prev-btn');
    questionNumberElement = document.getElementById('question-number');
}

// Fetch character images from Waifu API
async function loadCharacterImages() {
    try {
        for (let character of waifuCharacters) {
            try {
                // Use waifu.pics API for anime girl images
                const response = await fetch('https://api.waifu.pics/sfw/waifu');
                const data = await response.json();
                
                animeCharacters.push({
                    name: character.name,
                    anime: character.anime,
                    description: generateDescription(character),
                    image: data.url,
                    traits: character.traits
                });
                
                // Small delay to avoid rate limiting
                await new Promise(resolve => setTimeout(resolve, 100));
            } catch (error) {
                console.warn(`Failed to load image for ${character.name}:`, error);
                // Fallback with generated image
                animeCharacters.push({
                    name: character.name,
                    anime: character.anime,
                    description: generateDescription(character),
                    image: generateFallbackImage(character.name),
                    traits: character.traits
                });
            }
        }
        console.log(`Loaded ${animeCharacters.length} characters with images!`);
    } catch (error) {
        console.error('Error loading character images:', error);
        // Use fallback data if API fails
        loadFallbackCharacters();
    }
}

// Generate character description based on traits
function generateDescription(character) {
    const descriptions = {
        "Asuka Langley": "A fiery and confident pilot with a competitive spirit. She's strong-willed, independent, and never backs down from a challenge.",
        "Rem": "A devoted and caring maid with blue hair. She's incredibly loyal, protective, and would do anything for those she loves.",
        "Mikasa Ackerman": "A skilled and determined fighter with incredible strength. She's protective, loyal, and always puts her loved ones first.",
        "Zero Two": "A mysterious and passionate girl with pink hair and horns. She's confident, playful, and brings excitement to everything she does.",
        "Hinata Hyuga": "A gentle and shy girl who grows into a strong and confident woman. She's caring, supportive, and incredibly determined.",
        "Miku Nakano": "A quiet and studious girl who loves music and headphones. She's introverted but deeply caring once you get to know her.",
        "Nezuko Kamado": "A kind and caring demon who fights her nature to protect humans. She's sweet, protective, and incredibly loyal to her family.",
        "Ram": "Rem's twin sister with a sharp tongue but a caring heart. She's tsundere, confident, and fiercely loyal to those she trusts.",
        "Violet Evergarden": "A former soldier learning about emotions and love. She's calm, beautiful, and grows to understand deep emotional connections.",
        "Raphtalia": "A loyal and brave demi-human who grows from a timid child into a strong warrior. She's devoted, caring, and incredibly supportive.",
        "Aqua": "A cheerful goddess with a party-loving personality. She's optimistic, energetic, and brings fun to any situation.",
        "Megumin": "An enthusiastic explosion mage with a love for powerful magic. She's passionate, energetic, and dedicated to her craft.",
        "Saber": "A noble knight with unwavering honor and strength. She's loyal, serious, honorable, and dedicated to protecting others.",
        "Emilia": "A kind and gentle half-elf with silver hair and magical abilities. She's caring, pure-hearted, and beautiful inside and out.",
        "Mai Sakurajima": "A mature and intelligent actress with a sarcastic wit. She's caring beneath her tough exterior and values deep connections.",
        "Chika Fujiwara": "A cheerful and energetic student council member who loves games. She's optimistic, friendly, innocent, and full of life.",
        "Kaguya Shinomiya": "An intelligent and prideful student council president. She's elegant, competitive, tsundere, and comes from nobility.",
        "Power": "A wild and confident demon with chaotic energy. She's energetic, unique, and brings unpredictable excitement to everything.",
        "Makima": "A mysterious and controlling devil hunter. She's intelligent, dangerous, elegant, powerful, and deeply enigmatic.",
        "Ochaco Uraraka": "A cheerful hero student with gravity powers. She's optimistic, hardworking, caring, determined, and always supports her friends."
    };
    
    return descriptions[character.name] || `A wonderful character from ${character.anime} with unique personality traits.`;
}

// Generate fallback image using SVG
function generateFallbackImage(name) {
    return 'data:image/svg+xml;base64,' + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="280" viewBox="0 0 200 280">
            <rect width="200" height="280" fill="#ff69b4"/>
            <text x="100" y="140" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
                ${name}
            </text>
        </svg>
    `);
}

// Load fallback characters if API fails
function loadFallbackCharacters() {
    animeCharacters = waifuCharacters.map(character => ({
        name: character.name,
        anime: character.anime,
        description: generateDescription(character),
        image: generateFallbackImage(character.name),
        traits: character.traits
    }));
}

// Initialize the quiz
async function initQuiz() {
    // Show loading message
    if (questionElement) {
        questionElement.textContent = "Loading anime characters...";
        optionsElement.innerHTML = '<div style="text-align: center; color: #ff69b4;">✨ Preparing your waifu database... ✨</div>';
    }
    
    // Load character images
    await loadCharacterImages();
    
    // Start the quiz
    showQuestion();
    updateProgress();
    updateButtons();
}

// Display current question
function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    questionNumberElement.textContent = `${currentQuestion + 1}/${questions.length}`;
    
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.onclick = () => selectOption(index);
        optionsElement.appendChild(button);
    });
}

// Handle option selection
function selectOption(optionIndex) {
    // Remove previous selection styling
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    
    // Add selection styling
    const selectedBtn = document.querySelectorAll('.option-btn')[optionIndex];
    selectedBtn.classList.add('selected');
    
    // Store the selected option
    const selectedOption = questions[currentQuestion].options[optionIndex];
    
    // Update user traits (remove previous traits for this question)
    userTraits = userTraits.filter(trait => {
        return !questions[currentQuestion].options.some(option => 
            option.traits.includes(trait)
        );
    });
    
    // Add new traits
    userTraits.push(...selectedOption.traits);
    
    // Enable next button
    nextBtn.disabled = false;
}

// Move to next question
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
        updateProgress();
        updateButtons();
        nextBtn.disabled = true;
    } else {
        showResult();
    }
}

// Move to previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateProgress();
        updateButtons();
        nextBtn.disabled = true;
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Update button states
function updateButtons() {
    prevBtn.style.display = currentQuestion === 0 ? 'none' : 'block';
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'Get My Waifu!' : 'Next';
}

// Calculate compatibility and show result
function showResult() {
    const bestMatch = findBestMatch();
    
    questionnaire.style.display = 'none';
    result.style.display = 'block';
    
    document.getElementById('character-name').textContent = bestMatch.character.name;
    document.getElementById('character-anime').textContent = bestMatch.character.anime;
    document.getElementById('character-description').textContent = bestMatch.character.description;
    document.getElementById('compatibility').textContent = `${bestMatch.compatibility}%`;
    
    const characterImage = document.getElementById('character-image');
    characterImage.src = bestMatch.character.image;
    characterImage.alt = bestMatch.character.name;
    
    // Store character name for error handling
    const characterName = bestMatch.character.name;
    
    // Handle image loading errors with fallback
    characterImage.onerror = function() {
        this.src = generateFallbackImage(characterName);
        this.alt = characterName + ' (Generated Image)';
    };
}

// Find the best matching character
function findBestMatch() {
    let bestMatch = null;
    let highestCompatibility = 0;
    
    animeCharacters.forEach(character => {
        const compatibility = calculateCompatibility(userTraits, character.traits);
        if (compatibility > highestCompatibility) {
            highestCompatibility = compatibility;
            bestMatch = character;
        }
    });
    
    return {
        character: bestMatch,
        compatibility: Math.round(highestCompatibility)
    };
}

// Calculate compatibility percentage
function calculateCompatibility(userTraits, characterTraits) {
    const matchingTraits = userTraits.filter(trait => characterTraits.includes(trait));
    
    if (userTraits.length === 0 || characterTraits.length === 0) return 0;
    
    // Use character traits as base (more reasonable scoring)
    const baseCompatibility = (matchingTraits.length / characterTraits.length) * 100;
    
    // Bonus system for multiple matches and trait diversity
    let bonusPoints = 0;
    
    // Bonus for each matching trait (up to 5 extra points per match)
    bonusPoints += matchingTraits.length * 5;
    
    // Extra bonus for high match count
    if (matchingTraits.length >= 4) bonusPoints += 15;
    if (matchingTraits.length >= 6) bonusPoints += 10;
    
    // Ensure minimum compatibility for any match
    const minCompatibility = matchingTraits.length > 0 ? 45 : 0;
    
    const finalCompatibility = Math.max(baseCompatibility + bonusPoints, minCompatibility);
    
    return Math.min(finalCompatibility, 100);
}

// Restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userTraits = [];
    
    questionnaire.style.display = 'block';
    result.style.display = 'none';
    
    nextBtn.disabled = true;
    initQuiz();
}

// Event listeners and initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements first
    initializeElements();
    
    // Add event listeners
    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', prevQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
    
    // Initialize the quiz with API loading
    initQuiz();
});
