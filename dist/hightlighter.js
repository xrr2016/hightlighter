'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var body = document.body || document.documentElement.body;

var defaultOpts = {
  container: body,
  backgroundColor: '#59b9c6',
  color: '#ffffff',
  idLength: 10
};

var HightLighter = function () {
  function HightLighter() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, HightLighter);

    this.opts = opts;
    this.elements = [];
    for (var key in defaultOpts) {
      if (defaultOpts.hasOwnProperty(key)) {
        if (!this.opts[key]) {
          this.opts[key] = defaultOpts[key];
        }
      }
      this.randomId = this.randomId.bind(this);
    }
    this.bindEvent(this.opts.container);
  }

  _createClass(HightLighter, [{
    key: 'markText',
    value: function markText() {
      var selectedText = window.getSelection().toString();
      var id = this.randomId(this.opts.idLength);
      if (selectedText.length > 0) {
        var mainContent = this.opts.container.innerHTML;
        var markText = '<span style="background-color:' + this.opts.backgroundColor + ';color: ' + this.opts.color + ';" id="' + id + '">' + selectedText + '</span>';

        this.opts.container.innerHTML = mainContent.replace(selectedText, markText);
        this.elements.push(document.getElementById(id));
      }
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent(container) {
      container.addEventListener('mouseup', this.markText.bind(this));
    }
  }, {
    key: 'randomId',
    value: function randomId(n) {
      if (n <= 0) {
        return;
      }
      var letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      var id = '';
      while (id.length < n) {
        id += letters[Math.floor(Math.random() * letters.length)];
      }
      return id;
    }
  }]);

  return HightLighter;
}();

var hightlight = function hightlight(opts) {
  return new HightLighter(opts);
};

window.HightLighter = HightLighter;
window.hightlight = hightlight;

// export default hightlight
//# sourceMappingURL=hightlighter.js.map