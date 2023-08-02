<template>
  <div class="header-main-wrapper">

     <!-- <a-row>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <div class="container">
            <input type="text" id="box" placeholder="Search anything..." class="search__box">
            <img src="@/assets/icon/128/search.png" class="search__icon" alt="Search Image">
        </div>
      </a-col>

      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
       <div class="logo_section">
         <h3 class="header-main-logo">Occasion</h3>
       </div>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
         <ul class="wcs-section">
              <li class="wsc-list"><a href="#">WishList</a></li>
              <li class="wsc-list"><a href="#">Cart</a></li>
              <li class="wsc-list"><a href="#">SignIn</a></li>
          </ul>
      </a-col>
    </a-row> -->

    <!-- <a-row>
      <a-col :span="24">
        <ul class="header-main-menu">
          <li class="header-main-menu-list">
            <a href="#">HOME <DownIcon class="icon" /></a>
          </li>
          <li class="header-main-menu-list">
            <a href="#">COLLECTION <DownIcon class="icon" /></a>
          </li>
          <li class="header-main-menu-list">
            <a href="#">SHOP <DownIcon class="icon" /></a>
          </li>
          <li class="header-main-menu-list">
            <a href="#">NEWIN <DownIcon class="icon" /></a>
          </li>
          <li class="header-main-menu-list">
            <a href="#">SALE <DownIcon class="icon" /></a>
          </li>
          <li class="header-main-menu-list">
            <a href="#">BLOG </a>
          </li>
          <li class="header-main-menu-list"><a href="#">CONTACT US</a></li>
        </ul>
      </a-col>
    </a-row> -->


   

    
  </div>
</template>
<script>
// import DownIcon from "@/components/UI/Icon/DownIcon.vue";
export default {
  components: {
    // DownIcon,
  },

  setup(){
    const toggleShow = () => {
        var el = document.getElementById("box");
        el.classList.toggle("show");
      }

      return{
        toggleShow
      }
  }
};
</script>


<style>
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-header {
  background: #6aa0c7;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .ant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>
<style lang="scss" scoped>

// start search style

.container {
  width: 350px;
  height: 50px;
  margin: 20px 0;
  top: 50%;
  left: 50%;
  // transform: translate(-50%, -50%);
  border-radius: 4rem;
  padding: 10px;
  box-shadow: 1px 1px 1px 2px #ddd;
}

.search__box {
  float: left;
  width: 0;
  height: 2rem;
/*   display: inline; */
  background: none;
  color: #000;
  font-size: 1.5rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  position: relative;
  opacity: 1;
  transition: all .75s ease-in;
  cursor: pointer;
/*   border: 2px solid tomato; */
/*   margin-top: 5px; */
}

/* .search__box:focus, .search__box:hover {
  background-color: #f1f2f6;
} */

.search__icon {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-top: -9px;
  cursor: pointer;
  position: absolute;
  color: #fa983a;
  transition: all .25s ease-in;
  padding: .7rem;
  border-radius: 50%;
}

.container:hover > .search__box {
  width: 87.8%;
  padding: 0 1rem;
}

.container:hover > .search__icon {
  background-color: #eee;
}

.show {
  width: 85%;
  border: 1px solid red;
}

//end search style
.header-main-wrapper {
  width: 1170px;
  margin: 0px auto;
  .input_search{
     padding: 20px 15px;
  }
  .logo_section{
    width: 100%;
  .header-main-logo{
    font-size: 30px;
    // text-align: center;
    padding: 20px 15px;
    }
  }

  .wcs-section{
     list-style: none;
     display: table;
     .wsc-list{
        display: table-cell;
        margin-bottom: 0;
        padding: 0;
         a {
        font-size: 16px;
        color: #000;
        display: block;
        padding: 20px 15px;
        position: relative;
        &:hover,
        &:active {
          color: #ef6b8d !important;
          fill: #ef6b8d !important;
        }
        .icon {
          fill: "#000000";
          width: 20px;
          position: absolute;
          margin-top: 2px;
        }
      }
     }
  }
  .header-main-menu {
    list-style: none;
    width: 713px;
    margin: 0 auto;
    display: table;
    .header-main-menu-list {
      display: table-cell;
      margin-bottom: 0;
      padding: 0;
      a {
        font-size: 16px;
        color: #000;
        display: block;
        padding: 20px 15px;
        position: relative;
        &:hover,
        &:active {
          color: #ef6b8d !important;
          fill: #ef6b8d !important;
        }
        .icon {
          fill: "#000000";
          width: 20px;
          position: absolute;
          margin-top: 2px;
        }
      }
    }
  }
}
</style>
