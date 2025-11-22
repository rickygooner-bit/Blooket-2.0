// questions.js
// This file holds ALL the quiz data for the game.
// It attaches the data to the window object so the HTML file can load it.

window.BLOCKBUSTER_DATA = [
    // ============================
    // MATH
    // ============================
    {
        id: 'math-y1', category: 'Math', title: 'Year 1 Math', desc: 'Basic Addition & Subtraction', 
        questions: [
            { q: '5 + 3 = ?', a: ['8', '7', '9', '6'], correct: 0 },
            { q: '10 - 4 = ?', a: ['6', '5', '4', '7'], correct: 0 },
            { q: '2 + 2 = ?', a: ['4', '22', '5', '3'], correct: 0 },
            { q: 'Which is biggest?', a: ['10', '8', '5', '2'], correct: 0 },
            { q: '6 + 0 = ?', a: ['6', '0', '60', '5'], correct: 0 },
            { q: 'Double 3 is?', a: ['6', '33', '9', '12'], correct: 0 },
            { q: '1 + 1 + 1 = ?', a: ['3', '111', '4', '2'], correct: 0 },
            { q: '10 + 10 = ?', a: ['20', '100', '10', '30'], correct: 0 },
            { q: 'How many fingers on 1 hand?', a: ['5', '4', '6', '10'], correct: 0 },
            { q: 'What comes after 19?', a: ['20', '18', '21', '90'], correct: 0 },
            { q: '7 - 0 = ?', a: ['7', '0', '70', '6'], correct: 0 },
            { q: 'Shape with 3 sides?', a: ['Triangle', 'Square', 'Circle', 'Star'], correct: 0 },
        ]
    },
    {
        id: 'math-y4', category: 'Math', title: 'Year 4 Math', desc: 'Multiplication & Division', 
        questions: [
            { q: '7 x 3 = ?', a: ['21', '24', '14', '10'], correct: 0 },
            { q: '36 / 6 = ?', a: ['6', '8', '4', '12'], correct: 0 },
            { q: '9 x 9 = ?', a: ['81', '99', '18', '72'], correct: 0 },
            { q: 'Half of 50?', a: ['25', '20', '100', '15'], correct: 0 },
            { q: '4 x 12 = ?', a: ['48', '42', '40', '52'], correct: 0 },
            { q: '100 / 4 = ?', a: ['25', '20', '50', '10'], correct: 0 },
            { q: 'Perimeter of a 4cm square?', a: ['16cm', '8cm', '12cm', '20cm'], correct: 0 },
            { q: '1/4 of 20?', a: ['5', '4', '10', '2'], correct: 0 },
            { q: '8 x 8 = ?', a: ['64', '88', '72', '48'], correct: 0 },
            { q: 'Which is an even number?', a: ['24', '23', '21', '19'], correct: 0 },
        ]
    },
    {
        id: 'math-alg', category: 'Math', title: 'Algebra Basics', desc: 'Solve for X', 
        questions: [
            { q: 'If x + 5 = 10, x = ?', a: ['5', '15', '2', '50'], correct: 0 },
            { q: 'If 2x = 12, x = ?', a: ['6', '24', '10', '14'], correct: 0 },
            { q: 'If x - 3 = 7, x = ?', a: ['10', '4', '21', '5'], correct: 0 },
            { q: 'Solve: 3x + 1 = 10', a: ['3', '2', '9', '4'], correct: 0 },
            { q: 'If x/2 = 4, x = ?', a: ['8', '2', '6', '16'], correct: 0 },
            { q: 'Simplify: 2a + 3a', a: ['5a', '6a', '5', '6a^2'], correct: 0 },
            { q: 'Solve: 10 - x = 4', a: ['6', '14', '4', '5'], correct: 0 },
            { q: 'Value of x if 5x = 25', a: ['5', '20', '125', '10'], correct: 0 },
            { q: 'y = x + 2. If x=3, y=?', a: ['5', '1', '6', '32'], correct: 0 },
            { q: 'Simplify: 4x - x', a: ['3x', '4', '3', 'x'], correct: 0 },
        ]
    },
    {
        id: 'math-geo', category: 'Math', title: 'Geometry', desc: 'Shapes & Angles',
        questions: [
            { q: 'Sides on a hexagon?', a: ['6', '5', '8', '7'], correct: 0 },
            { q: 'Degrees in a right angle?', a: ['90', '180', '45', '360'], correct: 0 },
            { q: 'Shape like a ball?', a: ['Sphere', 'Cube', 'Pyramid', 'Circle'], correct: 0 },
            { q: 'Triangles have ___ sides.', a: ['3', '4', '2', '5'], correct: 0 },
            { q: 'Parallel lines never...', a: ['Touch', 'Straighten', 'Curve', 'End'], correct: 0 },
            { q: 'Shape with 8 sides?', a: ['Octagon', 'Nonagon', 'Decagon', 'Septagon'], correct: 0 },
            { q: 'Degrees in a triangle?', a: ['180', '360', '90', '100'], correct: 0 },
            { q: 'Line touching circle edge?', a: ['Tangent', 'Radius', 'Diameter', 'Chord'], correct: 0 },
            { q: '90 degree triangle?', a: ['Right Angled', 'Obtuse', 'Acute', 'Equilateral'], correct: 0 },
            { q: 'Sides on a pentagon?', a: ['5', '6', '4', '8'], correct: 0 },
        ]
    },
    {
        id: 'math-frac', category: 'Math', title: 'Fractions', desc: 'Parts of a Whole',
        questions: [
            { q: 'Top number of a fraction?', a: ['Numerator', 'Denominator', 'Top', 'Nom'], correct: 0 },
            { q: '1/2 + 1/2 = ?', a: ['1', '2', '1/4', '0.5'], correct: 0 },
            { q: '3/4 as a percentage?', a: ['75%', '25%', '50%', '34%'], correct: 0 },
            { q: 'Simplify 2/4', a: ['1/2', '1/3', '2/2', '4/2'], correct: 0 },
            { q: 'Half of a half?', a: ['1/4', '1/8', '1', '1/3'], correct: 0 },
            { q: '1/3 + 1/3 = ?', a: ['2/3', '1', '2/6', '3/3'], correct: 0 },
            { q: '0.5 as a fraction?', a: ['1/2', '1/5', '1/4', '2/5'], correct: 0 },
            { q: 'Improper fraction?', a: ['5/4', '3/4', '1/2', '9/10'], correct: 0 },
            { q: 'Equivalent to 1/2?', a: ['2/4', '2/3', '3/5', '1/3'], correct: 0 },
            { q: '25% as a fraction?', a: ['1/4', '1/2', '1/5', '3/4'], correct: 0 },
        ]
    },
    {
        id: 'math-ment', category: 'Math', title: 'Mental Math', desc: 'Quick Calculations',
        questions: [
            { q: '100 - 35 = ?', a: ['65', '75', '55', '45'], correct: 0 },
            { q: 'Double 15?', a: ['30', '45', '25', '50'], correct: 0 },
            { q: '50 + 50 + 50 = ?', a: ['150', '100', '200', '500'], correct: 0 },
            { q: '12 x 10 = ?', a: ['120', '1200', '112', '210'], correct: 0 },
            { q: 'Half of 48?', a: ['24', '22', '14', '42'], correct: 0 },
            { q: '20 + 20 - 10 = ?', a: ['30', '10', '40', '20'], correct: 0 },
            { q: '5 x 5 + 5 = ?', a: ['30', '25', '35', '50'], correct: 0 },
            { q: 'Half of 100?', a: ['50', '25', '10', '500'], correct: 0 },
            { q: '1000 - 1 = ?', a: ['999', '900', '990', '991'], correct: 0 },
            { q: '9 x 8 = ?', a: ['72', '81', '64', '56'], correct: 0 },
        ]
    },
    {
        id: 'math-adv', category: 'Math', title: 'Hard Multiplication', desc: 'Big Numbers',
        questions: [
            { q: '12 x 12 = ?', a: ['144', '122', '124', '142'], correct: 0 },
            { q: '15 x 3 = ?', a: ['45', '35', '55', '40'], correct: 0 },
            { q: '25 x 4 = ?', a: ['100', '125', '75', '50'], correct: 0 },
            { q: '11 x 11 = ?', a: ['121', '111', '110', '131'], correct: 0 },
            { q: '20 x 20 = ?', a: ['400', '200', '800', '2000'], correct: 0 },
            { q: '13 squared?', a: ['169', '144', '196', '133'], correct: 0 },
            { q: '15 x 15 = ?', a: ['225', '255', '205', '215'], correct: 0 },
            { q: 'Square root of 81?', a: ['9', '8', '7', '6'], correct: 0 },
            { q: '5 cubed (5x5x5)?', a: ['125', '25', '100', '75'], correct: 0 },
            { q: '100 / 20 = ?', a: ['5', '4', '10', '20'], correct: 0 },
        ]
    },

    // ============================
    // SCIENCE
    // ============================
    {
        id: 'sci-bio', category: 'Science', title: 'Biology Basics', desc: 'Life & Plants', 
        questions: [
            { q: 'What do plants use to make food?', a: ['Sunlight', 'Sand', 'Rocks', 'Wind'], correct: 0 },
            { q: 'The powerhouse of the cell is?', a: ['Mitochondria', 'Nucleus', 'Ribosome', 'Wall'], correct: 0 },
            { q: 'Humans breathe in...', a: ['Oxygen', 'Carbon Dioxide', 'Helium', 'Nitrogen'], correct: 0 },
            { q: 'Which is a mammal?', a: ['Whale', 'Shark', 'Crocodile', 'Eagle'], correct: 0 },
            { q: 'Red liquid in your body?', a: ['Blood', 'Water', 'Juice', 'Plasma'], correct: 0 },
            { q: 'Organ that cleans blood?', a: ['Liver', 'Heart', 'Stomach', 'Brain'], correct: 0 },
            { q: 'Bones in adult human?', a: ['206', '105', '300', '500'], correct: 0 },
            { q: 'Largest mammal?', a: ['Blue Whale', 'Elephant', 'Giraffe', 'Rhino'], correct: 0 },
            { q: 'Butterfly comes from?', a: ['Caterpillar', 'Worm', 'Egg', 'Pupa'], correct: 0 },
            { q: 'Baby frog?', a: ['Tadpole', 'Fry', 'Kid', 'Calf'], correct: 0 },
        ]
    },
    {
        id: 'sci-space', category: 'Science', title: 'Space', desc: 'Planets & Stars', 
        questions: [
            { q: 'Closest planet to the sun?', a: ['Mercury', 'Venus', 'Mars', 'Earth'], correct: 0 },
            { q: 'The Red Planet is?', a: ['Mars', 'Jupiter', 'Saturn', 'Sun'], correct: 0 },
            { q: 'Our galaxy is called?', a: ['Milky Way', 'Snickers', 'Andromeda', 'Galaxy One'], correct: 0 },
            { q: 'The sun is a...', a: ['Star', 'Planet', 'Moon', 'Asteroid'], correct: 0 },
            { q: 'Galaxy we live in?', a: ['Milky Way', 'Andromeda', 'Sombrero', 'Whirlpool'], correct: 0 },
            { q: 'Planet with most moons?', a: ['Saturn', 'Mars', 'Earth', 'Venus'], correct: 0 },
            { q: 'Farthest planet?', a: ['Neptune', 'Uranus', 'Saturn', 'Jupiter'], correct: 0 },
            { q: 'First person in space?', a: ['Yuri Gagarin', 'Neil Armstrong', 'Buzz Aldrin', 'Laika'], correct: 0 },
            { q: 'Rover on Mars?', a: ['Curiosity', 'Discovery', 'Voyager', 'Apollo'], correct: 0 },
            { q: 'Star nearest Earth?', a: ['Sun', 'Proxima', 'Sirius', 'Vega'], correct: 0 },
        ]
    },
    {
        id: 'sci-chem', category: 'Science', title: 'Chemistry', desc: 'Elements & Reactions',
        questions: [
            { q: 'Symbol for Oxygen?', a: ['O', 'Ox', 'On', 'Y'], correct: 0 },
            { q: 'H2O is...', a: ['Water', 'Air', 'Fire', 'Gas'], correct: 0 },
            { q: 'Solid to liquid is?', a: ['Melting', 'Freezing', 'Boiling', 'Gas'], correct: 0 },
            { q: 'pH of 7 is?', a: ['Neutral', 'Acid', 'Base', 'Hot'], correct: 0 },
            { q: 'Gold symbol?', a: ['Au', 'Ag', 'G', 'Go'], correct: 0 },
            { q: 'Symbol for Sodium?', a: ['Na', 'So', 'S', 'N'], correct: 0 },
            { q: 'Center of atom?', a: ['Nucleus', 'Shell', 'Proton', 'Electron'], correct: 0 },
            { q: 'Positive particle?', a: ['Proton', 'Electron', 'Neutron', 'Ion'], correct: 0 },
            { q: 'Negative particle?', a: ['Electron', 'Proton', 'Neutron', 'Atom'], correct: 0 },
            { q: 'Mix oil and water?', a: ['No', 'Yes', 'Maybe', 'Sometimes'], correct: 0 },
        ]
    },
    {
        id: 'sci-phys', category: 'Science', title: 'Physics', desc: 'Forces & Motion',
        questions: [
            { q: 'Force that pulls down?', a: ['Gravity', 'Magnetism', 'Friction', 'Speed'], correct: 0 },
            { q: 'Speed of light is...', a: ['Fastest', 'Slow', 'Medium', 'Variable'], correct: 0 },
            { q: 'Push or pull is a...', a: ['Force', 'Mass', 'Speed', 'Time'], correct: 0 },
            { q: 'Newton found gravity via?', a: ['Apple', 'Orange', 'Pear', 'Banana'], correct: 0 },
            { q: 'Opposite of North?', a: ['South', 'East', 'West', 'Up'], correct: 0 },
            { q: 'Measures time?', a: ['Clock', 'Ruler', 'Scale', 'Thermos'], correct: 0 },
            { q: 'Unit of force?', a: ['Newton', 'Joule', 'Watt', 'Volt'], correct: 0 },
            { q: 'Sound needs __ to travel?', a: ['Medium', 'Space', 'Vacuum', 'Nothing'], correct: 0 },
            { q: 'Light bounces off?', a: ['Mirror', 'Glass', 'Wood', 'Air'], correct: 0 },
            { q: 'Fast moving air?', a: ['Wind', 'Heat', 'Sound', 'Light'], correct: 0 },
        ]
    },
    {
        id: 'sci-eco', category: 'Science', title: 'Ecology', desc: 'Nature & Animals',
        questions: [
            { q: 'Top of food chain?', a: ['Predator', 'Prey', 'Plant', 'Sun'], correct: 0 },
            { q: 'Bees collect?', a: ['Nectar', 'Honey', 'Water', 'Leaves'], correct: 0 },
            { q: 'Place where an animal lives?', a: ['Habitat', 'House', 'Farm', 'Zoo'], correct: 0 },
            { q: 'Plants breathe out...', a: ['Oxygen', 'CO2', 'Nitrogen', 'Smoke'], correct: 0 },
            { q: 'Herbivores eat?', a: ['Plants', 'Meat', 'Insects', 'Everything'], correct: 0 },
            { q: 'Rain forest location?', a: ['Brazil', 'UK', 'Canada', 'Russia'], correct: 0 },
            { q: 'State of hibernation?', a: ['Sleep', 'Run', 'Eat', 'Hunt'], correct: 0 },
            { q: 'Extinct giant lizard?', a: ['Dinosaur', 'Dragon', 'Mammoth', 'Dodo'], correct: 0 },
            { q: 'Bird that can\'t fly?', a: ['Penguin', 'Eagle', 'Hawk', 'Owl'], correct: 0 },
            { q: 'Animal with pouch?', a: ['Marsupial', 'Mammal', 'Reptile', 'Fish'], correct: 0 },
        ]
    },
    {
        id: 'sci-body', category: 'Science', title: 'Human Body', desc: 'Anatomy',
        questions: [
            { q: 'Pumps blood?', a: ['Heart', 'Brain', 'Liver', 'Lungs'], correct: 0 },
            { q: 'Hardest bone?', a: ['Femur', 'Skull', 'Rib', 'Finger'], correct: 0 },
            { q: 'Body control center?', a: ['Brain', 'Heart', 'Stomach', 'Skin'], correct: 0 },
            { q: 'How many teeth (adult)?', a: ['32', '20', '50', '10'], correct: 0 },
            { q: 'Largest organ?', a: ['Skin', 'Liver', 'Lungs', 'Heart'], correct: 0 },
            { q: 'Filters air?', a: ['Lungs', 'Heart', 'Stomach', 'Liver'], correct: 0 },
            { q: 'Protects brain?', a: ['Skull', 'Ribs', 'Spine', 'Pelvis'], correct: 0 },
            { q: 'Connects bone to bone?', a: ['Ligament', 'Tendon', 'Muscle', 'Skin'], correct: 0 },
            { q: 'Connects muscle to bone?', a: ['Tendon', 'Ligament', 'Joint', 'Cartilage'], correct: 0 },
            { q: 'Outer layer of skin?', a: ['Epidermis', 'Dermis', 'Fat', 'Tissue'], correct: 0 },
        ]
    },
    {
        id: 'sci-wea', category: 'Science', title: 'Weather', desc: 'Clouds & Rain',
        questions: [
            { q: 'Water falling from sky?', a: ['Rain', 'Fog', 'Mist', 'Steam'], correct: 0 },
            { q: 'Frozen rain?', a: ['Hail', 'Snow', 'Mist', 'Fog'], correct: 0 },
            { q: 'Sound after lightning?', a: ['Thunder', 'Bang', 'Crack', 'Boom'], correct: 0 },
            { q: 'Measures temperature?', a: ['Thermometer', 'Barometer', 'Ruler', 'Scale'], correct: 0 },
            { q: 'Giant spinning storm?', a: ['Hurricane', 'Breeze', 'Gust', 'Shower'], correct: 0 },
            { q: 'Measures wind speed?', a: ['Anemometer', 'Thermometer', 'Rain Gauge', 'Compass'], correct: 0 },
            { q: 'Electric flash?', a: ['Lightning', 'Thunder', 'Spark', 'Zap'], correct: 0 },
            { q: 'Overflow of water?', a: ['Flood', 'Drought', 'Rain', 'Tide'], correct: 0 },
            { q: 'Lack of rain?', a: ['Drought', 'Flood', 'Storm', 'Dry'], correct: 0 },
            { q: 'Season leaves fall?', a: ['Autumn', 'Summer', 'Winter', 'Spring'], correct: 0 },
        ]
    },

    // ============================
    // GEOGRAPHY
    // ============================
    {
        id: 'geo-cap', category: 'Geography', title: 'World Capitals', desc: 'Name the Capital', 
        questions: [
            { q: 'Capital of France?', a: ['Paris', 'London', 'Rome', 'Berlin'], correct: 0 },
            { q: 'Capital of Japan?', a: ['Tokyo', 'Kyoto', 'Osaka', 'Seoul'], correct: 0 },
            { q: 'Capital of USA?', a: ['Washington DC', 'New York', 'LA', 'Texas'], correct: 0 },
            { q: 'Capital of Australia?', a: ['Canberra', 'Sydney', 'Melbourne', 'Perth'], correct: 0 },
            { q: 'Capital of Egypt?', a: ['Cairo', 'Alexandria', 'Nile', 'Giza'], correct: 0 },
            { q: 'Capital of Italy?', a: ['Rome', 'Venice', 'Milan', 'Naples'], correct: 0 },
            { q: 'Capital of Spain?', a: ['Madrid', 'Barcelona', 'Seville', 'Valencia'], correct: 0 },
            { q: 'Capital of Canada?', a: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'], correct: 0 },
            { q: 'Capital of China?', a: ['Beijing', 'Shanghai', 'Hong Kong', 'Wuhan'], correct: 0 },
            { q: 'Capital of Germany?', a: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'], correct: 0 },
        ]
    },
     {
        id: 'geo-world', category: 'Geography', title: 'World Knowledge', desc: 'Continents & Oceans', 
        questions: [
            { q: 'Largest Ocean?', a: ['Pacific', 'Atlantic', 'Indian', 'Arctic'], correct: 0 },
            { q: 'Longest River?', a: ['Nile', 'Amazon', 'Yangtze', 'Thames'], correct: 0 },
            { q: 'Largest Continent?', a: ['Asia', 'Africa', 'North America', 'Europe'], correct: 0 },
            { q: 'Country with most people?', a: ['India', 'China', 'USA', 'Russia'], correct: 0 },
            { q: 'The Amazon Rainforest is in?', a: ['South America', 'Africa', 'Asia', 'Australia'], correct: 0 },
            { q: 'Smallest country?', a: ['Vatican City', 'Monaco', 'Nauru', 'Tuvalu'], correct: 0 },
            { q: 'Coldest continent?', a: ['Antarctica', 'Asia', 'Europe', 'North America'], correct: 0 },
            { q: 'Smallest continent?', a: ['Australia', 'Europe', 'Antarctica', 'South America'], correct: 0 },
            { q: 'Tallest Mountain?', a: ['Everest', 'K2', 'Fuji', 'Kilimanjaro'], correct: 0 },
            { q: 'Country shaped like a boot?', a: ['Italy', 'Spain', 'France', 'Greece'], correct: 0 },
        ]
    },
    {
        id: 'geo-eur', category: 'Geography', title: 'Europe', desc: 'European Countries',
        questions: [
            { q: 'Shape of a boot?', a: ['Italy', 'Spain', 'France', 'UK'], correct: 0 },
            { q: 'Capital of UK?', a: ['London', 'Paris', 'Dublin', 'Cardiff'], correct: 0 },
            { q: 'Home of Ikea?', a: ['Sweden', 'Norway', 'Denmark', 'Finland'], correct: 0 },
            { q: 'Eiffel Tower is in?', a: ['Paris', 'Rome', 'Berlin', 'Madrid'], correct: 0 },
            { q: 'Famous for chocolate?', a: ['Belgium', 'Poland', 'Greece', 'Russia'], correct: 0 },
            { q: 'Capital of Germany?', a: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'], correct: 0 },
            { q: 'Capital of Russia?', a: ['Moscow', 'St Petersburg', 'Kiev', 'Minsk'], correct: 0 },
            { q: 'Country of Tulips?', a: ['Netherlands', 'Germany', 'France', 'Spain'], correct: 0 },
            { q: 'Viking origin?', a: ['Scandinavia', 'Balkans', 'Iberia', 'Baltics'], correct: 0 },
            { q: 'Running of Bulls?', a: ['Spain', 'Italy', 'Portugal', 'France'], correct: 0 },
        ]
    },
    {
        id: 'geo-asia', category: 'Geography', title: 'Asia', desc: 'Asian Countries',
        questions: [
            { q: 'Great Wall is in?', a: ['China', 'Japan', 'Korea', 'India'], correct: 0 },
            { q: 'Taj Mahal is in?', a: ['India', 'Thailand', 'Vietnam', 'China'], correct: 0 },
            { q: 'Sushi is from?', a: ['Japan', 'China', 'Laos', 'Iran'], correct: 0 },
            { q: 'Largest country in Asia?', a: ['Russia', 'China', 'India', 'Japan'], correct: 0 },
            { q: 'Capital of Thailand?', a: ['Bangkok', 'Phuket', 'Hanoi', 'Manila'], correct: 0 },
            { q: 'Mt Everest is in?', a: ['Nepal', 'China', 'India', 'Bhutan'], correct: 0 },
            { q: 'Capital of Japan?', a: ['Tokyo', 'Osaka', 'Kyoto', 'Seoul'], correct: 0 },
            { q: 'Capital of India?', a: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'], correct: 0 },
            { q: 'Island nation?', a: ['Philippines', 'Vietnam', 'Laos', 'Cambodia'], correct: 0 },
            { q: 'Land of Rising Sun?', a: ['Japan', 'China', 'Korea', 'Thailand'], correct: 0 },
        ]
    },
    {
        id: 'geo-us', category: 'Geography', title: 'USA', desc: 'States & Cities',
        questions: [
            { q: 'How many states?', a: ['50', '52', '48', '13'], correct: 0 },
            { q: 'Sunshine State?', a: ['Florida', 'California', 'Texas', 'Ohio'], correct: 0 },
            { q: 'Big Apple?', a: ['New York', 'Chicago', 'LA', 'Miami'], correct: 0 },
            { q: 'Capital of Texas?', a: ['Austin', 'Dallas', 'Houston', 'El Paso'], correct: 0 },
            { q: 'Statue of Liberty is in?', a: ['NY', 'DC', 'Boston', 'Philly'], correct: 0 },
            { q: 'Golden Gate Bridge?', a: ['San Francisco', 'LA', 'Seattle', 'Portland'], correct: 0 },
            { q: 'Capital of USA?', a: ['Washington DC', 'New York', 'Philadelphia', 'Boston'], correct: 0 },
            { q: 'Grand Canyon state?', a: ['Arizona', 'Nevada', 'Utah', 'Colorado'], correct: 0 },
            { q: 'Disney World state?', a: ['Florida', 'California', 'Texas', 'Georgia'], correct: 0 },
            { q: 'Hollywood city?', a: ['Los Angeles', 'New York', 'Miami', 'Chicago'], correct: 0 },
        ]
    },
    {
        id: 'geo-land', category: 'Geography', title: 'Landmarks', desc: 'Famous Places',
        questions: [
            { q: 'Big Ben is in?', a: ['London', 'Paris', 'NY', 'Sydney'], correct: 0 },
            { q: 'Pyramids are in?', a: ['Egypt', 'Mexico', 'Peru', 'China'], correct: 0 },
            { q: 'Opera House is in?', a: ['Sydney', 'Vienna', 'Berlin', 'Rome'], correct: 0 },
            { q: 'Colosseum is in?', a: ['Rome', 'Athens', 'Cairo', 'Madrid'], correct: 0 },
            { q: 'Christ Redeemer is in?', a: ['Brazil', 'Argentina', 'Chile', 'Peru'], correct: 0 },
            { q: 'Taj Mahal country?', a: ['India', 'Pakistan', 'Bangladesh', 'Nepal'], correct: 0 },
            { q: 'Machu Picchu country?', a: ['Peru', 'Chile', 'Brazil', 'Colombia'], correct: 0 },
            { q: 'Stonehenge country?', a: ['UK', 'Ireland', 'France', 'Germany'], correct: 0 },
            { q: 'Great Barrier Reef?', a: ['Australia', 'USA', 'Brazil', 'Mexico'], correct: 0 },
            { q: 'Leaning Tower?', a: ['Pisa', 'Rome', 'Venice', 'Florence'], correct: 0 },
        ]
    },
    {
        id: 'geo-flags', category: 'Geography', title: 'Flags', desc: 'Colors & Symbols',
        questions: [
            { q: 'Red leaf on flag?', a: ['Canada', 'USA', 'Japan', 'UK'], correct: 0 },
            { q: 'Red circle on white?', a: ['Japan', 'China', 'Korea', 'Vietnam'], correct: 0 },
            { q: 'Stars and Stripes?', a: ['USA', 'UK', 'France', 'Russia'], correct: 0 },
            { q: 'Blue yellow red flag?', a: ['Romania', 'Italy', 'Germany', 'Spain'], correct: 0 },
            { q: 'Union Jack?', a: ['UK', 'USA', 'Australia', 'NZ'], correct: 0 },
            { q: 'Maple Leaf flag?', a: ['Canada', 'USA', 'Mexico', 'Brazil'], correct: 0 },
            { q: 'Southern Cross flag?', a: ['Australia', 'UK', 'USA', 'Canada'], correct: 0 },
            { q: 'Dragon on flag?', a: ['Wales', 'England', 'Scotland', 'Ireland'], correct: 0 },
            { q: 'Tricolor Blue White Red?', a: ['France', 'Italy', 'Germany', 'Spain'], correct: 0 },
            { q: 'Only non-rectangular flag?', a: ['Nepal', 'India', 'China', 'Bhutan'], correct: 0 },
        ]
    },

    // ============================
    // HISTORY
    // ============================
    {
        id: 'hist-anc', category: 'History', title: 'Ancient History', desc: 'Old Civilizations', 
        questions: [
            { q: 'Built the Pyramids?', a: ['Egyptians', 'Romans', 'Greeks', 'Mayans'], correct: 0 },
            { q: 'Julius Caesar was...', a: ['Roman', 'Greek', 'Egyptian', 'Viking'], correct: 0 },
            { q: 'First President of USA?', a: ['Washington', 'Lincoln', 'Jefferson', 'Adams'], correct: 0 },
            { q: 'Who discovered America?', a: ['Columbus', 'Magellan', 'Cook', 'Drake'], correct: 0 },
            { q: 'Ancient warriors of Japan?', a: ['Samurai', 'Knights', 'Vikings', 'Spartans'], correct: 0 },
            { q: 'Where were the Olympics born?', a: ['Greece', 'Rome', 'China', 'Egypt'], correct: 0 },
            { q: 'King Tut was?', a: ['Pharaoh', 'Emperor', 'King', 'President'], correct: 0 },
            { q: 'God of Underworld?', a: ['Hades', 'Zeus', 'Poseidon', 'Ares'], correct: 0 },
            { q: 'River of Egypt?', a: ['Nile', 'Amazon', 'Yangtze', 'Ganges'], correct: 0 },
            { q: 'Trojan Horse city?', a: ['Troy', 'Athens', 'Sparta', 'Rome'], correct: 0 },
        ]
    },
    {
        id: 'hist-mid', category: 'History', title: 'Middle Ages', desc: 'Knights & Castles',
        questions: [
            { q: 'Warrior in metal armor?', a: ['Knight', 'Ninja', 'Samurai', 'Soldier'], correct: 0 },
            { q: 'Home of a King?', a: ['Castle', 'Hut', 'Tent', 'Cave'], correct: 0 },
            { q: 'Weapon with string?', a: ['Bow', 'Sword', 'Mace', 'Spear'], correct: 0 },
            { q: 'Disease spread by rats?', a: ['Plague', 'Flu', 'Cold', 'Pox'], correct: 0 },
            { q: 'Code of knights?', a: ['Chivalry', 'Honor', 'Bushido', 'Law'], correct: 0 },
            { q: 'Joan of Arc country?', a: ['France', 'England', 'Spain', 'Italy'], correct: 0 },
            { q: 'King Arthur\'s sword?', a: ['Excalibur', 'Sting', 'Anduril', 'Needle'], correct: 0 },
            { q: 'Robin Hood\'s enemy?', a: ['Sheriff', 'King', 'Knight', 'Friar'], correct: 0 },
            { q: 'Viking boat?', a: ['Longship', 'Canoe', 'Speedboat', 'Submarine'], correct: 0 },
            { q: 'Magna Carta year?', a: ['1215', '1066', '1492', '1776'], correct: 0 },
        ]
    },
    {
        id: 'hist-ww2', category: 'History', title: 'World War II', desc: '1939-1945',
        questions: [
            { q: 'Start year?', a: ['1939', '1945', '1914', '1960'], correct: 0 },
            { q: 'Leader of Germany?', a: ['Hitler', 'Churchill', 'Stalin', 'Roosevelt'], correct: 0 },
            { q: 'Attacked Pearl Harbor?', a: ['Japan', 'Germany', 'Italy', 'Russia'], correct: 0 },
            { q: 'D-Day was in?', a: ['France', 'Germany', 'Italy', 'UK'], correct: 0 },
            { q: 'Weapon ended the war?', a: ['Atom Bomb', 'Tank', 'Gun', 'Submarine'], correct: 0 },
            { q: 'Pearl Harbor year?', a: ['1941', '1939', '1945', '1942'], correct: 0 },
            { q: 'British PM?', a: ['Churchill', 'Chamberlain', 'Thatcher', 'Blair'], correct: 0 },
            { q: 'Anne Frank famous for?', a: ['Diary', 'Painting', 'Song', 'Poem'], correct: 0 },
            { q: 'Holocaust victims?', a: ['Jews', 'Germans', 'Americans', 'British'], correct: 0 },
            { q: 'War ended in?', a: ['1945', '1939', '1941', '1950'], correct: 0 },
        ]
    },
    {
        id: 'hist-ind', category: 'History', title: 'Industrial Rev', desc: 'Machines & Steam',
        questions: [
            { q: 'Fuel for steam engines?', a: ['Coal', 'Oil', 'Solar', 'Wind'], correct: 0 },
            { q: 'Invention for travel?', a: ['Train', 'Plane', 'Car', 'Rocket'], correct: 0 },
            { q: 'Made clothes faster?', a: ['Spinning Jenny', 'Wheel', 'Loom', 'Needle'], correct: 0 },
            { q: 'Where people worked?', a: ['Factories', 'Farms', 'Homes', 'Offices'], correct: 0 },
            { q: 'Communication invention?', a: ['Telegraph', 'Phone', 'Email', 'Fax'], correct: 0 },
            { q: 'Lightbulb inventor?', a: ['Edison', 'Tesla', 'Bell', 'Ford'], correct: 0 },
            { q: 'Telephone inventor?', a: ['Bell', 'Edison', 'Tesla', 'Marconi'], correct: 0 },
            { q: 'Plane inventors?', a: ['Wright Bros', 'Smith Bros', 'Marx Bros', 'Warner Bros'], correct: 0 },
            { q: 'Car mass producer?', a: ['Ford', 'Chevy', 'Dodge', 'Toyota'], correct: 0 },
            { q: 'Queen during era?', a: ['Victoria', 'Elizabeth', 'Mary', 'Anne'], correct: 0 },
        ]
    },
    {
        id: 'hist-cold', category: 'History', title: 'Cold War', desc: 'USA vs USSR',
        questions: [
            { q: 'Main rivals?', a: ['USA & USSR', 'UK & France', 'China & Japan', 'Ger & Fra'], correct: 0 },
            { q: 'Race to the...?', a: ['Space', 'Bottom', 'Sea', 'Pole'], correct: 0 },
            { q: 'Symbol falling in 1989?', a: ['Berlin Wall', 'Iron Curtain', 'Statue', 'Tower'], correct: 0 },
            { q: 'Crisis in 1962?', a: ['Cuba', 'Vietnam', 'Korea', 'Berlin'], correct: 0 },
            { q: 'First man on moon?', a: ['USA', 'USSR', 'China', 'UK'], correct: 0 },
            { q: 'Wall that fell?', a: ['Berlin', 'China', 'Hadrian', 'Wailing'], correct: 0 },
            { q: 'Cuban Missile Crisis year?', a: ['1962', '1960', '1965', '1970'], correct: 0 },
            { q: 'USSR leader?', a: ['Stalin', 'Putin', 'Lenin', 'Trotsky'], correct: 0 },
            { q: 'Vietnam War side?', a: ['North vs South', 'East vs West', 'Up vs Down', 'Left vs Right'], correct: 0 },
            { q: 'Sputnik was a?', a: ['Satellite', 'Rocket', 'Dog', 'Monkey'], correct: 0 },
        ]
    },
    {
        id: 'hist-us', category: 'History', title: 'US History', desc: 'Civil War & more',
        questions: [
            { q: 'Declaration year?', a: ['1776', '1492', '1812', '1900'], correct: 0 },
            { q: 'Civil War President?', a: ['Lincoln', 'Washington', 'Bush', 'Obama'], correct: 0 },
            { q: 'Civil War cause?', a: ['Slavery', 'Tax', 'Land', 'Gold'], correct: 0 },
            { q: 'First colony?', a: ['Jamestown', 'Plymouth', 'NY', 'Boston'], correct: 0 },
            { q: 'Money with Franklin?', a: ['$100', '$1', '$5', '$20'], correct: 0 },
            { q: '1st President?', a: ['Washington', 'Lincoln', 'Adams', 'Jefferson'], correct: 0 },
            { q: '16th President?', a: ['Lincoln', 'Washington', 'Kennedy', 'Roosevelt'], correct: 0 },
            { q: 'Declaration writer?', a: ['Jefferson', 'Washington', 'Adams', 'Franklin'], correct: 0 },
            { q: 'Boston Tea...?', a: ['Party', 'Club', 'Room', 'House'], correct: 0 },
            { q: 'Current capital?', a: ['DC', 'NY', 'LA', 'Chicago'], correct: 0 },
        ]
    },
    {
        id: 'hist-exp', category: 'History', title: 'Explorers', desc: 'Mapping the World',
        questions: [
            { q: 'Sailed in 1492?', a: ['Columbus', 'Cook', 'Drake', 'Vasco'], correct: 0 },
            { q: 'First around the world?', a: ['Magellan', 'Columbus', 'Polo', 'Drake'], correct: 0 },
            { q: 'Went to China?', a: ['Marco Polo', 'Columbus', 'Cook', 'Hudson'], correct: 0 },
            { q: 'Discovered Australia?', a: ['Cook', 'Tasman', 'Flinders', 'Bligh'], correct: 0 },
            { q: 'Viking explorer?', a: ['Leif Erikson', 'Thor', 'Odin', 'Ragnar'], correct: 0 },
            { q: '1st to India by sea?', a: ['Da Gama', 'Columbus', 'Magellan', 'Cook'], correct: 0 },
            { q: 'Conquered Aztecs?', a: ['Cortes', 'Pizarro', 'Columbus', 'Magellan'], correct: 0 },
            { q: 'Conquered Incas?', a: ['Pizarro', 'Cortes', 'Columbus', 'Magellan'], correct: 0 },
            { q: 'Famous female flyer?', a: ['Earhart', 'Ride', 'Coleman', 'Johnson'], correct: 0 },
            { q: 'South Pole explorer?', a: ['Amundsen', 'Scott', 'Shackleton', 'Byrd'], correct: 0 },
        ]
    },

    // ============================
    // LITERATURE
    // ============================
    {
        id: 'lit-kids', category: 'Literature', title: 'Famous Books', desc: 'Authors & Stories', 
        questions: [
            { q: 'Who wrote Harry Potter?', a: ['JK Rowling', 'Roald Dahl', 'Tolkien', 'Dr Seuss'], correct: 0 },
            { q: 'Wrote "Cat in the Hat"?', a: ['Dr Seuss', 'Disney', 'Potter', 'Dahl'], correct: 0 },
            { q: 'Boy who never grew up?', a: ['Peter Pan', 'Harry Potter', 'Tom Sawyer', 'Oliver Twist'], correct: 0 },
            { q: 'Wrote "Romeo and Juliet"?', a: ['Shakespeare', 'Dickens', 'Twain', 'Austen'], correct: 0 },
            { q: 'A Hobbit\'s name?', a: ['Bilbo', 'Gandalf', 'Aragorn', 'Legolas'], correct: 0 },
            { q: 'Bear loves honey?', a: ['Winnie the Pooh', 'Paddington', 'Yogi', 'Baloo'], correct: 0 },
            { q: 'Pig in a web?', a: ['Wilbur', 'Babe', 'Porky', 'Peppa'], correct: 0 },
            { q: 'Wooden boy?', a: ['Pinocchio', 'Peter Pan', 'Dumbo', 'Bambi'], correct: 0 },
            { q: 'Elephant with big ears?', a: ['Dumbo', 'Babar', 'Horton', 'Elmer'], correct: 0 },
            { q: 'Girl in Wonderland?', a: ['Alice', 'Dorothy', 'Wendy', 'Lucy'], correct: 0 },
        ]
    },
    {
        id: 'lit-myth', category: 'Literature', title: 'Mythology', desc: 'Gods & Monsters',
        questions: [
            { q: 'King of Greek Gods?', a: ['Zeus', 'Hades', 'Poseidon', 'Ares'], correct: 0 },
            { q: 'God of the Sea?', a: ['Poseidon', 'Zeus', 'Apollo', 'Thor'], correct: 0 },
            { q: 'Hammer wielding god?', a: ['Thor', 'Loki', 'Odin', 'Zeus'], correct: 0 },
            { q: 'Snake hair monster?', a: ['Medusa', 'Hydra', 'Siren', 'Witch'], correct: 0 },
            { q: 'Hero with a heel?', a: ['Achilles', 'Hercules', 'Hector', 'Paris'], correct: 0 },
            { q: 'God of Thunder?', a: ['Thor', 'Zeus', 'Odin', 'Loki'], correct: 0 },
            { q: 'Goddess of Love?', a: ['Aphrodite', 'Athena', 'Hera', 'Artemis'], correct: 0 },
            { q: 'One-eyed monster?', a: ['Cyclops', 'Giant', 'Ogre', 'Troll'], correct: 0 },
            { q: 'Winged horse?', a: ['Pegasus', 'Unicorn', 'Griffin', 'Dragon'], correct: 0 },
            { q: 'Box of troubles?', a: ['Pandora', 'Medusa', 'Athena', 'Hera'], correct: 0 },
        ]
    },
    {
        id: 'lit-shake', category: 'Literature', title: 'Shakespeare', desc: 'The Bard',
        questions: [
            { q: 'To be or not to be?', a: ['Hamlet', 'Macbeth', 'Romeo', 'Othello'], correct: 0 },
            { q: 'Star crossed lovers?', a: ['Romeo & Juliet', 'Antony & Cleo', 'Macbeth', 'Hamlet'], correct: 0 },
            { q: 'Scottish Play?', a: ['Macbeth', 'Hamlet', 'Lear', 'Tempest'], correct: 0 },
            { q: 'Midsummer Night\'s...?', a: ['Dream', 'Mare', 'Party', 'Sleep'], correct: 0 },
            { q: 'Shakespeare\'s theater?', a: ['Globe', 'World', 'Star', 'Rose'], correct: 0 },
            { q: 'Prince of Denmark?', a: ['Hamlet', 'Macbeth', 'Othello', 'Lear'], correct: 0 },
            { q: 'Villain in Othello?', a: ['Iago', 'Cassio', 'Roderigo', 'Brabantio'], correct: 0 },
            { q: 'Wife of Macbeth?', a: ['Lady Macbeth', 'Ophelia', 'Juliet', 'Desdemona'], correct: 0 },
            { q: '"Et tu, Brute?"', a: ['Julius Caesar', 'Hamlet', 'Macbeth', 'Othello'], correct: 0 },
            { q: 'All the world\'s a...', a: ['Stage', 'Play', 'Game', 'Show'], correct: 0 },
        ]
    },
    {
        id: 'lit-fan', category: 'Literature', title: 'Fantasy', desc: 'Magic Worlds',
        questions: [
            { q: 'Lion, Witch and...?', a: ['Wardrobe', 'Closet', 'Door', 'Box'], correct: 0 },
            { q: 'Ring bearer?', a: ['Frodo', 'Gandalf', 'Sam', 'Gollum'], correct: 0 },
            { q: 'School for Wizards?', a: ['Hogwarts', 'Jedi', 'Narnia', 'Oz'], correct: 0 },
            { q: 'Golden Ticket finder?', a: ['Charlie', 'James', 'Harry', 'Matilda'], correct: 0 },
            { q: 'Land of Oz girl?', a: ['Dorothy', 'Alice', 'Wendy', 'Lucy'], correct: 0 },
            { q: 'Aslan is a?', a: ['Lion', 'Tiger', 'Bear', 'Wolf'], correct: 0 },
            { q: 'Weapon of Jedi?', a: ['Lightsaber', 'Blaster', 'Sword', 'Wand'], correct: 0 },
            { q: 'Dragon in Hobbit?', a: ['Smaug', 'Norbert', 'Toothless', 'Draco'], correct: 0 },
            { q: 'House of Harry Potter?', a: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'], correct: 0 },
            { q: 'Winter is Coming?', a: ['Stark', 'Lannister', 'Targaryen', 'Baratheon'], correct: 0 },
        ]
    },
    {
        id: 'lit-fairy', category: 'Literature', title: 'Fairy Tales', desc: 'Once Upon a Time',
        questions: [
            { q: 'Lost a glass slipper?', a: ['Cinderella', 'Snow White', 'Aurora', 'Belle'], correct: 0 },
            { q: 'Ate a poison apple?', a: ['Snow White', 'Cinderella', 'Rapunzel', 'Elsa'], correct: 0 },
            { q: 'Long hair in tower?', a: ['Rapunzel', 'Fiona', 'Merida', 'Tiana'], correct: 0 },
            { q: 'Chased by a wolf?', a: ['Red Riding Hood', 'Goldilocks', 'Alice', 'Dorothy'], correct: 0 },
            { q: 'Nose grew when lying?', a: ['Pinocchio', 'Peter Pan', 'Dumbo', 'Bambi'], correct: 0 },
            { q: 'Slept 100 years?', a: ['Sleeping Beauty', 'Cinderella', 'Snow White', 'Belle'], correct: 0 },
            { q: 'Climbed beanstalk?', a: ['Jack', 'Jill', 'Hansel', 'Gretel'], correct: 0 },
            { q: 'Three bears visitor?', a: ['Goldilocks', 'Red Riding Hood', 'Alice', 'Dorothy'], correct: 0 },
            { q: 'Turned into swan?', a: ['Ugly Duckling', 'Chicken Little', 'Goose', 'Turkey'], correct: 0 },
            { q: 'Breadcrumb trail?', a: ['Hansel & Gretel', 'Jack & Jill', 'Romeo & Juliet', 'Punch & Judy'], correct: 0 },
        ]
    },
    {
        id: 'lit-class', category: 'Literature', title: 'Classics', desc: 'Old Novels',
        questions: [
            { q: 'Wrote Christmas Carol?', a: ['Dickens', 'Twain', 'Austen', 'Poe'], correct: 0 },
            { q: 'Captain of the Pequod?', a: ['Ahab', 'Nemo', 'Hook', 'Sparrow'], correct: 0 },
            { q: 'Monster creator?', a: ['Frankenstein', 'Dracula', 'Hyde', 'Wolfman'], correct: 0 },
            { q: 'Detective Holmes?', a: ['Sherlock', 'Watson', 'Poirot', 'Marple'], correct: 0 },
            { q: 'Big Brother is watching?', a: ['1984', 'Animal Farm', 'Brave New World', 'Fahrenheit'], correct: 0 },
            { q: 'Whale hunter?', a: ['Ahab', 'Nemo', 'Hook', 'Sparrow'], correct: 0 },
            { q: 'Boy raised by wolves?', a: ['Mowgli', 'Tarzan', 'Simba', 'Peter Pan'], correct: 0 },
            { q: 'Vampire count?', a: ['Dracula', 'Frankenstein', 'Hyde', 'Wolfman'], correct: 0 },
            { q: 'Sci-fi pioneer?', a: ['Verne', 'Wells', 'Asimov', 'Clarke'], correct: 0 },
            { q: 'Scarlet Letter wearer?', a: ['Hester', 'Pearl', 'Dimmesdale', 'Chillingworth'], correct: 0 },
        ]
    },
    {
        id: 'lit-poet', category: 'Literature', title: 'Poetry', desc: 'Rhyme & Rhythm',
        questions: [
            { q: 'Japanese 3 line poem?', a: ['Haiku', 'Sonnet', 'Limerick', 'Epic'], correct: 0 },
            { q: 'Words starting same?', a: ['Alliteration', 'Rhyme', 'Simile', 'Metaphor'], correct: 0 },
            { q: '14 line poem?', a: ['Sonnet', 'Ballad', 'Haiku', 'Ode'], correct: 0 },
            { q: 'Comparison using "like"?', a: ['Simile', 'Metaphor', 'Pun', 'Irony'], correct: 0 },
            { q: 'Cat in the...?', a: ['Hat', 'Mat', 'Bat', 'Sat'], correct: 0 },
            { q: '"The Raven" poet?', a: ['Poe', 'Frost', 'Dickinson', 'Whitman'], correct: 0 },
            { q: '"Road Not Taken"?', a: ['Frost', 'Poe', 'Dickinson', 'Whitman'], correct: 0 },
            { q: '"I Wandered Lonely..."?', a: ['Wordsworth', 'Keats', 'Shelley', 'Byron'], correct: 0 },
            { q: '"Shall I compare thee"?', a: ['Shakespeare', 'Marlowe', 'Jonson', 'Donne'], correct: 0 },
            { q: '"Green Eggs and Ham"?', a: ['Dr Seuss', 'Silverstein', 'Dahl', 'Milne'], correct: 0 },
        ]
    },

    // ============================
    // ENGLISH
    // ============================
    {
        id: 'eng-gram', category: 'English', title: 'Grammar', desc: 'Parts of Speech', 
        questions: [
            { q: 'Which is a Verb?', a: ['Run', 'Blue', 'Table', 'Happy'], correct: 0 },
            { q: 'Which is a Noun?', a: ['Cat', 'Quickly', 'Jump', 'Red'], correct: 0 },
            { q: 'Which is an Adjective?', a: ['Beautiful', 'Sing', 'Boy', 'Under'], correct: 0 },
            { q: 'Past tense of "Go"?', a: ['Went', 'Goed', 'Gone', 'Going'], correct: 0 },
            { q: 'Antonym of "Hot"?', a: ['Cold', 'Warm', 'Fire', 'Sun'], correct: 0 },
            { q: 'Action word?', a: ['Verb', 'Noun', 'Adjective', 'Adverb'], correct: 0 },
            { q: 'Describes a noun?', a: ['Adjective', 'Verb', 'Noun', 'Adverb'], correct: 0 },
            { q: 'Replaces a noun?', a: ['Pronoun', 'Verb', 'Adjective', 'Adverb'], correct: 0 },
            { q: 'Describes a verb?', a: ['Adverb', 'Verb', 'Noun', 'Adjective'], correct: 0 },
            { q: 'Joiner word?', a: ['Conjunction', 'Verb', 'Noun', 'Adjective'], correct: 0 },
        ]
    },
    {
        id: 'eng-spell', category: 'English', title: 'Spelling Bee', desc: 'Hard Words',
        questions: [
            { q: 'Correct spelling?', a: ['Necessary', 'Neccessary', 'Necesary', 'Nesessary'], correct: 0 },
            { q: 'Correct spelling?', a: ['Believe', 'Beleive', 'Belive', 'Beeleive'], correct: 0 },
            { q: 'Correct spelling?', a: ['Accommodate', 'Acommodate', 'Accomodate', 'Acomodate'], correct: 0 },
            { q: 'Correct spelling?', a: ['Definitely', 'Definately', 'Definatly', 'Definetly'], correct: 0 },
            { q: 'Correct spelling?', a: ['Separate', 'Seperate', 'Seperat', 'Separat'], correct: 0 },
            { q: 'Receive or Recieve?', a: ['Receive', 'Recieve', 'Receeve', 'Resieve'], correct: 0 },
            { q: 'Weird or Wierd?', a: ['Weird', 'Wierd', 'Wired', 'Weerd'], correct: 0 },
            { q: 'Their, There, ...?', a: ['They\'re', 'Thier', 'Theer', 'Thare'], correct: 0 },
            { q: 'Two, Too, ...?', a: ['To', 'Tow', 'Tew', 'Tu'], correct: 0 },
            { q: 'Which is correct?', a: ['Beginning', 'Begining', 'Begginning', 'Begning'], correct: 0 },
        ]
    },
    {
        id: 'eng-vocab', category: 'English', title: 'Vocabulary', desc: 'Definitions',
        questions: [
            { q: 'Means "Very Big"?', a: ['Enormous', 'Tiny', 'Small', 'Mini'], correct: 0 },
            { q: 'Means "Very Happy"?', a: ['Ecstatic', 'Sad', 'Angry', 'Bored'], correct: 0 },
            { q: 'Means "To Help"?', a: ['Assist', 'Hinder', 'Stop', 'Block'], correct: 0 },
            { q: 'Means "To Watch"?', a: ['Observe', 'Ignore', 'Sleep', 'Run'], correct: 0 },
            { q: 'Means "Smart"?', a: ['Intelligent', 'Dull', 'Slow', 'Weak'], correct: 0 },
            { q: 'Opposite of ancient?', a: ['Modern', 'Old', 'Antique', 'Past'], correct: 0 },
            { q: 'Synonym for fast?', a: ['Rapid', 'Slow', 'Stop', 'Wait'], correct: 0 },
            { q: 'Book of words?', a: ['Dictionary', 'Atlas', 'Novel', 'Manual'], correct: 0 },
            { q: 'Study of life?', a: ['Biology', 'Geology', 'Physics', 'Chemistry'], correct: 0 },
            { q: '10 years?', a: ['Decade', 'Century', 'Millennium', 'Year'], correct: 0 },
        ]
    },
    {
        id: 'eng-idiom', category: 'English', title: 'Idioms', desc: 'Common Sayings',
        questions: [
            { q: 'Raining cats and...?', a: ['Dogs', 'Frogs', 'Birds', 'Fish'], correct: 0 },
            { q: 'Piece of...?', a: ['Cake', 'Pie', 'Bread', 'Fruit'], correct: 0 },
            { q: 'Break a...?', a: ['Leg', 'Arm', 'Head', 'Foot'], correct: 0 },
            { q: 'Spill the...?', a: ['Beans', 'Milk', 'Tea', 'Soup'], correct: 0 },
            { q: 'Under the...?', a: ['Weather', 'Table', 'Sun', 'Bus'], correct: 0 },
            { q: 'Bite the...', a: ['Bullet', 'Apple', 'Hand', 'Dust'], correct: 0 },
            { q: 'Hit the...', a: ['Sack', 'Road', 'Roof', 'Wall'], correct: 0 },
            { q: 'Cost an arm and...', a: ['Leg', 'Foot', 'Hand', 'Head'], correct: 0 },
            { q: 'Let the cat out of...', a: ['Bag', 'House', 'Box', 'Cage'], correct: 0 },
            { q: 'Once in a blue...', a: ['Moon', 'Sun', 'Sky', 'Star'], correct: 0 },
        ]
    },
    {
        id: 'eng-syn', category: 'English', title: 'Synonyms', desc: 'Similar Words',
        questions: [
            { q: 'Synonym for Fast?', a: ['Quick', 'Slow', 'Stop', 'Wait'], correct: 0 },
            { q: 'Synonym for Big?', a: ['Large', 'Small', 'Tiny', 'Little'], correct: 0 },
            { q: 'Synonym for Scared?', a: ['Afraid', 'Brave', 'Happy', 'Calm'], correct: 0 },
            { q: 'Synonym for Start?', a: ['Begin', 'End', 'Stop', 'Finish'], correct: 0 },
            { q: 'Synonym for Gift?', a: ['Present', 'Take', 'Lost', 'Box'], correct: 0 },
            { q: 'Happy?', a: ['Joyful', 'Sad', 'Angry', 'Mad'], correct: 0 },
            { q: 'Sad?', a: ['Unhappy', 'Glad', 'Excited', 'Calm'], correct: 0 },
            { q: 'Angry?', a: ['Furious', 'Happy', 'Calm', 'Sleepy'], correct: 0 },
            { q: 'Big?', a: ['Huge', 'Tiny', 'Small', 'Mini'], correct: 0 },
            { q: 'Small?', a: ['Tiny', 'Huge', 'Big', 'Giant'], correct: 0 },
        ]
    },
    {
        id: 'eng-punc', category: 'English', title: 'Punctuation', desc: 'Marks & Signs',
        questions: [
            { q: 'Ends a sentence?', a: ['Period', 'Comma', 'Dash', 'Slash'], correct: 0 },
            { q: 'Shows excitement?', a: ['Exclamation', 'Question', 'Period', 'Comma'], correct: 0 },
            { q: 'Asks a question?', a: ['Question Mark', 'Period', 'Comma', 'Dash'], correct: 0 },
            { q: 'Separates lists?', a: ['Comma', 'Period', 'Dash', 'Slash'], correct: 0 },
            { q: 'Shows possession?', a: ['Apostrophe', 'Comma', 'Dash', 'Hyphen'], correct: 0 },
            { q: 'Pause in sentence?', a: ['Comma', 'Period', 'Exclamation', 'Question'], correct: 0 },
            { q: 'Ownership mark?', a: ['Apostrophe', 'Comma', 'Dash', 'Slash'], correct: 0 },
            { q: 'Excitement mark?', a: ['!', '?', '.', ','], correct: 0 },
            { q: 'Question mark?', a: ['?', '!', '.', ','], correct: 0 },
            { q: 'Join words?', a: ['Hyphen', 'Comma', 'Period', 'Slash'], correct: 0 },
        ]
    },
    {
        id: 'eng-part', category: 'English', title: 'Sentences', desc: 'Structure',
        questions: [
            { q: 'Person, place, thing?', a: ['Noun', 'Verb', 'Adjective', 'Adverb'], correct: 0 },
            { q: 'Action word?', a: ['Verb', 'Noun', 'Adjective', 'Pronoun'], correct: 0 },
            { q: 'Describing word?', a: ['Adjective', 'Verb', 'Noun', 'Conjunction'], correct: 0 },
            { q: 'Replaces a noun?', a: ['Pronoun', 'Verb', 'Adjective', 'Adverb'], correct: 0 },
            { q: 'Joins sentences?', a: ['Conjunction', 'Verb', 'Noun', 'Adjective'], correct: 0 },
            { q: '"She" is a?', a: ['Pronoun', 'Noun', 'Verb', 'Adjective'], correct: 0 },
            { q: '"Run" is a?', a: ['Verb', 'Noun', 'Adjective', 'Adverb'], correct: 0 },
            { q: '"Blue" is a?', a: ['Adjective', 'Verb', 'Noun', 'Adverb'], correct: 0 },
            { q: '"Quickly" is a?', a: ['Adverb', 'Verb', 'Noun', 'Adjective'], correct: 0 },
            { q: '"And" is a?', a: ['Conjunction', 'Verb', 'Noun', 'Adjective'], correct: 0 },
        ]
    },

    // ============================
    // TECH
    // ============================
    {
        id: 'tech-basic', category: 'Tech', title: 'Computer Basics', desc: 'Hardware & Software', 
        questions: [
            { q: 'Brain of the computer?', a: ['CPU', 'RAM', 'Mouse', 'Fan'], correct: 0 },
            { q: 'Short term memory?', a: ['RAM', 'HDD', 'SSD', 'USB'], correct: 0 },
            { q: 'HTML is used for?', a: ['Websites', 'Games', 'Cleaning', 'Calculators'], correct: 0 },
            { q: 'Does Wi-Fi need wires?', a: ['No', 'Yes', 'Maybe', 'Only sometimes'], correct: 0 },
            { q: 'Input device?', a: ['Keyboard', 'Monitor', 'Printer', 'Speaker'], correct: 0 },
            { q: 'Stores data?', a: ['Hard Drive', 'CPU', 'Fan', 'Mouse'], correct: 0 },
            { q: 'Types letters?', a: ['Keyboard', 'Mouse', 'Screen', 'Printer'], correct: 0 },
            { q: 'Portable PC?', a: ['Laptop', 'Desktop', 'Server', 'Mainframe'], correct: 0 },
            { q: 'Internet connector?', a: ['Modem/Router', 'Printer', 'Mouse', 'Keyboard'], correct: 0 },
            { q: 'Brain of PC?', a: ['CPU', 'RAM', 'HDD', 'GPU'], correct: 0 },
        ]
    },
    {
        id: 'tech-code', category: 'Tech', title: 'Coding', desc: 'Programming Concepts',
        questions: [
            { q: 'Finds errors?', a: ['Debugging', 'Running', 'Saving', 'Typing'], correct: 0 },
            { q: 'Stores a value?', a: ['Variable', 'Loop', 'Function', 'If'], correct: 0 },
            { q: 'Repeats code?', a: ['Loop', 'Variable', 'Print', 'Exit'], correct: 0 },
            { q: 'True or False?', a: ['Boolean', 'String', 'Int', 'Float'], correct: 0 },
            { q: 'Language for web?', a: ['JavaScript', 'Snake', 'English', 'Latin'], correct: 0 },
            { q: 'If/Else is a?', a: ['Condition', 'Loop', 'Variable', 'Function'], correct: 0 },
            { q: 'List of items?', a: ['Array', 'String', 'Int', 'Boolean'], correct: 0 },
            { q: 'Whole number?', a: ['Integer', 'Float', 'String', 'Boolean'], correct: 0 },
            { q: 'Decimal number?', a: ['Float', 'Integer', 'String', 'Boolean'], correct: 0 },
            { q: 'Text data?', a: ['String', 'Int', 'Float', 'Boolean'], correct: 0 },
        ]
    },
    {
        id: 'tech-safe', category: 'Tech', title: 'Safety', desc: 'Cyber Security',
        questions: [
            { q: 'Secret key?', a: ['Password', 'Username', 'Email', 'Link'], correct: 0 },
            { q: 'Bad software?', a: ['Virus', 'App', 'Game', 'File'], correct: 0 },
            { q: 'Fake email trick?', a: ['Phishing', 'Fishing', 'Spam', 'Junk'], correct: 0 },
            { q: 'Blocks attacks?', a: ['Firewall', 'Door', 'Window', 'Wall'], correct: 0 },
            { q: 'Should you share passwords?', a: ['No', 'Yes', 'Maybe', 'Friends only'], correct: 0 },
            { q: 'Lock your account?', a: ['Password', 'Key', 'Door', 'Code'], correct: 0 },
            { q: 'Malicious code?', a: ['Malware', 'Software', 'Hardware', 'Freeware'], correct: 0 },
            { q: 'Fake website?', a: ['Phishing', 'Surfing', 'Swimming', 'Diving'], correct: 0 },
            { q: 'Copy of data?', a: ['Backup', 'Delete', 'Format', 'Erase'], correct: 0 },
            { q: 'Private browsing?', a: ['Incognito', 'Public', 'Open', 'Shared'], correct: 0 },
        ]
    },
    {
        id: 'tech-hard', category: 'Tech', title: 'Hardware', desc: 'Parts of PC',
        questions: [
            { q: 'Shows the image?', a: ['Monitor', 'Mouse', 'Keyboard', 'Case'], correct: 0 },
            { q: 'Clicks things?', a: ['Mouse', 'Screen', 'Key', 'Disk'], correct: 0 },
            { q: 'Processes graphics?', a: ['GPU', 'CPU', 'RAM', 'PSU'], correct: 0 },
            { q: 'Stores files?', a: ['Hard Drive', 'RAM', 'Fan', 'Cable'], correct: 0 },
            { q: 'Main circuit board?', a: ['Motherboard', 'Fatherboard', 'Base', 'Plate'], correct: 0 },
            { q: 'Graphic card?', a: ['GPU', 'CPU', 'RAM', 'PSU'], correct: 0 },
            { q: 'Power supply?', a: ['PSU', 'CPU', 'GPU', 'RAM'], correct: 0 },
            { q: 'Main board?', a: ['Motherboard', 'Circuit', 'Chip', 'Card'], correct: 0 },
            { q: 'Cools the CPU?', a: ['Fan/Heatsink', 'Water', 'Ice', 'Air'], correct: 0 },
            { q: 'Flash drive port?', a: ['USB', 'HDMI', 'VGA', 'DVI'], correct: 0 },
        ]
    },
    {
        id: 'tech-app', category: 'Tech', title: 'Social Media', desc: 'Apps & Sites',
        questions: [
            { q: 'Bird logo?', a: ['Twitter/X', 'Facebook', 'Insta', 'Snap'], correct: 0 },
            { q: 'Photo sharing app?', a: ['Instagram', 'Word', 'Excel', 'Paint'], correct: 0 },
            { q: 'Video site?', a: ['YouTube', 'Google', 'Amazon', 'Bing'], correct: 0 },
            { q: 'Ghost logo?', a: ['Snapchat', 'Discord', 'Skype', 'Zoom'], correct: 0 },
            { q: 'Business network?', a: ['LinkedIn', 'Facebook', 'TikTok', 'Vine'], correct: 0 },
            { q: 'Search engine?', a: ['Google', 'Yahoo', 'Bing', 'Ask'], correct: 0 },
            { q: 'Buy everything?', a: ['Amazon', 'Ebay', 'Etsy', 'Shopify'], correct: 0 },
            { q: 'Watch movies?', a: ['Netflix', 'Hulu', 'Disney+', 'HBO'], correct: 0 },
            { q: 'Listen to music?', a: ['Spotify', 'Apple Music', 'Tidal', 'Pandora'], correct: 0 },
            { q: 'Chat for gamers?', a: ['Discord', 'Skype', 'Teams', 'Zoom'], correct: 0 },
        ]
    },
    {
        id: 'tech-ai', category: 'Tech', title: 'AI & Robots', desc: 'Future Tech',
        questions: [
            { q: 'AI stands for?', a: ['Artificial Intelligence', 'Alien Invasion', 'Apple Inc', 'Auto Info'], correct: 0 },
            { q: 'Robot brain?', a: ['Computer', 'Human', 'Gear', 'Oil'], correct: 0 },
            { q: 'Famous chatbot?', a: ['ChatGPT', 'Siri', 'Alexa', 'Google'], correct: 0 },
            { q: 'Self driving...?', a: ['Car', 'House', 'Shoe', 'Phone'], correct: 0 },
            { q: 'Test for AI?', a: ['Turing Test', 'Math Test', 'Speed Test', 'IQ Test'], correct: 0 },
            { q: 'Virtual Assistant?', a: ['Siri', 'Bob', 'Joe', 'Sam'], correct: 0 },
            { q: 'OpenAI created?', a: ['ChatGPT', 'Sora', 'Gemini', 'Claude'], correct: 0 },
            { q: 'Machine Learning?', a: ['ML', 'AI', 'DL', 'NN'], correct: 0 },
            { q: 'Self driving car?', a: ['Tesla', 'Ford', 'Toyota', 'Honda'], correct: 0 },
            { q: 'Computer vision?', a: ['Seeing', 'Hearing', 'Touching', 'Smelling'], correct: 0 },
        ]
    },
    {
        id: 'tech-game', category: 'Tech', title: 'Gaming', desc: 'Video Game History',
        questions: [
            { q: 'Plumber mascot?', a: ['Mario', 'Sonic', 'Link', 'Zelda'], correct: 0 },
            { q: 'Fast blue hedgehog?', a: ['Sonic', 'Mario', 'Tails', 'Knuckles'], correct: 0 },
            { q: 'Block building game?', a: ['Minecraft', 'Roblox', 'Fortnite', 'Tetris'], correct: 0 },
            { q: 'Catch them all?', a: ['Pokemon', 'Digimon', 'Mario', 'Zelda'], correct: 0 },
            { q: 'Battle Royale?', a: ['Fortnite', 'FIFA', 'Madden', 'Sims'], correct: 0 },
            { q: 'Master Chief game?', a: ['Halo', 'Destiny', 'Call of Duty', 'Battlefield'], correct: 0 },
            { q: 'Link saves?', a: ['Zelda', 'Peach', 'Daisy', 'Rosalina'], correct: 0 },
            { q: 'Pac-Man eats?', a: ['Dots', 'Ghosts', 'Fruit', 'Pizza'], correct: 0 },
            { q: 'Imposter game?', a: ['Among Us', 'Fall Guys', 'Fortnite', 'Minecraft'], correct: 0 },
            { q: 'Battle Bus game?', a: ['Fortnite', 'PUBG', 'Apex', 'Warzone'], correct: 0 },
        ]
    },

    // ============================
    // GENERAL
    // ============================
    {
        id: 'gen-know', category: 'General', title: 'General Knowledge', desc: 'Random Trivia', 
        questions: [
            { q: 'Fastest land animal?', a: ['Cheetah', 'Lion', 'Horse', 'Human'], correct: 0 },
            { q: 'Colors in a rainbow?', a: ['7', '6', '5', '8'], correct: 0 },
            { q: 'Hardest rock?', a: ['Diamond', 'Gold', 'Iron', 'Ruby'], correct: 0 },
            { q: 'Freezing point of water?', a: ['0°C', '100°C', '10°C', '-10°C'], correct: 0 },
            { q: 'Who painted Mona Lisa?', a: ['Da Vinci', 'Picasso', 'Van Gogh', 'Warhol'], correct: 0 },
            { q: 'H2O is?', a: ['Water', 'Air', 'Fire', 'Earth'], correct: 0 },
            { q: '365 days?', a: ['Year', 'Month', 'Week', 'Day'], correct: 0 },
            { q: '60 minutes?', a: ['Hour', 'Day', 'Second', 'Week'], correct: 0 },
            { q: '100 cents?', a: ['Dollar', 'Quarter', 'Dime', 'Nickel'], correct: 0 },
            { q: '12 items?', a: ['Dozen', 'Score', 'Gross', 'Pair'], correct: 0 },
        ]
    },
    {
        id: 'gen-movie', category: 'General', title: 'Movies', desc: 'Cinema Trivia',
        questions: [
            { q: 'Won an Oscar?', a: ['Actor', 'Chef', 'Pilot', 'Doctor'], correct: 0 },
            { q: 'Toy Story cowboy?', a: ['Woody', 'Buzz', 'Rex', 'Ham'], correct: 0 },
            { q: 'Lion King?', a: ['Simba', 'Nala', 'Scar', 'Mufasa'], correct: 0 },
            { q: 'Iron Man is?', a: ['Tony Stark', 'Bruce Wayne', 'Clark Kent', 'Peter Parker'], correct: 0 },
            { q: 'Shrek is a?', a: ['Ogre', 'Donkey', 'Cat', 'Dragon'], correct: 0 },
            { q: 'Wizard of Oz girl?', a: ['Dorothy', 'Alice', 'Wendy', 'Mary'], correct: 0 },
            { q: 'Darth Vader son?', a: ['Luke', 'Han', 'Leia', 'Yoda'], correct: 0 },
            { q: 'Finding...?', a: ['Nemo', 'Dory', 'Marlin', 'Bruce'], correct: 0 },
            { q: 'Snow Queen?', a: ['Elsa', 'Anna', 'Olaf', 'Sven'], correct: 0 },
            { q: 'Toy Cowboy?', a: ['Woody', 'Buzz', 'Jessie', 'Bullseye'], correct: 0 },
        ]
    },
    {
        id: 'gen-music', category: 'General', title: 'Music', desc: 'Songs & Artists',
        questions: [
            { q: 'King of Pop?', a: ['Michael Jackson', 'Elvis', 'Prince', 'Bowie'], correct: 0 },
            { q: 'Shake it Off singer?', a: ['Taylor Swift', 'Katy Perry', 'Adele', 'Beyonce'], correct: 0 },
            { q: 'Piano has...?', a: ['Keys', 'Strings', 'Buttons', 'Pipes'], correct: 0 },
            { q: 'Beatles were from?', a: ['Liverpool', 'London', 'Manchester', 'Leeds'], correct: 0 },
            { q: 'Instrument with 6 strings?', a: ['Guitar', 'Violin', 'Bass', 'Harp'], correct: 0 },
            { q: '4 string guitar?', a: ['Ukulele', 'Banjo', 'Violin', 'Cello'], correct: 0 },
            { q: 'Drum stick?', a: ['Percussion', 'Wind', 'String', 'Brass'], correct: 0 },
            { q: 'High voice?', a: ['Soprano', 'Alto', 'Tenor', 'Bass'], correct: 0 },
            { q: 'Low voice?', a: ['Bass', 'Tenor', 'Alto', 'Soprano'], correct: 0 },
            { q: 'Fab Four?', a: ['Beatles', 'Stones', 'Who', 'Kinks'], correct: 0 },
        ]
    },
    {
        id: 'gen-sport', category: 'General', title: 'Sports', desc: 'Games & Rules',
        questions: [
            { q: 'World Cup sport?', a: ['Soccer', 'Rugby', 'Cricket', 'Tennis'], correct: 0 },
            { q: 'NBA sport?', a: ['Basketball', 'Baseball', 'Football', 'Hockey'], correct: 0 },
            { q: 'Super Bowl sport?', a: ['Football', 'Soccer', 'Tennis', 'Golf'], correct: 0 },
            { q: 'Hole in one?', a: ['Golf', 'Pool', 'Tennis', 'Soccer'], correct: 0 },
            { q: 'Grand Slam sport?', a: ['Tennis', 'Golf', 'Racing', 'Boxing'], correct: 0 },
            { q: '3 strikes?', a: ['Out', 'Home Run', 'Walk', 'Hit'], correct: 0 },
            { q: 'Touchdown?', a: ['Football', 'Soccer', 'Baseball', 'Basketball'], correct: 0 },
            { q: 'Love in tennis?', a: ['Zero', 'One', 'Ten', 'Hundred'], correct: 0 },
            { q: 'Checkmate?', a: ['Chess', 'Checkers', 'Monopoly', 'Risk'], correct: 0 },
            { q: 'Marathon length?', a: ['26 miles', '10 miles', '50 miles', '100 miles'], correct: 0 },
        ]
    },
    {
        id: 'gen-food', category: 'General', title: 'Food', desc: 'Yummy Trivia',
        questions: [
            { q: 'Pizza comes from?', a: ['Italy', 'USA', 'France', 'Spain'], correct: 0 },
            { q: 'Sushi main ingredient?', a: ['Rice', 'Bread', 'Pasta', 'Potato'], correct: 0 },
            { q: 'Taco comes from?', a: ['Mexico', 'Spain', 'USA', 'Brazil'], correct: 0 },
            { q: 'Sweet brown treat?', a: ['Chocolate', 'Vanilla', 'Strawberry', 'Lemon'], correct: 0 },
            { q: 'Fruit with spikes?', a: ['Pineapple', 'Apple', 'Banana', 'Grape'], correct: 0 },
            { q: 'Doughnut shape?', a: ['Ring', 'Square', 'Triangle', 'Star'], correct: 0 },
            { q: 'Spicy pepper?', a: ['Chili', 'Bell', 'Black', 'White'], correct: 0 },
            { q: 'Cow meat?', a: ['Beef', 'Pork', 'Chicken', 'Lamb'], correct: 0 },
            { q: 'Pig meat?', a: ['Pork', 'Beef', 'Chicken', 'Lamb'], correct: 0 },
            { q: 'Dried grape?', a: ['Raisin', 'Prune', 'Date', 'Fig'], correct: 0 },
        ]
    },
    {
        id: 'gen-animal', category: 'General', title: 'Animals', desc: 'Nature Trivia',
        questions: [
            { q: 'Tallest animal?', a: ['Giraffe', 'Elephant', 'Lion', 'Zebra'], correct: 0 },
            { q: 'King of jungle?', a: ['Lion', 'Tiger', 'Bear', 'Wolf'], correct: 0 },
            { q: 'Flightless bird?', a: ['Penguin', 'Eagle', 'Hawk', 'Crow'], correct: 0 },
            { q: 'Biggest animal?', a: ['Blue Whale', 'Shark', 'Elephant', 'Rhino'], correct: 0 },
            { q: 'Man\'s best friend?', a: ['Dog', 'Cat', 'Fish', 'Bird'], correct: 0 },
            { q: 'Slow animal?', a: ['Sloth', 'Cheetah', 'Horse', 'Rabbit'], correct: 0 },
            { q: 'Black and white bear?', a: ['Panda', 'Polar', 'Grizzly', 'Brown'], correct: 0 },
            { q: 'Long neck?', a: ['Giraffe', 'Elephant', 'Hippo', 'Rhino'], correct: 0 },
            { q: 'Stripes?', a: ['Zebra', 'Horse', 'Donkey', 'Mule'], correct: 0 },
            { q: '8 legs?', a: ['Spider', 'Ant', 'Bee', 'Fly'], correct: 0 },
        ]
    },
    {
        id: 'gen-cartoon', category: 'General', title: 'Cartoons', desc: 'TV Shows',
        questions: [
            { q: 'Lives in pineapple?', a: ['SpongeBob', 'Patrick', 'Squidward', 'Sandy'], correct: 0 },
            { q: 'Chases Jerry?', a: ['Tom', 'Spike', 'Butch', 'Tyke'], correct: 0 },
            { q: 'Mystery Machine dog?', a: ['Scooby', 'Pluto', 'Snoopy', 'Goofy'], correct: 0 },
            { q: 'Homer\'s son?', a: ['Bart', 'Lisa', 'Maggie', 'Marge'], correct: 0 },
            { q: 'Mouse mascot?', a: ['Mickey', 'Minnie', 'Donald', 'Goofy'], correct: 0 },
            { q: 'Bunny?', a: ['Bugs', 'Daffy', 'Porky', 'Tweety'], correct: 0 },
            { q: 'Sailor man?', a: ['Popeye', 'Bluto', 'Wimpy', 'Olive'], correct: 0 },
            { q: 'Stone age family?', a: ['Flintstones', 'Jetsons', 'Simpsons', 'Griffins'], correct: 0 },
            { q: 'Future family?', a: ['Jetsons', 'Flintstones', 'Simpsons', 'Griffins'], correct: 0 },
            { q: 'Mystery van?', a: ['Scooby Doo', 'Batman', 'Superman', 'Spiderman'], correct: 0 },
        ]
    }
];