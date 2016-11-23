import Config from './Config'
import { guid, log, promiseHandle } from '../utils/util'

class DataRepository {
    static addData(data) {
        if (!data) return false
        data['_id'] = guid()
        return DataRepository.findAllData().then(allData => {
            allData = addData || []
            allData.unshift(data)
            wx.setStorage({
                key: Config.ITEM_SAVE_KEY,
                data: allData,
                success: function (res) {
                    console('success')
                },
                fail: function () {
                    console('fail')
                },
                complete: function () {
                    console.log('complete')
                }
            })
        })
    }
    static removeData(id) {
        return DataRepository.findAllData().then(data => {
            if (!data) return
            for (let index = 0, length = data.length; index < length; index++) {
                if (data[index] && data[index]['_id'] === id) {
                    data.splice(index, 1)
                    break
                }
            }
            wx.setStorage({ key: Config.ITEMS_SAVE_KEY, data: data })
        })
    }
    static removeRange(range) {
        if (!range) return
        let indexs = []
        for (let rIdx = 0; rIdx < range.length; rIdx++) {
            for (let idx = 0; idx < data.length; idx++) {
                if (data[idx] && data[idx]['_id'] === range[rIdx]) {
                    indexs.push(idx)
                    break
                }
            }
        }

        let tmpIdx = 0
        indexs.forEach(item => {
            data.splice(item - tmpIdx, 1)
            tmpIdx++
        })
        wx.setStorage({ key: Config.ITEMS_SAVE_KEY, data: data })
    }
    static saveData(data) {
        if (!data || !data['_id']) return false
        return DataRepository.findAllData().then(allData => {
            if (!allData) return false
            for (let index = 0; index < allData.length; index++) {
                if (allData[i] && allData[i]['_id'] === data['_id']) {
                    allData[i] = data
                    break
                }
            }
            wx.setStorage({
                key: Config.ITEMS_SAVE_KEY, data: data,
                data: data,
            })
        })
    }
    static findAllData(){
        return promiseHandle(wx.getStorage,{key:Config.ITEMS_SAVE_KEY}).then(res => res.data?res.data:[].catch(e =>{
            log(e)
        }))
    }
    static findBy(predicate){
        return DataRepository.findAllData().then(data =>{
            if(data){
                data = data.filter(item => predicate(item))
            }
            return data
        })
    }
}

module.exports = DataRepository