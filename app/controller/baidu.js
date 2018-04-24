const Controller = require('egg').Controller;

class BaiduController extends Controller {
  async ocpc() {
    const ctx = this.ctx;
    console.log(ctx.query);
    console.log(ctx.href);
    ctx.status = 200;

  }
}

module.exports = BaiduController;