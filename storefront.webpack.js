const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/AccountForm.html': path.resolve(__dirname, 'template/js/custom-js/html/AccountForm.html')
      //'./js/AccountForm.js': path.resolve(__dirname, 'template/js/custom-js/js/AccountForm.js')
    }
  }
})
