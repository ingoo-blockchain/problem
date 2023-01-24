"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dotenv = require('dotenv').config({
  path: "../../.env"
});

var SALT = process.env.SALT || "test";

var AuthService =
/*#__PURE__*/
function () {
  function AuthService(_ref) {
    var authRepository = _ref.authRepository,
        jwt = _ref.jwt;

    _classCallCheck(this, AuthService);

    this.authRepository = authRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
  }

  _createClass(AuthService, [{
    key: "token",
    value: function token(_ref2) {
      var userId, userPw, hash, user, token;
      return regeneratorRuntime.async(function token$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userId = _ref2.userId, userPw = _ref2.userPw;
              _context.prev = 1;

              if (!(!userId || !userPw)) {
                _context.next = 4;
                break;
              }

              throw "Invalid or empty User ID or Password, Please enter your ID or Password";

            case 4:
              hash = this.crypto.createHmac("sha256", SALT).update(userPw).digest("hex");
              _context.next = 7;
              return regeneratorRuntime.awrap(this.authRepository.getSignIn({
                userId: userId,
                userPw: hash
              }));

            case 7:
              user = _context.sent;

              if (user) {
                _context.next = 10;
                break;
              }

              throw "Your provided ID or Password is incorrect. Confirm your account";

            case 10:
              token = this.jwt.Sign(user);
              return _context.abrupt("return", token);

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 14]]);
    }
  }]);

  return AuthService;
}();

module.exports = AuthService;