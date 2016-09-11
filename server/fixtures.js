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