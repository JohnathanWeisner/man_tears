if (Goals.find().count() === 0) {
    Goals.insert({
        text: 'Like a 16 year old girl',
        description: '6 - 8 cry sessions a month',
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
        text: 'Above and beyond',
        description: '4 - 6 sessions a month',
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
        text: 'Feminist',
        description: '3 cry sessions a month',
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
        'Father Son Moments',
        'Military Returning Home',
        'Eternal Sunshine of the Spotless Mind',
        'Voicemails From Your Ex'
    ]

    for (var i = 0; i < categoryNames.length; i++) {
        Categories.insert({
            name: categoryNames[i]
        });
    }
};

if (Content.find().count() === 0) {
    var categoryId = Categories.findOne({name: 'Family Dogs Being Put Down'})._id;
    Content.insert({
        categoryId: categoryId,
        level: 'normal',
        type: 'video',
        videoId: '2IPJEnOT9AQ',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryId,
        level: 'normal',
        type: 'video',
        videoId: '-qSNMfm1rlg',
        length: '2m45s'
    })
    Content.insert({
        categoryId: categoryId,
        level: 'normal',
        type: 'video',
        videoId: 'sjJUyhVa_9Q',
        length: '2m45s'
    })
}