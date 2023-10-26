const dataVersion = "v1.2.0";
const imageUrls = [
    'assets/Adventureland_3D.jpg',
    'assets/Cover 2D.jpg',
    'assets/The Gorilla Shake.jpg',
    'assets/Snack Sparrow.jpg',
    'assets/Trucks Playing Tricks.jpg',
    'assets/Toilet Ladies.jpg',
    'assets/Tronville.jpg',
    'assets/Rock & Roll Ride.jpg',
    'assets/Perfect waves.jpg',
    'assets/Miami Vibes.jpg',
    'assets/Daddy Love.jpg',
    'assets/Award card.jpg',

];
const defaultTranslationLanguage = "EN";

const reviews = [
    {
        name: "markmasters",
        rating: 9,
        comment: "Played at Spiel. Fun game with a nice mechanic that allows either to pick first or grants money.",
        link: "https://boardgamegeek.com/boardgame/356630/adventure-land/ratings#:~:text=9-,markmasters,-Oct%202023",
    },
    {
        name: "oldmartijntje",
        rating: 10,
        comment: "Awesome game, fun for all ages. The art is on point, with a lot of fun jokes. The production quality is good. The gameplay mechanics are very fun. Everyone I talk to about this game likes it. Even if you think you are losing mid game, you can still win in the end. I would recommend this to pretty much every type of player. Because you can play it casually or very strategic, and both types of players can win.",
        link: "https://boardgamegeek.com/boardgame/356630/adventure-land/ratings#:~:text=10-,oldmartijntje,-Oct%202023",
    },
    {
        name: "hollandiase",
        comment: "Wat een leuk spel is dit! Bieden, bluffen, betalen,sparen,setcollection.. er zit van alles in. En daarnaast ook nog eens spannend!",
        link: "https://www.instagram.com/p/CyBzqv1Lm8m/?igshid=MzRlODBiNWFlZA==",
    },
    {
        name: "Brainmaster",
        rating: 9,
        comment: "",
        link: "https://boardgamegeek.com/boardgame/356630/adventure-land/ratings#:~:text=9-,Brainmaster,-Sep%202023",
    },
    {
        name: "Mielesgames",
        rating: 10,
        comment: "It's an awesome game, 10/10 it's perfect!",
        link: "https://boardgamegeek.com/boardgame/356630/adventure-land/ratings#:~:text=10-,Mielesgames,-Oct%202023",
    },
    {
        name: "de Beek",
        rating: 8,
        comment: "",
        link: "https://boardgamegeek.com/boardgame/356630/adventure-land/ratings#:~:text=8-,de%20Beek,-Oct%202023",
    },
    {
        name: "bridgetvh",
        rating: 8,
        comment: "",
        link: "https://boardgamegeek.com/thread/3159354/review-bordspelwereldnl-dutch",
    },
];

const hrefTranslations = {
    "EN": {
        "T.explanationVideo": "https://www.youtube.com/watch?v=Ag2TLuuw2qM"
    },
    "NL": {
        "T.explanationVideo": "https://www.youtube.com/watch?v=AhJIqmLuR6M"
    }
};

