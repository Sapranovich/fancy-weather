/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
class Time {
  getDateAndTimeNow(timestamp, language) {
    const lang = 'ru';
    const settings = {
      timeZone: timestamp,
      hour12: false,
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    const data = new Date().toLocaleString(lang, settings).split(', ');
    const DataOnDateAndTimeNow = {
      dayOfTheWeek: Time.getReductionDayOfTheWeek(data[0], language),
      date: Time.getMonth(data[1].split(' '), language),
      time: data[2]
    };
    Time.renderDateAndTime(DataOnDateAndTimeNow);
  }

  static renderDateAndTime(obj) {
    document.querySelector('.geolocation-date').innerText = obj.dayOfTheWeek + '     ' + obj.date;
    document.querySelector('.geolocation-time').innerText = obj.time;
  }

  static getDayOfTheWeek(dayWeek, language) {
    const daysOfWeek = {
      понедельник: {
        ru: 'Понедельник',
        en: 'Monday',
        be: 'Панядзелак'
      },
      вторник: {
        ru: 'Bторник',
        en: 'Tuesday',
        be: 'Аўторак'
      },
      среда: {
        ru: 'Среда',
        en: 'Wednesday',
        be: 'Серада'
      },
      четверг: {
        ru: 'Четверг',
        en: 'Thursday',
        be: 'Чацьвер'
      },
      пятница: {
        ru: 'Пятница',
        en: 'Friday',
        be: 'Пятніца'
      },
      суббота: {
        ru: 'Суббота',
        en: 'Saturday',
        be: 'Субота'
      },
      воскресенье: {
        ru: 'Воскресенье',
        en: 'Sunday',
        be: 'Нядзеля'
      }
    };
    return daysOfWeek[dayWeek][language];
  }

  static getReductionDayOfTheWeek(dayWeek, language) {
    const reductionDaysOfWeek = {
      понедельник: {
        ru: 'Пн',
        en: 'Mon',
        be: 'Пнд'
      },
      вторник: {
        ru: 'Bт',
        en: 'Tue',
        be: 'Аўт'
      },
      среда: {
        ru: 'Ср',
        en: 'Wed',
        be: 'Сер'
      },
      четверг: {
        ru: 'Чт',
        en: 'Thu',
        be: 'Чцв'
      },
      пятница: {
        ru: 'Пт',
        en: 'Fri',
        be: 'Пят'
      },
      суббота: {
        ru: 'Сб',
        en: 'Sat',
        be: 'Суб'
      },
      воскресенье: {
        ru: 'Вс',
        en: 'Sun',
        be: 'Няд'
      }
    };
    return reductionDaysOfWeek[dayWeek][language];
  }

  static getMonth(number, language) {
    // const data = number;
    const month = {
      января: {
        ru: 'Января',
        en: 'January',
        be: 'Студзеня'
      },
      февраля: {
        ru: 'Февраля',
        en: 'February',
        be: 'Лютага'
      },
      марта: {
        ru: 'Марта',
        en: 'March',
        be: 'Сакавіка'
      },
      апреля: {
        ru: 'Апреля',
        en: 'April',
        be: 'Красавіка'
      },
      мая: {
        ru: 'Мая',
        en: 'May',
        be: 'Мая'
      },
      июня: {
        ru: 'Июня',
        en: 'June',
        be: 'Чэрвеня'
      },
      июля: {
        ru: 'Июля',
        en: 'July',
        be: 'Ліпеня'
      },
      августа: {
        ru: 'Августа',
        en: 'August',
        be: 'Жніуня'
      },
      сентября: {
        ru: 'Сентября',
        en: 'September',
        be: 'Верасьня'
      },
      октября: {
        ru: 'Октября',
        en: 'October',
        be: 'Кастрычніка'
      },
      ноября: {
        ru: 'Ноября',
        en: 'November',
        be: 'Лістапада'
      },
      декабря: {
        ru: 'Декабря',
        en: 'December',
        be: 'Снежня'
      }
    };
    return number[0] + '  ' + month[number[1]][language];
  }

  getDateForTheFuture(date, language) {
    const lang = 'ru';
    const settings = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    };
    let data = new Date(date).toLocaleString(lang, settings).split(', ');
    return `${Time.getDayOfTheWeek(data[0], language)} ${Time.getMonth(data[1].split(' '), language)}`;
  }
}
export default Time;
