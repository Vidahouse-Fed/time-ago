var assert = require('assert');
var timeago = require ('../dist/time-ago.min');

describe('默认使用中文', function() {

    //刚刚
    describe('just now', function() {
        it('should return "刚刚" for input "Date.now()"', function() {
            assert.equal('刚刚',timeago(Date.now()));
        });
    });
    //一分钟前
    describe('1分钟前', function() {
        it('should return "1分钟前" for input "Date.now() - 61 * 1000"', function() {
            assert.equal('1分钟前',timeago(Date.now() -  61 * 1000));
        });
    });
    //十分钟前
    describe('10分钟前', function() {
        it('should return "10分钟前" for input "Date.now() - 10 * 60 * 1000"', function() {
            assert.equal('10分钟前',timeago(Date.now() -  10 * 60 * 1000));
        });
    });
    //一小时前
    describe('1小时前', function() {
        it('should return "1小时前" for input "Date.now() - 60 * 60 * 1000"', function() {
            assert.equal('1小时前',timeago(Date.now() -  60 * 60 * 1000));
        });
    });
    //23小时前
    describe('23小时前', function() {
        it('should return "23小时前" for input "Date.now() - 23.5 * 60 * 60 * 1000"', function() {
            assert.equal('23小时前',timeago(Date.now() -  23.5 * 60 * 60 * 1000));
        });
    });
    //1天前
    describe('1天前', function() {
        it('should return "1天前" for input "Date.now() - 24.5 * 60 * 60 * 1000"', function() {
            assert.equal('1天前',timeago(Date.now() -  24.5 * 60 * 60 * 1000));
        });
    });
    //28天前
    describe('28天前', function() {
        it('should return "28天前" for input "Date.now() - 28 * 24 * 60 * 60 * 1000"', function() {
            assert.equal('28天前',timeago(Date.now() -  28 * 24 * 60 * 60 * 1000));
        });
    });
    //一个月前
    describe('1月前', function() {
        it('should return "1月前" for input "Date.now() - 31 * 24 * 60 * 60 * 1000"', function() {
            assert.equal('1月前',timeago(Date.now() -  31 * 24 * 60 * 60 * 1000));
        });
    });
    //11个月前
    describe('11月前', function() {
        it('should return "11月前" for input "Date.now() - 11 * 30 * 24 * 60 * 60 * 1000"', function() {
            assert.equal('11月前',timeago(Date.now() -  11 * 30 * 24 * 60 * 60 * 1000));
        });
    });
    //1年前
    describe('1年前', function() {
        it('should return "1年前" for input "Date.now() - 13 * 30 * 24 * 60 * 60 * 1000"', function() {
            assert.equal('1年前',timeago(Date.now() -  13 * 30 * 24 * 60 * 60 * 1000));
        });
    });
    //5年前
    describe('5年前', function() {
        it('should return "5年前" for input "Date.now() - 5 * 12 * 30 * 24 * 60 * 60 * 1000"', function() {
            assert.equal('5年前',timeago(Date.now() -  5 * 12 * 30 * 24 * 60 * 60 * 1000));
        });
    });
});

describe('也可以使用 Unix 的时间戳', function() {

    //刚刚
    describe('just now', function () {
        it('should return "刚刚" for input "Date.now() / 1000 >> 0"', function () {
            assert.equal('刚刚', timeago(Date.now() / 1000 >> 0));
        });
    });
    //5年前
    describe('5年前', function() {
        it('should return "5年前" for input "Date.now() -  5 * 12 * 30 * 24 * 60 * 60 * 1000)/ 1000 >> 0"', function() {
            assert.equal('5年前',timeago((Date.now() -  5 * 12 * 30 * 24 * 60 * 60 * 1000)/ 1000 >> 0));
        });
    });
})

describe('也可以使用Date对象', function() {

    //刚刚
    describe('just now', function () {
        it('should return "刚刚" for input "new Date()"', function () {
            assert.equal('刚刚', timeago(new Date()));
        });
    });
    //5年前
    describe('5年前', function() {
        it('should return "1年前" for input "new Date("2016-5-3")"', function() {
            assert.equal('1年前',timeago(new Date('2016-5-3')));
        });
    });
})

describe('默认使用中文', function() {

    //刚刚
    describe('just now', function() {
        it('should return "just now" for input "(Date.now(), "en")"', function() {
            assert.equal('just now',timeago(Date.now(), 'en'));
        });
    });
    //一分钟前
    describe('1 minute ago', function() {
        it('should return "1 minute ago" for input "Date.now() - 61 * 1000, en"', function() {
            assert.equal('1 minute ago',timeago(Date.now() -  61 * 1000, 'en'));
        });
    });
    //十分钟前
    describe('10 minutes ago', function() {
        it('should return "10 minutes ago" for input "Date.now() - 10 * 60 * 1000, en"', function() {
            assert.equal('10 minutes ago',timeago(Date.now() -  10 * 60 * 1000, 'en'));
        });
    });
    //一小时前
    describe('1 hour ago', function() {
        it('should return "1 hour ago" for input "Date.now() - 60 * 60 * 1000, en"', function() {
            assert.equal('1 hour ago',timeago(Date.now() -  60 * 60 * 1000, 'en'));
        });
    });
    //23小时前
    describe('23hours ago', function() {
        it('should return "23 hours ago" for input "Date.now() - 23.5 * 60 * 60 * 1000, en"', function() {
            assert.equal('23 hours ago',timeago(Date.now() -  23.5 * 60 * 60 * 1000, 'en'));
        });
    });
    //1天前
    describe('1 day ago', function() {
        it('should return "1 day ago" for input "Date.now() - 24.5 * 60 * 60 * 1000, en"', function() {
            assert.equal('1 day ago',timeago(Date.now() -  24.5 * 60 * 60 * 1000, 'en'));
        });
    });
    //28天前
    describe('28 days ago', function() {
        it('should return "28 days ago" for input "Date.now() - 28 * 24 * 60 * 60 * 1000, en"', function() {
            assert.equal('28 days ago',timeago(Date.now() -  28 * 24 * 60 * 60 * 1000, 'en'));
        });
    });
    //一个月前
    describe('1 month ago', function() {
        it('should return "1 month ago" for input "Date.now() - 31 * 24 * 60 * 60 * 1000, en"', function() {
            assert.equal('1 month ago',timeago(Date.now() -  31 * 24 * 60 * 60 * 1000, 'en'));
        });
    });
    //11个月前
    describe('11 months ago', function() {
        it('should return "11 months ago" for input "Date.now() - 11 * 30 * 24 * 60 * 60 * 1000, en"', function() {
            assert.equal('11 months ago',timeago(Date.now() -  11 * 30 * 24 * 60 * 60 * 1000, 'en'));
        });
    });
    //1年前
    describe('1 year ago', function() {
        it('should return "1 year ago" for input "Date.now() - 13 * 30 * 24 * 60 * 60 * 1000, en"', function() {
            assert.equal('1 year ago',timeago(Date.now() -  13 * 30 * 24 * 60 * 60 * 1000, 'en'));
        });
    });
    //5年前
    describe('5 years ago', function() {
        it('should return "5 years ago" for input "Date.now() - 5 * 12 * 30 * 24 * 60 * 60 * 1000, en"', function() {
            assert.equal('5 years ago',timeago(Date.now() -  5 * 12 * 30 * 24 * 60 * 60 * 1000, 'en'));
        });
    });
});
