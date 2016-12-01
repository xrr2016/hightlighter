import DataService from '../../datas/DataService'
import {LEVEL} from '../../datas/Config'
import {promiseHandle,log,formatNumber} from '../../utils/util'

Page({
  data: {
   showMonth:{},
   data:{},
   selectDateText:'',
   pickerDateValue:'',

   isSelectMode:false,
   isMaskShow:false,
   isEditMode:false,

   isModalShow:false,
   modalMsg:'',

   levelSelectedValue:LEVEL.normal,
   levelSelectData :[LEVEL.normal,LEVEL.warning,LEVEL.danger],

   updatePanelTop:10000,
   updatePanelAnimationData:{},
   todoInputValue:'',
   todoTextAreaValue:'',

   itemList :[],
   editItemList:[]
  },

  onLoad: function () {
    let self = this
    promiseHandle(wx.getSystemInfo).then((data)=>{
      self.setData({
        updatePanelTop : data.windowHeight
      })
    })
    changeDate.call(this)
  },

  onReady(){
    loadItemListData.call(this)
  },

  datePickerChangeEvent(e){
    let date = new Date(Date.parse(e.detail.value)) 
    changeDate.call(this,new Date(date.getFullYear(),date.getMonth(),1))
  },

  changeDateEvent(e){
    const {year,month} = e.currentTarget.dataset
    changeDate.call(this,new Date(year,parseInt(month)-1 ,1))
  },

  dateClickEvent(e){
    const {year,month,date} = e.currentTarget.dateset
    const {data} = this.data
    let selectDateText = ''

    data['selected']['year'] = year
    data['selected']['month'] = month
    data['selected']['date'] = date

    this.setData({data:data})

    changeDate.call(this,new Date(year,parseInt(month)-1,date))
  },

  showUpdatePanelEvent(){
    showUpdatePanel.call(this)
  },
  closeUpdatePanelEvent(){
    closeUpdatePanel.call(this)
  },

  editClickEvent(){
    rhis.setData({isEditMode:true})
  },
  
  listItemLongTapEvent(e){
    const {isEditMode} = this.data
    const {id} = e.currentTarget.dataset
    let self = this
    if(!isEditMode){
      const itemList = ['详情','删除']
      promiseHandle(wx.showActionSheet,{itemList:itemList,itemColor:'#2e2e3b'})
       .then((res)=>{
         if(!res.cancel){
           switch (itemList[res.tapIndex]){
             case '详情':
                wx.navigateTo({url:'../detail/detail/id=' + id})
                break
             case '删除':
                 new DataService({_id:id}).delete().then(()=>{
                   loadItemListisData.call(this)
                 })    
                 break
           }
         }
       })
    }
  }
})
