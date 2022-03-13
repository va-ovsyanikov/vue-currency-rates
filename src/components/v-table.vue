<template>
  <div class="table">
    <div class="table___top">
      {{ format(new Date(), "dd MMMM yyy") }}
      <v-select @handleSelect="select"/> 
    </div>
    <a-table
      bordered
      :data-source="dataSource"
      :columns="columns"
      :pagination="false"
      :scroll="{ x: 'calc(450px + 50%)' }"
    >
      <template #operation="{ record }">
        <a-popconfirm
          v-if="dataSource.length"
          title="Delete course?"
          @confirm="onDelete(record.key)"
        >
          <a-button type="primary" danger>Delete <DeleteFilled /></a-button>
        </a-popconfirm>
      </template>
    </a-table>
    <div class="table__bottom">
      <v-preloader v-if="preloader"/>
    </div>
  </div>
</template>
<script>
import {data} from '../setup/setupColumns'
import { DeleteFilled } from "@ant-design/icons-vue";
import { format } from "date-fns";
import vPreloader from "./v-preloader.vue";
import vSelect from "./v-select.vue";
import { request } from "../api/api";
export default {
  name: "vTable",
  components: {
    vSelect,
    DeleteFilled,
    vPreloader,
  },
  data() {
    return {
      preloader: false,
      format,
      dataSource: [],
      columns: data
    };
  },
  computed: {
    count() {
      return this.dataSource.length + 1;
    },
  },
  methods: {
    onDelete(key) {
      this.dataSource = this.dataSource.filter((item) => item.key !== key);
       localStorage.setItem("currency", JSON.stringify(this.dataSource));
    },
    async select(value) {
      try {
        this.preloader = true;
        const data = await request(value);
        const currency = { currency: data.base_code };
        const key = { key: this.count };
        const obj = { ...key, ...currency, ...data.conversion_rates };
        const idx = this.dataSource.findIndex(
          (el) => el.currency === value
        );
        if (idx === -1) {  
          this.dataSource.push(obj);
        } else {
          alert("This currency has already been selected");
        }
        localStorage.setItem("currency", JSON.stringify(this.dataSource));
        this.preloader = false;
      } catch (err) {
        console.log(err)
      }
    },
  },
  mounted() {
    if (localStorage.getItem("currency")) {
      try {
        const currency = localStorage.getItem("currency");
        this.dataSource  = JSON.parse(currency)
      } catch {
        localStorage.removeItem("currency");
      }
    }
  },
};
</script>

<style lang="less">
.table___top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
    background-color: #f0f2f5;
}
.ant-table-row-cell-break-word {
  font-weight: bold;
}
.table__bottom{
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
