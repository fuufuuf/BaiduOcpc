const Controller = require('egg').Controller;

class BaiduController extends Controller {
  async ocpc() {
    const ctx = this.ctx;
    const { imei_md5, os, ip, ua, ts, pid, uid, aid, click_id, callback_url, akey } = ctx.query;
    console.log(imei_md5);
    ctx.status = 200;
    
  }
}

module.exports = BaiduController;