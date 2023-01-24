"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthRepository =
/*#__PURE__*/
function () {
  function AuthRepository(_ref) {
    var User = _ref.User;

    _classCallCheck(this, AuthRepository);

    this.User = User;
  }

  _createClass(AuthRepository, [{
    key: "getSignIn",
    value: function getSignIn(_ref2) {
      var userId, userPw, user;
      return regeneratorRuntime.async(function getSignIn$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userId = _ref2.userId, userPw = _ref2.userPw;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(this.User.findOne({
                raw: true,
                // 특정 Field 선택
                attributes: ['userId', 'userName', 'userPw'],
                // // 특정 필드 제외 모두
                // attributes : {exclude : ["userPw"]},
                where: {
                  userId: userId,
                  userPw: userPw
                }
              }));

            case 4:
              user = _context.sent;
              return _context.abrupt("return", user);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[1, 8]]);
    }
  }]);

  return AuthRepository;
}();

module.exports = AuthRepository;