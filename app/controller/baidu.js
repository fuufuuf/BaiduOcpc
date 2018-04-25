const Controller = require('egg').Controller;
const crypto = require('crypto');
class BaiduController extends Controller {
  async ocpc() {
    const ctx = this.ctx; 
    console.log(ctx.path);
    let callback_url = ctx.query.callback_url;
    callback_url = callback_url.replace('{{ATYPE}}', 'activate').replace('{{AVALUE}}', 0);
    const akey = 'MjU0Nzk0NzI=';
    callback_url += akey;
    const sign = crypto.createHash('md5').update(callback_url).digest('hex');
    callback_url += '&'+sign;
    console.log(callback_url);
    // const ret = await ctx.app.curl(callback_url);
    // console.log(ret);
    ctx.status = 200;

  }
}

module.exports = BaiduController;