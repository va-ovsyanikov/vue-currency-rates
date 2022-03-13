<template>
  <a-select
    class="select"
    v-model:value="value"
    show-search
    placeholder="Select currency"
    style="width: 170px"
    :options="options"
    :filter-option="filterOption"
    @blur="handleBlur"
    @change="handleChange"
  ></a-select>
</template>
<script>
import { defineComponent, ref } from "vue";
import { data } from "../setup/setupSelect";
export default defineComponent({
  setup(_, { emit }) {
    const value = ref(undefined);
    const options = ref(data);

    const handleChange = (value) => {
      emit("handleSelect", value);
    };

    const handleBlur = () => {
      value.value = undefined;
    };

    const filterOption = (input, option) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    return {
      value,
      filterOption,
      handleBlur,
      handleChange,
      options,
    };
  },
});
</script>
<style lang="less">
.ant-select-show-search.ant-select:not(.ant-select-customize-input)
  .ant-select-selector {
  height: 45px;
}
.ant-select-show-search.ant-select:not(.ant-select-customize-input)
  .ant-select-selector
  input {
  height: 40px;
  font-size: 16px;
}
.ant-select-single .ant-select-selector {
  align-items: center;
}
</style>
