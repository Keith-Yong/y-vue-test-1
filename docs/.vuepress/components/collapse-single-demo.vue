<template>
    <div class="single-wrapper">
      <g-collapse :selected.sync="selected" single>
        <g-collapse-item title="标题1" name="1">1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">3</g-collapse-item>
      </g-collapse>
    </div>
  </template>
  
  <script>
    import Collapse from '../../../src/Collapse'
    import CollapseItem from '../../../src/Collapse-item'
    export default {
      components:{
        'g-collapse': Collapse,
        'g-collapse-item': CollapseItem,
      },
      data(){
        return{
          selected : ['1']
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  .single-wrapper{
    padding: 10px 0;
  }
  </style>