// Languages
let langs = {
    'zh_CN': {
        'just_now': '刚刚',
        'minutes': '%s分钟前',
        'hours': '%s小时前',
        'days': '%s天前',
        'months':'%s月前',
        'years': '%s年前'
    },
    'en': {
        'just_now': 'just now',
        'one_minute': '1 minute ago',
        'minutes': '%s minutes ago',
        'one_hour':'1 hour ago',
        'hours': '%s hours ago',
        'one_day':'1 day ago',
        'days': '%s days ago',
        'one_month': '1 month ago',
        'months':'%s months ago',
        'one_year':'1 year ago',
        'years': '%s years ago'
    },
};

function parse(str) {
    let args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, function() {
        return args[i++];
    });
}

/**
 * transform unix timestamp / javascript timestamp / string to javascript timestamp
 */
function toJsTimestamp(str = Date.now()) {
    try {
        //unix timestamp
      if(typeof  str === 'number' && String(str).length === 10) {
          return  str * 1000;
      }
      return + new Date(str);
    } catch(err) {
        throw new Error(`Can not transform ${str} to timestamp`);
    }
}


function timeago(timestamp, lang = 'zh_CN') {

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 12 * month;
    let timeDiff = Date.now() - toJsTimestamp(timestamp);

    // in 24 hour  ==============
    if (timeDiff < day) {
        // in 1 minute
        if (timeDiff < minute) {
            return  langs[lang]['just_now'];
        }
        // in 1 hour
        if(timeDiff < hour){
            const minutes = timeDiff / minute >> 0;
            if (langs[lang]['one_minute']) {
                return minutes > 1 ? parse(langs[lang]['minutes'], minutes) : langs[lang]['one_minute']
            }
            return  parse(langs[lang]['minutes'], minutes);
        }
        // in 1 day
        const hours = timeDiff / hour >> 0;
        if (langs[lang]['one_hour']) {
            return hours > 1 ? parse(langs[lang]['hours'], hours) : langs[lang]['one_hour']
        }
        return  parse(langs[lang]['hours'], hours);
    }
    // 24 hours to 30 days
    else if(timeDiff >= day && timeDiff < month) {
        const days = timeDiff / day >> 0;
        if (langs[lang]['one_day']) {
            return days > 1 ? parse(langs[lang]['days'], days) : langs[lang]['one_day']
        }
        return  parse(langs[lang]['days'], days);
    }
    // 1 month to 12 months
    else if(timeDiff >= month && timeDiff < year) {
        const months = timeDiff / month >> 0;
        if (langs[lang]['one_month']) {
            return months > 1 ? parse(langs[lang]['months'], months) : langs[lang]['one_month']
        }
        return  parse(langs[lang]['months'], months);
    }
    // year ago
    else {
        const years = timeDiff / year >> 0;
        if (langs[lang]['one_year']) {
            return years > 1 ? parse(langs[lang]['years'], years) : langs[lang]['one_year']
        }
        return  parse(langs[lang]['years'], years);
    }
}


timeago.use = function(lang, langObj) {
  langs[lang] = Object.assign({}, langs.zh_CN, langObj)
};

export default  timeago