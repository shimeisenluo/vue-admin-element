<template>
  <div class="statement_search">
    <div class="content">
      <div class="content-form">
        <div class="content-title">
          SQ01-原始保单清单
          <em style="color: rgb(231, 76, 60); font-style: normal;"
            >数据已更新至:2021年07月08日
          </em>
        </div>
        <el-form
          label-width="120px"
          ref="searchFormRef"
          :model="statementForm"
          :rules="statementRules"
        >
          <el-row>
            <el-col v-if="domeHide(['6'], [])">
              <el-form-item label="机构代码" >
                <el-select
                  @click.native="handleOrgClick"
                  v-model="orgCodeList"
                  multiple
                  value-key="orgNo"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in serviceAreaList"
                    :key="item.orgNo"
                    :label="item.orgName"
                    :value="item.orgNo"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col v-if="domeHide(['6'], [])">
              <el-form-item label="新联共保标志" >
                <el-select
                  v-model="orgCodeList"
                  multiple
                  value-key="signNo"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in insuranceLogoData"
                    :key="item.signNo"
                    :label="item.signName"
                    :value="item.signNo"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="content-main"></div>
      <div class="content-foot"></div>
    </div>
  </div>
</template>

<script>
vm.insuranceLogoData = [
  {

  }
]
export default {
  name: "StatementSearch",
  data() {
    return {
      // 存放机构代码
      orgCodeList: [],
      statementForm: {},
      statementRules: {}
    };
  },
  computed: {},
  created() {
   let vm = this;
   vm.statementInit();
  },
  methods: {
    // 机构代码
    handleOrgClick(){
         
    },
    // 本地开发数据
    statementInit(){
      let vm = thsi;
      vm.orgCodeList = [
        {
        
        }
      ]
    },
    /**isShow **/
    domeShow(list = [], checkStr) {
      return list.indexOf(checkStr) !== -1;
    },
    /**hide **/
    domeHide(list = [], checkStr) {
      if (list.indexOf(checkStr) !== -1) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.statement_search {
  padding: 24px;
  background-color: #eff3f6;
  .content {
    padding: 17px;
    background-color: white;
    border-radius: 4px;

    &-form {
      .ontent-title {
        border-left: 4px solid red;
        height: 22px;
        line-height: 16px;
        font-weight: 700;
      }
    }
  }
}
</style>
