/*!
 * Bootstrap-select v1.14.0 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2022 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Hiç biri saýlanmady',
    noneResultsText: 'Gabat gelýän tapylmady {0}',
    countSelectedText: function (numSelected, numTotal) {
      return numSelected == 1 ? '{0} element saýlandy' : '{0} element saýlandy';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        numAll == 1
          ? 'Çäkden geçdi (maksimum {n} sany element)'
          : 'Çäkden geçdi (maksimum {n} sany element)',
        numGroup == 1
          ? 'Topar çäkleri geçdi (maksimum {n} sany element)'
          : 'Topar çäkleri geçdi (maksimum {n} sany element)'
      ];
    },
    selectAllText: 'Hemmesini saýla',
    deselectAllText: 'Hemmesini aýyr',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-tk_TK.js.map