const translations = {
    "EN": {
        "T.title": "Adventure Land Board Game",
        "T.headerTitle": "Adventure Land - Build Your Dream Park",
        "prevButton": "Previous",
        "nextButton": "Next",
        "T.infoTitle1": "Build Your Dream Park!",
        "T.infoText1": "In Adventure Land, start your journey to create the most exciting theme park. Build thrilling attractions, hire the best staff, and invest your money wisely. Complete secret missions to boost the popularity of your park. The ultimate goal is to win the prestigious Award!",
        "T.infoTitle2": "One Grand Adventure",
        "T.infoText2": "Adventure Land feels like a huge roller coaster ride. In just one hour, so much happens that you'll need a moment to catch your breath. It all starts with the auction of the parks. Each park looks completely different in every game. Which one will you choose? This jumpstart gives you certain opportunities and possible strategies right from the start. Will you specialize in a particular theme? Or will you hire valuable staff? Will you decide to hire janitors and cash in on every restroom built, or will you play it safe and hire a gardener for a stable income stream? The choice is yours!",
        "T.reviewsTitle": "Reviews",
        "prevReviewButton": "Previous Review",
        "nextReviewButton": "Next Review",
        "T.linksTitle": "Links:",
        "T.instagram": "Instagram",
        "T.theGameMaster": "TheGameMaster",
        "T.explanationVideo": "Explanation Youtube Video",
        "T.boardGameGeek": "BoardGameGeek",
        "download-link": "Download Rules PDF",
        "T.reviewLink": "Original Post",
        "T.reviewRating": "Rating",
        "T.assignmentcardsHREF": "All Assignment Cards",
        "T.Home": "Home Page.",
        "T.HomeHREF": "Back to the Home Page.",
        "T.assignmentcard": "AssignmentCard"
    },
    "NL": {
        "T.title": "Adventure Land Bordspel",
        "T.headerTitle": "Adventure Land - Bouw Jouw Droompark",
        "prevButton": "Vorige",
        "nextButton": "Volgende",
        "T.infoTitle1": "Bouw Jouw Droompark!",
        "T.infoText1": "In Adventure Land begint je reis om het meest opwindende themapark te creëren. Bouw spannende attracties, huur het beste personeel in en investeer je geld wijselijk. Voltooi geheime missies om de populariteit van je park te vergroten. Het ultieme doel is om de prestigieuze Award te winnen!",
        "T.infoTitle2": "Een Groots Avontuur",
        "T.infoText2": "Adventure Land voelt als een enorme achtbaanrit. In slechts één uur gebeurt er zo veel dat je even moet bijkomen. Het begint allemaal met de veiling van de parken. Elk park ziet er in elk spel volledig anders uit. Welke kies je? Deze kickstart biedt je bepaalde kansen en mogelijke strategieën vanaf het begin. Zal je je specialiseren in een bepaald thema? Of zal je waardevol personeel aannemen? Besluit je om schoonmakers in dienst te nemen en geld te verdienen met elke gebouwde wc, of speel je het veilig en neem je een tuinman voor een stabiele inkomstenstroom? De keuze is aan jou!",
        "T.reviewsTitle": "Recensies",
        "prevReviewButton": "Vorige Recensie",
        "nextReviewButton": "Volgende Recensie",
        "T.linksTitle": "Links:",
        "T.instagram": "Instagram",
        "T.theGameMaster": "TheGameMaster",
        "T.explanationVideo": "Uitleg Youtube Video",
        "T.boardGameGeek": "BoardGameGeek",
        "download-link": "Download Spelregels PDF",
        "T.reviewLink": "Origineel Bericht",
        "T.reviewRating": "Beoordeling",
        "T.assignmentcardsHREF": "Nederlandse vertaling van de assignment-/opdrachtkaarten",
        "T.Home": "Landings Pagina.",
        "T.HomeHREF": "Terug naar de Landings Pagina.",
        "T.assignmentcard": "Opdrachtkaart"
    },
    "FR": {
        "T.title": "Jeu de Société Aventure Land",
        "T.headerTitle": "Aventure Land - Construisez Votre Parc de Rêve",
        "prevButton": "Précédent",
        "nextButton": "Suivant",
        "T.infoTitle1": "Construisez Votre Parc de Rêve !",
        "T.infoText1": "Dans Aventure Land, lancez votre voyage pour créer le parc à thème le plus excitant. Construisez des attractions palpitantes, engagez le meilleur personnel et investissez votre argent judicieusement. Accomplissez des missions secrètes pour augmenter la popularité de votre parc. L'objectif ultime est de remporter le prestigieux Prix !",
        "T.infoTitle2": "Une Aventure Grandiose",
        "T.infoText2": "Aventure Land donne l'impression d'un grand manège de montagnes russes. En seulement une heure, tant de choses se passent que vous aurez besoin d'un moment pour reprendre votre souffle. Tout commence par la vente aux enchères des parcs. Chaque parc est complètement différent à chaque partie. Lequel choisirez-vous ? Ce coup d'envoi vous offre certaines opportunités et des stratégies possibles dès le départ. Vous spécialiserez-vous dans un thème particulier ? Ou embaucherez-vous du personnel précieux ? Déciderez-vous d'embaucher des agents d'entretien et d'encaisser chaque toilette construite, ou jouerez-vous la sécurité en embauchant un jardinier pour un revenu stable ? Le choix vous appartient !",
        "T.reviewsTitle": "Avis",
        "prevReviewButton": "Avis Précédent",
        "nextReviewButton": "Avis Suivant",
        "T.linksTitle": "Liens :",
        "T.instagram": "Instagram",
        "T.theGameMaster": "TheGameMaster",
        "T.explanationVideo": "Youtube Vidéo d'explication",
        "T.boardGameGeek": "BoardGameGeek",
        "download-link": "Télécharger les Règles en PDF",
        "T.reviewLink": "Publication Originale",
        "T.reviewRating": "Évaluation",
        "T.assignmentcardsHREF": "Traduction française des assignment-cartes de mission",
        "T.assignmentcard": "carte de mission"
    },
    "DE": {
        "T.title": "Adventure Land Brettspiel",
        "T.headerTitle": "Adventure Land - Baue deinen Traumpark",
        "prevButton": "Vorherige",
        "nextButton": "Nächste",
        "T.infoTitle1": "Baue deinen Traumpark!",
        "T.infoText1": "In Adventure Land beginnt deine Reise, um den aufregendsten Themenpark zu erschaffen. Baue aufregende Attraktionen, stelle das beste Personal ein und investiere dein Geld klug. Erfülle geheime Missionen, um die Beliebtheit deines Parks zu steigern. Das ultimative Ziel ist, die angesehene Auszeichnung zu gewinnen!",
        "T.infoTitle2": "Ein Großes Abenteuer",
        "T.infoText2": "Adventure Land fühlt sich an wie eine riesige Achterbahnfahrt. In nur einer Stunde passiert so viel, dass du einen Moment brauchst, um Luft zu holen. Alles beginnt mit der Versteigerung der Parks. Jeder Park sieht in jedem Spiel völlig anders aus. Welchen wählst du? Dieser Kickstart bietet dir von Anfang an bestimmte Möglichkeiten und mögliche Strategien. Wirst du dich auf ein bestimmtes Thema spezialisieren? Oder wirst du wertvolles Personal einstellen? Wirst du dich entscheiden, Reinigungskräfte einzustellen und mit jeder gebauten Toilette Geld zu verdienen, oder wirst du es sicher spielen und einen Gärtner für ein stabiles Einkommen einstellen? Die Wahl liegt bei dir!",
        "T.reviewsTitle": "Bewertungen",
        "prevReviewButton": "Vorherige Bewertung",
        "nextReviewButton": "Nächste Bewertung",
        "T.linksTitle": "Links:",
        "T.instagram": "Instagram",
        "T.theGameMaster": "TheGameMaster",
        "T.explanationVideo": "Youtube Erklärungsvideo",
        "T.boardGameGeek": "BoardGameGeek",
        "download-link": "Spielregeln als PDF herunterladen",
        "T.reviewLink": "Ursprünglicher Beitrag",
        "T.reviewRating": "Bewertung",
        "T.assignmentcardsHREF": "Deutsche Übersetzung der assignment-Aufgabenkarten",
        "T.assignmentcard": "Aufgabenkarte"
    },
    "HU": {
        "T.title": "Adventure Land Bordspel",
        "T.headerTitle": "Adventure Land - Építsd fel álomparkod",
        "prevButton": "Előző",
        "nextButton": "Következő",
        "T.infoTitle1": "Építsd fel álomparkod!",
        "T.infoText1": "Az Adventure Landben kezdődik az utazásod a legizgalmasabb témaközpont létrehozásához. Építs izgalmas attrakciókat, alkalmazzd a legjobb személyzetet, és befektess pénzed bölcsen. Teljesíts titkos küldetéseket a park népszerűségének növelése érdekében. A végső cél az elismert díj elnyerése!",
        "T.infoTitle2": "Egy hatalmas kaland",
        "T.infoText2": "Az Adventure Land egy hatalmas hullámvasút-élményhez hasonló. Egy óra alatt oly sok történik, hogy egy pillanatra pihenned kell. Minden a parkok árverésével kezdődik. Minden játékban teljesen más a park kinézete. Melyiket választod? Ez a kezdeti lökés ad bizonyos lehetőségeket és stratégiákat. Specializálsz-e egy adott témára? Vagy értékes személyzetet veszel fel? Döntesz-e a takarítók alkalmazása mellett, és pénzt keresel minden WC-vel, vagy biztonságosabb utat választasz, és kertészt veszel egy stabil jövedelem forrásként? A választás a tiéd!",
        "T.reviewsTitle": "Értékelések",
        "prevReviewButton": "Előző Értékelés",
        "nextReviewButton": "Következő Értékelés",
        "T.linksTitle": "Linkek:",
        "T.instagram": "Instagram",
        "T.theGameMaster": "TheGameMaster",
        "T.explanationVideo": "Magyarázó YouTube Videó",
        "T.boardGameGeek": "BoardGameGeek",
        "download-link": "Játékszabályok Letöltése PDF-ben",
        "T.reviewLink": "Eredeti Cikk",
        "T.reviewRating": "Értékelés",
        "T.assignmentcardsHREF": "Magyar fordítás az assignment-feladatkártyákhoz",
        "T.assignmentcard": "feladatkártya"
    }
};

