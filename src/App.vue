<template>
  <v-app>
    <template>
      <div>
        <v-app-bar
          app
          dark
          prominent
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-app-bar-nav-icon @click="drawer = !drawer" />

          <v-toolbar-title>뭐요</v-toolbar-title>

          <v-spacer />

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-app-bar>
      </div>
    </template>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <template>
      <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          class="indigo lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider />

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'ToDo', icon: 'mdi-google-chrome', to:'/' },
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to:'/home'},
          { title: 'Calculator', icon: 'mdi-calculator', to:'/cal' },
          { title: 'Today', icon: 'mdi-help-box', to:'/today' },
          { title: 'About', icon: 'mdi-help-box', to:'/about' }
        ],
        right: null,
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
        ]
      }
    },
  }
</script>
