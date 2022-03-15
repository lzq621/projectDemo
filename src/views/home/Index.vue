<template>
  <div>
    <p style="margin: 20px 0;">
        <el-button @click="$refs.plTreeTable.toggleTreeExpansion(treeData[0])">切换第一个</el-button>
        <el-button @click="$refs.plTreeTable.setTreeExpansion(treeData[2], true)">展开第三个</el-button>
        <el-button @click="$refs.plTreeTable.setAllTreeExpansion()">展开全部</el-button>
        <el-button @click="$refs.plTreeTable.clearTreeExpand()">关闭所有</el-button>
        <el-button @click="getTreeExpansionEvent">获取已展开</el-button>
    </p>
    <u-table
        ref="plTreeTable"
        fixed-columns-roll
        beautify-table
        header-drag-style
        :loading="loading"
        :height="height"
        :treeConfig="{
  children: 'children',
  iconClose: 'el-icon-folder-add',
  iconOpen: 'el-icon-folder-remove',
  expandAll: false}"
        @toggle-tree-expand="toggleTreeExpand"
        use-virtual
        row-id="id"
        border>
            <!--u-table大数据表格 你需要在列上指定某个列显示展开收起 treeNode属性-->
            <u-table-column
                :tree-node="true"
                prop="address"
                label="我是树节点"
                fixed
                :width="200"/>
            <u-table-column
                v-for="item in columns"
                :key="item.id"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"/>
      </u-table>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        loading: false,
        height: 400,
        columns: Array.from({ length: 10 }, (_, idx) => ({
            prop: 'address', id: idx, label: '地址' + idx, width: 200
        }))
      }
    },
    mounted () {
      setTimeout(() => {
        this.loading = false;
        this.getData();
      }, 3000);
        
    },
    methods: {

      getData() {

        const data = Array.from({ length: 500 }, (_, idx) => ({
              id: idx + '_' + 1,
              date: '2016-05-03',
              name: 1,
              ab: '欢迎使用u-table',
              address: idx,
              children: Array.from({ length: 2 }, (_, idx2) => ({
                  id: idx + '_' + idx2 + '_' + 1,
                  date: '2016-05-03',
                  name: 1,
                  ab: '欢迎使用u-table',
                  address: idx + '_' + idx2,
                  children: Array.from({ length: 1 }, (_, idx3) => ({
                      id: idx + '_' + idx2 + '_' + idx3 + '_' + 1,
                      date: '2016-05-03',
                      name: 1,
                      ab: '欢迎使用u-table',
                      address: idx + '_' + idx2 + '_' + idx3
                  }))
              }))
          }));
        this.treeData = data // 知道为啥treeData不在 data()方法里面定义吗？嘻嘻
        // 设置表格数据
        this.$refs.plTreeTable.reloadData(data)
        // 获取表格实例，里面可以得到列，表格数据等等
        console.log(this.$refs.plTreeTable.tableExample())
        this.loading = false;
      },
          // 获取已经展开的节点
          getTreeExpansionEvent () {
              console.log(this.$refs.plTreeTable.getTreeExpandRecords())
          },
          // 收起展开时触发
          toggleTreeExpand (row, treeExpanded, event) {
            console.log(row, treeExpanded, event)
          }
    }
  }
</script>
