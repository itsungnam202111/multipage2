const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  pages: {
    default: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    member: {
      entry: 'src/member/main.js',
      template: 'public/index.html',
      filename: 'member.out.html'
    },
    admin: {
      entry: 'src/admin/main.js',
      template: 'public/index.html',
      filename: 'admin.out.html'
    },
    guest: {
      entry: 'src/guest/main.js',
      template: 'public/index.html',
      filename: 'guest.out.html'
    }
  },
})
