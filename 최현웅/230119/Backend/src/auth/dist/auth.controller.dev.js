"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthController =
/*#__PURE__*/
function () {
  function AuthController(_ref) {
    var authService = _ref.authService;

    _classCallCheck(this, AuthController);

    this.authService = authService;
  }

  _createClass(AuthController, [{
    key: "postSignIn",
    value: function postSignIn(req, res, next) {
      var _req$body, userId, userPw, token;

      return regeneratorRuntime.async(function postSignIn$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, userId = _req$body.userId, userPw = _req$body.userPw;
              _context.next = 4;
              return regeneratorRuntime.awrap(this.authService.token({
                userId: userId,
                userPw: userPw
              }));

            case 4:
              token = _context.sent;
              res.json({
                token: token
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              next(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 8]]);
    }
  }]);

  return AuthController;
}();

module.exports = AuthController;