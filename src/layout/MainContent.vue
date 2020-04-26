<template>
  <div class="vps-main-content">
    <div class="vps-theme-settings" :class="drawerClasses">
      <vps-button @click.native="showThemeSettings=!showThemeSettings">
        <icon name="palette"/>
      </vps-button>
      <vps-drawer>
        <card>
          <template #header>
            <div class="vps-icon-text">
              <icon name="palette" fill="#222"/>
              <span>Theme settings</span>
            </div>
          </template>
          <template #body>
            <div class="vps-theme-colors">
              <label class="vps-theme-color" v-for="(col,key,i) in colors" @click="chooseTheme(col)" :key="i">
                <div class="color" :style="{background:col.sidebarColor}"></div>
                <div class="color" :style="{background:col.headerColor}"></div>
              </label>
            </div>
          </template>
          <template #footer></template>
        </card>
      </vps-drawer>
    </div>
  </div>
</template>

<script>
import { List, ListItem } from "../components/lists";
import Card from "../components/containers/Card";
import Icon from "../components/icons";
import Drawer from "../components/containers/Drawer";
import Button from "../components/actions/Button";

export default {
  data() {
    return {
      showThemeSettings: false,
      themeCol: "",
      colors: {
        theme1: {
          sidebarColor: "#004D40",
          headerColor: "#00695C"
        },
        theme2: {
          sidebarColor: "#2e003e",
          headerColor: "#3d2352"
        },
        theme3: {
          sidebarColor: "#05386B",
          headerColor: "#379683"
        },
        theme4: {
          sidebarColor: "#022140",
          headerColor: "#265077"
        },
        theme5: {
          sidebarColor: "#0c0023",
          headerColor: "#190061"
        },
        theme6: {
          sidebarColor: "#38003c",
          headerColor: "#e90052"
        },
        theme7: {
          sidebarColor: "#330136",
          headerColor: "#5E1742"
        },
        theme8: {
          sidebarColor: "#191226",
          headerColor: "#F2355B"
        },
        theme9: {
          sidebarColor: "#702C8E",
          headerColor: "#ED1651"
        },
        theme10: {
          sidebarColor: "#2A4C59",
          headerColor: "#A62D43"
        },
        theme11: {
          sidebarColor: "#103754",
          headerColor: "#D53D13"
        },
        theme12: {
          sidebarColor: "#332851",
          headerColor: "#CA3074"
        },
        theme13: {
          sidebarColor: "#2D4057",
          headerColor: "#4097AA"
        },
        theme14: {
          sidebarColor: "#214D72",
          headerColor: "#2C7695"
        },
        theme15: {
          sidebarColor: "#071E22",
          headerColor: "#EE2E31"
        },
        theme16: {
          sidebarColor: "#434858",
          headerColor: "#FC6453"
        },
        theme17: {
          sidebarColor: "#651e3e",
          headerColor: "#851e3e"
        },
        theme18: {
          sidebarColor: "#0072ff",
          headerColor: "#00c6ff"
        },
        theme19: {
          sidebarColor: "#34495e",
          headerColor: "#41b883"
        },
        theme20: {
          sidebarColor: "#2b2d5c",
          headerColor: "#3465d8"
        },
        theme21: {
          sidebarColor: "#323E40",
          headerColor: "#D97D0D"
        },
        theme22: {
          sidebarColor: "#1D1D2C",
          headerColor: "#E40C2B"
        },
        theme23: {
          sidebarColor: "#1D1D2C",
          headerColor: "#C3002F"
        },
        theme24: {
          sidebarColor: "#306073",
          headerColor: "#F2385A"
        },
        theme25: {
          sidebarColor: "#0f256e",
          headerColor: "#01a168"
        },
        theme26: {
          sidebarColor: "#05004E",
          headerColor: "#fd5f00"
        },
        theme27: {
          sidebarColor: "#3e1063",
          headerColor: "#401372"
        },
        theme28: {
          sidebarColor: "#2F2440",
          headerColor: "#BA0F30"
        }
      }
    };
  },
  computed: {
    drawerClasses() {
      return {
        "vps-theme-settings-hidden": !this.showThemeSettings,
        "vps-theme-settings-shown": this.showThemeSettings
      };
    }
  },
  methods:{
chooseTheme(color){
 document.documentElement.style.setProperty("--side-bg-color", color.sidebarColor)
 document.documentElement.style.setProperty("--header-bg-color", color.headerColor)
}
  },
  components: {
    List,
    ListItem,
    Card,
    Icon,
    "vps-drawer": Drawer,
    "vps-button": Button
  }
};
</script>

<style>
.vps-theme-settings {
  display: flex;
  align-items: center;
  position: absolute;
}
.vps-theme-settings-hidden {
  right: -280px;
  transition: all 1s;
}
.vps-theme-settings-shown {
  right: 0;
  transition: all 1s;
}
.vps-theme-colors {
  padding: 10px;

  display: grid;
  grid-template-columns: 100%;
  grid-gap: 8px;
}

.vps-theme-colors h4 {
  text-align: center;
  color: #555;
}

.vps-theme-colors .vps-theme-color {
  display: flex;
  cursor: pointer;
}

.vps-theme-colors .vps-theme-color .color {
  height: 24px;
  width: 200px;
}
</style>
