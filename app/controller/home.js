const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world, its not fair at all';
    //console.log(this.ctx);
  }
}

module.exports = HomeController;