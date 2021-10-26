<template>
  <div class="statement">
    <div class="content">
      <div class="title">闪查-基于大数据技术的海量清单查询功能</div>
      <div class="content-list">
        <dl v-for="(_item, _index) in linkLocation" :key="_index">
          <dt class="">{{ _item.label }}</dt>
          <dd v-for="child in _item.children" :key="child.url" class="open_txt_box">
            <span @click="skipDetails(child)" class="open_txt">{{ child.label }}</span>
          </dd>
        </dl>
      </div>
      <div class="footer">
        基于大数据elasticsearch技术，实现亿级数据的秒级响应，"快" 就一个字！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatementLink",
  data() {
    return {
      linkLocation: []
    };
  },
  created() {
    let vm = this;
    vm.initData();
  },
  methods: {
    initData() {
      let vm = this;
      vm.linkLocation = [
        {
          children: [
            {
              indexcode: 10000007,
              label: "SQ01-原始保单清单",
              uppercode: 1001,
              url: "es/index?index=10000007"
            },
            {
              indexcode: 10000001,
              label: "SQ02-最新保单清单",
              uppercode: 1001,
              url: "es/index?index=10000001"
            },
            {
              indexcode: 10000022,
              label: "SQ03-批单清单",
              uppercode: 1001,
              url: "es/index?index=10000022"
            },
            {
              indexcode: 10000016,
              label: "SQ04-理赔清单",
              uppercode: 1001,
              url: "es/index?index=10000016"
            },
            {
              indexcode: 10000024,
              label: "SQ50-保单实收清单",
              uppercode: 1001,
              url: "es/index?index=10000024"
            },
            {
              indexcode: 10000025,
              label: "SQ51-批单实收清单",
              uppercode: 1001,
              url: "es/index?index=10000025"
            },
            {
              indexcode: 10000026,
              label: "SQ52-保单手续费实付清单",
              uppercode: 1001,
              url: "es/index?index=10000026"
            },
            {
              indexcode: 10000027,
              label: "SQ53-批单手续费实付清单",
              uppercode: 1001,
              url: "es/index?index=10000027"
            },
            {
              indexcode: 10000028,
              label: "SQ54-保单应收清单",
              uppercode: 1001,
              url: "es/index?index=10000028"
            },
            {
              indexcode: 10000029,
              label: "SQ55-批单应收清单",
              uppercode: 1001,
              url: "es/index?index=10000029"
            },
            {
              indexcode: 10000030,
              label: "SQ56-保单手续费应付清单",
              uppercode: 1001,
              url: "es/index?index=10000030"
            },
            {
              indexcode: 10000031,
              label: "SQ57-批单手续费应付清单",
              uppercode: 1001,
              url: "es/index?index=10000031"
            }
          ],
          indexcode: 1001,
          label: "SQ-全险种专题",
          uppercode: 0
        },
        {
          children: [
            {
              indexcode: 10000014,
              label: "SC01-车险原始保单清单",
              uppercode: 1002,
              url: "es/index?index=10000014"
            },
            {
              indexcode: 10000013,
              label: "SC02-车险最新保单清单",
              uppercode: 1002,
              url: "es/index?index=10000013"
            },
            {
              indexcode: 10000023,
              label: "SC03-车险批单清单",
              uppercode: 1002,
              url: "es/index?index=10000023"
            },
            {
              indexcode: 10000017,
              label: "SC04-车险理赔清单",
              uppercode: 1002,
              url: "es/confirmIndex?index=10000017-承保机构,10000057-理赔机构"
            },
            {
              indexcode: 10000043,
              label: "SC06-车险人伤任务清单",
              uppercode: 1002,
              url: "es/confirmIndex?index=10000043-承保机构,10000050-理赔机构"
            },
            {
              indexcode: 10000042,
              label: "SC07-车险人伤案件清单",
              uppercode: 1002,
              url: "es/confirmIndex?index=10000042-承保机构,10000049-理赔机构"
            },
            {
              indexcode: 10000051,
              label: "SC08-车险低碳配件清单",
              uppercode: 1002,
              url: "es/index?index=10000051"
            },
            {
              indexcode: 10000034,
              label: "SC09-车险小额理赔已决清单",
              uppercode: 1002,
              url: "es/index?index=10000034"
            },
            {
              indexcode: 10000035,
              label: "SC10-车险小额理赔已决定损任务清单",
              uppercode: 1002,
              url: "es/index?index=10000035"
            },
            {
              indexcode: 10000036,
              label: "SC11-车险小额理赔未决清单",
              uppercode: 1002,
              url: "es/index?index=10000036"
            },
            {
              indexcode: 10000037,
              label: "SC12-车险小额理赔未决定损任务清单",
              uppercode: 1002,
              url: "es/index?index=10000037"
            },
            {
              indexcode: 10000056,
              label: "SC13-车险线上理赔清单",
              uppercode: 1002,
              url: "es/index?index=10000056"
            },
            {
              indexcode: 10000038,
              label: "SC14-车险规则引擎处理清单",
              uppercode: 1002,
              url: "es/index?index=10000038"
            },
            {
              indexcode: 10000032,
              label: "SC15-车险续保概览核对清单",
              uppercode: 1002,
              url: "es/index?index=10000032"
            }
          ],
          indexcode: 1002,
          label: "SC-车险专题",
          uppercode: 0
        },
        {
          children: [
            {
              indexcode: 10000015,
              label: "SF01-非车险理赔清单",
              uppercode: 1003,
              url: "es/index?index=10000015"
            },
            {
              indexcode: 10000041,
              label: "SF02-非车险小额理赔未决清单",
              uppercode: 1003,
              url: "es/index?index=10000041"
            },
            {
              indexcode: 10000040,
              label: "SF03-非车险小额理赔已决清单",
              uppercode: 1003,
              url: "es/index?index=10000040"
            },
            {
              indexcode: 10000048,
              label: "SN01-农险原始台账应收",
              uppercode: 1003,
              url: "es/index?index=10000048"
            },
            {
              indexcode: 10000067,
              label: "SN02-农险最新保单清单",
              uppercode: 1003,
              url: "es/index?index=10000067"
            }
          ],
          indexcode: 1003,
          label: "SF/SN-非车专题",
          uppercode: 0
        }
      ];
    },
    skipDetails(obj){
      let vm = this;
      console.log(obj,'obj');
      vm.$router.push({
        name: 'StatementSearch',
        query:{
          info: obj.url
        }
      })
    }
  },
  beforeDestroy() {}
};
</script>
<style lang="scss" scoped>
.statement {
  dl,dt,dd{
    margin: 0;
    list-style: none;
  }
  .content {
    width: 1170px;
    height: 750px;
    margin: 0 auto;
    border: 1px solid #337ab7;
    border-radius: 4px;
    .title {
      height: 60px;
      text-indent: 24px;
      line-height: 52px;
      color: white;
      background-color: rgb(51, 122, 183);
    }
    .content-list {
      width: 45%;
      height: 650px;
      overflow: auto;
      padding-left: 24px;
      line-height: 32px;
      dt{
        color:  #337ab7;
      }
      dd{
        margin-left: 16px;
      }
      .open_txt_box{
        height: 32px;
        font-size: 13px;
        color: rgb(96, 98, 102);
        &:hover{
          cursor: pointer;
          background-color: #f5f7fa;
        }
      }
      .open_txt{
        border-bottom: 1px solid #606266;
      }
    }
    .footer{
      text-indent: 15px;
      padding: 10px 15px;
      background-color: #f5f5f5;
      border-top: 1px solid #ddd;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      font-size:13px;
      color: rgb(96, 98, 102);
    }
  }
}
</style>
