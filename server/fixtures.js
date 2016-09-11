if (Goals.find().count() === 0) {
    Goals.insert({
        text: 'Like a 16 year old girl',
        description: '6 - 8 cry sessions a month'
    });

    Goals.insert({
        text: 'Above and beyond',
        description: '4 - 6 sessions a month'
    })

    Goals.insert({
        text: 'Feminist',
        description: '3 cry sessions a month'
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

    for (var i=0; i<categoryNames.length; i++) {
        Categories.insert({
            name: categoryNames[i]
        })
    }
}