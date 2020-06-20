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
              <label
                class="vps-theme-color"
                v-for="(col,key,i) in colors"
                @click="chooseTheme(col)"
                :key="i"
              >
                <div class="color" :style="{background:col.sidebarColor}"></div>
                <div class="color" :style="{background:col.headerColor}"></div>
              </label>
            </div>
          </template>
          <template #footer></template>
        </card>
      </vps-drawer>
    </div>

    <div class="vps-main">
      <router-view></router-view>
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
          headerColor: "#3aa996"
        },
        theme2: {
          sidebarColor: "#2e003e",
          headerColor: "#ccb5df"
        },
        theme3: {
          sidebarColor: "#05386B",
          headerColor: "#60e1c7"
        },
        theme4: {
          sidebarColor: "#022140",
          headerColor: "#65b4fd"
        },
        theme5: {
          sidebarColor: "#0c0023",
          headerColor: "#8463e5"
        },
        theme6: {
          sidebarColor: "#38003c",
          headerColor: "#e90052"
        },
        theme7: {
          sidebarColor: "#330136",
          headerColor: "#e79ac8"
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
          headerColor: "#dd6f83"
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
          headerColor: "#ce0c63"
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
          headerColor: "#c0b6cc"
        },
        theme28: {
          sidebarColor: "#2F2440",
          headerColor: "#BA0F30"
        },
        theme29: {
          sidebarColor: "#0A7EA2",
          headerColor: "#f3a453"
        },
        theme30: {
          sidebarColor: "#1A1C29",
          headerColor: "#13B65B"
        },
        theme31: {
          sidebarColor: "#0011B2",
          headerColor: "#FFC700"
        },
        theme32: {
          sidebarColor: "#006bbb",
          headerColor: "#FFC872"
        },
        theme33: {
          sidebarColor: "#752092",
          headerColor: "#FFC872"
        },
        theme34: {
          sidebarColor: "#7A04DD",
          headerColor: "#5e87eb"
        },
        theme35: {
          sidebarColor: "#273253",
          // headerColor: '#F4E9DA'
          headerColor: "#57B5ED"
        },
        theme36: {
          sidebarColor: "#254B62",
          headerColor: "#CFF532"
        },
        theme37: {
          sidebarColor: "#002E9D",
          headerColor: "#D38400"
        },
        theme38: {
          sidebarColor: "#343434",
          headerColor: "#FFC700"
        },
        theme39: {
          sidebarColor: "#303960",
          headerColor: "#ea9a96"
        },
        theme39: {
          sidebarColor: "#303960",
          headerColor: "#ea9a96"
        },
        theme40: {
          sidebarColor: "#120136",
          headerColor: "#fcbf1e"
        },
        theme41: {
          sidebarColor: "#2d334a",
          headerColor: "#00ec59"
        },
        theme42: {
          sidebarColor: "#454d66",
          headerColor: "#b8b74a"
        },
        theme43: {
          sidebarColor: "#30475e",
          headerColor: "#9e9e9e"
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
  methods: {
    chooseTheme(color, newTheme = true) {
      document.documentElement.style.setProperty(
        "--side-bg-color",
        color.sidebarColor
      );
      document.documentElement.style.setProperty(
        "--header-bg-color",
        color.headerColor
      );
      document.documentElement.style.setProperty(
        "--sidebarColor",
        color.sidebarColor
      );
      document.documentElement.style.setProperty(
        "--headerColor",
        color.headerColor
      );
      if (newTheme) {
        localStorage.setItem("vpscolor", JSON.stringify(color));
      }
    }
  },
  components: {
    List,
    ListItem,
    Card,
    Icon,
    "vps-drawer": Drawer,
    "vps-button": Button
  },
  mounted() {
    let defaultTheme = {
      sidebarColor: "#0FA774",
      headerColor: "#a7a409"
    };
    try {
      let item = localStorage.getItem("vpscolor");

      let theme = item ? JSON.parse(item) : defaultTheme;
      this.chooseTheme(theme, false);
    } catch (error) {
      this.chooseTheme(defaultTheme, false);
    }
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
