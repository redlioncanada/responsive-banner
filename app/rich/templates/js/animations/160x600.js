var easeIn = Power1.easeIn;
var easeOut = Power1.easeOut;
var test = test;
var timeline = new TimelineLite({onComplete: onComplete});
        timeline.add('frame1')
            .to('.copy1,.copy2', 0, {opacity: 1})
            .to('.masks .m1', 0.8, {width:301,left:0}, 'start')
            .to('.masks .m2', 0.8, {height:196}, 'start').add('frame1-m2')
            .to('.masks .m3', 0.8, {width:139}, 'frame1-m2').add('frame1-m3')
            .to('.masks .m4', 0.8, {width:165}, 'frame1-m3-=0.1')
            .to('.copy2', 0.8, {left:0})
            .addDelay(2, 'frame2')
        timeline.add('frame2')
            .to('.copy1,.copy2,.background1', 0.8, {opacity:0})
            .to('.masks', 0, {opacity:0})
        timeline.add('frame3')
            .to('.background2,.logo,.copy3', 0.8, {opacity:1})
            .to('.background3', 0, {opacity:1})
            .to('.background3', 0.8, {top:0})
            .addDelay(0.5, 'cta')
            .to('.cta', 0.8, {opacity:1}).add('cta')
        timeline.add('frame4')