const assignmentCardTranslations = {
    "EN": {
        "Red Fever": "",
        "Green Fever": "",
        "Yellow Fever": "",
        "Black Fever": "",
        "Blue Fever": "",
        "No Crime": "",
        "In the City": "",
        "No Fantasy": "",
        "No Rythm": "",
        "The Lands": "",
        "Focus": "",
        "Diversity": "",
        "Unknown": "",
        "High Yield": "",
        "Mega Safe": "",
        "Money Talks": "",
        "Small Works": "",
        "Mini Works": "",
        "Food Master": "",
        "Service King": "",
        "Inactive": "",
        "Self Supporting": "",
        "Star Chasers": "",
        "Manager": "",
        "Target Award": "",
    },
    "NL": {
        "Red Fever": "Verkrijg ten minste 3 attracties van het Muziek thema / de rode kleur",
        "Green Fever": "Verkrijg ten minste 3 attracties van het Jungle thema / de groen kleur",
        "Yellow Fever": "Verkrijg ten minste 3 attracties van het Crime thema / de gele kleur",
        "Black Fever": "Verkrijg ten minste 3 attracties van het Science Fiction thema / de zwarte kleur",
        "Blue Fever": "Verkrijg ten minste 3 attracties van het Ocean thema / de blauwe kleur",
        "No Crime": "Bezit geen attracties van het Crime thema / de gele kleur",
        "In the City": "Bezit geen attracties van het Jungle thema / de groene kleur",
        "No Fantasy": "Bezit geen attracties van het Science Fiction thema / de zwarte kleur",
        "No Rythm": "Bezit geen attracties van het Muziek thema / de rode kleur",
        "The Lands": "Bezit geen attracties van het Ocean thema / de blauwe kleur",
        "Focus": "Bouw attracties in maximaal 3 verschillende thema's",
        "Diversity": "Bouw attracties in maximaal 3 verschillende thema's",
        "Unknown": "Geen VIP in je park",
        "High Yield": "Het aantal attracties in het thema waarvan je de meeste attracties hebt gebouwd",
        "Mega Safe": "Bewaar meer dan 40 Megacoins in je kluis",
        "Money Talks": "Bewaar niet meer dan 15 Megacoins in je kluis",
        "Small Works": "Aantal attracties met een waarde van 3 likes of minder",
        "Mini Works": "Aantal attracties met een waarde van 2 likes of minder",
        "Food Master": "Aantal kaarten in je park met het betreffende symbool",
        "Service King": "Aantal kaarten in je park met het betreffende symbool",
        "Inactive": "Aantal ongebruikte actiekaarten en personeelskaarten",
        "Self Supporting": "Niet meer dan één personeelskaart",
        "Star Chasers": "Voor iedere attractie met een ster ontvang je 2 likes",
        "Manager": "Voor iedere personeelskaart ingezet (in je park geplaatst)",
        "Target Award": "Aantal andere opdrachtkaarten waarvoor je punten scoort",
    },
    "DE": {
        "Red Fever": "Holen Sie sich mindestens 3 Attraktionen zum Thema Musik / Farbe Rot",
        "Green Fever": "Holen Sie sich mindestens 3 Attraktionen zum Thema Jungle / Farbe Grün",
        "Yellow Fever": "Holen Sie sich mindestens 3 Attraktionen im Krimi-Thema / Farbe Gelb",
        "Black Fever": "Holen Sie sich mindestens 3 Attraktionen im Science-Fiction-Thema / Farbe Schwarz",
        "Blue Fever": "Holen Sie sich mindestens 3 Attraktionen im Ozean-Thema / Farbe Blau",
        "No Crime": "Besitzen Sie keine Attraktionen im Krimi-Thema / Farbe Gelb",
        "In the City": "Besitzen Sie keine Attraktionen im Jungle-Thema / Farbe Grün",
        "No Fantasy": "Besitzen Sie keine Attraktionen im Science-Fiction-Thema / Farbe Schwarz",
        "No Rythm": "Besitzen Sie keine Attraktionen des Themas Musik / Farbe Rot",
        "The Lands": "Besitzen Sie keine Attraktionen des Themas Ozean / rote Blau",
        "Focus": "Bauen Sie Attraktionen in bis zu 3 verschiedenen Thema",
        "Diversity": "Bauen Sie Attraktionen zu jedem Thema",
        "Unknown": "Kein VIP in Ihrem Park",
        "High Yield": "Die Anzahl der Attraktionen, zu deren Thema Sie die meisten Attraktionen gebaut haben",
        "Mega Safe": "Bewahren Sie mehr als 40 Megacoins in Ihrem Safe",
        "Money Talks": "Bewahren Sie nicht mehr als 15 Megacoins in Ihrem Safe",
        "Small Works": "Anzahl der Attraktionen mit einem Wert von 3 Likes oder weniger",
        "Mini Works": "Anzahl der Attraktionen mit einem Wert von 2 Likes oder weniger",
        "Food Master": "Anzahl der Karten in Ihrem Park mit dem entsprechenden Symbol",
        "Service King": "Anzahl der Karten in Ihrem Park mit dem entsprechenden Symbol",
        "Inactive": "Anzahl ungenutzter Aktionskarten und Personalkarten",
        "Self Supporting": "Nicht mehr als eine Personalkarte",
        "Star Chasers": "Für jede Attraktion mit einem Stern erhältst du 2 Likes",
        "Manager": "Wird für jede Personalkarte (in Ihrem Park platziert) verwendet",
        "Target Award": "Anzahl der weiteren Aufgabenkarten, für die Sie Punkte erhalten",
    },
}

const assignmentCards = [
    {"name": "Red Fever"},
    {"name": "Green Fever"},
    {"name": "Yellow Fever"},
    {"name": "Black Fever"},
    {"name": "Blue Fever"},
    {"name": "No Crime"},
    {"name": "In the City"},
    {"name": "No Fantasy"},
    {"name": "No Rythm"},
    {"name": "The Lands"},
    {"name": "Focus"},
    {"name": "Diversity"},
    {"name": "Unknown"},
    {"name": "High Yield"},
    {"name": "Mega Safe"},
    {"name": "Money Talks"},
    {"name": "Small Works"},
    {"name": "Mini Works"},
    {"name": "Food Master"},
    {"name": "Service King"},
    {"name": "Inactive"},
    {"name": "Self Supporting"},
    {"name": "Star Chasers"},
    {"name": "Manager"},
    {"name": "Target Award"}
];