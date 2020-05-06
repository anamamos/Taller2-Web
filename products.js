var products = [
    //producto1
    {
        brand: 'Pleasures',
        name: 'RANGER GRAPHIC TEE',
        images: ["ranger0.jpg", "ranger1.jpg", "ranger2.jpg", "ranger3.jpg"],
        price: 38.00,
        category: 'Graphic Tees',
        rating: 4,
        size: 6,
        description: 'Pleasures Ranger Graphic Tee will add fuel to the fire! Watch the world burn in this rad short sleeve tee that has fiery graphics on the front, a crew neckline and relaxed fit.',
        detailOne: 'BLACK',
        detailTwo: '100% Cotton',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto2
    {
        brand: 'Pleasures',
        name: 'WHITE EUROPE 92 GRAPHIC TEE',
        images: ["white0.jpg", "white1.jpg", "white2.jpg", "white3.jpg"],
        price: 38.00,
        category: 'Graphic Tees',
        rating: 3,
        size: 6,
        description: 'Pleasures White Europe 92 Graphic Tee cuz ya been around the block, babe. Let ‘em know you’re hashtag cultured in this dope short sleeve tee that has European tiger graphics on the front N’ back, a crew neckline and relaxed fit.',
        detailOne: 'WHITE',
        detailTwo: 'Cotton Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto3
    {
        brand: 'Pleasures',
        name: 'CREME RETURN LONG SLEEVE GRAPHIC TEE',
        images: ["creme0.jpg", "creme1.jpg", "creme2.jpg", "creme3.jpg"],
        price: 42.00,
        category: 'Graphic Tees',
        rating: 2,
        size: 6,
        description: 'Pleasures Creme Return Long Sleeve Graphic Tee cuz you’re blessed with the best, bb! You’ll be livin’ on a prayer in this dope long sleeve tee that has heavenly graphics on the front N’ sleeves, a crew neckline and relaxed fit.',
        detailOne: 'WHITE',
        detailTwo: '100% Cotton',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto4
    {
        brand: 'Pleasures',
        name: 'ANDY RAYON BUTTON DOWN SHIRT',
        images: ["andy0.jpg", "andy1.jpg", "andy2.jpg", "andy3.jpg"],
        price: 78.00,
        category: 'Shirt',
        rating: 4,
        size: 6,
        description: 'Pleasures Andy Rayon Button Down Shirt cuz you’ve got what they want, babe! Blow up the scene in this collared short sleeve shirt that has a sikk paisley print, logo graphic down the front, and button up front.',
        detailOne: 'YELLOW',
        detailTwo: '100% Polyester',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto5
    {
        brand: 'Pleasures',
        name: 'RELIEF WORK WEAR JEANS',
        images: ["relief0.jpg", "relief1.jpg", "relief2.jpg", "relief3.jpg"],
        price: 112.00,
        category: 'Jeans',
        rating: 3,
        size: 6,
        description: 'Pleasures Relief Work Wear Jeans angel on the outside, demon on the inside. You’ll be actin’ exxxtra sinful in these relaxed fit boyfriend jeans that have sikk screen print graphics, tapered legs, and a high waistline with a buttoned zip closure.',
        detailOne: 'BLUE',
        detailTwo: 'Polyester Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto6
    {
        brand: 'Sugar Thrillz',
        name: 'DREAM FANTASY MARABOU TANK',
        images: ["dream0.jpg", "dream1.jpg", "dream2.jpg", "dream3.jpg"],
        price: 28.00,
        category: 'Tank',
        rating: 3,
        size: 6,
        description: 'Sugar Thrillz Dream Fantasy Marabou Tank cuz you’re a real life fantasy bb! Tell ‘em to dream on in this super cute cami top that has a flirty marabou feather neckline, a bodycon fit, and adjustable straps.',
        detailOne: 'PINK',
        detailTwo: '68% Rayon, 27% Nylon, 5% Spandex',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto7
    {
        brand: 'Sugar Thrillz',
        name: 'A-LIST CONFESSIONS CAMI TANK',
        images: ["confessions0.jpg", "confessions1.jpg", "confessions2.jpg", "confessions3.jpg"],
        price: 25.00,
        category: 'Tank',
        rating: 3,
        size: 6,
        description: 'Sugar Thrillz A-List Confessions Cami Tank cuz you don’t live a simple life! You’re always in the headlines with this sassy lil cami tank that has a low neckline, lettuce edge trim, and embroidered text graphics for when ya need a break from fame.',
        detailOne: 'PINK',
        detailTwo: 'Cotton Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto8
    {
        brand: 'Sugar Thrillz',
        name: 'STRAWBERRY FIELDS DENIM JEANS',
        images: ["strawberry0.jpg", "strawberry1.jpg", "strawberry2.jpg", "strawberry3.jpg"],
        price: 68.00,
        category: 'Jeans',
        rating: 3,
        size: 6,
        description: 'Sugar Thrillz Strawberry Fields Denim Jeans got our blood sugar rising, babe! You were handpicked from heaven just for us in these mom jeans that have a denim construction, a juicy strawberry print all ova, a high waisted fit, and a button fly closure.',
        detailOne: 'PINK',
        detailTwo: 'Cotton + Spandex Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto9
    {
        brand: 'Sugar Thrillz',
        name: 'PRIVATE SHOWING MARABOU DRES',
        images: ["private0.jpg", "private1.jpg", "private2.jpg", "private3.jpg"],
        price: 68.00,
        category: 'Dress',
        rating: 3,
        size: 6,
        description: 'Sugar Thrillz Private Showing Marabou Dress will have ‘em trying to sneak a peak, babe. They can look at it as long as they don’t grab it in this strapless maxi dress that has a supa soft velvet material, marabou square neckline, flirty front slit N’ bodycon fit.',
        detailOne: 'BLACK',
        detailTwo: 'Cotton + Spandex Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto10
    {
        brand: 'Sugar Thrillz',
        name: 'ANGEL FLIRTY N THRIVING MARABOU DRESS',
        images: ["angel0.jpg", "angel1.jpg", "angel2.jpg", "angel3.jpg"],
        price: 38.00,
        category: 'Dress',
        rating: 3,
        size: 6,
        description: 'Sugar Thrillz Angel Flirty N Thriving Marabou Dress will have ya spendin’ all ova zaddy’s hard earned cash. Live a life of luxxury in this cami fit N’ flare dress that has adjustable straps, a supa fuzzy marabou bust N’ mini fit.',
        detailOne: 'WHITE',
        detailTwo: 'Polyester Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto11
    {
        brand: 'Current Mood',
        name: 'BAD TRIP TIE DYE TEE',
        images: ["acid0.jpg", "acid1.jpg", "acid2.jpg", "acid3.jpg"],
        price: 30.00,
        category: 'Graphic Tees',
        rating: 3,
        size: 6,
        description: 'Current Mood Bad Trip Tie Dye Tee SOS get me off this planet! Enter a new dimension with this trippy short sleeve tee that has face-meltin’ alien graphics, drippin’ text that says ‘ACID,’ and a relaxxxed fit.',
        detailOne: 'MULTI',
        detailTwo: 'Polyester Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto12
    {
        brand: 'Current Mood',
        name: 'EX MARKS THE SPOT GRAPHIC TEE',
        images: ["marks0.jpg", "marks1.jpg", "marks2.jpg", "marks3.jpg"],
        price: 30.00,
        category: 'Graphic Tees',
        rating: 3,
        size: 6,
        description: 'Current Mood Ex Marks The Spot Graphic Tee you didn’t break my heart, I didn’t have one to begin with. Join the lonely hearts club in this sikk band-style tee that has a relaxxxed fit, long mesh sleeves, and trippy neon graphics on the front.',
        detailOne: 'BLACK',
        detailTwo: 'Polyester Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto13
    {
        brand: 'Current Mood',
        name: 'RIDE OR DYE WIDE LEG JEANS',
        images: ["ride0.jpg", "ride1.jpg", "ride2.jpg", "ride3.jpg"],
        price: 38.00,
        category: 'Jeans',
        rating: 3,
        size: 6,
        description: 'Current Mood Ride Or Dye Wide Leg Jeans as if they know any other bish that rides as hard as you, boo. Go the exXxtra mile in these sikk tie dye jeans that have wide legs with raw hems, a low rise fit, and a buttoned zip closure.',
        detailOne: 'BLUE',
        detailTwo: 'Polyester Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto14
    {
        brand: 'Current Mood',
        name: 'STITCH BITCH LACE-UP PATCH JEANS',
        images: ["stitch0.jpg", "stitch1.jpg", "stitch2.jpg", "stitch3.jpg"],
        price: 70.00,
        category: 'Jeans',
        rating: 3,
        size: 6,
        description: 'Current Mood Stitch Bitch Lace-Up Patch Jeans cuz you luv to make a statement. These dope af skinny jeans have a lace-up front closure and tonz of sikk patches all over.',
        detailOne: 'BLACK',
        detailTwo: '98% Cotton, 2% Spandex',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto15
    {
        brand: 'Current Mood',
        name: 'DESTINATION ANYWHERE BROCADE TANK',
        images: ["destination0.jpg", "destination1.jpg", "destination2.jpg", "destination3.jpg"],
        price: 38.00,
        category: 'Tank',
        rating: 3,
        size: 6,
        description: 'Current Mood Destination Anywhere Brocade Tank for when you need to get away from the everyday! Take the scenic route in this glowin’ tank crop top has an embroidered satin construction, exposed front zip closure with an O-ring pull, and thicc adjustable straps.',
        detailOne: 'GREEN',
        detailTwo: 'Polyester Blend',
        detailthree: 'Hand Wash Cold, Hang Dry, Bottoms Sold Separately'
    },
    //producto16
    {
        brand: 'HOROSCOPEZ',
        name: 'IN MY DEFENSE CAMI TANK',
        images: ["defense0.jpg", "defense1.jpg", "defense2.jpg", "defense3.jpg"],
        price: 25.00,
        category: 'Tank',
        rating: 3,
        size: 6,
        description: 'HOROSCOPEZ In My Defense Cami Tank cuz u got no apologies bb! Stay strong willed in this supa cute n’ comfy cami tank that has a cropped hem, tie up straps and a cute graphic on the front that reads, “I May Not Be Perfect, But I’m A Taurus”.',
        detailOne: 'BLACK',
        detailTwo: 'Cotton Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto17
    {
        brand: 'HOROSCOPEZ',
        name: 'READ IT AND WEEP GRAPHIC TEE',
        images: ["read0.jpg", "read1.jpg", "read2.jpg", "read3.jpg"],
        price: 35.00,
        category: 'Graphic Tees',
        rating: 3,
        size: 6,
        description: 'HOROSCOPEZ Read It And Weep Graphic Tee when the truth hurts so good. Tell it like it is in this mystical short sleeve tee that has no BS palm reading graphics on the front, a crew neckline and relaxed fit.',
        detailOne: 'BLACK',
        detailTwo: 'Cotton Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto18
    {
        brand: 'HOROSCOPEZ',
        name: 'DIVINE INSIGHT MESH DRESS',
        images: ["divine0.jpg", "divine1.jpg", "divine2.jpg", "divine3.jpg"],
        price: 38.00,
        category: 'Dress',
        rating: 3,
        size: 6,
        description: 'HOROSCOPEZ Divine Insight Mesh Dress got ‘em being spiritually enlightened by you, bb! Read them to filth while looking totally sikk in this long sleeve mesh dress with a mock neckline, slinky slip bottom layer, and tarot card print all over it.',
        detailOne: 'MULTI',
        detailTwo: 'Polyester Blend',
        detailthree: 'Hand Wash Cold, Hang Dry, Undergarments Sold Separately'
    },
    //producto19
    {
        brand: 'HOROSCOPEZ',
        name: 'KNOW MY WORTH SLIP DRESS',
        images: ["worth0.jpg", "worth1.jpg", "worth2.jpg", "worth3.jpg"],
        price: 38.00,
        category: 'Dress',
        rating: 3,
        size: 6,
        description: 'HOROSCOPEZ Know My Worth Slip Dress or don’t bother trying, boo! Your confidence is intoxxxicating in this ultra hot mini dress that has a sheer mesh overlay, sexy AF side slit and adjustable straps.',
        detailOne: 'BLACK',
        detailTwo: 'Polyester + Spandex Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
    //producto20
    {
        brand: 'HOROSCOPEZ',
        name: 'GOLDEN HEARTED ARIES TANK',
        images: ["golden0.jpg", "golden1.jpg", "golden2.jpg", "golden3.jpg"],
        price: 38.00,
        category: 'Tank',
        rating: 3,
        size: 6,
        description: 'HOROSCOPEZ Golden Hearted Aries Tank cuz you only hold it down for your day ones! Rep the realest sign in this cute AF tank top that has a slim fit and metallic graphics on the front.',
        detailOne: 'BLACK',
        detailTwo: 'Cotton Blend',
        detailthree: 'Hand Wash Cold, Hang Dry'
    },
];

module.exports = products;