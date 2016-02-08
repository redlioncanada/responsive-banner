var easeIn = Power1.easeIn;
var easeOut = Power1.easeOut;
var timeline = new TimelineLite({onComplete: onComplete});
        timeline.add('frame1').add('start')
            .to('#copy1', 0.8, {opacity:1, ease:easeIn})
            .addDelay(2, 'frame2');
        timeline.add('frame2')
            .to('#gradient', 0.8, {bottom:"-=134", ease:easeIn}, 'frame2')
            .to('#gradient1', 0.8, {height: 134, ease:easeIn}, 'frame2')
            .to('#background3', 0.8, {bottom: "-=134", ease:easeIn}, 'frame2')
            .to('#copy1', 0.8, {opacity:0, ease:easeOut}, 'frame2')
            .to('#background1,#background3,#gradient,#gradient1', 0, {opacity:0})
            .to('#background2', 0.8, {opacity:1, ease:easeIn})
            .to('#copy2, #cta', 0.8, {opacity:1, ease:easeIn});
        timeline.add('frame3').add('end');
