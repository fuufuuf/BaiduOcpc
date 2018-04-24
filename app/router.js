module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/ocpc/click', controller.baidu.ocpc);
    router.get('/ocpc/result', controller.baidu.ocpc);

  }
  ;