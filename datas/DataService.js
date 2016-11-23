import DataRepository from './DataRepository' 
import {promiseHandle} from '../utils/util'

class DataService {
    constructor(props){
        props = props || {}
        this.id = props['_id'] || 0
        this.content = props['content'] || ''
        this.date = props['date'] || ''
        this.month = props['month'] || ''
        this.year = props['year'] || ''
        this.level = props['level'] || ''
        this.tilte = props['title'] || ''
    }
    save(){
        if(this._cheackProps()){
            return DataRepository.addData({
                title:this.title,
                content:this.content,
                year:this.year,
                month:this.month,
                data:this.date,
                level:this.level,
                addDate:new Date().getTime()
            })
        }
    }
    static findAll(){
        return DataRepository.findAllData()
                              .then(data => data.data ? data.data :[])
    }
    static findById(id){
        return DataRepository.findBy(item => item['_id'] === id)
                             .then(items => (items && items.length > 0)?items[0]:null)                      
    }
    delete(){
        return DataRepository.removeData(this.id)
    }
    static deleteRange(ids){
        return DataRepository.removeRange(ids)
    }
    static findByDate(date){
        if(!date) return []
        return DataRepository.findBy(item => {
            return item && item['date'] === date.getDate() &&
                    item['month'] === date.getMonth() &&
                    item['year'] === date.getFullYear()
        }).then(data => data)
    }
    _cheackProps(){
        return this.title && this.level && this.date && this.year && this.month
    }
}

module.exports = DataService