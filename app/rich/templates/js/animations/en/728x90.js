var easeIn = Power1.easeIn;
var easeOut = Power1.easeOut;
var timeline = new TimelineLite({onComplete: onComplete});
        timeline.add('frame1')
            .to('.copy1', 1, {opacity: 1})
            .addDelay(2, 'frame2')
        timeline.add('frame2')
            .to('.copy1', 0.5, {opacity: 0})
            .to('.nameplate', 0.5, {top: 0})
            .addDelay(0.5, 'frame2-copy1')
            .to('.copy2', 1, {opacity: 1}).add('frame2-copy1')
            .to('.masks', 1, {opacity: 0}, '-=1')
            .addDelay(2, 'frame3')
        timeline.add('frame3')
            .to('.copy2', 1, {opacity: 0})
            .to('.copy3', 1, {opacity: 1})
            .to('.background2', 1, {opacity: 1}, '-=1')
            .addDelay(2, 'frame4')
        timeline.add('frame4')
            .to('.copy3', 1, {opacity: 0})
            .to('.masks', 1, {opacity: 1}, '-=1')
            .to('.copy4', 1, {opacity: 1})
            .to('.cta', 0.8, {opacity: 1})
        timeline.add('frame5')