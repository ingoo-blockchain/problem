"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dotenv = require('dotenv').config({
  path: "../../.env"
});

var SALT = process.env.SALT || "test";
console.log(SALT);

var UserService =
/*#__PURE__*/
function () {
  function UserService(_ref) {
    var userRepository = _ref.userRepository,
        jwt = _ref.jwt;

    _classCallCheck(this, UserService);

    this.userRepository = userRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
  }

  _createClass(UserService, [{
    key: "SignUp",
    value: function SignUp(_ref2) {
      var userId, userPw, userName, userBirth, userGender, userPhone, userEmail, userAddress, hash, user;
      return regeneratorRuntime.async(function SignUp$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userId = _ref2.userId, userPw = _ref2.userPw, userName = _ref2.userName, userBirth = _ref2.userBirth, userGender = _ref2.userGender, userPhone = _ref2.userPhone, userEmail = _ref2.userEmail, userAddress = _ref2.userAddress;
              _context.prev = 1;

              if (!(!userId || !userPw || !userName || !userBirth || !userGender || !userPhone || !userEmail || !userAddress)) {
                _context.next = 4;
                break;
              }

              throw "Invalid or empty, Please try again.";

            case 4:
              hash = this.crypto.createHmac("sha256", SALT).update(userPw).digest("hex");
              _context.next = 7;
              return regeneratorRuntime.awrap(this.userRepository.addUser({
                userId: userId,
                userPw: hash,
                userName: userName,
                userBirth: userBirth,
                userGender: userGender,
                userPhone: userPhone,
                userEmail: userEmail,
                userAddress: userAddress
              }));

            case 7:
              user = _context.sent;
              return _context.abrupt("return", user);

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 11]]);
    }
  }, {
    key: "me",
    value: function me(token) {
      var payload, _this$jwt$verify, userId, user;

      return regeneratorRuntime.async(function me$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              payload = this.jwt.verify(token, SALT);
              _this$jwt$verify = this.jwt.verify(token, SALT), userId = _this$jwt$verify.userId;
              _context2.next = 5;
              return regeneratorRuntime.awrap(this.userRepository.getInfo(userId));

            case 5:
              user = _context2.sent;
              return _context2.abrupt("return", user);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              throw new Error(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 9]]);
    }
  }]);

  return UserService;
}();

module.exports = UserService;