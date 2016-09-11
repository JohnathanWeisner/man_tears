if (Goals.find().count() === 0) {
    Goals.insert({
        text: '120 minutes',
        description: '8 - 12 cry sessions a month',
        rollOver: 'This is how much a 16 year old girl cries.',
        minutes: 120,
        messages: [
            {percent: 0, max: 0.99, text: 'Do I have to beat the tears out of you?'},
            {percent: 1, max: 24, text: 'Are those crocodile tears? Your cold blooded indifference to equality is both frightening and pathetic.'},
            {percent: 25, max: 49, text: 'You’re trying, but I wouldn’t call that crying.'},
            {percent: 50, max: 74, text: 'If your mother only gave 50% of her effort while giving birth to you, you probably wouldn’t be here right now. This is your chance to not be a disappointment; just think of the tears she shed for you.'},
            {percent: 75, max: 99, text: 'That’s more like it. Is that Blue by Joni Mitchell I hear? That’s the kind of commitment we need if we’re going to change the world, together.'},
            {percent: 100, max: 10000, text: 'More and more the hardest part of crying is when I can’t stop.'}
        ]
    });

    Goals.insert({
        text: '60 minutes',
        description: '4 - 8 sessions a month',
        rollOver: 'Data shows that this is how much boys (and girls) cry at the age of 12 before society tells them that they need to be strong.',
        minutes: 60,
        messages: [
            {percent: 0, max: 0.99, text: 'Do I have to beat the tears out of you?'},
            {percent: 1, max: 24, text: 'Are those crocodile tears? Your cold blooded indifference to equality is both frightening and pathetic.'},
            {percent: 25, max: 49, text: 'You’re trying, but I wouldn’t call that crying.'},
            {percent: 50, max: 74, text: 'If your mother only gave 50% of her effort while giving birth to you, you probably wouldn’t be here right now. This is your chance to not be a disappointment; just think of the tears she shed for you.'},
            {percent: 75, max: 99, text: 'That’s more like it. Is that Blue by Joni Mitchell I hear? That’s the kind of commitment we need if we’re going to change the world, together.'},
            {percent: 100, max: 10000, text: 'More and more the hardest part of crying is when I can’t stop.'}
        ]
    })

    Goals.insert({
        text: '20 minutes',
        description: '1 - 4 cry sessions a month',
        rollOver: 'This is how much a small percentage of adult men indicated they cry on their worst month.',
        minutes: 20,
        messages: [
            {percent: 0, max: 0.99, text: 'Do I have to beat the tears out of you?'},
            {percent: 1, max: 24, text: 'Are those crocodile tears? Your cold blooded indifference to equality is both frightening and pathetic.'},
            {percent: 25, max: 49, text: 'You’re trying, but I wouldn’t call that crying.'},
            {percent: 50, max: 74, text: 'If your mother only gave 50% of her effort while giving birth to you, you probably wouldn’t be here right now. This is your chance to not be a disappointment; just think of the tears she shed for you.'},
            {percent: 75, max: 99, text: 'That’s more like it. Is that Blue by Joni Mitchell I hear? That’s the kind of commitment we need if we’re going to change the world, together.'},
            {percent: 100, max: 10000, text: 'More and more the hardest part of crying is when I can’t stop.'}
        ]
    })
}


Categories.remove({});
if (Categories.find().count() === 0) {
    var categoryNames = [
        'Family Dogs Being Put Down',
        'Perfectly Crafted Business Deals that Fell Through the Cracks at the Last Moment',
        'Military Returning Home',
        'Eternal Sunshine of the Spotless Mind',
        'Thai Commercials About Living Simply and Kindly'
    ]

    for (var i = 0; i < categoryNames.length; i++) {
        Categories.insert({
            name: categoryNames[i]
        });
    }
};

Content.remove({});
if (Content.find().count() === 0) {
    var categoryMilitary = Categories.findOne({name: 'Military Returning Home'})._id;
    var categoryDogs = Categories.findOne({name: 'Family Dogs Being Put Down'})._id;
    var categoryBusiness = Categories.findOne({name: 'Perfectly Crafted Business Deals that Fell Through the Cracks at the Last Moment'})._id;
    var categoryThai = Categories.findOne({name: 'Thai Commercials About Living Simply and Kindly'})._id;
    var categorySunshine = Categories.findOne({name: 'Eternal Sunshine of the Spotless Mind'})._id;
    Content.insert({
        categoryId: categoryMilitary,
        level: 'normal',
        type: 'video',
        videoId: 'gnEnhmrOHwk'
    })
    Content.insert({
        categoryId: categoryMilitary,
        level: 'normal',
        type: 'video',
        videoId: 'eZ6oS5dUT30'
    })
    Content.insert({
        categoryId: categoryMilitary,
        level: 'power',
        type: 'video',
        videoId: 'MsEZBSTc3a0',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryMilitary,
        level: 'normal',
        type: 'video',
        videoId: '5MpryyCgFjI',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryMilitary,
        level: 'normal',
        type: 'video',
        videoId: '1cgiuFdLau8',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryMilitary,
        level: 'normal',
        type: 'video',
        videoId: 'vt8gA-GdoL4',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryDogs,
        level: 'normal',
        type: 'video',
        videoId: '9NS5CSqqG80',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryDogs,
        level: 'normal',
        type: 'video',
        videoId: 'P4t8r62vYJM',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryDogs,
        level: 'normal',
        type: 'video',
        videoId: 'OphVH0aoPEY',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryBusiness,
        level: 'normal',
        type: 'video',
        videoId: '1-oIL9cLHDc',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryBusiness,
        level: 'normal',
        type: 'video',
        videoId: 'rhnHKw6yprM',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryBusiness,
        level: 'normal',
        type: 'video',
        videoId: 'db5E7SIDnOo',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryThai,
        level: 'normal',
        type: 'video',
        videoId: 'BTJH3CP23DI',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryThai,
        level: 'normal',
        type: 'video',
        videoId: 'Y-Xlc3OY_zg',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryThai,
        level: 'normal',
        type: 'video',
        videoId: 'lx1W8xYmLfM',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryThai,
        level: 'normal',
        type: 'video',
        videoId: '70ZXdtAk_5Y',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categorySunshine,
        level: 'normal',
        type: 'video',
        videoId: '3lvNGhBXTU0',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categorySunshine,
        level: 'normal',
        type: 'video',
        videoId: 'NTmlNigifSI',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categorySunshine,
        level: 'normal',
        type: 'video',
        videoId: 'KDNTUkP8kXc',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categorySunshine,
        level: 'normal',
        type: 'video',
        videoId: '_BlmIXSOi9E',
        length: '2m45s'
    })
}
