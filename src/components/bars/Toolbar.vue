<template>
  <div class="vps-toolbar">
    <div class="vps-toolbar-notifications" @click="toggleDropdown('notifications')">
      <div class="vps-icon-badge">
        <icon name="bell"></icon>
        <badge color="#ffff11" text="3" :circle="true"/>
      </div>
      <transition name="drop">
        <div
          class="vps-dropdown"
          :class="{'vps-dropdown-top':!isIntop,'vps-dropdown-bottom':isIntop}"
          v-if="toggle.notifications"
        >
          <card>
            <template #header>
              <div class="vps-icon-text">
                <icon name="bell" fill="#222"/>
                <span>Notifications</span>
              </div>
            </template>
            <template #body>
              <list>
                <list-item
                  title="Lorem ipsum"
                  :icon-bg-color="getContrastColor('#ff0')"
                  content="Lorem ipsum dolor sit amet..."
                >
                  <icon name="warning" fill="#ff0" height="24px" width="24px"></icon>
                </list-item>
                <list-item
                  title="adipisicing elit"
                  content="consectetur, adipisicing elit. Facilis, distinctio."
                >
                  <icon name="info" fill="#22e" height="24px" width="24px"></icon>
                </list-item>
                <list-item
                  title=" molestiae similique."
                  content=" Vitae fuga ex dicta nam, molestiae similique."
                >
                  <icon name="error" fill="#e22" height="24px" width="24px"></icon>
                </list-item>
              </list>
            </template>
            <template #footer>
              <a>See more</a>
            </template>
          </card>
        </div>
      </transition>
    </div>
    <div class="vps-toolbar-messages" @click="toggleDropdown('messages')">
      <div class="vps-icon-badge">
        <icon name="message"></icon>

        <badge color="#11ff11" text="7" :circle="true"/>
      </div>
      <transition name="drop">
        <div
          class="vps-dropdown"
          :class="{'vps-dropdown-top':!isIntop,'vps-dropdown-bottom':isIntop}"
          v-if="toggle.messages"
        >
          <card>
            <template #header>
              <div class="vps-icon-text">
                <icon name="message" fill="#222"/>
                <span>Messages</span>
              </div>
            </template>
            <template #body>
              <list>
                <list-item title="John Don" content="Lorem ipsum dolor sit amet...">
                  <h1>D</h1>
                </list-item>
                <list-item
                  title="John Smith"
                  content="consectetur, adipisicing elit. Facilis, distinctio."
                >
                  <h1>J</h1>
                </list-item>
                <list-item
                  title="Ahmed Naji"
                  content=" Vitae fuga ex dicta nam, molestiae similique."
                >
                  <h1>A</h1>
                </list-item>
              </list>
            </template>
             <template #footer>
              <a>See more</a>
            </template>
          </card>
        </div>
      </transition>
    </div>
    <div class="vps-toolbar-settings" @click="toggleDropdown('settings')">
      <div class="vps-icon-badge">
        <icon name="settings"></icon>
        <badge color="#ff5511" :circle="true"/>
      </div>
      <transition name="drop">
        <div
          class="vps-dropdown"
          :class="{'vps-dropdown-top':!isIntop,'vps-dropdown-bottom':isIntop}"
          v-if="toggle.settings"
        >
          <div class="vps-card">
            <list>
              <list-item title="Profile">
                <icon name="person" fill="#444" height="24px" width="24px"></icon>
              </list-item>
              <list-item title="help">
                <icon name="info" fill="#444" height="24px" width="24px"></icon>
              </list-item>
              <list-item title="Settings">
                <icon name="settings" fill="#444" height="24px" width="24px"></icon>
              </list-item>
            </list>
          </div>
        </div>
      </transition>
    </div>
    <div class="vps-toolbar-logout">
      <icon name="logout"/>
    </div>
  </div>
</template>

<script>
import Icon from "../icons";

import Badge from "../Badge";
import { List, ListItem } from "../lists";
import Card from "../containers/Card";
import getContrastColor from "../../utils/getContrastColor.js";

export default {
  name: "toolbar",
  props: {
    isIntop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggle: {
        messages: false,
        notifications: false,
        settings: false
      },
      lastToggled: ""
    };
  },
  methods: {
    getContrastColor,
    toggleDropdown(name) {
      for (let f in this.toggle) {
        this.toggle[f] = false;
      }

      if (this.lastToggled === name) {
        this.toggle[name] = false;
        this.lastToggled = '';

      } else {
        this.toggle[name] = true;
        this.lastToggled = name;
      }
    }
  },

  components: {
    Icon,

    Badge,
    List,
    ListItem,
    Card,
    Icon
  }
};
</script>

<style lang="scss">
.drop-enter-active,
.drop-leave-active {
  transition: all 0.5s ease-out;
  max-height: 400px;
  max-width: 280px;
}

.drop-enter,
.drop-leave-to

/* .drop-leave-active below version 2.1.8 */
 {
  max-height: 0;
  opacity: 0;
  max-width: 0;
  transform: translateY(-200px);

  transform: scaleY(0);
}
</style>
