import formatTime from '../formatTime'

describe('lib/formatTime', () => {

  it('2018/05/03 10:30:42', () => {
    const date = new Date()
    date.setFullYear(2018)
    date.setMonth(4)
    date.setDate(3)
    date.setHours(10)
    date.setMinutes(30)
    date.setSeconds(42)

    expect(formatTime(date, 'yyyy/MM/dd hh:mm:ss')).toEqual('2018/05/03 10:30:42')
  })

  it('2018-04-29 18:34:32.345', () => {
    const date = new Date()
    date.setFullYear(2018)
    date.setMonth(3)
    date.setDate(29)
    date.setHours(18)
    date.setMinutes(34)
    date.setSeconds(32)
    date.setMilliseconds(345)

    expect(formatTime(date, 'yyyy-MM-dd hh:mm:ss.SSS')).toEqual('2018-04-29 18:34:32.345')
  })

  it('04/25/2017 20:03:09.045', () => {
    const date = new Date()
    date.setFullYear(2017)
    date.setMonth(3)
    date.setDate(25)
    date.setHours(20)
    date.setMinutes(3)
    date.setSeconds(9)
    date.setMilliseconds(45)

    expect(formatTime(date, 'MM/dd/yyyy hh:mm:ss.SSS')).toEqual('04/25/2017 20:03:09.045')
  })
})
