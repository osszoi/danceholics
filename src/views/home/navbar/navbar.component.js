(() => {
  class NavbarHomeController {
    constructor(HomeService) {
      this.HomeService = HomeService;
    }

    $onInit() {
      this.load();
    }

    load() {
      //
    }
  }

  angular.module('app').component('homeNavbar', {
    templateUrl: 'views/home/navbar/navbar.html',
    controller: NavbarHomeController,
    controllerAs: '$ctrl',
    bindings: {}
  });
})();
