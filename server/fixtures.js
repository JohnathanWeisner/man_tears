if (Goals.find().count() === 0) {
    Goals.insert({
        text: '120 minutes',
        description: '8 - 12 cry sessions a month',
        rollOver: 'This is how much a 16 year old girl cries. You may choose to cry this much if certain life events like the death of a pet or when you have overcomes you.',
        minutes: 120,
        messages: [
            {percent: 0, text: 'Do I have to beat the tears out of you?'},
            {percent: 1, text: 'Like a 16 year old girl: 1 percent'},
            {percent: 25, text: 'Like a 16 year old girl: 25 percent'},
            {percent: 50, text: 'Like a 16 year old girl: 50 percent'},
            {percent: 75, text: 'Like a 16 year old girl: 75 percent'},
            {percent: 100, text: 'Like a 16 year old girl: 100 percent'}
        ]
    });

    Goals.insert({
        text: '60 minutes',
        description: '4 - 8 sessions a month',
        rollOver: 'Data shows that this is how much boys cry when before the age of 12 when before society signals them that they need to be strong.',
        minutes: 60,
        messages: [
            {percent: 0, text: 'You aint dun shit.'},
            {percent: 1, text: 'Above and beyond: 1 percent'},
            {percent: 25, text: 'Above and beyond: 25 percent'},
            {percent: 50, text: 'Above and beyond: 50 percent'},
            {percent: 75, text: 'Above and beyond: 75 percent'},
            {percent: 100, text: 'Above and beyond: 100 percent'}
        ]
    })

    Goals.insert({
        text: '20 minutes',
        description: '1 - 4 cry sessions a month',
        rollOver: 'This is actually how much some adult men cry on their worst month.',
        minutes: 20,
        messages: [
            {percent: 0, text: 'Bitch please.'},
            {percent: 1, text: 'Feminist: 1 percent'},
            {percent: 25, text: 'Feminist: 25 percent'},
            {percent: 50, text: 'Feminist: 50 percent'},
            {percent: 75, text: 'Feminist: 75 percent'},
            {percent: 100, text: 'Feminist: 100 percent'}
        ]
    })
}


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
        videoId: 'gnEnhmrOHwk',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryMilitary,
        level: 'normal',
        type: 'video',
        videoId: 'eZ6oS5dUT30',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryMilitary,
        level: 'power',
        type: 'video',
        videoId: 'r2OekoR5SHc',
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
